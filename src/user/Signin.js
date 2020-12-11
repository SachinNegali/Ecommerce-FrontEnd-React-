import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Base from '../core/Base';
import { signin, isAutheticated, authenticate } from '../auth/helper';


const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    });

    const {email, password, error, loading, didRedirect} = values
    const {user} = isAutheticated();

    const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value})
    } 
    
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error:data.error, loading: false})
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        didRedirect: true
                    })
                })
            }
        })
        .catch(console.log("Login Failed"));
    }

    const performRedirect = () => {
        if (didRedirect) {
            if ( user && user.role == 1) {
                return <Redirect to="/admin/dashboard"/>
            } else {
                return <Redirect to="/"/>
                
            }
        }
        if (isAutheticated()) {
            return <Redirect to="/"/>
        }
    }

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                <h2>loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div>
            <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
            </div>
            </div>
            </div>
        </div>
        );
    }

    const signInForm = () => {
        return(
        <div className="row">
                <h5 className="text-dark offset-sm-2">please login with email: <span className="font-weight-bold"> admin@email.com </span> password: <span className="font-weight-bold">admin@123</span> to perform CRUD operations</h5>

            <div className="col-md-4 offset-sm-4 text-left col-lg-4">

                <form >
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input onChange={handleChange("email")} className="form-control" type="email" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input onChange={handleChange("password")} className="form-control" type="password" value={password}/>
                    </div>
                    <button onClick={onSubmit} className="btn btn-dark rounded btn-block">Submit</button>
                </form>
            <div className = "jumbotron bg-light text-light text-center"></div>
            </div>
        </div>
        );
    }
    return(
        <Base title="Sign In Page" description="Input SignIn Details">
        {errorMessage()}
        {loadingMessage()}
        {signInForm()}
        {performRedirect()}
        </Base>
    );
}
export default Signin;
