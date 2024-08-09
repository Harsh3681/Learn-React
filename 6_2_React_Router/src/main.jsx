import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CreatePost, { createPostAction } from "./Components/CreatePosts.jsx";
import UserPostsList from "./Components/PostList.jsx";

// here we try to defining "covering Path" means Atleast kept required components same for the page as per routes i.e (header, sidebar, footer) and then change the remaining components as per need.
// And here ### "covering Path" ### is this ==> "children[]" inside which array of component obj we place.

const router = createBrowserRouter(
  [{
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <UserPostsList /> },
        { path: "/create-post", element: <CreatePost />, action: createPostAction},
      ],
  },]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
