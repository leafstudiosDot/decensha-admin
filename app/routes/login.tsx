import type { V2_MetaFunction } from "@remix-run/node";

import decensha_logo from "../assets/decensha-logo.svg";
import "../login.css"

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Login - Decensha Admin" },
        { name: "description", content: "Decensha Admin" },
    ];
};

export default function Index() {
    return (
        <div>
            <img className="login-headerlogo" alt="Decensha" src={decensha_logo} />
            <div className="login-formcontainer">
                <br />
                <br />
                <h3>Login with your admin credentials provided from your server</h3>
                <br />
                <span>
                    <label>Username</label>
                    <br />
                    <input className="login-input" type="text" placeholder="Username" />
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input className="login-input" type="password" placeholder="Password" />
                    <br />
                    <br />
                    <div className="login-inputbtn">Login</div>
                </span>
            </div>
        </div>
    );
}