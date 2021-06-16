
import {useState,useEffect} from "react"
import axios from "axios"
import "./posts.css"

function Posts() {
    // const input=useRef()
    const [data,SetData]=useState([])
    
    useEffect( ()=>{
        
        const set=async ()=>{
            const a= await axios.get("/post")
            //console.log(a.data)
            SetData(a.data)
            //logit(a.data)
            
        }
        
        set()
        
    },[data] )
    // const reload=()=>{
    //     const set=async ()=>{
    //         const a= await axios.get("/post")
    //         //console.log(a.data)
    //         SetData(a.data)
    //         //logit(a.data)
            
    //     }
        
    //     set()
    // }
    return (
        <div className=" postsDiv rounded">

            <ul className="w-100 h-100 d-flex flex-wrap justify-content-between" style={{padding:"10px","overflowY":"scroll",height:"100%"}}>
                {
                data.map((val)=>(
                    <li className="rounded"
                        
                        key={val._id}
                        
                        style={{
                            width:"100%",
                            height:"30%",
                            padding:"2px",
                            backgroundColor:"white",
                            color:"black",
                            border: "solid 2px black",
                            listStyle:"none",               
                            margin:"5px"
                        }}
                    >

                        <div id={val._id} className="container p-3 rounded h-100 ">
                            <div className="border-bottom">
                                    <strong>
                                        Title : {val.title}
                                    </strong> 
                                
                            </div>
                            <div className="">
                                 {val.body}
                            </div>
                        </div>
                       
                    </li>
                ))}
            </ul>
            
        </div>
    );
}


export default Posts;
