import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { array } from "prop-types";


export const Demo = () => {
	const { store, actions } = useContext(Context);
	
	function eliminar(indexDelete) {
		console.log("eliminó" + indexDelete);
		console.log(store.contacts.filter((item,index) => index != indexDelete )
		);
	}
	
	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
						key={index}
						className="list-group-item d-flex justify-content-between">
							
						 <div style={{ display: "flex", alignItems: "center", gap: "30%" }}>
							<div >
								<img src="https://picsum.photos/100/100?grayscale" style={{ borderRadius: '50%' }} />
							</div>
							<div >
								<Link to={"/single/" + index}>
									<span>Link to: {item.title}</span>
								</Link>
							</div>
						</div>
						{item.Full_name}
						{item.email }
							
						<div style={{ display: "flex", alignItems: "center"}}>
							{/* <button className="fa-solid fa-pencil" onClick={editar} >
								Editar
							</button> */}
							<button className="btn btn-success" onClick={()=>actions.eliminar(item.id)} style={{ marginLeft: "30px"}}>
								Eliminar
							</button>
						</div>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
