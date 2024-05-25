// import React from 'react';

const Statistics = () => {
  // Dummy data for counts
  const clientsCount = 100;
  const testimoniesCount = 50;
  const projectsCount = 200;

  return (
    <div className="container-fluid bg-green p-5">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <div className="circle">
            <h3>{clientsCount}</h3>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="circle">
            <h3>{testimoniesCount}</h3>
            <p>Testimonies</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="circle">
            <h3>{projectsCount}</h3>
            <p>Projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
