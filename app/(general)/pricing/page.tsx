import type { Metadata } from "next";

export default function PricingPage() {
  return (
    <>
    <span className="text-7xl"> Check Our Pricing! </span>
    </>
  );
}

// Se agrega metadata personalizada para la sección de específica de mi página.
export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Get to know the pricing for our services and payment plans.',
 keywords: ['Pricing', 'Payment', 'Services', 'Payment Plans'],
};