import React from 'react';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

    const {user: {name, email, role}} = isAutheticated();

const adminLeftSide = () => {
    return(
        <div className="card mb-4">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
        <li className="list-group-item">
        <Link to="/admin/create/category" className="nav-link text-dark"> Create categories</Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/categories" className="nav-link text-dark"> Manage categories</Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/create/product" className="nav-link text-dark"> Create Product</Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/products" className="nav-link text-dark"> Manage Products</Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/orders" className="nav-link text-dark"> Manage orders</Link>
        </li>
        </ul>
        </div>
    );
}

const adminRightSide = () => {
    return(
    <div className="card mb-4">
    <h4 className="card-header bg-dark text-white"> Admin Information</h4>
    <ul className="list-group">
        <li className="list-group-item">
            <span className="badge badge-dark mr-2">Name:</span>{name}
        </li>
        <li className="list-group-item">
            <span className="badge badge-dark mr-2">email:</span>{email}
        </li>
        <li className="list-group-item">
            <span className="badge badge-dark px-2 py-1 "><h6>Admin Area</h6></span>
          </li>
    </ul>
    </div>
    )
}


    return(
        <Base title="Admin Area" 
        description="Manage your products here!" 
        className="container bg-light p-4 mb-4"
        >
        <div className="container">
        <div className="row">
            
            <div className="col-3">
            {adminLeftSide()}    
            </div>
            <div className="col-6">
            {adminRightSide()}    
            </div>
        </div>
        </div>
        
        </Base>
        
    );
} 

export default AdminDashboard;