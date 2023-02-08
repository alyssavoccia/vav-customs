import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cart from "./shopify/Cart";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name="description" content={description} />
        <link rel='icon' type="image/x-icon" href='/favicon.ico' />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
      <Cart />
      <ToastContainer />
    </div>
  )
}

export default Layout;

Layout.defaultProps = {
  title: 'VAV Customs',
  keywords: 'Woodworking, Custom Woodwork, Custom furniture, custom,Woodworking Tutorials',
  description: 'Custom, hand-made woodworking made in South Florida.'
}