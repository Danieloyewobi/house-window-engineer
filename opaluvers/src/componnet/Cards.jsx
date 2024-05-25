// import React from 'react';
import imageone from '../assets/window six.jpg';
import imagetwo from '../assets/window two.jpg';
import imagethree from '../assets/window three.jpg';
import imagefour from '../assets/window four.jpg';
import imagefive from '../assets/window five.jpg';

function Cards() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center m-5">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={imageone} className="card-img-top" alt="Window One" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={imagetwo} className="card-img-top" alt="Window Two" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={imagethree} className="card-img-top" alt="Window Three" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={imagefour} className="card-img-top" alt="Window Four" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={imagefive} className="card-img-top" alt="Window Five" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
