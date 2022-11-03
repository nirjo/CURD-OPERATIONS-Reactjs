import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";
import { baseURL } from "../_main/constants";


const ViewCard = (props) => {

  const [view, setView] = useState("");
  console.log('view',view);

  const id = props.id;
  console.log('card_id', id)


  useEffect(() => {
    axios.get(`${baseURL}/${id}`).then((response) => {
      console.log("view_response", response.data);
      setView(response.data);
    });
  }, [])

 



  return (
    <div >
        <div className="card-header">
          <h4> Users Biodata info</h4>
        </div>
        <div className="card-body ">
          <table className="table table-dark text-white">
            <tbody>
              <tr>
                <td>FirstName</td>
                <td>{view.firstName}</td>
              </tr>
              <tr>
                <td>LastName</td>
                <td>{view.lastName}</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>{view.email}</td>
              </tr>
              <tr>
                <td>MobileNumber</td>
                <td>{view.phoneNumber}</td>
              </tr>
              <tr>
                <td>Address Line 1</td>
                <td>{view.address1}</td>
              </tr>
              <tr>
                <td>Address Line 2</td>
                <td>{view.address2}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{view.city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{view.state}</td>
              </tr>
              <tr>
                <td>Zip-Code</td>
                <td>{view.zipCode}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{view.country}</td>
              </tr><tr>
                <td>Qualification</td>
                <td>{view.qualification}</td>
              </tr><tr>
                <td>Comments</td>
                <td>{view.comments}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Link className="" to={`/`}>
            <button className="btn btn-primary ">Back to Table</button>
          </Link>
        </div>
      </div>
  );
};

ViewCard.propTypes = {
  id: PropTypes.number,
};

export default ViewCard;
