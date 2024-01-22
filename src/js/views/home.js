import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	return (
		<form className="row" style={{marginLeft:"250px", marginRight:"250px"}}>
			<h1 style={{textAlign:"center"}}>Add a new contact</h1>
			<div className="form-group">
				<label for="exampleInputEmail1"><strong>Full Name</strong></label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>					
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1"><strong>Email</strong></label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Email"/>
			</div>
			<div className="form-group">
				<label for="exampleInputEmail1"><strong>Phone</strong></label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone"/>					
			</div>
			<div className="form-group, ">
				<label for="exampleInputPassword1"><strong>Address</strong></label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Address"/>
			</div>
			<br />
			<button type="submit" className="btn btn-primary btn-lg" style={{marginTop:"20px"}}>Save</button>
			<br />
			<Link to={"/demo"}>
				<span><strong>Or get back to contacts</strong></span>
			</Link>
		</form>
	)
};
