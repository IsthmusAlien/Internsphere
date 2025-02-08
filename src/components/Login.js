import React from "react";
import "./css/Login.css";
import {useNavigate, useLocation} from 'react-router-dom'

function Login() {
    const location = useLocation();
    const { user_type } = location.state || {};

    return (
        <div className="main-login">
            
            <div className="bgimg-login">

                <div className="form-login">
                    
                </div>
            </div>
        </div>
    );
}

export default Login;