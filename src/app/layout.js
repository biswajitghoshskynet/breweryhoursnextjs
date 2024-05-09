import { Poppins } from "next/font/google";
import '@/assets/css/bootstrap.css'
import '@/assets/css/icons.css'
import "@/assets/css/fonts.css"
import "@/assets/css/style.css"
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'], // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})

export const metadata = {
  title: "Brewery Hours",
  description: "Brewery Hours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
