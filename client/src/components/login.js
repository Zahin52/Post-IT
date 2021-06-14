import React from 'react';
import items from './input'
import {Formik,Form} from "formik"
import * as Yup from "yup"
import axios from "axios"
function Login(props) {
    const initials={
        "email":"",
        "pass":""
        
    }
    
    const validate=Yup.object({
        "email":Yup.string().min(5,"min should be 5").required("required"),
        "pass":Yup.string().min(5,"min should be 5").required("required")
    })
    return (
        <Formik
        initialValues={initials}
        validationSchema={validate}
        onSubmit={(values,{setSubmitting,resetForm})=>{
            console.log(values);
            axios.post("/auth",values)
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
                
                <Form className="p-4 mx-4  mw-100 w-50 border rounded">
                    <items.Input label="Email"  name="email" placeholder="Email" />
                    <items.Input type="password" label="Password"  name="pass" placeholder="Password" /> 
                    
                    <button className="btn btn-info"  type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}



export default Login;