import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../UI/Button/Button";
import { AppContext } from "../../context/AppContext";
import HumComp from "../HumbergerComponent/HumComp";
import CustomLogIn from "../LogInComponrnt/LogIn";
import DeskNav from "./DeskNav";

function Navbar() {

    return (
        <div>
            <DeskNav />

            <HumComp />

            <CustomLogIn />
        </div>
    );
}

export default Navbar;
