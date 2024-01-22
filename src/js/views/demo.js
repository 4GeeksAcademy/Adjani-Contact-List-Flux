import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
						key={index}
						className="list-group-item d-flex justify-content-between"
						style={{ background: item.background }}>
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
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
						<div style={{ display: "flex", alignItems: "center"}}>
							<button className="fa-solid fa-pencil" onClick={() => actions.changeColor(index, "orange")} >
								Editar
							</button>
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")} style={{ marginLeft: "30px"}}>
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
