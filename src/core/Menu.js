import React, { Fragment } from 'react';
import {Link, withRouter} from "react-router-dom"
import { isAutheticated, signout } from '../auth/helper';


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#38cf6a"}
    }
    else 
    {
        return {color: "#FFFFFF"}
    }
}

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style = {currentTab(history, "/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav nav-tabs bg-dark">
                <Link style = {currentTab(history, "/cart")} className="nav-link" to="/cart">
                    Cart
                </Link>
            </li>
            {isAutheticated() && (
                <li className="nav nav-tabs bg-dark">
                <Link style = {currentTab(history, "/user/dashboard")} className="nav-link" to = "/user/dashboard">
                    U.Dashboard
                </Link>
            </li>
            )}
            
            {isAutheticated() && isAutheticated().user.role ===1 && (
                <li className="nav nav-tabs bg-dark">
                <Link style = {currentTab(history, "/admin/dashboard")} className="nav-link" to= "/admin/dashboard">
                    A.Dashboard
                </Link>
            </li>
            )}

            
            { !isAutheticated() && <Fragment>
                <li className="nav nav-tabs bg-dark">
                    <Link style = {currentTab(history, "/signup")} className="nav-link" to="/signup">
                        SignUp
                    </Link>
                </li>
                <li className="nav nav-tabs bg-dark">
                    <Link style = {currentTab(history, "/signin")} className="nav-link" to="/signin">
                        SignIn
                    </Link>
                </li>
                </Fragment>
                }

            <li>
            {isAutheticated() && (
                <li className="nav-item">
                    <span className="nav-link text-warning" onClick= {() => { signout( ()=> {
                        history.push("/");
                    });
                }}
                    >
                    signout 
                    </span>
                </li>
            )}
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);