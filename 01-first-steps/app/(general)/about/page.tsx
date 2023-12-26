import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'About Description',
    keywords: ['About Page', 'José', 'Información', '...']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}
