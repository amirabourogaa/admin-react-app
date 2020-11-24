import React from "react";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <form className="form form-control-lg">
                <input
                    className="rounded-left"
                    value={props.firstName}
                    name="firstName"
                    onChange={props.firstInputChange}
                    type="text"
                    placeholder="Search by First name"
                />
                <button className="submit-button rounded-right" onClick={props.searchFirstName}>Submit</button>
                <input
                    className="rounded-left"
                    value={props.lastName}
                    name="lastName"
                    onChange={props.lastInputChange}
                    type="text"
                    placeholder="Search by Last name"
                />
                <button type="submit" className="submit-button rounded-right" id="right-button" onClick={props.searchLastName}>Submit</button>
            </form>
        </div>)
}

export default SearchForm; 