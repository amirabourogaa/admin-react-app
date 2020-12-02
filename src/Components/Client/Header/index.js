
import React,{useState,useEffect} from 'react';
import './style.css';
import {  MDBCard,  MDBCardImage, MDBCol, MDBIcon } from 'mdbreact';





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
      <div >
      
        <h1>My clients</h1>
    </div>
       
      </center>
    </div>
  );
}

export default Header;
