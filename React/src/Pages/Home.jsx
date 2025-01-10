import React from "react";
import video from "../assets/canon.mp4";
import Carousel from "./Carousel";
import Explore from "./Explore";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="home flex flex-col">
        <div >
        <video 
          src={video} 
          autoPlay 
          muted 
          loop 
          className=" w-full top-2 h-300"
          aria-label="Background promotional video"
        ></video>
      </div>
    
      <div className=" carousel-container ">
        <Carousel />
      </div>
      <div>
      <Explore/>
      </div>
      </div>
      </>
  );
}

export default Home;






