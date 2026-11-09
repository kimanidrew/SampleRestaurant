import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = { title: "JIKO | A Taste of Kenya", description: "Kenyan food, warm hospitality and a place to gather.", openGraph: { title: "JIKO | A Taste of Kenya", description: "Discover Kenyan favourites at JIKO.", type: "website" } };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
