// import React from 'react';
import imageone from '../assets/Construction hat (1).gif';

const Secondcard = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#228B22', height:'70vh' }}>
      <div className="row">
        <div className="col-md-6" style={{width:'30vw',marginTop: '30px'}}>
          <img
            src={imageone}
            className="img-fluid rounded-start d-block"
            style={{ maxHeight: '60vh',}}
            alt=""
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
            <p>
              Quisquam esse ad velit quo perspiciatis debitis praesentium. Deserunt expedita, optio
              consequatur facilis ullam harum perferendis blanditiis sint quia nulla vitae assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondcard;
