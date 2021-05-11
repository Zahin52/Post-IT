import React from 'react'
import {ErrorMessage,useField} from "formik"

function Input({label,...props}) {
    const [field,meta]=useField(props)
    //console.log(field,meta);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input 
                className={` form-control shadow-none ${meta.error && meta.touched && "is-invalid"}`}
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage component="div" name={field.name}/>
        </div>
    )
}
function TextArea({label,...props}) {
    const [field,meta]=useField(props)
    //console.log(field,meta);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <textarea
                className={` form-control shadow-none ${meta.error && meta.touched && "is-invalid"}`}
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage component="div" name={field.name}/>
        </div>
    )
}
const items={Input, TextArea}
export default items