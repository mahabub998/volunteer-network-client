import React from "react";
import Events from "../Events/Events";

const events = [
  {
    name: "animalShelter",
    img: "https://i.ibb.co/p3tck9V/animal-Shelter.png",
  },
  {
    name: "baby",
    img: "https://i.ibb.co/hVK5Qd5/babySit.png",
  },
  {
    name: "childHood",
    img: "https://i.ibb.co/p3tck9V/animal-Shelter.png",
  },
  {
    name: "childHood",
    img: "https://i.ibb.co/SKxFV4H/child-Support.png",
  },
  {
    name: "Books",
    img: "https://i.ibb.co/9hTyct1/newBooks.png",
  },
];

const Home = () => {
  return (
    <div className="row">
      {events.map((event) => (
        <Events event={event}></Events>
      ))}
      );
     
    </div>
  );
};

export default Home;
