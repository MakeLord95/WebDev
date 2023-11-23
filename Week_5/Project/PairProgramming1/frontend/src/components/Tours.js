import Tour from "./Tour";
import Title from "./Title";
import { useEffect, useState } from "react";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl = "http://localhost:5000/api/tours";

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(apiUrl);
      console.log(response);
      const data = await response.json();
      console.log(data);

      setToursData(data);
    };

    fetchTours();
  }, []);

  const handleDeleteItem = (itemId) => {
    console.log(`Tour id: ${itemId}`);

    fetch("http://localhost:5000/api/tours/" + itemId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setToursData(toursData.filter((tour) => tour._id !== itemId));
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour._id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
