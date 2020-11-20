import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import {todos} from './todos.json';



class Dashboard extends Component {
    constructor(props) {
    super(props);
    this.state = {
                 view: "overview",
                 username: "",
                 usertitle: "",
               
                };
                this.setView = this.setView.bind(this);
                this.currentView = this.currentView.bind(this);
                this.profile = this.profile.bind(this);

            }
        
            setView(view) {
                this.setState({ view: view });
              
            }
                currentView(view) {
                    this.setState({ view: view });
                }
                    profile(e) {
                        e.preventDefault();
                        this.setState({
                          check: "profile",
                        });
                      }
                   
            
        
            render() {
                switch(this.state.view) {
                    case "overview":
                        return (
                        <div id="dashboard">
                            <Sidebar setView={this.setView} />
                            <Overview />
                        </div>
                    );
                    case "schedule":
                    return (
                        <div id="dashboard">
                            <Sidebar setView={this.setView} />
                            <ScheduleView />
                        </div>
                    );
                    case "performance":
                    return (
                        <div id="dashboard">
                            <Sidebar setView={this.setView} />
                            <PerformanceView />
                        </div>
                    );
                case "administrator":
                    return (
                        <div id="dashboard">
                            <Sidebar setView={this.setView} />
                            <AdministratorView />
                        </div>
                    );
                }
            }
        }
        
        class Sidebar extends React.Component {
            constructor(props) {
                super(props);
            }
            setView(view) {
                this.props.setView(view);
                console.log("level 2 " + view);
            }
            render() {
                return (
                    <div className="sidebar-menu">
                        <UserProfileView  />
                        <SidebarMenu
                            item1={"Add Client"}
                            item2={"Add Employee"}
                            item3={"Add tasks"}
                            item4={"Calendar"}
                            setView={this.props.setView}
                        />
                        <div>
                        <button onClick={()=>{window.location.reload()}}><a>LOGOUT</a></button>
                        </div>
                    </div>
                );
            }
        }
        
        class UserProfileView extends React.Component {
            constructor(props) {
                super(props);
            }
        
            render() {
                return (
                    <div className="user-profile">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2wn18dnC8OmX7Qx49epjgoHREUBHEviB10griBGemOmkYQoK5g"
                            id="profile-pic"
                           
                        />
                        <h3 id="display-name">{this.props.username}</h3>
                        <p className="subtitle">{this.props.usertitle}</p>
                    </div>
                );
            }
        }
        
        class SidebarMenu extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    overview: "active-item",
                    schedule: "inactive-item",
                    performance: "inactive-item",
                    administrator: "inactive-item"
                };
                this.setBtnAndView = this.setBtnAndView.bind(this);
            }
        
            setBtnAndView(view) {
                this.props.setView(view);
                if (view === "overview") {
                    this.setState({
                        overview: "active-item",
                        schedule: "inactive-item",
                        performance: "inactive-item",
                        administrator: "inactive-item"
                    });
                } else if (view === "schedule") {
                    this.setState({
                        overview: "inactive-item",
                        schedule: "active-item",
                        performance: "inactive-item",
                        administrator: "inactive-item"
                    });
                } else if (view === "performance") {
                    this.setState({
                        overview: "inactive-item",
                        schedule: "inactive-item",
                        performance: "active-item",
                        administrator: "inactive-item"
                    });
                } else if (view === "administrator") {
                    this.setState({
                        overview: "inactive-item",
                        schedule: "inactive-item",
                        performance: "inactive-item",
                        administrator: "active-item"
                    });
                }
            }
        
            render() {
                return (
                    <div className="menu-items">
                        <a
                            className={this.state.overview}
                            href="#"
                            onClick={() => this.setBtnAndView("overview")}
                        >
                            {this.props.item1}
                        </a>
                        <a
                            className={this.state.schedule}
                            href="#"
                            onClick={() => this.setBtnAndView("schedule")}
                        >
                            {this.props.item2}
                        </a>
                        <a
                            className={this.state.performance}
                            href="#"
                            onClick={() => this.setBtnAndView("performance")}
                        >
                            {this.props.item3}
                        </a>
                        <a
                            className={this.state.administrator}
                            href="#"
                            onClick={() => this.setBtnAndView("administrator")}
                        >
                            {this.props.item4}
                        </a>
                    </div>
                );
            }
        }
        
        class Overview extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div className="dash-view">
                        <center>
                            <form>
                        <h2 className="view-heading">Add Client</h2><br></br>
                        <input type="text" placeholder="FirstName" required/><br></br><br></br>
                        <input type="text" placeholder="LastName" required/><br></br><br></br>
                        <input type="text" placeholder="email" required/><br></br><br></br>
                        <input type="password" placeholder="Password" required/><br></br><br></br>
                        <input type="text" placeholder="PhoneNumber" required/><br></br><br></br>

                        <input type="button" value="Add"/>
                        </form>
                        </center>
                        <DashboardCard />
                    </div>
                );
            }
        }
        
        class ScheduleView extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div className="dash-view">
                        <center>
                        <h2 className="view-heading">Add Employee</h2><br></br>
                        <input type="text" placeholder="FirstName" required/><br></br><br></br>
                        <input type="text" placeholder="LastName" required/><br></br><br></br>
                        <input type="text" placeholder="email" required/><br></br><br></br>
                        <input type="password" placeholder="Password" required/><br></br><br></br>
                        <input type="text" placeholder="PhoneNumber" required/><br></br><br></br>

                        <input type="button" value="Add"/>
                        </center>
                        <DashboardCard />
                    </div>
                );
            }
        }
        
        class PerformanceView extends React.Component {
            constructor (props) {
                super(props);
                this.state = {
                  title: '',
                  responsible: '',
                  description: '',
                  priority: 'low',
                  todos
                };
                this.handleInputChange = this.handleInputChange.bind(this);
                this.handleSubmit= this. handleSubmit.bind(this);
                this.handleAddTodo = this.handleAddTodo.bind(this);

              }
            
              handleSubmit(e) {
                e.preventDefault();
                console.log('Sending the data..');
              }
                handleAddTodo(todo){
                    this.setState({
                      todos: [...this.state.todos, todo]
               
              });
                } 
        
                removeTodo(index){
                    if(window.confirm('Are you sure you want to delete it?')){
                      this.setState({
                        todos: this.state.todos.filter((e,i) => {
                          return i !== index
                        })
                      })
                    }
                  }
              handleInputChange(e) {
                const { value, name } = e.target;
                this.setState({
                  [name] : value
                })
                console.log(this.state);
                };
              // }
            
              render() {
                const todos = this.state.todos.map((todo,i) => {
                    return(
                      <div className="col-md-4" key={i}>
                        <div className="card mt-4">
                          <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="barge badge-pill badge-danger ml-2">
                              {todo.priority}
                            </span>
                          </div>
                          <div className="card-body">
                            <p>{todo.description}</p>
                            <p>{todo.responsible}</p>
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  
                return (
                  <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          // value={this.state.title}
                          onChange={this.handleInputChange}
                          placeholder="Title"
                          />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="responsible"
                          className="form-control"
                          // value={this.state.responsible}
                          onChange={this.handleInputChange}
                          placeholder="Responsible"
                          />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="description"
                          className="form-control"
                          // value={this.state.description}
                          onChange={this.handleInputChange}
                          placeholder="Description"
                          />
                      </div>
                      <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            // value={this.state.priority}
                            onChange={this.handleInputChange}
                          >
                          <option>low</option>
                          <option>medium</option>
                          <option>high</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </form>
                    <DashboardCard />

                  </div>
                          
                );
            
                } 
        }
        

        
        class AdministratorView extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div className="dash-view">
                        <h2 className="view-heading">Calendar</h2>
                        <DashboardCard />
                    </div>
                );
            }
        }
        var currentView = "overview";


        class DashboardCard extends React.Component {
            constructor(props) {
                super(props);
            }
            
            render() {
                switch(currentView) {
                    case "overview":
                return( 
                <div className="dash-card"> 
                    <OverviewCardContent />
                </div>);
                        case "schedule":
                return( 
                <div className="dash-card"> 
                    <ScheduleCardContent />
                </div>);
                case "performance":
                return( 
                <div className="dash-card"> 
                    <PerformanceCardContent />
                </div>);
                        case "administrator":
                return( 
                <div className="dash-card"> 
                    <AdministratorCardContent />
                </div>);
                }
                }
            }

        const OverviewCardContent = () => (
            <div>
            </div>
        );
        const ScheduleCardContent = () => (
            <div>
                </div>
            
        );
        const PerformanceCardContent = () => (
            <div>
               
               
                          
                
            </div>
        );
        const AdministratorCardContent = () => (
            <div>
            </div>
        );
        
        
export default  Dashboard;