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
            axios.post("/post",values)
                .then(res=>{
                    console.log(res);
                    resetForm()

                }).catch(err=>{
                    console.log(err);
                })
        }}
        >        
            {formik=>(
                <Form className="p-4 mx-4  mw-100 w-50 border rounded">
                    <items.Input label="Title" name="title" placeholder="title here "/>
                    <items.TextArea label="Body" name="body" placeholder="body here "/>
                    <button className="btn btn-info"  type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}


export default postForm;