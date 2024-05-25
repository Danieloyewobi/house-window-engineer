// import React from 'react';
import image from '../assets/Construction hat.gif';

function Topbox() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="text-container col-12 col-md-6 text-center text-md-start">
            <h1 className='text-center text-sm-start'>Welcome to OpaLuvers Windows Construction</h1>
            <h5 className='text-center text-sm-start'>Your Trusted Partner in High-Quality Window Solutions</h5>
            <p>At OpaLuvers Windows Construction, we believe that windows are more than just openings to the outside world. They are the eyes of your home, providing light, warmth, and beauty while enhancing the architectural style and comfort of your living space.</p>
            <button className='button-one btn d-block m-auto m-md-0 w-25 w-md-25'>Join Us</button>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={image} alt="Construction hat" className="img-fluid" />
          </div>
        </div>
      <hr />
      </div>
    </>
  );
}

export default Topbox;
