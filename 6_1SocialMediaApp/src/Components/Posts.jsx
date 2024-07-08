import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { UserPostsByContext } from "../Store/User_Post_Store";

const UserPost = ({item}) =>{ // get props from PostList

    const {DeletePost} = useContext(UserPostsByContext);

    return(
        <>
            <div className="col card mb-3 mt-4" style={{"width" : "25rem", "margin-left": "35vh"}}>
                <div className="card-body">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"cursor":"pointer"}} onClick={()=>DeletePost(item.id)}><MdDeleteForever /></span>
                    <h5 className="card-title">{item.postTitle}</h5>
                    <p className="card-text">{item.postDescription}</p>
                    {item.postTag.map(Mytag => <span className="badge text-bg-primary mx-1">{Mytag}</span>)}
                    <div className="alert alert-info my-3 mb-1" role="alert">
                        Total Number Of user Reacted {item.postReactions}
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserPost;