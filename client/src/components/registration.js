import React from 'react';
import items from './input'
import {Formik,Form} from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom";
import axios from "axios"
function Reg(props) {
    const initials={
        "name":"",
        "email":"",
        "pass":""
        
    }
    
    const validate=Yup.object({
        "name":Yup.string().min(3,"min should be 3").required("required"),
        "email":Yup.string().min(5,"min should be 5").required("required"),
        "pass":Yup.string().min(5,"min should be 5").required("required")
    })
    return (
        <Formik
        initialValues={initials}
        validationSchema={validate}
        onSubmit={(values,{setSubmitting,resetForm})=>{
            console.log(values);
            axios.post("/user",values)
                .then(res=>{
                    console.log(res);
                    window.location.href="/home"
                    resetForm()

                }).catch(err=>{
                    
                    alert("Registration failed , Please register again")
                    resetForm()
                    console.log(err);
                })
        }}
        >        
            {formik=>(
                <div 
                    className="d-flex justify-content-center align-items-center "
                    style={
                        {
                            height:"100vh",
                            backgroundColor: "#A1BAFE",
                            backgroundImage: "linear-gradient(315deg, #A1BAFE 0%, #8D5185 74%)"
                        }
                }>
                   
                    <Form className="p-4 mx-4  mw-100 w-50 border rounded bg-white">
                        <div className="d-flex justify-content-center align-items-center">
                            <strong style={{fontSize:"24px",fontFamily:"sans-serif"}}> Registration on going </strong>
                        </div>
                        <div>
                            <items.Input label="Name"  name="name" placeholder="Name" />
                            <items.Input label="Email"  name="email" placeholder="Email" />
                            <items.Input type="password" label="Password"  name="pass" placeholder="Password" /> 
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center ">
                            <button className="btn btn-info m-2 w-100 text-white"  type="submit">Submit</button>
                            <p>New to Post-It? 
                                <Link className="mx-2 " to="/">                                    
                                        click to register                                     
                                </Link>
                                
                            </p>
                        </div>
                        
                    </Form>
                </div>
            )}
        </Formik>
    );
}



export default Reg;