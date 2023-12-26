import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Página de precios de la empresa',
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
