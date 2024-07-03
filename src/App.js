import "./App.css";
import { Navbar } from "./Navbar";
import { Products } from "./products";
import backgroundImage from "./images/background2.jpg";
import Counter from "react-number-increment";
import { Divide } from "lucide-react";
import CountUp from "react-countup"

function App() {
  return (
    <div>
        <div
        className="relative bg-cover bg-center min-h-screen text-white overflow-hidden w-full"
        style={{ backgroundImage: `url(${backgroundImage}) `}}
      >
        {/* <div className="absolute inset-0 bg-black opacity-35"></div> */}
      <Navbar/>
    <section className='hero-wrapper'>
    <div className="hero-container">
        {/* left side  */}
        <div className="hero-left">

            <div className="heading">
                <h2>Discount up to 20% </h2>
                 <h1>Buy Fresh And<br />
                 Organic Grocery <br />
                  Food</h1>
            </div>

            <span className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis  </span>
            <br />
            <span className='para'> tempore assumenda accusamus iure cum voluptas optio</span>
            <br />
            <span className='para'>vitae quasi?</span> 

           

            <div className="flexCenter stats">

            <button className="btn">SHOP NOW</button>

            <div className="flexColCenter stat">
          <span>
            <CountUp start={25000} end={35000} duration={4} />
            <span>+</span>
            </span>
            <span className="secondaryText">
              Users
            </span>
        </div>

        <div className="flexColCenter stat">
          <span>
            <CountUp start={15000} end={18000} duration={4} />
            <span>+</span>
            </span>
            <span className="secondaryText">
              Pruducts
            </span>
        </div>
        </div>

    </div>
    <div className="hero-right">
            {/* <img src="./images/banner-img.png" alt=""  /> */}
        </div>
    </div>
</section>
</div>
<Products/>
</div>
  );
}

export default App;