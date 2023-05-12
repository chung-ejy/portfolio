import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const Profile = () => {
  return (
    <div className="card card-body mt-4 mb-4">
      <h3 className="card-title">Eric Ji-Yong Chung</h3>
      <div className="row">
        <div className="col">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='https://github.com/chung-ejy'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
        </div>
        <div className="col">
        <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='https://www.linkedin.com/in/chung-ejy/'>
                    <MDBIcon fab icon='linkedin' />
                  </MDBBtn>
        </div>
                  {/* <td className="d-none d-lg-table-cell">
                  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='chung.ejy@gmail.com'>
                    <MDBIcon fab icon='email' />
                  </MDBBtn>
                  </td> */}
          </div>
        </div>
  );
};

export default Profile;
