import React from "react";

const ProjectCarousel = () => {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide (Active) */}
          <div className="carousel-item active">
            <img src="/images/project1hp.png" className="d-block w-100 project-img" alt="Project 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Realing Cambs</h5>
              <p>My first ever project! A fully static website made for a local sports massage business using HTML and CSS.</p>
              <a href="https://james-burch.github.io/PP1-CI/">Live Site</a>
              <br />
              <a href="https://github.com/James-Burch/PP1-CI">Repository</a>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img src="/images/project2hp.png" className="d-block w-100 project-img" alt="Project 2" />
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
            <img src="/images/project3hp.png" className="d-block w-100 project-img" alt="Project 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fitness Tracker App</h5>
              <p>A small and simple fitness tracker app built using Python with a frontend terminal to showcase.</p>
              <a href="https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/">Live Site</a>
              <br />
              <a href="https://github.com/James-Burch/Project-3">Repository</a>
            </div>
          </div>

          {/* Fourth Slide */}
          <div className="carousel-item">
            <img src="/images/project4hp.png" className="d-block w-100 project-img" alt="Project 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Golf Booking Website</h5>
              <p>A golf booking website built using Django and Bootstrap.</p>
              <a href="https://pp4-django-project-082841c8663e.herokuapp.com/">Live Site</a>
              <br />
              <a href="https://github.com/James-Burch/PP4-Django-Project">Repository</a>
            </div>
          </div>

          {/* Fifth Slide */}
          <div className="carousel-item">
            <img src="/images/project5hp.png" className="d-block w-100 project-img" alt="Project 5" />
            <div className="carousel-caption d-none d-md-block">
              <h5>House Price Prediction Model</h5>
              <p>A machine learning model to predict house prices.</p>
              <a href="https://house-price-prediction-pp5-615997f77e23.herokuapp.com/">Live Site</a>
              <br />
              <a href="https://github.com/James-Burch/PP5-ML-PROJECT">Repository</a>
            </div>
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
      </div>
    </div>
  );
};

export default ProjectCarousel;
