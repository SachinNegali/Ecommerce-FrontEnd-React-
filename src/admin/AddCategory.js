import React, {useState} from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import { createCategory } from './helper/adminapicall';

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    

    const {user, token} = isAutheticated();

    const goBackBtn = () => {
        return(
            <div className="mt-5 px-4">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
        </div>
        )
    }

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false)

        //firing backend request
        createCategory(user._id , token, { name })
        .then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            }
        });
        
    };

    const succesMessage = () => {
        if (success) {
            return <h4 className="text-success px-4">Category created successflly</h4>
        }
    }

    const warningMessage = () => {
        if (error) {
            return <h4 className="text-danger px-4">failed to create category</h4>
        }
    }


    const categoryForm = () => {
        return(
        <form >
        <div className="form-group px-4">
        <p>Enter Category</p>
        <input type="text"
        className="form-control my-3"
        onChange={handleChange}
        value={name}
        autoFocus
        required
        placeholder="for ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">create category</button>
        </div>
        </form>
        )
    }

    return(
    <Base title="Create Category" description="Add new category for new products" className="container col-6 bg-info p-4  ">
        <div className="row bg-white rounded ">
            <div className="col-mid-8 offset-mid-2 centre">
                {succesMessage()}
                {warningMessage()}
                {categoryForm()}
                {goBackBtn()}
            </div>
        </div>
    </Base>
    )
}

export default AddCategory;