import React from 'react';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

    const {user: {name, email, role}} = isAutheticated();

const adminLeftSide = () => {
    return(
        <div className="card mb-4">
        <h4 className="card-header bg-dark text-center text-white">Admin Navigation</h4>
        <ul className="list-group">
        <li className="list-group-item">
        <Link to="/admin/create/category" className="nav-link text-center text-dark"><h5> Create categories</h5></Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/categories" className="nav-link text-center text-dark"> <h5>Manage categories</h5></Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/create/product" className="nav-link text-center text-dark"> <h5>Create Product</h5></Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/products" className="nav-link text-center text-dark"><h5> Manage Products</h5></Link>
        </li>
        <li className="list-group-item">
        <Link to="/admin/orders" className="nav-link text-center text-dark"><h5> Manage orders</h5></Link>
        </li>
        </ul>
        </div>
    );
}

const adminRightSide = () => {
    return(
    <div className="card mb-4">
    <h4 className="card-header bg-dark text-center text-white"> Admin Information</h4>
    <ul className="list-group">
        <li className="list-group-item">
        <h5><span className="badge badge-dark mr-2">Name:</span>{name}</h5>
        </li>
        <li className="list-group-item">
        <h5><span className="badge badge-dark mr-2">email:</span>{email}</h5>
        </li>
        <li className="list-group-item">
            <span className="badge badge-dark px-2 py-1 "><h5>Admin Area</h5></span>
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
        <div className="col-8 col-md-6 col-lg-8 col-12 mb-4">
            {adminRightSide()}    
            </div>
            <div className="col-md-3 col-lg-4 col-12 mb-4">
            {adminLeftSide()}    
            </div>
            
        </div>
        </div>
        
        </Base>
        
    );
} 

export default AdminDashboard;