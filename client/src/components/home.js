import React from 'react';
import Posts from "./posts"
import PostForm from "./postForm"





function Home(props) {

    if (props.loggeinStatus){
        return (
            <div 
                style={
                    {
                        height:"100vh",
                        background:"#9969c7"
                    }} 
                className="p-4 d-flex flex-column flex-md-row w-100 justify-content-around align-items-center"
            >
                <Posts />
                <PostForm />
            </div>
        );
    }
    else{
        setTimeout(() => {
            props.history.push("/")
        }, 3000);
        return(
            <div className="d-flex justify-content-center align-items-center bg-info" style={{height:"100vh"}}>
                <p style={{
                    fontSize:"25px",
                    color:"white",
                    fontFamily:"sans-serif"
                }}>
                    Please login/Sign-Up first!
                </p>
            </div>
        )
       
    }

    
    
}

export default Home;
