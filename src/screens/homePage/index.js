import React from "react";
import Navbar from "../../components/navbar";
import HeaderPic1 from "../../assets/images/header-v1.svg";
import HeaderPic2 from "../../assets/images/header-v2.svg";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Ellipse2 from "../../assets/images/ellipse2.svg";
import Footer from "../../components/footer";
import ButtonGrey from "../../UI/buttonGrey";
import LocationIcon from "../../assets/images/icons/location-icon.svg";
import FoodIcon from "../../assets/images/icons/food-icon.svg";
import ArrowDown from "../../assets/images/icons/icon-arrow-down.svg";
import ButtonYellow from "../../UI/buttonYellow";
import EventsVector from "../../assets/images/events-vector.svg";
import FoodCard from "../../components/foodCard";
import FirstCardPicture from "../../assets/images/first-card.svg";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="header-wrapper">
        <Navbar />
        <div className="header-content">
          <img src={HeaderPic1} className="header-pic1" />
          <h1 className="title">Best Indian Food in Västerås</h1>
          <img src={HeaderPic2} className="header-pic2" />
          <div className="ellipse-row">
            <img src={Ellipse1} />
            <img src={Ellipse2} />
            <img src={Ellipse2} />
          </div>
        </div>
      </div>
      <div className="buttons-row">
        <ButtonGrey>
          <img src={LocationIcon} />
          <div className="right">
            <h1>ÖPPETTIDER</h1>
            <div className="cselect">
              <select name="idag" id="idag">
                <option value="1">IDAG: 08:00 - 16:00</option>
                <img src={ArrowDown} />
              </select>
              <img src={ArrowDown} />
            </div>
          </div>
        </ButtonGrey>
        <ButtonGrey>
          <img src={LocationIcon} />
          <div className="right">
            <h1>ADRESS</h1>
            <p>Drabantvägen 4, 194 33 Upplands Väsby, Sverige</p>
          </div>
        </ButtonGrey>
        <ButtonGrey>
          <img src={FoodIcon} />
          <div className="right">
            <h1>TAKEAWAY?</h1>
            <ButtonYellow>
              <h3>BESTÄLL TAKEAWAY</h3>
            </ButtonYellow>
          </div>
        </ButtonGrey>
      </div>
      <div className="events-section">
        <h1>Events</h1>
        <p className="subtitle">Enim volutpat velit molestie morbi pharetra nam nisi et.</p>
        <img src={EventsVector} />
        <div className="food-cards">
          <FoodCard width="318px" height="481px">
            <img src={FirstCardPicture} className="card-pic" />
            <div className="card-content">
              <div className="card-title">
                <h2>Libero commodo arcu elementum eget pharetra.</h2>
              </div>
              <p className="card-time">Varje tisdag | 15:00 - 20:00</p>
              <p className="card-text">
                Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis
                vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum
                convallis vivamus sed ornare mi urna ne.
              </p>
              <button className="card-button">Läs mer</button>
            </div>
          </FoodCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
