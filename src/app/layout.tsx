import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio created with Next.js and Tailwind CSS v4',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
