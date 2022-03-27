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
import SecondCardPicture from "../../assets/images/second-card.svg";
import ThirdCardPicture from "../../assets/images/third-card.svg";
import FirstLocation from "../../assets/images/location-first-card.svg";
import SecondLocation from "../../assets/images/location-sec-card.svg";
import Divider from "../../assets/images/divider.svg";
import HistoryPic from "../../assets/images/history.svg";
import History1 from "../../assets/images/history1.svg";
import History2 from "../../assets/images/history2.svg";
import History3 from "../../assets/images/history3.svg";
import AboutUs1 from "../../assets/images/aboutus1.svg";
import AboutUs2 from "../../assets/images/aboutus2.svg";
import Line from "../../assets/images/line.svg";
import ContactForm from "../../components/contactForm";

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
        <p className="subtitle">
          Enim volutpat velit molestie morbi pharetra nam nisi et.
        </p>
        <img src={EventsVector} />
        <div className="food-cards">
          <FoodCard width="308px" height="481px">
            <img src={FirstCardPicture} className="card-pic" />
            <div className="card-content">
              <div className="card-title">
                <h2>Libero commodo arcu elementum eget pharetra.</h2>
              </div>
              <p className="card-time">Varje tisdag | 15:00 - 20:00</p>
              <hr size="1" />
              <p className="card-text">
                Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis
                vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum
                convallis vivamus sed ornare mi urna ne.
              </p>
              <button className="card-button">Läs mer</button>
            </div>
          </FoodCard>
          <FoodCard width="308px" height="481px">
            <img src={SecondCardPicture} className="card-pic" />
            <div className="card-content">
              <div className="card-title">
                <h2>
                  Ligula molestie pharetra auctor tincidunt id turpis et.{" "}
                </h2>
              </div>
              <p className="card-time">Varje tisdag | 15:00 - 20:00</p>
              <hr size="1" />
              <p className="card-text">
                Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis
                vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum
                convallis vivamus sed ornare mi urna ne.
              </p>
              <div className="btn-row">
                <button>Läs mer</button>
                <button>Läs mer</button>
              </div>
            </div>
          </FoodCard>
          <FoodCard width="308px" height="481px">
            <img src={ThirdCardPicture} className="card-pic" />
            <div className="card-content">
              <div className="card-title">
                <h2>
                  Pellentesque libero tempor vel nec nulla odio vulputate ut.
                </h2>
              </div>
              <p className="card-time">Varje tisdag | 15:00 - 20:00</p>
              <hr size="1" />
              <p className="card-text">
                Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis
                vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum
                convallis vivamus sed ornare mi urna ne.
              </p>
              <button className="card-button">Läs mer</button>
            </div>
          </FoodCard>
          <FoodCard width="308px" height="289px">
            <div className="card-content">
              <div className="card-title">
                <h2>
                  Sed risus at consectetur vitae ut mauris scelerisque nullam.
                </h2>
              </div>
              <p className="card-time">Varje tisdag | 15:00 - 20:00</p>
              <hr size="1" />
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
      <div className="our-location">
        <h1>Our locations</h1>
        <p className="subtitle">
          Tristique facilisi tortor egestas nulla id amet. Integer in{" "}
        </p>
        <img src={EventsVector} />
        <div className="location-cards">
          <FoodCard width="620px" height="762px">
            <img src={FirstLocation} className="card-pic" />
            <div className="card-content">
              <h4>RESTAURANT</h4>
              <div className="card-title">
                <h2>Restaurant Food</h2>
              </div>
              <p className="card-subtitle">
                Cum pellentesque nisi sit facilisi suspendisse. Aliquet egestas
                at morbi ultricies euismod scelerisque. Malesuada rhoncus
                feugiat gravida adipiscing.
              </p>
              <div className="location-row">
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>Jean Street 21105</p>
                </div>
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>email.address@gmail.com</p>
                </div>
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>076 027 41 51</p>
                </div>
              </div>
              <div className="location-opening-hours">
                <img src={LocationIcon} className="loc-elem-pic" />
                <p>Opening Hours </p>
                <img src={Divider} className="divider" />
              </div>
              <div className="hours">
                <div className="element">
                  <p>MANDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>TISDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>ONSDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>TORSDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>FREDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>LORDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>SONDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
              </div>
              <button className="location-button">VISA MENY</button>
            </div>
          </FoodCard>
          <FoodCard width="620px" height="762px">
            <img src={SecondLocation} className="card-pic" />
            <div className="card-content">
              <h4>KITCHEN</h4>
              <div className="card-title">
                <h2>Kitchen Food</h2>
              </div>
              <p className="card-subtitle">
                Ante a lacus, amet proin. Auctor turpis fermentum posuere
                tortor, diam sit cursus sit. Porttitor felis facilisis est amet,
                adipiscing vitae. Ac justo, convallis sed.
              </p>
              <div className="location-row">
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>Downstreet 20152</p>
                </div>
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>email.address@gmail.com</p>
                </div>
                <div className="loc-elements">
                  <img src={LocationIcon} className="loc-elem-pic" />
                  <p>076 512 51 12</p>
                </div>
              </div>
              <div className="location-opening-hours">
                <img src={LocationIcon} className="loc-elem-pic" />
                <p>Opening Hours </p>
                <img src={Divider} className="divider" />
              </div>
              <div className="hours">
                <div className="element">
                  <p>MANDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>TISDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>ONSDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>TORSDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>FREDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>LORDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
                <div className="element">
                  <p>SONDAG</p>
                  <p>09:00 - 17:00</p>
                </div>
              </div>
              <button className="location-button">VISA MENY</button>
            </div>
          </FoodCard>
        </div>
      </div>
      <div className="history-section">
        <h1>History</h1>
        <p className="subtitle">
          Enim volutpat velit molestie morbi pharetra nam nisi et.{" "}
        </p>
        <img src={EventsVector} />
        <img src={HistoryPic} className="history-pic" />
        <div className="history-cards">
          <div className="history-card">
            <div className="history-card-text">
              <h4 className="history-card-title">OPENING</h4>
              <h3 className="history-card-time">2005</h3>
              <p className="history-card-subtitle">
                At eu eu suspendisse ornare vitae eu tempor pulvinar. In viverra
                est tempor tortor vitae, elit duis. Dignissim aliquam morbi ut
                scelerisque vel fermentum. Vel ut sollicitudin proin odio
                blandit odio ante non tristique. Pellentesque cras massa
                parturient vitae. Facilisis id tincidunt porttitor viverra nec
                mattis.
              </p>
            </div>
            <img src={History1} />
          </div>
          <div className="history-card">
            <div className="history-card-text">
              <h4 className="history-card-title">BEGINING YEARS</h4>
              <h3 className="history-card-time">2005 - 2020</h3>
              <p className="history-card-subtitle">
                Ultrices diam enim et nec laoreet. Cras vulputate at vitae mi
                enim proin. Sit aliquet id mi id cursus enim, sit ipsum augue.
                Nullam sed morbi a elementum metus. Nisl gravida ultricies
                aliquam risus sit. Nibh libero accumsan, a mauris morbi quis
                proin arcu. A porttitor vitae in a gravida sed.
              </p>
            </div>
            <img src={History2} />
          </div>
          <div className="history-card">
            <div className="history-card-text">
              <h4 className="history-card-title">PRESENT</h4>
              <h3 className="history-card-time">2020 - Present</h3>
              <p className="history-card-subtitle">
                Velit tincidunt fermentum sit duis suspendisse. Consequat velit
                vitae eget nunc et massa eu eget consequat. Ut tristique
                pellentesque odio tincidunt amet. Pulvinar duis ipsum ultrices
                nisl egestas laoreet risus volutpat. Vulputate mollis
                pellentesque aliquet aenean porttitor gravida at. Lectus aliquam
                egestas non.
              </p>
            </div>
            <img src={History3} />
          </div>
        </div>
      </div>
      <div className="about-us-section">
        <h1>About us</h1>
        <p className="subtitle">
          Sit orci orci velit elementum et est. Non, cursus arcu.{" "}
        </p>
        <img src={EventsVector} />
        <div className="about-us-content">
          <div className="about-us-left">
            <img src={AboutUs1} className="about-us-picture" />
            <div className="left-text">
              <h3 className="about-title">Always ready and prepared</h3>
              <img src={Line} className="line"/>
              <p className="about-text">
                A tristique aenean vestibulum nisl, non proin. Aenean tempus,
                eget libero tortor amet in pellentesque morbi. Viverra velit,
                quis varius ac tempus. Arcu ac, vivamus varius fermentum fames
                eu at sit. Netus in etiam mi porta in posuere. Aenean ut
                lobortis eget venenatis eget eu et.
              </p>
            </div>
          </div>
          <div className="about-us-right">
            <div className="right-text">
              <h3 className="about-title">Always ready and prepared</h3>
              <img src={Line} className="line"/>
              <p className="about-text">
                A tristique aenean vestibulum nisl, non proin. Aenean tempus,
                eget libero tortor amet in pellentesque morbi. Viverra velit,
                quis varius ac tempus. Arcu ac, vivamus varius fermentum fames
                eu at sit. Netus in etiam mi porta in posuere. Aenean ut
                lobortis eget venenatis eget eu et.
              </p>
            </div>
            <img src={AboutUs2} className="about-us-picture" />
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
