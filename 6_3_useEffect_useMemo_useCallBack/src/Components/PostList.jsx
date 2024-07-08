import { useContext, useEffect, useState } from "react";
import UserPost from "./Posts";
import { UserPostsByContext } from "../Store/User_Post_Store";
import Greeting from "./Greeting";

import LoadingComponent from "./LoadingArea";


const UserPostsList = () =>{
    const {PostList, CreatePostByFetchingData} = useContext(UserPostsByContext); //

    // for loading below
    const [fetching, setFetching] = useState(false);


    useEffect(() =>{
        setFetching(true);

        const myController = new AbortController();
        const mySignal = myController.signal;

        fetch('https://dummyjson.com/posts', {mySignal})
            .then(res => res.json())
            .then((data)=>{
                CreatePostByFetchingData(data.posts); // here post is API obj online
                setFetching(false);
        });

        return () =>{
            myController.abort(); // done to clean-up fetch call after it's work has been completed
        }

    },[])
    


    return(
        <>
            {fetching && <LoadingComponent />}

            { !fetching && PostList.length===0 && <Greeting />}
            
            { !fetching && PostList.map(item => <UserPost  key={item.id} item={item}/>) }
            

        </>
    )
}

export default UserPostsList;
