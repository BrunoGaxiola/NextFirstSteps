import type { Metadata } from "next";

// Simple página de About.
export default function AboutPage() {
    return(
        <span className="text-7xl">About Page</span>
    )
}

// Se agrega metadata personalizada para la sección de específica de mi página.
export const metadata: Metadata = {
 title: 'About Us',
 description: 'Get to know our mission, vision, history, and objectives.',
 keywords: ['About Page', 'Bruno', 'Information'],
};
