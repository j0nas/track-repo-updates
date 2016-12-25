import React from "react";
import CustomButton from "../../components/input/CustomButton";

const buttonClicked = () =>
    console.log("Hello, world!");

export default () =>
    <div>
        Hello, world!
        <br/>
        <CustomButton text="Click me!" onClick={buttonClicked} />
    </div>;