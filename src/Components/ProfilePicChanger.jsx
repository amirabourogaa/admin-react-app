import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
 
 export default class ProfilePicChanger extends Component {
     constructor(props){
         super(props);
         this.state = {
            visible: false,
            imagesArray : [props.pic1 , props.pic2]
         }

        
     }
   
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
     render() {
         const imageMapper = this.state.imagesArray.map((image , array)=>{
             return (
                 <img src={image}
                 onClick={() => this.props.handleImageChange(image)}
                 />
             )
         })
         return (
             <div>
              
                
                 <div>
                 <Button type="primary" onClick={this.showModal}>
          Change your photo
        </Button>
        <Modal
          title="Profile"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imageMapper}
        </Modal>{" "}
        </div>
             </div>
         )
     }
 }
 