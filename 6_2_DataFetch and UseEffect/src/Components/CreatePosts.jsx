

import { useContext, useRef } from "react";
import { UserPostsByContext } from "../Store/User_Post_Store";

const CreatePost = () => {
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostDescriptionElement = useRef();
  const PostTagElement = useRef();
  const PostReactionElement = useRef();

  const { CreatePost } = useContext(UserPostsByContext);

  const SubmitPostData = (e) => {
    e.preventDefault();
    const userIdData = userIdElement.current.value;
    const PostTitleData = PostTitleElement.current.value;
    const PostDescriptionData = PostDescriptionElement.current.value;
    const PostTagData = PostTagElement.current.value.split(" ");
    const PostReactionData = PostReactionElement.current.value;

    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostDescriptionElement.current.value = "";
    PostTagElement.current.value = "";
    PostReactionElement.current.value = "";


    // function generateCustomID() {
    //   const now = new Date();
    //   const year = now.getFullYear();
    //   const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    //   const date = String(now.getDate()).padStart(2, '0');
    //   const hours = String(now.getHours()).padStart(2, '0');
    //   const minutes = String(now.getMinutes()).padStart(2, '0');
    //   const seconds = String(now.getSeconds()).padStart(2, '0');
    //   const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    //   const customID = `${date}${month}${year}${hours}${minutes}${seconds}${milliseconds}`;
      
    //   return customID;
    // }
    // const customID = generateCustomID();
    

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title : PostTitleData,
        body : PostDescriptionData,
        reactions : PostReactionData,
        userId : userIdData,
        tags : PostTagData,
      })
    })
    .then(res => res.json())
    .then((data)=>{console.log("my data ",data), CreatePost(data)});
    
    // CreatePost(userIdData, PostTitleData, PostDescriptionData, PostTagData, PostReactionData);
  }

  return (
    <>
      <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
      <div className="form-container ">
        <form className="form" onSubmit={SubmitPostData}>
          <div className="form-group">
            <label htmlFor="email">User Id</label>
            <input required="" name="text" id="email" type="text" ref={userIdElement} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Post Title</label>
            <input required="" name="text" id="email" type="text" ref={PostTitleElement} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Post Description</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea" ref={PostDescriptionElement}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">PostTags</label>
            <input required="" name="text" id="email" type="text" ref={PostTagElement} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Number Of Post Reaction</label>
            <input required="" name="text" id="email" type="number" ref={PostReactionElement} />
          </div>

          <button className="btn-18" type="submit">
            <span className="text-container">
              <span className="text">Submit</span>
            </span>
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default CreatePost;
