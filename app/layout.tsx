import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrício Luís — Engenheiro de Redes",
  description:
    "Portfólio de Patrício Luís, engenheiro de redes em Angola. Networking, segurança, infraestrutura, troubleshooting e formação CCNA.",
  openGraph: {
    title: "Patrício Luís — Engenheiro de Redes",
    description:
      "Networking, segurança, infraestrutura, troubleshooting e formação CCNA.",
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/media/portrait.jpeg", alt: "Retrato de Patrício Luís" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
