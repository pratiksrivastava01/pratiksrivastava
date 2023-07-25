export const metadata = {
  title: "Pratik Srivastava - Portfolio",
  description:
    "Welcome to Pratik Srivastava's Portfolio - Showcasing a creative journey through design, art, and innovation. Explore a diverse collection of projects and achievements that reflect my passion and dedication. Get inspired by the power of imagination and the art of storytelling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
