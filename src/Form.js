import React, { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState({ firstname: "", lastname: "" });
  const [data, setData] = useState({ firstname: "", lastname: "" });
  //creating a function to get the onChange values from inputs elements

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  function onSubmit(event) {
    event.preventDefault();
    setData(values);
  }

  return (
    <>
      <h2
        style={{
          padding: "10px 10px",
          display: "flex",
          background: "black",
          color: "white",
          justifyContent: "center",
        }}
      >
        Prescription Refill Form
      </h2>
      <form
        style={{
          border: "3px solid green",
          padding: "20px",
          borderRadius: "15px",
          background: "orange",
          width: "33%",
          margin: "auto",
        }}
        onSubmit={onSubmit}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label
            style={{
              marginRight: "22px",
              fontSize: "22px",
            }}
            htmlFor="firstName"
          >
            First Name :-
          </label>
          <input
            style={{ borderRadius: "10px", width: "200px" }}
            onChange={onChange}
            type="text"
            id="firstName"
            name="firstname"
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <label
            style={{
              marginRight: "22px",
              fontSize: "22px",          
            }}
            htmlFor="lastName"
          >
            Last Name :-
          </label>
          <br />
          <input
            style={{ borderRadius: "10px", width: "200px" }}
            onChange={onChange}
            type="text"
            id="lastName"
            name="lastname"
          />
          <br />
        </div>

        <div>
            <label style={{}}
             htmlFor="Age">Age:- </label>
             
            <input style={{ borderRadius: "10px", width: "50px",marginTop:"30px",border:"yellow"}} onChange={onChange} type='text' id='Age' name='Age'></input>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: "15px",
              cursor: "pointer",
              background: "black",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <span style={{ fontSize: "25px",color:"darkviolet"}}>First Name is ={data.firstname}</span>
      <br />
      <span style={{ fontSize: "25px",color:"greenyellow" }}>Last Name is ={data.lastname}</span>
      <br />
      <span style={{ fontSize: "25px",color:"firebrick" }}> Age :- {data.Age}</span>
    </>
  );
};