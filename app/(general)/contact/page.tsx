import type { Metadata } from "next";

export default function ContactPage() {
  return (
    <>
    <span className="text-7xl"> Contact Us! </span>
    </>
  );
}

// Se agrega metadata personalizada para la sección de específica de mi página.
export const metadata: Metadata = {
 title: 'Contact Us',
 description: 'Have any questions? Contact us!',
 keywords: ['Contact', 'Telephone', 'Email', 'Location'],
};