import React, { Component } from 'react';
import Header from '../Header';
import Form from '../Form';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import craig from '../images/craig-stevens.png';
import gavin from '../images/gavin-phillips.png';
import magenta from '../images/magenta-adams.png';
import dean from '../images/dean-yates.png';

class Home extends Component {
  employeeList = [
    {
      "id": 1,
      "image": craig,
      "name": "Ahmed Kortas",
      "phone": "20 987 654",
      "occupation": "Sales",
      "department": "Marketing"
    },
    {
      "id": 2,
      "image": gavin,
      "name": "Issam Mansour",
      "phone": "20 654 321",
      "occupation": "Workplace ",
      "department": "HIR"
    },
    {
      "id": 3,
      "image": magenta,
      "name": "Amira Mira",
      "phone": "20202020",
      "occupation": "Project Manager",
      "department": "Operations"
    },
    {
      "id": 4,
      "image": dean,
      "name": "Nahedh Ben Abbes",
      "phone": "20 654 456",
      "occupation": "Information",
      "department": "ICT"
    }
 
  ];

  state = {
    filterValue: "",
    employees: this.employeeList,
    sortIcon: "fas fa-sort"
  };

  handleSort = e => {
    const sortBy = e.target.getAttribute("name");
    let sortIcon = e.target.getAttribute("class");
    const employees = this.sortEmployees(this.state.employees, sortBy, sortIcon);
    sortIcon = this.switchSortIcon(sortIcon);
    this.setState({ employees, sortIcon });
  };

  sortEmployees = (employeeList, sortByKey, sortIcon) => {
    const sortedEmployeeList = employeeList.sort((a, b) => {
      let itemA = a[sortByKey].toLowerCase();
      let itemB = b[sortByKey].toLowerCase();
      if (sortIcon === "fas fa-sort" || sortIcon === "fas fa-sort-down") {
        return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
      } else {
        return (itemA < itemB) ? 1 : (itemA > itemB) ? -1 : 0;
      }
    });
    return sortedEmployeeList;
  };
  
  switchSortIcon = sortIcon => {
    switch (sortIcon) {
      case "fas fa-sort":
        return sortIcon = "fas fa-sort-up";
      case "fas fa-sort-up":
        return sortIcon = "fas fa-sort-down";
      case "fas fa-sort-down":
        return sortIcon = "fas fa-sort-up";
      default:
        return sortIcon = "fas fa-sort";
    }
  };

  handleInputChange = ({ target }) => {
    const filterBy = "name";
    const value = target.value;
    this.setState({ filterValue: value });
    this.filterEmployees(this.employeeList, filterBy, value);
  };

  filterEmployees = (employeeList, filterByKey, value) => {
    const filteredEmployeeList = employeeList.filter(employee => {
      return employee[filterByKey].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees: filteredEmployeeList });
  };

  render() {
    return (
      <div className="main">
        <Header />
        <Form 
          filterValue={this.state.filterValue}
          handleInputChange={this.handleInputChange}
        />
        <div className="table-responsive-md">
          <table className="table table-dark">
            <TableHead 
              handleSort={this.handleSort}
              sortIcon={this.state.sortIcon}
            />
            <TableBody 
              employees={this.state.employees}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default Home;