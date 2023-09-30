import { useState, useContext } from "react";
import { global } from "./context";

import services from "../assets/services.json";
import About from "../component/about";
import Footer from "../component/footer";
import RoomCard from "../component/room-card";
import ServiceCard from "../component/service-card";
import SubTitle from "../component/sub-title";
import { Link } from "react-router-dom";

export default function Home() {
  const database = useContext(global).database;
  const [popUp, setPopup] = useState(
    "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
  );
  const [benar, setBenar] = useState(true);
  // benar artinya popUpnya tidak muncul
  const popUpOnOff = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("max-md:hidden");
    menu.classList.toggle("max-md:grid");
    if (benar) {
      setPopup(
        "bg-primary-blue h-72 md:h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
      );
      setBenar(false);
    }
    if (!benar) {
      setPopup(
        "bg-primary-blue h-24 w-screen flex justify-between min-w-[340px] fixed top-0 z-20"
      );
      setBenar(true);
    }
  };
  const popUpOff = () => {
    if (!benar) popUpOnOff();
  };

  const db_services = services;

  return (
    <div className="font-roboto h-screen">
      <div className={popUp}>
        <div className="text-2xl font-semibold text-primary-orange w-[25%] min-w-[150px] max-h-24 flex items-center justify-center">
          MYHOTEL
        </div>
        <div className="w-[75%] flex-row justify-center items-center">
          <div className="h-8 bg-white flex items-center justify-between px-6 max-md:hidden">
            <div className="font-raleway flex justify-around text-sm">
              <div className="flex items-center mr-2">
                <i className="ri-mail-line text-primary-orange"></i>
                <span className="text-secondary-gray px-2">
                  info@myhotel.yogya.com
                </span>
              </div>
              <div className="flex items-center mx-4">
                <i className="ri-phone-fill text-primary-orange"></i>
                <span className="text-secondary-gray px-2">
                  +6274 5432 9876
                </span>
              </div>
            </div>
            <div className="w-40 flex items-center justify-around">
              <i className="ri-facebook-line text-primary-orange"></i>
              <i className="ri-twitter-fill text-primary-orange"></i>
              <i className="ri-linkedin-line text-primary-orange"></i>
              <i className="ri-instagram-line text-primary-orange"></i>
              <i className="ri-youtube-line text-primary-orange"></i>
            </div>
          </div>
          <div
            id="menu"
            className="h-16 w-fit md:w-[500px] uppercase text-white text-xs flex items-center justify-start gap-4 max-md:hidden md:text-sm max-md:absolute max-md:font-raleway left-5 top-20"
          >
            {/* <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              home
            </a> */}
            <a
              onClick={popUpOnOff}
              href="#about"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              about
            </a>
            <a
              onClick={popUpOnOff}
              href="#services"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              service
            </a>
            <a
              onClick={popUpOnOff}
              href="#rooms"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              rooms
            </a>
            {/* <a
              onClick={popUpOnOff}
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              pages
            </a> */}
            <a
              onClick={popUpOnOff}
              href="#footer"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              contact
            </a>
            <Link
              onClick={popUpOnOff}
              to="/login"
              className="mr-8 hover:text-primary-orange hover:text-sm hover:max-md:pl-2"
            >
              login
            </Link>
          </div>
        </div>
        <button
          onClick={popUpOnOff}
          className="
        md:hidden 
        mx-12 
        h-fit 
        py-8 
        absolute
        right-16
        min-[300px]:right-5
        min-[320px]:right-0
        "
        >
          <svg
            className="w-6 h-6 text-white hover:text-primary-orange"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* bagian content disini  */}
      <div onClick={popUpOff} className="z-10">
        <div
          id="about"
          className="pt-24 bg-[url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-fit min-[500px]:w-full"
        >
          <About />
        </div>
        <div id="rooms" className="pt-24">
          <SubTitle header="our rooms" title="rooms" />
          <div className="m-4 pb-4 flex justify-center flex-wrap">
            {database.map(({ id, kategori, harga, image }) => {
              return (
                <div key={id}>
                  <RoomCard kategori={kategori} harga={harga} image={image} />
                </div>
              );
            })}
          </div>
        </div>

        {/* bagian service */}
        <div
          id="services"
          className="pt-24 bg-[url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover"
        >
          <SubTitle header="our services" title="services" />
          <div className="m-2 pb-4 flex justify-center flex-wrap">
            {db_services.map(({ id, title, subTitle, icon }) => {
              return (
                <ServiceCard
                  title={title}
                  subTitle={subTitle}
                  icon={icon}
                  key={id}
                />
              );
            })}
          </div>
        </div>
        <div id="footer" className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
