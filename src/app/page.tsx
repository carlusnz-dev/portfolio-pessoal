'use client';
import { HeroSection } from '@/components/home/HeroSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ServicesSection } from '@/components/home/ServicesSection';

export default function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* Services */}
            <ServicesSection />

            {/* Projects */}
            <ProjectsSection />
        </>
    );
}
