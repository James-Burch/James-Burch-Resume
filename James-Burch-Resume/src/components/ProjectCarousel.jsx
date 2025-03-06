import React from "react";

const ProjectCarousel = () => {
  return (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <img src="/images/project4hp.png" className="d-block w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Golf Booking Website</h5>
            <p>A golf booking website made for my 4th course project for Diploma in Full Stack Software Development achieving a pass grade. 
              This project utilises bootstrap css and django for the backend.</p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Project 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Project 2</h5>
            <p>Brief description of Project 2.</p>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Project 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Project 3</h5>
            <p>Brief description of Project 3.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default ProjectCarousel;
