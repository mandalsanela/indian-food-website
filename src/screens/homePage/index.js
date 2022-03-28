import React from "react";
import Navbar from "../../components/navbar";
import HeaderPic1 from "../../assets/images/header-v1.svg";
import HeaderPic2 from "../../assets/images/header-v2.svg";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Ellipse2 from "../../assets/images/ellipse2.svg";
import Footer from "../../components/footer";
import ButtonGrey from "../../UI/buttonGrey";
import LocationIcon from "../../assets/images/icons/location.svg";
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
import Escajg from "../../assets/images/icons/escajg.svg";
import ClockIcon from "../../assets/images/icons/clock.svg";
import ShoppingBasket from "../../assets/images/icons/shopping-basket.svg";
import Carousel from "../../components/carousel";
import PhoneIcon from "../../assets/images/icons/phone.svg";
import MailIcon from "../../assets/images/icons/mail.svg";
import Vector1 from "../../assets/images/vector1.svg";
import Vector2 from "../../assets/images/vector2.svg";
import Vector3 from "../../assets/images/vector3.svg";
import Vector4 from "../../assets/images/vector4.svg";
import Vector5 from "../../assets/images/vector5.svg";
import Vector6 from "../../assets/images/vector6.svg";

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
          <img src={ClockIcon} />
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
              <div className="row">
                <img src={ShoppingBasket} className="shopping-basket" />
                <h3>BESTÄLL TAKEAWAY</h3>
              </div>
            </ButtonYellow>
          </div>
        </ButtonGrey>
      </div>
      <div className="events-vector">
        <img src={Vector1} />
        <div className="events-section">
          <h1>Events</h1>
          <p className="subtitle">
            Enim volutpat velit molestie morbi pharetra nam nisi et.
          </p>
          <img src={EventsVector} />
          <div className="food-cards">
            {foodData?.map((item, index) => {
              return (
                <FoodCard
                  width="300px"
                  height={index !== 3 ? "481px" : "289px"}
                >
                  {item.image && <img src={item.image} className="card-pic" />}
                  <div className="card-content">
                    <div className="card-title">
                      <h2> {item?.title} </h2>
                    </div>
                    <p className="card-time"> {item?.time} </p>
                    <hr size="1" />
                    <p className="card-text">{item?.text}</p>
                    <button className="card-button">LÄS MER</button>
                  </div>
                </FoodCard>
              );
            })}
          </div>
        </div>
        <img src={Vector2} />
      </div>
      <Carousel />
      <div className="our-location">
        <h1>Our locations</h1>
        <p className="subtitle">
          Tristique facilisi tortor egestas nulla id amet. Integer in{" "}
        </p>
        <img src={EventsVector} />
        <div className="location-cards">
          {locationData?.map((item) => {
            return (
              <FoodCard width="620px" height="762px">
                <img src={item?.image} className="card-pic" />
                <div className="card-content">
                  <h4> {item?.header} </h4>
                  <div className="card-title">
                    <h2> {item?.title} </h2>
                  </div>
                  <p className="card-subtitle">{item?.subtitle}</p>
                  <div className="location-row">
                    <div className="loc-elements">
                      <img src={LocationIcon} className="loc-elem-pic" />
                      <p> {item?.address} </p>
                    </div>
                    <div className="loc-elements">
                      <img src={MailIcon} className="loc-elem-pic" />
                      <p> {item?.mail} </p>
                    </div>
                    <div className="loc-elements">
                      <img src={PhoneIcon} className="loc-elem-pic" />
                      <p> {item?.phone} </p>
                    </div>
                  </div>
                  <div className="location-opening-hours">
                    <img src={ClockIcon} className="loc-elem-pic" />
                    <p>Opening Hours </p>
                    <img src={Divider} className="divider" />
                  </div>
                  <div className="hours">
                    {daysInWeek?.map((item) => {
                      return (
                        <div className="element">
                          <p> {item?.name} </p>
                          <p> {item?.time} </p>
                        </div>
                      );
                    })}
                  </div>
                  <button className="location-button">
                    <img src={Escajg} />
                    <p>VISA MENY</p>
                  </button>
                </div>
              </FoodCard>
            );
          })}
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
          {historyData?.map((item) => {
            return (
              <div className="history-card">
                <div className="history-card-text">
                  <h4 className="history-card-title"> {item?.title} </h4>
                  <h3 className="history-card-time"> {item?.time} </h3>
                  <p className="history-card-subtitle">{item?.subtitle}</p>
                </div>
                <img src={item?.image} />
              </div>
            );
          })}
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
              <img src={Line} className="line" />
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
              <h3 className="about-title">Making food for the soul</h3>
              <img src={Line} className="line" />
              <p className="about-text">
                Leo vitae augue lectus dignissim magna non id augue vel. Sit
                nulla sit vitae odio quisque nulla platea. Sem mauris et
                imperdiet quis dignissim. A diam nibh magna viverra adipiscing
                etiam id. Phasellus malesuada lorem sed in nisl id massa. Id eu
                id et cursus risus id sit mus neque ultrices a.
              </p>
            </div>
            <img src={AboutUs2} className="about-us-picture" />
          </div>
        </div>
        <div className="contact">
          <div className="v3v4">
            <img src={Vector3} />
            <img src={Vector4} />
          </div>
          <ContactForm />
          <div className="v5v6">
            <img src={Vector5} />
            <img src={Vector6} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const foodData = [
  {
    image: FirstCardPicture,
    title: "Libero commodo arcu elementum eget pharetra.",
    time: "Varje tisdag | 15:00 - 20:00",
    text: "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
  },

  {
    image: SecondCardPicture,
    title: "Ligula molestie pharetra auctor tincidunt id turpis et.",
    time: "Varje tisdag | 15:00 - 20:00",
    text: "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
  },

  {
    image: ThirdCardPicture,
    title: "Pellentesque libero tempor vel nec nulla odio vulputate ut.",
    time: "Varje tisdag | 15:00 - 20:00",
    text: "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
  },

  {
    image: null,
    title: "Sed risus at consectetur vitae ut mauris scelerisque nullam.",
    time: "Varje tisdag | 15:00 - 20:00",
    text: "Sit pellentesque a at eros, nisl etiam. Nec, porttitor turpis vel penatibus dignissim non a mauris. Sed eget ipsum eu ipsum convallis vivamus sed ornare mi urna ne.",
  },
];

const locationData = [
  {
    image: FirstLocation,
    header: "RESTAURANT",
    title: "Restaurant Food",
    subtitle:
      "Cum pellentesque nisi sit facilisi suspendisse. Aliquet egestas at morbi ultricies euismod scelerisque. Malesuada rhoncus feugiat gravida adipiscing.",
    address: "Jean Street 21105",
    mail: "email.address@gmail.com",
    phone: "076 027 41 51",
  },

  {
    image: SecondLocation,
    header: "KITCHEN",
    title: "Kitchen Food",
    subtitle:
      "Ante a lacus, amet proin. Auctor turpis fermentum posuere tortor, diam sit cursus sit. Porttitor felis facilisis est amet, adipiscing vitae. Ac justo, convallis sed.",
    address: "Downstreet 20152",
    mail: "email.address@gmail.com",
    phone: "076 512 51 12",
  },
];

const daysInWeek = [
  {
    name: "MANDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "TISDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "ONSDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "TORSDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "FREDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "LORDAG",
    time: "09:00 - 17:00",
  },

  {
    name: "SONDAG",
    time: "09:00 - 17:00",
  },
];

const historyData = [
  {
    title: "OPENING",
    time: "2005",
    subtitle:
      "At eu eu suspendisse ornare vitae eu tempor pulvinar. In viverra est tempor tortor vitae, elit duis. Dignissim aliquam morbi ut scelerisque vel fermentum. Vel ut sollicitudin proin odio blandit odio ante non tristique. Pellentesque cras massa parturient vitae. Facilisis id tincidunt porttitor viverra nec mattis.",
    image: History1,
  },

  {
    title: "BEGINING YEARS",
    time: "2005 - 2020",
    subtitle:
      "Ultrices diam enim et nec laoreet. Cras vulputate at vitae mi enim proin. Sit aliquet id mi id cursus enim, sit ipsum augue. Nullam sed morbi a elementum metus. Nisl gravida ultricies aliquam risus sit. Nibh libero accumsan, a mauris morbi quis proin arcu. A porttitor vitae in a gravida sed.",
    image: History2,
  },

  {
    title: "PRESENT",
    time: "2020 - Present",
    subtitle:
      " Velit tincidunt fermentum sit duis suspendisse. Consequat velit vitae eget nunc et massa eu eget consequat. Ut tristique pellentesque odio tincidunt amet. Pulvinar duis ipsum ultrices nisl egestas laoreet risus volutpat. Vulputate mollis pellentesque aliquet aenean porttitor gravida at. Lectus aliquam egestas non.",
    image: History3,
  },
];
export default HomePage;
