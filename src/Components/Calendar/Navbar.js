import React,{ useEffect, useState }from 'react';
import './Navbar.css';
import { MDBBtn } from "mdbreact";
import {FcAlarmClock,FcCalendar} from 'react-icons/fc'
import {StateDispatchContext} from './stateManager.js';
import {  MDBIcon } from "mdbreact";
import { FiSettings } from 'react-icons/fi';
import { Col, Container, Row } from 'react-bootstrap';
const SettingsMenu = (props) => {

  const stateDispatch = React.useContext(StateDispatchContext);

  const [isExportShowing] = React.useState(false);
  const [isImportShowing, setIsImportShowing] = React.useState(false);

  const clearAll = () => {
    if (window.confirm("Clear all? This will erase the entire board!!")) {
      stateDispatch({
        type: 'CLEAR_STATE',
      });
    }
  };

  return (
    <div
      className="settings-menu-overlay"
      onClick={event => {
        console.log("Clicked outside menu")
        props.setSettingsMenuProps([0,0,false])
      }}
    >
    <ul
      className="settings-menu"
      onClick={event => event.stopPropagation()}
      style={{ top: props.posY, left: props.posX }}
    >
      
      <li
      
        className="settings-menu-item"
        onClick={clearAll}
      >Clear All</li>

    </ul>
      {isExportShowing &&
        <ExportDisplay content={props.todoState}/>
      }
      {isImportShowing &&
        <ImportDisplay setIsImportShowing={setIsImportShowing}/>
      }
    </div>
  );
}

const ExportDisplay = (props) => {
  return (
    <div 
      className="export-display"
    >
      <textarea 
        className="export-content"
        onClick={event => event.stopPropagation()}
        defaultValue={btoa(JSON.stringify(props.content))}
      ></textarea>
      <div className="export-buttons">
        <span>Close</span>
      </div>
    </div>
  );
}

const ImportDisplay = (props) => {
  const stateDispatch = React.useContext(StateDispatchContext);
  const [importData, setImportData] = React.useState("");

  const importClick = (event) => {
    if (window.confirm("Import? This will erase all your current data!!")) {
      stateDispatch({
        type: 'LOAD_NEW_STATE',
        newState: JSON.parse(atob(importData)),
      });
      props.setIsImportShowing(false);
    }
  };

  const cancelClick = () => {
    props.setIsImportShowing(false);
  };

  return (
    <div 
      className="export-display"
    >
      <textarea 
        className="export-content"
        onClick={event => event.stopPropagation()}
        value={importData}
        onChange={event => setImportData(event.target.value)}
      >
      </textarea>
      <div style={{margin: "auto"}} onClick={event => event.stopPropagation()}>
        <span 
          className="export-buttons"
          onClick={cancelClick}
        >Cancel</span>
        <span 
          className="export-buttons"
          onClick={event => importClick(event)}
        >Import</span>
      </div>
    </div>
  );
}
      

const Navbar = (props) => {
  const [settingsMenuProps, setSettingsMenuProps] = React.useState([0,0,false]);
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


  return(
    <div className="navbar">
       <div class="bg_move">
      
              <p>
              <Container>
  <Row>
    <Col><div style={{fontSize:'50px',marginLeft:'300px',color:'white'}}> 
    <div style={{marginLeft:'80px'}}><FcCalendar/></div>
    
    {day}.{month + 1}.{year} {" "} </div></Col>
    <div style={{fontSize:'50px',marginLeft:'500px',color:'white'}}>
    <div style={{marginLeft:'80px'}}><FcAlarmClock/><br/></div>
    
      {hour + 1}:{minutes}:{seconds}</div>
    <Col></Col>
  </Row>
 
</Container>
               
               
              </p>
    </div>
    
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <span
       
        onClick={event => setSettingsMenuProps([event.target.offsetLeft, event.target.offsetTop, !settingsMenuProps[2]])}
      >
       <a  
                
                className="button b-pink">
                  <MDBBtn style={{width:'150px'}}color="danger" >
                  <FiSettings/>&nbsp;
      Settings
      
                </MDBBtn>
                </a></span>
      {settingsMenuProps[2] &&
        <SettingsMenu
          posX={settingsMenuProps[0]-10}
          posY={settingsMenuProps[1]+35}
          todoState={props.todoState}
          setSettingsMenuProps={setSettingsMenuProps}
        />
      }

    </div>
  );
}

export default Navbar;
