"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Multiple strategies to ensure scroll to top
        const scrollToTopImmediate = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Immediate scroll
        scrollToTopImmediate();

        // Disable scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Additional delayed reset to catch any late renders
        const timeout = setTimeout(scrollToTopImmediate, 0);

        return () => clearTimeout(timeout);
    }, []);

    return null;
}
