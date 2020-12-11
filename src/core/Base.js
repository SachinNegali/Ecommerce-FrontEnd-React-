import React from 'react';
import Menu from './Menu';

const Base = ({
    title="My Title",
    description="My Description",
    className="bg-light text-white p-4",
    children
}) => (
    <div>
        <Menu/>
        <div className = "container-fluid bg-light">
            <div className = "jumbotron bg-light text-dark text-center">
            <h4 className = "display-4 font-weight-bold">{title}</h4>
            <p className = "lead font-weight-bold">{description}</p>
        </div>
        <div className = {className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto">
            <div className="container-fluid bg-dark text-white text-left">
            <h6 className="pt-4" style={{color:"#e6e6e6"}}>About Us</h6>
           <h6 className="" style={{color:"#e6e6e6"}}>Contact Us</h6>
           <h6 className="" style={{color:"#e6e6e6"}}>About Us</h6>
           <h6 className="" style={{color:"#e6e6e6"}}>FAQs</h6>
           <h6 className="" style={{color:"#e6e6e6"}}>T&Cs</h6>
           <h6 className="" style={{color:"#e6e6e6"}}>Privacy Policy</h6>
           
           </div>
            <div className="container"> 
            
           <div className="text-center mt-4">   
                <h5 className=" text-white">follow us </h5>
                <i class="fa fa-github-square fa-3x" aria-hidden="true" style={{color: "#f0f5f1", margin:"8px"}}></i>
               <i class="fa fa-linkedin-square fa-3x" aria-hidden="true" style={{color: "#f0f5f1", margin:"8px"}}></i>
               <i class="fa fa-facebook-square fa-3x" aria-hidden="true" style={{color: "#f0f5f1", margin:"8px"}}></i>
               <i class="fa fa-twitter-square fa-3x" aria-hidden="true" style={{color: "#f0f5f1", margin:"8px"}}></i>
              

           </div>
            {/* <span className="text-muted ">
                First thing First! <span className="text-center text-white">footer is here</span> 
            </span> */}
            </div>
        </footer>
    </div>
)

export default Base;