import React from "react";
import profilePic from "../../../images/marcaschwanden.png";

import "./personalInfo.css";

const PersonalInfo = () => {
	return (
		<div className="personal">
			<div className="personalInfo">
				<img src={profilePic} alt={profilePic} />
				<p>Report for</p>
				<h1>
					Marc
					<br />
					Aschwanden
				</h1>
			</div>
		</div>
	);
};

export default PersonalInfo;
