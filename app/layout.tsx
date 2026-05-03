import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Range Enforcer – Ensure Job Postings Include Required Salary Ranges",
  description: "Monitor job boards and career pages for salary transparency compliance. Get instant alerts for non-compliant postings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d6523a5-c633-440a-99fc-361d0445d5ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
