import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar /> 
      <SideBar />
      <Body />
      <div className="flex flex-wrap items-center mt-20 justify-center">
        <Card 
          coin="Xrp-USDT"
          price= "2 usdt"
          volume= "7.42M usd"
        />
        <Card
          coin="BTC-USDT"
          price= "34,600 usdt"
          volume= "48.9M usd"
         />
        <Card 
          coin="ETH-USDT"
          price= "1,800 usdt"
          volume= "28.9M usd"
        />
        <Card 
          coin="SHIB-USDT"
          price= "0.0005 usdt"
          volume= "4.08M usd"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
