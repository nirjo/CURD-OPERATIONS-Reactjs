import React, { useEffect, useState } from "react";
import "./styles.css";

import classes from "./Validate.module.css";
import axios from "axios";
import { baseURL } from "../_main/constants";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

console.log("baseURL", baseURL);

const  BioData =()=> {
  const [post, setPost] = useState("");
  const [update, setUpdate] = useState("");
  const [Values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    qualification: "",
    comments: "",
  });
 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const option = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    axios.post(baseURL, { option }).then((response) => {
      console.log("responsePOST", response);
      alert(" successfully created");
    });
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("response", response);
      setPost(response.data);
    });
  }, []);

  const Handledelete = (id) => {
    alert("delete_id", id);
    axios.delete(`${baseURL}/${id}`).then((response) => {
      console.log("response", response.data);
    });
    window.location.reload();
  };

  //  const HandleView = (id) => {
  //    axios.get(`${baseURL}/${id}`).then((response) => {
  //    });
  //  }
  const HandleUpdate = (id) => {
    console.log('edit_id', id)

    axios.get(`${baseURL}/${id}`).then((response) => {
      console.log("response", response.data);
      setUpdate(response.data)
      
      const {
        _id,
        zipCode,
        state,
        qualification,
        lastName,
        firstName,
        email,
        country,
        comments,
        city,
      } = response.data;
      setValues({
        zipCode,
        state,
        qualification,
        lastName,
        firstName,
        email,
        country,
        comments,
        city,
      });
    });
    const {
      _id,
      zipCode,
      state,
      qualification,
      lastName,
      firstName,
      email,
      country,
      comments,
      city,
    } = update;

    const request = {
      _id,
      zipCode,
      state,
      qualification,
      lastName,
      firstName,
      email,
      country,
      comments,
      city,
    };
    setPost(request);
  };

  return (
    <div className="Card">
    <div className="form-Container">
      <div className="form-Content">
        <div className="main-Container">
          <div className="first-Container">
            <legend className="text-center">BioData</legend>

            <div >
              <Form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <div className="mb-3">
                    <div style={{ display: "flex" }}>
                      <div class="row">
                        <label
                          className={classes.formlables}
                          htmlFor="firstName"
                        >
                          First Name
                        </label>

                        <Form.Field className="col-12">
                          <input
                            maxLength={10}
                            placeholder="First Name"
                            className="form-control"
                            type="text"
                            {...register("firstName", { required: true })}
                          />
                        </Form.Field>
                        {errors.firstName && (
                          <p className={classes.error}>First Name Required</p>
                        )}
                      </div>
                      <div class="row" style={{ marginLeft: "1rem" }}>
                        <label
                          className={classes.formlables}
                          htmlFor="firstName"
                        >
                          Last Name
                        </label>

                        <Form.Field className="col-12">
                          <input
                            maxLength={10}
                            placeholder="Last Name"
                            className="form-control"
                            type="text"
                            {...register("lastName", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                        </Form.Field>
                        {errors.lastName && (
                          <p className={classes.error}>Last Name Required</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Form.Field>
                      <label className={classes.formlables}>Email</label>
                      <input
                        maxLength={50}
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                    </Form.Field>
                    {errors.email && (
                      <p className={classes.error}>Please check the Email</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <Form.Field>
                      <label className={classes.formlables}>
                        Mobile Number
                      </label>
                      <input
                        maxLength={12}
                        className="form-control"
                        placeholder="Mobile Number"
                        type="number"
                        {...register("phoneNumber", { required: true })}
                      />
                    </Form.Field>
                    {errors.phoneNumber && (
                      <p className={classes.error}>
                        Please check the Mobile Number
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <Form.Field>
                      <label className={classes.formlables}>Address</label>
                      <textarea
                        maxLength={200}
                        className="form-control"
                        placeholder="Address Line 1"
                        type="text"
                        {...register("address1", { required: true })}
                      />
                      {errors.address2 && (
                        <p className={classes.error}>Address Required</p>
                      )}

                      <div style={{ marginTop: "0.5rem" }}>
                        <textarea
                          className="form-control"
                          placeholder="Address Line 2"
                          type="text"
                          maxLength={200}
                          {...register("address2", { required: true })}
                        />
                      </div>
                    </Form.Field>
                    {/* {errors.address2 && <p className={classes.error}>Address Required</p>} */}
                  </div>
                  <div className="mb-3">
                    <div style={{ display: "flex" }}>
                      <div class="row">
                        <label
                          className={classes.formlables}
                          htmlFor="firstName"
                        >
                          City
                        </label>

                        <Form.Field className="col-12">
                          <input
                            maxLength={20}
                            placeholder="City Name"
                            className="form-control"
                            type="text"
                            {...register("city", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                        </Form.Field>
                        {errors.city && (
                          <p className={classes.error}>City Name Required</p>
                        )}
                      </div>
                      <div class="row" style={{ marginLeft: "1rem" }}>
                        <label
                          className={classes.formlables}
                          htmlFor="firstName"
                        >
                          State{" "}
                        </label>

                        <Form.Field className="col-12">
                          <input
                            maxLength={20}
                            placeholder="State Name"
                            className="form-control"
                            type="text"
                            {...register("state", {
                              required: true,
                              maxLength: 10,
                            })}
                          />
                        </Form.Field>
                        {errors.state && (
                          <p className={classes.error}>State Name Required</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div style={{ display: "flex" }}>
                      <div class="row">
                        <label className={classes.formlables} htmlFor="zipcode">
                          Zip Code
                        </label>

                        <Form.Field className="col-12">
                          <input
                            maxLength={10}
                            placeholder="Zip Code"
                            className="form-control"
                            type="number"
                            {...register("zipcode", { required: true })}
                          />
                        </Form.Field>
                        {errors.zipcode && (
                          <p className={classes.error}>Zipcode Required</p>
                        )}
                      </div>
                      <div class="row" style={{ marginLeft: "1rem" }}>
                        <label
                          className={classes.formlables}
                          htmlFor="firstName"
                        >
                          Country
                        </label>
                        <Form.Field className="col-12">
                          <input
                            maxLength={20}
                            placeholder="Country"
                            className="form-control"
                            type="text"
                            {...register("country", { required: true })}
                          />
                        </Form.Field>
                        {errors.country && (
                          <p className={classes.error}>Country Name Required</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Form.Field>
                    <label>Write your qualification</label>
                    <textarea
                      maxLength={200}
                      className="form-control"
                      placeholder="Qualification"
                      type="text"
                      {...register("qualification", { required: true })}
                    />
                  </Form.Field>
                  {errors.qualification && (
                    <p className={classes.error}>Qualification Required</p>
                  )}
                  <div className="mb-3">
                    <Form.Field>
                      <label>Comment</label>
                      <textarea
                        maxLength={20}
                        className="form-control"
                        placeholder="Comment ..."
                        type="textarea"
                        {...register("comments", { required: true })}
                      />
                    </Form.Field>
                    {errors.comments && (
                      <p className={classes.error}>Comments Required</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="d-grid gap-2 col-12">
                      <Button
                        className={classes.subbutton}
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
        <div
          className="table-Container"
          style={{
            backgroundColor: "#f3f3f3",
            textAlign: "center",
          }}
        >
          <div>
            <table className="table table-striped" style={{ margin: "1rem" }}>
              <thead className="">
                <tr className="bg-dark text-white">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {post.length > 0 &&
                  post.map((lists, index) => {
                    let id = lists._id;
                    // console.log('form_id',id)
                    return (
                      <tr key={id}>
                        <td>{lists.firstName}</td>
                        <td>{lists.email}</td>
                        <td>{lists.phoneNumber}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => HandleUpdate(id)}
                          >
                            Edit
                          </button>
                      
                          &nbsp;
                        </td>
                        <td>
                          <Link to={`/view/${id}`} state={id}>
                            <button className="btn btn-secondary">View</button>
                          </Link>
                          &nbsp;
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => Handledelete(lists.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BioData;
