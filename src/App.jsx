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
          coin="Xrp/USDT"
          price= "0.55"
          volume= "7.42M "
        />
        <Card
          coin="BTC/USDT"
          price= "34,600"
          volume= "48.9M "
         />
        <Card 
          coin="ETH/USDT"
          price= "1,800"
          volume= "28.9M "
        />
        <Card 
          coin="SHIB/USDT"
          price= "0.0005"
          volume= "4.08M "
        />
      </div>
      <Footer />
    </>
  );
}

export default App;