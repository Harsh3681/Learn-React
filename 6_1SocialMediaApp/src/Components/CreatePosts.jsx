// import mystyle from "./createPosts.module.css";

// import { useContext, useRef } from "react";
// import { UserPostsByContext } from "../Store/User_Post_Store";

// const CreatePost = () => {
 
//   const userIdElement = useRef();
//   const PostTitleElement  = useRef();
//   const PostDescriptionElement  = useRef();
//   const PostTagElement  = useRef();
//   const PostReactionElement  = useRef();
  
//   const {CreatePost} = useContext(UserPostsByContext);

//   const SubmitPostData = (e) =>{
//     e.preventDefault();
//     const userIdData = userIdElement.current.value;
//     const PostTitleData = PostTitleElement.current.value;
//     const PostDescriptionData = PostDescriptionElement.current.value;
//     const PostTagData = PostTagElement.current.value.split(" ");
//     const PostReactionData = PostReactionElement.current.value;

//     userIdElement.current.value="";
//     PostTitleElement.current.value="";
//     PostDescriptionElement.current.value="";
//     PostTagElement.current.value="";
//     PostReactionElement.current.value="";

//     CreatePost(userIdData,PostTitleData,PostDescriptionData,PostTagData,PostReactionData);
//   }


//   return (
//     <>
//       <div className="form-container ">
//       <form className="form" onSubmit={SubmitPostData}>
//         <div className="form-group">
//           <label htmlFor="email">User Id</label>
//           <input required="" name="text" id="email" type="text" ref={userIdElement}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Post Title</label>
//           <input required="" name="text" id="email" type="text" ref={PostTitleElement}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="textarea">Post Description</label>
//           <textarea required="" cols="50" rows="10" id="textarea" name="textarea" ref={PostDescriptionElement}> </textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="textarea">PostTags</label>
//           {/* <textarea required="" cols="5" rows="5" id="textarea" name="textarea"> </textarea> */}
//           <input required="" name="text" id="email" type="text" ref={PostTagElement}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="textarea">Number Of Post Reaction</label>
//           <input required="" name="text" id="email" type="number" ref={PostReactionElement}/>
//         </div>
        
//         <button class="btn-18" type="submit">
//         <span class="text-container">
//           <span class="text">Submit</span>
//         </span>
//       </button>


//       </form>
//     </div>

   
//     </>
//   );
// };

// export default CreatePost;



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

    CreatePost(userIdData, PostTitleData, PostDescriptionData, PostTagData, PostReactionData);
  }

  return (
    <>
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
    </>
  );
};

export default CreatePost;
