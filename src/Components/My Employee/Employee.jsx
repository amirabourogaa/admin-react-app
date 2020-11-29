import React, { Component } from 'react';

      import Wrapper from "./Wrapper/index.jsx";
      import Table from "./Table/index.jsx";
      import TableHead from "./TableHead//index.jsx";
      import TableBody from "./TableBody/index.jsx";
      import TableRow from "./TableRow/index.jsx";
      import TableRowHeader from "./TableRowHeader/index.jsx";
      import Row from "./Row/index.jsx";
      import ResetButton from "./ResetButton/index.jsx";
      import SearchForm from "./SearchForm/index.jsx";
      import employees from "./employees.json";
      import './App.css';
      
      //store default state so that each filter uses the entire employees object
      const defaultState = { employees };
      
      //I used Object.keys so that in the event that employees.json changes the data will automatically update
      let employeesKeys = Object.keys(defaultState.employees[0]);
      employeesKeys = employeesKeys
        .join(",")
        .replace(/_/gi, " ")
        .split(",")
        .map(s => s.substring(0, 1)
          .toUpperCase() + s.substring(1));
      
      //create an array of all departments and roles to use for generating the items in the dropdown buttons
      let departments = defaultState.employees.map(employee => employee.department);
      departments = departments.filter((item, index) => departments.indexOf(item) === index);
      
      let roles = defaultState.employees.map(employee => employee.role);
      roles = roles.filter((item, index) => roles.indexOf(item) === index);
      
      
      class Employee extends React.Component {
      
        state = {
          employees: employees,
          firstName: "",
          lastName: ""
        };
      
        //I used switch/case because I couldn't set the criteria (a.first_name, etc.) using the event target. This approach is something of a weakness because any changes to employeesKeys will have to be manually updated here. However, this is still preferrable to creating 6 individual functions and passing each prop to unique dropdown item buttons
        sortCriteria = e => {
          const criteria = e.target.name;
          let sortArr;
          switch (criteria) {
            case "First name":
              sortArr = this.state.employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
              break;
            case "Last name":
              sortArr = this.state.employees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1);
              break;
            case "Department":
              sortArr = this.state.employees.sort((a, b) => (a.department > b.department) ? 1 : -1);
              break;
            case "Role":
              sortArr = this.state.employees.sort((a, b) => (a.role > b.role) ? 1 : -1);
              break;
            case "Email":
              sortArr = this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1);
              break;
            default:
              sortArr = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
              break;
          }
          this.setState({ employees: sortArr });
        }
      
        //filter by department
        filterDepartment = e => {
          const department = e.target.name;
          const deptArr = defaultState.employees.filter(employee => employee.department === department);
          this.setState({ employees: deptArr });
        }
      
        //filter by role
        filterRole = e => {
          const role = e.target.name;
          let roleArr = defaultState.employees.filter(employee => employee.role === role);
          this.setState({ employees: roleArr });
        }
      
        //reset table to default state ordered by id
        resetTable = () => {
          let resetArr = defaultState.employees.sort((a, b) => (a.id > b.id) ? 1 : -1);
          this.setState({ employees: resetArr });
        }
      
        //form logic. Because I have columns for both First name and Last name, I had to create two sets of functions to find employees using each name
        firstInputChange = e => {
          let value = e.target.value;
      
          this.setState({
            firstName: value
          });
        }
      
        lastInputChange = e => {
          let value = e.target.value;
      
          this.setState({
            lastName: value
          });
        }
      
        searchFirstName = event => {
          event.preventDefault();
          if ((this.state.firstName) === "") {
            this.searchLastName(event);
            return;
          }
          let foundEmployees;
          if (defaultState.employees.map(employee => employee.first_name).includes(this.state.firstName)) {
            foundEmployees = defaultState.employees.filter(employee => employee.first_name === this.state.firstName);
            this.setState({ employees: foundEmployees })
          } else {
            alert(`"${this.state.firstName}" is not in this database.`)
          }
          this.setState({ firstName: "" });
        }
      
        searchLastName = event => {
          event.preventDefault();
          let foundEmployees;
          if (defaultState.employees.map(employee => employee.last_name).includes(this.state.lastName)) {
            foundEmployees = defaultState.employees.filter(employee => employee.last_name === this.state.lastName);
            this.setState({ employees: foundEmployees })

          } else {
            alert(`"${this.state.lastName}" is not in this database.`)
          }
          
          this.setState({ lastName: "" });
        }
      
        render() {
          return (
            <>
             <br></br><br></br><br></br><br></br>
              <Wrapper>
                <Row>
                  
                 <br></br> <br></br><br></br><br></br>
                  <ResetButton style={{backgroundColor:'blue'}} resetTable={this.resetTable}>
                  Reset Table
                </ResetButton>
                </Row>
                <Row>
                  <SearchForm
                    firstName={this.state.firstName}
                    firstInputChange={this.firstInputChange}
                    searchFirstName={this.searchFirstName}
                    lastName={this.state.lastName}
                    lastInputChange={this.lastInputChange}
                    searchLastName={this.searchLastName}
                  />
                </Row> <br></br><br></br><br></br>
                <Table>
                  <TableHead>
                    {employeesKeys.map(key => (
                      <TableRowHeader
                        key={key}
                        name={key}
                      />
                    ))}
                  </TableHead>
                  <TableBody>
                    {this.state.employees.map(employee => (
                      <TableRow
                      style={{width:'100px'}}
                        key={employee.id}
                        id={employee.id}
                        first_name={employee.first_name}
                        last_name={employee.last_name}
                        department={employee.department}
                        role={employee.role}
                        email={employee.email}
                        office_ext={employee.office_ext}
                      />
                    ))}
                  </TableBody>
                </Table>
              </Wrapper>
            </>
          )
        }
      }
      
    
  export default Employee;