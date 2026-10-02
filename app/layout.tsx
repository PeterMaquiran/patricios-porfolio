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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var stored=localStorage.getItem("theme");var dark=stored==="dark"||(stored!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);if(stored==="light"||stored==="dark"){var color=dark?"#020617":"#f5f5f7";var metas=document.querySelectorAll('meta[name="theme-color"]');for(var i=0;i<metas.length;i++){if(i===0){metas[i].setAttribute("content",color);metas[i].removeAttribute("media");}else{metas[i].remove();}}}}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
