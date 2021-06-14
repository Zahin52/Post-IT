import React from 'react';
import Posts from "./posts"
import PostForm from "./postForm"





function Home() {

    return (
        <div style={{height:"100vh"}} className="p-4 d-flex flex-column flex-md-row w-100 justify-content-around align-items-center">
            <Posts />
            <PostForm />
        </div>
    );
}

export default Home;
