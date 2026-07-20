export const metadata = {
  title: "Maison Novia | Rangement premium pour le linge de maison",
  description:
    "Maison Novia imagine des solutions de rangement premium, durables et pratiques pour organiser votre linge de maison avec élégance.",
  metadataBase: new URL("https://maisonnovia.fr"),
  openGraph: {
    title: "Maison Novia",
    description:
      "Rangement premium, quotidien facilité.",
    url: "https://maisonnovia.fr",
    siteName: "Maison Novia",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
