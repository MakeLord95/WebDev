import Service from "./Service";
import Title from "./Title";
import { useEffect, useState } from "react";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const apiURL = "http://localhost:5000/api/services";

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(apiURL);
      console.log(response);
      const data = await response.json();
      console.log(data);

      setServicesData(data);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service._id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
