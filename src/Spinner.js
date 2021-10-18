import React,{fragment} from "react";
import { Fragment } from "react/cjs/react.production.min";
import spinner from "./spinner.gif";
const Spinner =()=>(
    <Fragment>
        <img
        src={spinner}
        alt="loading...."
        style={{width:"200px",margin:"auto",display:"block"}}
         />    
        </Fragment>
);
export default Spinner;