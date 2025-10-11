import { Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: "ACM Personal Website",
  description: "The personal website for the ACM personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <Navbar />
        <div className={`mx-12 my-8`}>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
