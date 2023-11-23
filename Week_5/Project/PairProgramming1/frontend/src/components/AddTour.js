import React, { useState } from "react";
import "./styles/AddTour.css";

export default function AddTour() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const apiURL = "http://localhost:5000/api/tours";

  const onSubmit = (e) => {
    e.preventDefault();
    const newTour = {
      date,
      title,
      info,
      location,
      duration,
      cost,
      image,
    };
    console.log(newTour);

    pushTour(newTour);
  };

  const pushTour = async (newTour) => {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTour),
    });
    console.log(response);

    if (!response.ok) {
      alert("Please provide all the information");
    } else {
      alert("Tour added successfully");

      setDate("");
      setTitle("");
      setInfo("");
      setLocation("");
      setDuration("");
      setCost("");
      setImage("");
    }
  };

  return (
    <div>
      <section className="section">
        <h2>Add New Tour</h2>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Date: </label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Info: </label>
              <textarea
                className="info"
                type="text"
                name="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Duration: </label>
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Cost: </label>
              <input
                type="text"
                name="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Image: </label>
              <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <button>Add Tour</button>
          </form>
        </div>
      </section>
    </div>
  );
}
