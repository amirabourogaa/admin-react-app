import React from 'react';
import Title from '../Title';
import './style.css';
import {  MDBCard,  MDBCardImage, MDBCol, MDBIcon } from 'mdbreact';

function Header() {
  return (
    <div className="header container text-center">
      <center>
      <MDBCol col='4'>
        <MDBCard style = {{height : '50px'}} >
          <MDBCardImage
            className='view view-cascade gradient-card-header peach-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>My Clients</h2>
            <p>
              <MDBIcon icon='calendar-alt' /> 26.07.2017
            </p>
          </MDBCardImage>
          
        </MDBCard>
      </MDBCol>
      </center>
    </div>
  )
}

export default Header;