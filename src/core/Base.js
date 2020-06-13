import React from 'react';
import Menu from './Menu';

const Base = ({
    title="My Title",
    description="My Description",
    className="bg-secondary text-white p-4",
    children
}) => (
    <div>
        <Menu/>
        <div className = "container-fluid">
            <div className = "jumbotron bg-dark text-white text-center">
            <h4 className = "display-4">{title}</h4>
            <p className = "lead">{description}</p>
        </div>
        <div className = {className}>{children}</div>
        </div>
        <footer className="footer bg-success mt-auto">
            <div className="container-fluid bg-sucess text-white text-center">
            <h4 className="mt-4 pt-2">Any Questions?</h4>
            <button className="btn btn-warning btn-sm btn-lg rounded">Contact Us</button>
            </div>
            <div className="container">
            <span className="text-muted">
                First thing First! <span className="text-white">this shit is lit</span> 
            </span>
            </div>
        </footer>
    </div>
)

export default Base;