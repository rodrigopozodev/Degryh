import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
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
  title: "Degry | Agencia de Desarrollo Web",
  description:
    "Agencia de desarrollo web enfocada en conversión, experiencia de usuario e impacto visual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-[100svh] bg-background text-foreground">
            <Header />
            <main className="h-[100svh] overflow-hidden pt-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
