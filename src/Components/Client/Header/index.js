import React, { useEffect, useState } from "react";
import Title from "../Title";
import "./style.css";
import { MDBCard, MDBCardImage, MDBCol, MDBIcon } from "mdbreact";

function Header() {
  const [date, setdate] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setdate(new Date());
    }, 1000);
    return () => clearInterval(interval);
    
   
  }, []);

 // const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  return (
    <div className="header container text-center">
      <center>
        <MDBCol col="4">
          <MDBCard style={{ height: "50px" }}>
            <MDBCardImage
              className="view view-cascade gradient-card-header peach-gradient"
              cascade
              tag="div">
              <h2 className="h2-responsive mb-2">My Clients</h2>
              <p>
                <MDBIcon icon="calendar-alt" /> {day}.{month + 1}.{year} {" "} 
                <MDBIcon icon="clock" /> {hour + 1}:{minutes}:{seconds}
              </p>
            </MDBCardImage>
          </MDBCard>
        </MDBCol>
      </center>
    </div>
  );
}

export default Header;
