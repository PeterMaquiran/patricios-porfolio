import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var dark=localStorage.getItem("theme")!=="light";document.documentElement.classList.toggle("dark",dark);var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",dark?"#020617":"#f5f5f7");}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
