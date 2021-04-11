import React from 'react'
import UniversityRow from "../university-row/university-row";
import univService from "../../services/university-service";

export default class UniversityTable
    extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props)
        this.state = {
            univName: "",
            country: "",
            universities: []
        }
    }

    handleChange = (event) => {
        //event.preventDefault();
        this.setState({ [event.target.name]: event.target.value,
        });
    }
    searchUniversity = (event) => {
        //console.log(this.state.univName)
        //console.log(this.state.country)
        let name = this.state.univName
        let country = this.state.country
        if (name === "") alert("Please enter the University Name")
        else if(country === "") alert("Please enter the country")
        else {
            //console.log(name)
            univService.findAllUniversitiesByName(name, country)
                .then(universities => this.setState(
                    (prevState) => ({
                        ...prevState,
                        universities: universities
                    })))
            //console.log(this.state.universities)
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-5">
                        <input className="form-control" onChange={this.handleChange}
                               placeholder="Search University with name" name="univName"/>
                    </div>
                    <div className="col-5">
                        <input className="form-control" onChange={this.handleChange}
                               placeholder="Enter Country" name="country"/>
                    </div>
                    <div className="col-2">
                        <i onClick={this.searchUniversity} className="fa fa-search fa-2x"></i>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>University Name</td>
                        <td className="d-none d-sm-table-cell">Country</td>
                        <td className="d-none d-md-table-cell">Country Code</td>
                    </tr>
                    {
                        this.state.universities.map((university, ndx) =>
                            <UniversityRow
                                key={ndx}
                                university={university}
                                name={university.name}
                                country={university.country}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}