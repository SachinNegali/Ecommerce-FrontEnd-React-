import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Base from '../core/Base';
import { signup } from '../auth/helper';

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const {name, email, password, error, success} =values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value});
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false});
        signup({name, email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error:data.error, success: false});
            } else {
                setValues({
                ...values, 
                name: "",
                email: "",
                password: "",
                error: "",
                success: true
            });
            }
        })
        .catch(console.log("error in signup"));
    };

    const signUpForm = () => {
        return(
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-dark"> Name</label>
                        <input onChange={handleChange("name")} className="form-control" type="text" value={name}/>
                    </div>
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
                </div>
            </div>
        );
    }

    const succesMessage = () => {
        return(
            <div className="row">
                <div className="col-md-4 offset-sm-4 text-left">
                <div>
                    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
                    Account created succesfully. please{" "}
                    <Link to="/signin">login here</Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return(
        <div className="row">
            <div className="col-md-4 offset-sm-4 text-left">
            <div>
            <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
            </div>
            </div>
            </div>
        </div>
        );
    }

    return(
        <Base title="Sign Up Page" description="Input your Details">
        {succesMessage()}
        {errorMessage()}
        {signUpForm()}
        </Base>
    );
}

export default Signup;