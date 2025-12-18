import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn, portableTextToPlainText } from "@/lib/utils";
import { getAuthorData } from "@/lib/data";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Particles from "@/components/react-bits/Particles";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Metadata function same rahegi (No changes needed there)
export async function generateMetadata(): Promise<Metadata> {
  const author = await getAuthorData();
  if (!author) return { title: "Portfolio", description: "Personal portfolio website" };
  const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return {
    metadataBase: new URL(url),
    title: { default: author.name ?? "", template: `%s | ${author.name}` },
    description: portableTextToPlainText(author.description!),
    // ... rest of your metadata code
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // max-w-2xl yahan se hata diya
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark"> {/* Default theme dark rakha hai */}
          <TooltipProvider delayDuration={0}>
            
            {/* Background Layer: Particles fixed rahenge */}
            <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
              <Particles
                particleCount={250}
                particleSpread={10}
                speed={0.1}
                particleColors={['#ffffff', '#3b82f6']} // White aur Blue dots
                moveParticlesOnHover={true}
                particleHoverFactor={2}
                alphaParticles={true}
                particleBaseSize={80}
                disableRotation={false}
              />
            </div>

            {/* Content Layer: Isko wide kiya hai */}
            <div className="relative z-10 w-full">
              {children}
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}