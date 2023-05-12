import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const Profile = () => {
  return (
    <div className="card card-body mt-4 mb-4">
      <div className="row">
        <div className="col">
                  <MDBBtn className='m-1' href='https://github.com/chung-ejy'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
        </div>
        <div className="col m-1">
          <h3 className="">
          <a href="https://www.instagram.com/emiru.jpg/"><i className={`fas fa-egg fas-lg" text-primary`}></i></a>
          </h3>
        </div>
        <div className="col">
        <MDBBtn className='m-1' href='https://www.linkedin.com/in/chung-ejy/'>
                    <MDBIcon fab icon='linkedin' />
                  </MDBBtn>
        </div>

          </div>
        </div>
  );
};

export default Profile;
