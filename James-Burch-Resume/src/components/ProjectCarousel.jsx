import React from "react";

const ProjectCarousel = () => {
  return (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item">
          <img src="/images/project1hp.png" className="d-block w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Realing Cambs</h5>
            <p>My first ever project! A fully static website made for a local sports massage business using HTML and CSS.</p>
            <a href="https://james-burch.github.io/PP1-CI/">Live Site</a>
            <br />
            <a href="https://github.com/James-Burch/PP1-CI">Repository</a>
          </div>
        </div>
      </div>
      {/* Second Slide */}
      <div className="carousel-item">
        <img src="/images/project2hp.png" className="d-block w-100" alt="Project 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>High Octane</h5>
          <p>Brief description of Project 2.</p>
          <a href="https://james-burch.github.io/Project2-CI/">Live Site</a>
          <br />
          <a href="https://github.com/James-Burch/Project2-CI">Repository</a>
        </div>
      </div>
      {/* Third Slide */}
      <div className="carousel-item">
        <img src="/images/project3hp.png" className="d-block w-100" alt="Project 3" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Fitness Tracker App</h5>
          <p>A small and simple fitness tracker app built using python with a frontend terminal to showcase.</p>
          <a href="https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/">Live Site</a>
          <br />
          <a href="https://github.com/James-Burch/Project-3">Repository</a>
        </div>
      </div>
      {/* Fourth Slide */}
      <div className="carousel-item active">
        <img src="/images/project4hp.png" className="d-block w-100" alt="Project 4" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Golf Booking Website</h5>
          <p>A golf booking website made for my 4th course project for Diploma in Full Stack Software Development achieving a pass grade.
            This project utilises bootstrap css and django for the backend.</p>
          <a href="https://pp4-django-project-082841c8663e.herokuapp.com/">Live Site</a>
          <br />
          <a href="https://github.com/James-Burch/PP4-Django-Project">Repository</a>
        </div>
      </div>
      {/* Fifth Slide */}
      <div className="carousel-item active">
        <img src="/images/project5hp.png" className="d-block w-100" alt="Project 4" />
        <div className="carousel-caption d-none d-md-block">
          <h5>House Price Prediction Model</h5>
          <p>My final project as part of my course a machine learning model that allows the client to predict the sale Price
            of 4 inherited properties based on 3 features that my ML model deamed the best way to train and predict on.
          </p>
          <a href="https://house-price-prediction-pp5-615997f77e23.herokuapp.com/">Live Site</a>
          <br />
          <a href="https://github.com/James-Burch/PP5-ML-PROJECT">Repository</a>
        </div>
      </div>

      {/* Previous Button */}
      <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      {/* Next Button */}
      <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div >
  );
};

export default ProjectCarousel;
