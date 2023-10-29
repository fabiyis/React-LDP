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
      <div>
        <Card 
          coin="Xrp-USD"
          price= "2 usdt"
          volume= "1000000 usd"
        />
        <Card
          coin="BTC-USD"
          price= "34,600 usdt"
          volume= "48.9M usd"
         />
        <Card 
          coin="ETH-USD"
          price= "1,800 usdt"
          volume= "28.9M usd"
        />
        <Card 
          coin="SHIB-USD"
          price= "0.0005 usdt"
          volume= "4.08M usd"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
