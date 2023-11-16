import React, { useState } from "react";
import Tour from "./Tour";
import Title from "./Title";
import { tours as toursData } from "../data";

function Tours() {
  const [tours, setTours] = useState(toursData);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={removeTour} // Pass removeTour function as a prop
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
