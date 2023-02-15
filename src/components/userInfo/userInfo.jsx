import React from "react";
import PersonalInfo from "./personalInfo/personalInfo";
import Time from "./time/time";

import '../userInfo/userInfo.css'

const UserInfo = () => {
	return (
		<div className="userInfo">
			<PersonalInfo />
            <Time />
		</div>
	);
};

export default UserInfo;
