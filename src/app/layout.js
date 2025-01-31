export const metadata = {
  title: "مقاول اسفلت الجنوب ",
  description: "افضل مقاول اسفلت في المنطقة الجنوبية",
};

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import Preloader from './components/Preloader';
import WhatsApp from "./components/whatsapp/whatsapp";

import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Preloader />
        <Navbar/>
        {children}
        <WhatsApp/>
        <Footer/>
        </body>
    </html>
  );
}
