import type { Metadata } from 'next';
import { Bebas_Neue, Roboto } from 'next/font/google';
import './globals.css';

export const bebas = Bebas_Neue({
  variable: '--font-heading',
  weight: ['400'],
  subsets: ['latin'],
});

export const lato = Roboto({
  variable: '--font-body',
  weight: ['300', '400', '700', '100'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Veronica Strand - Fullstack Developer',
  description: 'Building Trust Through Transparent Code, One Stack at a Time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-[100rem] ${bebas.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
