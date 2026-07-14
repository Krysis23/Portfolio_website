import type { Metadata } from "next";
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
  title: "Parth Borkute — AI Engineer & Machine Learning Engineer",
  description:
    "AI Engineer and Data Science undergraduate specializing in Machine Learning, Generative AI, Computer Vision, and production-ready AI systems. Building intelligent solutions from concept to deployment.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Parth Borkute",
    "Computer Vision",
    "Generative AI",
    "RAG",
    "LLM",
    "Deep Learning",
    "Python",
    "PyTorch",
    "FastAPI",
  ],
  authors: [{ name: "Parth Borkute" }],
  creator: "Parth Borkute",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Parth Borkute — AI Engineer & Machine Learning Engineer",
    description:
      "AI Engineer specializing in Machine Learning, Generative AI, Computer Vision, and production-ready AI systems.",
    siteName: "Parth Borkute Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Borkute — AI Engineer & Machine Learning Engineer",
    description:
      "AI Engineer specializing in ML, GenAI, Computer Vision, and production AI systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parth Borkute",
  jobTitle: "AI Engineer",
  description:
    "AI Engineer and Data Science undergraduate specializing in Machine Learning, Generative AI, and Computer Vision.",
  email: "parthborkute20@gmail.com",
  url: "https://parthborkute.dev",
  sameAs: [
    "https://github.com/Krysis23",
    "https://linkedin.com/in/parthborkute",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ramdeobaba University",
  },
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "Python",
    "PyTorch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
