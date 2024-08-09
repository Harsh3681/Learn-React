
// const AppSideBar = ({getActive,setActive}) =>{

//     return(
//         <>
//         <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{"width" : "180px", "height":"90vh"}}>
//             <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
//                 <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
//                 <span className="fs-4">Sidebar</span>
//             </a>
//             <hr/>
//             <ul className="nav nav-pills flex-column mb-auto">
//                 <li className="nav-item">
//                     <a href="#" className={`nav-link text-white ${getActive==="Home" && "active"}`} aria-current="page"  onClick={()=>{setActive("Home")}}>
//                     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
//                     Home
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className={`nav-link text-white  ${getActive==="Create Post" && "active"}`}  onClick={()=>{setActive("Create Post")}}>
//                     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
//                     Create Post
//                     </a>
//                 </li>  
//             </ul>
//             <hr/>
            
//         </div>

  
//         </>
//     )
// }


// export default AppSideBar;






// const AppSideBar = ({ getActive, setActive }) => {
//     return (
//         <div className="d-flex">
//             <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" 
//                 style={{
//                     "width": "180px", 
//                     "height": "100vh", 
//                     "position": "fixed",
//                     "top": "0",
//                     "left": "0",
//                     "minHeight": "100vh"
//                 }}>
//                 <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
//                     <span className="fs-4">Sidebar</span>
//                 </a>
//                 <hr />
//                 <ul className="nav nav-pills flex-column mb-auto">
//                     <li className="nav-item">
//                         <a href="#" className={`nav-link text-white ${getActive === "Home" && "active"}`} aria-current="page" onClick={() => { setActive("Home") }}>
//                             <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className={`nav-link text-white ${getActive === "Create Post" && "active"}`} onClick={() => { setActive("Create Post") }}>
//                             <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
//                             Create Post
//                         </a>
//                     </li>
//                 </ul>
//                 <hr />
//             </div>
//         </div>
//     )
// }

// export default AppSideBar;



import React from 'react';

const AppSideBar = ({ getActive, setActive }) => {
    return (
        <div className="d-flex ">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" 
                style={{
                    "width": "180px", 
                    "height": "100vh", 
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "minHeight": "100vh",
                }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className={`nav-link text-white ${getActive === "Home" && "active"}`} aria-current="page" onClick={() => { setActive("Home") }}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`nav-link text-white ${getActive === "Create Post" && "active"}`} onClick={() => { setActive("Create Post") }}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                            Create Post
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default AppSideBar;
