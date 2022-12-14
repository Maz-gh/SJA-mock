import Head from 'next/head';
import CartMain from '../components/Cart/CartMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderTwo from '../components/Layout/Header/HeaderTwo/HeaderTwo';


export default function Cart() {

  return (
    <>
      <Head>
      <title>St. John Ambulance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <HeaderTwo />
      <CartMain />
      <Footer />
    </>
  )
}
