import React from 'react';
import {Formik,Form} from "formik"
import * as Yup from "yup"
import axios from "axios"
import items from "./input"





function postForm(props) {
    const initials={
        "title":"",
        "body":""
        
    }
    
    const validate=Yup.object({
        "title":Yup.string().min(5,"min should be 5").required("required"),
        "body":Yup.string().min(5,"min should be 5").required("required")
    })
    return (
        <Formik
        initialValues={initials}
        validationSchema={validate}
        onSubmit={(values,{setSubmitting,resetForm})=>{
            console.log(values);
            const config={
                headers:{
                    "x-auth-token":localStorage.getItem("token")
                }
            }
            axios.post("/post",values,config)
                .then(res=>{
                    console.log(res);
                    resetForm()

                }).catch(err=>{
                    
                    alert("Please register first")
                    resetForm()
                    console.log(err);
                })
        }}
        >        
            {formik=>(
                
                <Form className="p-4 mx-4 respWidth border rounded">
                    <div className="text-white">
                        <items.Input label="Title" name="title" placeholder="title here "/>
                        <items.TextArea label="Body" name="body" placeholder="body here "/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <button className="btn btn-info text-white w-100"  type="submit">Submit</button>
                    </div>
                    
                </Form>
            )}
        </Formik>
    );
}


export default postForm;