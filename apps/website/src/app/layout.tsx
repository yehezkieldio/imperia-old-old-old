import "@imperia/ui/globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Imperia",
    description: "All-in-one Discord bot solution for various tasks.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.variable} font-sans antialiased dark`}>{children}</body>
        </html>
    );
}
