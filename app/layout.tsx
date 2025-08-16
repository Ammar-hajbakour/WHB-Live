import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WHB Live",
  description: "A live Collaborative Editor and sharing documents.",
  icons: {
    icon: "/favicon.ico", // or .png, .svg, etc.
  },
  openGraph: {
    title: "WHB Live",
    description: "A live Collaborative Editor and sharing documents.",
    url: "https://whb-live-xfjg.vercel.app",
    siteName: "WHB Live",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Project Logo or Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHB Live",
    description: "A live Collaborative Editor and sharing documents.",
    images: ["/assets/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          fontSize: "16px",
        },
      }}
    >
      <html suppressHydrationWarning>
        <head>
          <link rel="icon" href="./favicon.ico" sizes="any" />
        </head>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
