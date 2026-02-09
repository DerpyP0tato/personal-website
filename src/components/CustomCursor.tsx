"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Removed spring physics for immediate 1:1 tracking
    // const springConfig = { damping: 35, stiffness: 1500 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Check if device is touch-primary (coarse pointer)
        const checkTouch = () => {
            if (typeof window !== 'undefined') {
                const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
                if (isTouchDevice) {
                    setIsTouch(true);
                }
            }
        };

        checkTouch();
        window.addEventListener('resize', checkTouch);

        // Also listen for any touch event to disable it immediately on hybrid devices
        const handleTouch = () => {
            setIsTouch(true);
            window.removeEventListener('touchstart', handleTouch);
        };
        window.addEventListener('touchstart', handleTouch);

        return () => {
            window.removeEventListener('resize', checkTouch);
            window.removeEventListener('touchstart', handleTouch);
        };
    }, []);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 12); // Center the 24px cursor
            cursorY.set(e.clientY - 12);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Add hover effect for clickable elements
        const handleLinkHoverStart = () => setIsHovering(true);
        const handleLinkHoverEnd = () => setIsHovering(false);

        if (!isTouch) {
            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
        }

        // Attach listeners to all interactive elements
        const clickableElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        clickableElements.forEach(el => {
            el.addEventListener("mouseenter", handleLinkHoverStart);
            el.addEventListener("mouseleave", handleLinkHoverEnd);
        });

        // MutationObserver to listen for new elements (like when navigating)
        const observer = new MutationObserver((mutations) => {
            const newClickables = document.querySelectorAll("a, button, input, textarea, [role='button']");
            newClickables.forEach(el => {
                el.removeEventListener("mouseenter", handleLinkHoverStart);
                el.removeEventListener("mouseleave", handleLinkHoverEnd);
                el.addEventListener("mouseenter", handleLinkHoverStart);
                el.addEventListener("mouseleave", handleLinkHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            observer.disconnect();
            clickableElements.forEach(el => {
                el.removeEventListener("mouseenter", handleLinkHoverStart);
                el.removeEventListener("mouseleave", handleLinkHoverEnd);
            });
        };
    }, [cursorX, cursorY, isVisible, isTouch]);

    // Hide default cursor
    useEffect(() => {
        if (isTouch) return;

        document.body.style.cursor = 'none';
        const style = document.createElement('style');
        style.innerHTML = `
            * { cursor: none !important; }
        `;
        document.head.appendChild(style);

        return () => {
            document.body.style.cursor = 'auto';
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, [isTouch]);

    if (!isVisible || isTouch) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/80 bg-white/10 backdrop-blur-[1px] pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovering ? 1.2 : 1, // Minimal visual feedback
                backgroundColor: isHovering ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.1)",
                borderColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.1 }}
        >
            {/* Inner dot */}
            <motion.div
                className="w-1 h-1 bg-white rounded-full"
            />
        </motion.div>
    );
}
