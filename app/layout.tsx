export const metadata = {
  title: "Pratik Srivastava - Portfolio",
  description:
    "Welcome to Pratik Srivastava's Portfolio - Showcasing a creative journey through design, art, and innovation. Explore a diverse collection of projects and achievements that reflect my passion and dedication. Get inspired by the power of imagination and the art of storytelling.",
  keyword:
    "Pratik Srivastava, Pratik, Srivastava, Portfolio, Pratik Srivastava Portfolio, Pratik Portfolio, Pratik Srivastava, Bit Sindri, Dhanbad, Jharia, India, Jharkhand, Jharkhand, India, BIT SINDRI, Jharia, BIT SINDRI, India, Prateek Srivastava, Prateek Srivastava, Portfolio, Bit sindri, Prateek, Srivastava, BIT, SINDRI, BITSINDRI, bit sindri, sindri,",
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
