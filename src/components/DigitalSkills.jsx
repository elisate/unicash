import React from "react";
import "./Hero.css";

const SlidingLogos = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-950 py-16">
      <div className="flex animate-slide-slow space-x-12">
        {/* Online logos for newsletters and YouTube */}
        <img
          src="https://th.bing.com/th/id/R.10c1d220cbff6ab9ff0037d146918f7d?rik=FEMgnn331su3bw&riu=http%3a%2f%2fallvectorlogo.com%2fimg%2f2017%2f01%2fthe-economist-logo.png&ehk=AvXBgg28lsm8Ha7%2bDaf%2bo8d5X21aABmHN1fN3KMUgOA%3d&risl=&pid=ImgRaw&r=0"
          alt="The Economist"
          className="h-12"
        />
        <img
          src="https://th.bing.com/th/id/OIP.OI7QF2CWNEozR8EQOUHtuwHaET?w=1208&h=702&rs=1&pid=ImgDetMain"
          alt="The New York Times"
          className="h-12"
        />
        <img
          src="https://th.bing.com/th/id/OIP.NSlV214xRJg4-Rtb8RUbBQAAAA?rs=1&pid=ImgDetMain"
          alt="The Guardian"
          className="h-12"
        />
        <img
          src="https://pkbnews.in/wp-content/uploads/2023/07/bbc-2.jpg"
          alt="BBC News"
          className="h-12"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="YouTube"
          className="h-12"
        />
        <img
          src="https://i.pinimg.com/originals/c3/2e/a9/c32ea92d94519503f8c8d6ed88bc0a1d.jpg"
          alt="Vox"
          className="h-12"
        />

        {/* Repeat logos to create infinite scroll effect */}
        <img
          src="https://th.bing.com/th/id/R.10c1d220cbff6ab9ff0037d146918f7d?rik=FEMgnn331su3bw&riu=http%3a%2f%2fallvectorlogo.com%2fimg%2f2017%2f01%2fthe-economist-logo.png&ehk=AvXBgg28lsm8Ha7%2bDaf%2bo8d5X21aABmHN1fN3KMUgOA%3d&risl=&pid=ImgRaw&r=0"
          alt="The Economist"
          className="h-12"
        />
        <img
          src="https://th.bing.com/th/id/OIP.OI7QF2CWNEozR8EQOUHtuwHaET?w=1208&h=702&rs=1&pid=ImgDetMain"
          alt="The New York Times"
          className="h-12"
        />
        <img
          src="https://th.bing.com/th/id/OIP.NSlV214xRJg4-Rtb8RUbBQAAAA?rs=1&pid=ImgDetMain"
          alt="The Guardian"
          className="h-12"
        />
        <img
          src="https://pkbnews.in/wp-content/uploads/2023/07/bbc-2.jpg"
          alt="BBC News"
          className="h-12"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="YouTube"
          className="h-12"
        />
        <img
          src="https://i.pinimg.com/originals/c3/2e/a9/c32ea92d94519503f8c8d6ed88bc0a1d.jpg"
          alt="Vox"
          className="h-12"
        />
      </div>
    </div>
  );
};

export default SlidingLogos;
