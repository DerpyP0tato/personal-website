import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CaseCompetitions from "@/components/CaseCompetitions";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950 relative">
            <ScrollToTop />
            <Hero />
            <Navbar />
            <About />
            <Experience />
            <CaseCompetitions />
            <Projects />
            <Footer />
        </main>
    );
}
