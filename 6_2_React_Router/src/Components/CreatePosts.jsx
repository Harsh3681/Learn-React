

import { useContext, useRef } from "react";
import { UserPostsByContext } from "../Store/User_Post_Store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { CreatePost } = useContext(UserPostsByContext);
  

  const SubmitPostData = () => {
   
    
    
  };

  return (
    <>
      <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
      <div className="form-container ">
        <Form method="POST" className="form" >
          <div className="form-group">
            <label htmlFor="email">User Id</label>
            <input required id="email" type="text" name="userId" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Post Title</label>
            <input required id="email" type="text" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Post Description</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="body"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">PostTags</label>
            <input required id="email" type="text" name="tags" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Number Of Post Reaction</label>
            <input required id="email" type="number" name="reactions" />
          </div>

          <button className="btn-18" type="submit">
            <span className="text-container">
              <span className="text">Submit</span>
            </span>
          </button>
        </Form>
      </div>
      </div>
    </>
  );
};

export async function createPostAction(data) {    // async await
  const formData = await data.request.formData();  //await
  const postData = Object.fromEntries(formData); // here we will get our all data of "Form which we create using "name" attribute
  postData.tags = postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
  .then((data)=>{console.log("my data ",data)});
  
  // navigate("/");    // 👈👈👈  navigate to the path why to place it here becz on our form complete fill and wann post once post complete then will redirect to "/" <-- HOME
 
  return redirect("/");     // 👈👈👈 same as "navigate"
}

export default CreatePost;
