import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/themeregistery/ThemeRegistry";
import { AuthProvider } from "@/utils/SessionProvider";
import MainLayout from "./layouts/MainLayout";
import Header from "./nav-section/header";
import FooterPage from "./sections/footer/FooterPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Souloquest",
  description: "One stop travel partner finder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  id='root'>
        <ThemeRegistry>
          {/* <MainLayout> */}
          <Header />
          {children}
          {/* </MainLayout> */}
          <FooterPage />
        </ThemeRegistry>
      </body>
    </html>
  );
}
