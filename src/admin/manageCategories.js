// import React from 'react';
// import Base from '../core/Base';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { isAutheticated } from '../auth/helper';
// import { getCategories } from './helper/adminapicall';

// const  ManageCategories = () => {


//     const [categories, setCategories] = useState([]);

//     const { user, token } = isAutheticated();
  
//     const preload = () => {
//       getCategories().then(data => {
//         if (data?.error) {
//           console.log(data.error);
//         } else {
//           setCategories(data);
//         }
//       })
//     };
  
//     useEffect(() => {
//       preload();
//     }, []);

    
//     return(
//         <Base title="Welcome admin" description="Manage Categories here">
//       <h2 className="mb-4">All products:</h2>
//       <Link className="btn btn-info" to={`/admin/dashboard`}>
//         <span className="">Admin Home</span>
//       </Link>
//       <div className="row">
//         <div className="col-12">
//           <h2 className="text-center text-white my-3">Categories</h2>
//             {
//                 categories.map((category, index) => {
//                     return(
//                         // <h3 className="text-white" key={index}>{category.name}</h3>
//                         <div key={index} className="row text-center mb-2 ">
//                 <div className="col-4">
//                   <h3 className="text-white text-left" key={index}>{category.name}</h3>
//                 </div>
//                 <div className="col-4">
//                   <Link
//                     className="btn btn-success rounded"
//                     to={`admin/category/update/${category._id}`}
//                     // /category/:categoryId/:userId
//                   >
//                     <span className="">Update</span>
//                   </Link>
//                 </div>
//                 <div className="col-4">
//                   <button
//                     onClick={() => {
//                       deleteThisProduct(product._id);
//                     }}
//                     className="btn btn-danger rounded"
//                   >
//                     Delete
//                   </button> 
//                 </div>
//               </div>
//                     )
//                 })
//             }
      
//         </div>
//       </div>
//     </Base>
//     )

// }

// export default ManageCategories;