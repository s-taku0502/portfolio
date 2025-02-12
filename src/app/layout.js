import { Inter, JetBrains_Mono, Poppins, Playfair_Display, Pacifico } from "next/font/google";
import "../styles/globals.css";

// フォントを読み込む
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "700"] });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "700"] });
const pacifico = Pacifico({ variable: "--font-pacifico", subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "sudo",
  description: "my portfolio of sudo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${inter.variable} ${jetBrainsMono.variable} ${poppins.variable} ${playfairDisplay.variable} ${pacifico.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
