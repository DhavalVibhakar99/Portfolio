import React from "react";
import "./../styles/Service.css";

const Services = () => {
  const services = [
    {
      title: "Data Pipeline Development",
      description:
        "Design and implement robust data pipelines to facilitate the efficient flow of data from various sources to storage solutions.",
    },
    {
      title: "Data Warehousing Solutions",
      description:
        "Build and maintain data warehouses that support business intelligence and analytics, ensuring data integrity and accessibility.",
    },
    {
      title: "ETL Process Automation",
      description:
        "Automate Extract, Transform, Load (ETL) processes to streamline data integration and improve data quality.",
    },
    {
      title: "Big Data Technologies",
      description:
        "Utilize big data frameworks like Hadoop and Spark to process and analyze large datasets effectively.",
    },
  ];

  return (
    <section id="services" className="services-section">
      {/* Services Title OUTSIDE Cards */}
      <div className="services-header">
        <h2 className="services-title">Services</h2>

      </div>

      {/* Cards Container */}
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3> {/* Added this */}
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
