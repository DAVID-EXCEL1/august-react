import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Form = () => {
    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstName: yup.string("Input your first Name").required("First Name is Required"),
            lastName: yup.string("Enter your Last Name").required("Last Name is Require"),
            email: yup.string("Input your email here").required("Email is required").email("Email must be valid"),
            password: yup.string("Fill in your password").required("Password is required")
        })
    })
    // console.log(formik.values);
    // console.log(formik.touched);
    console.log(formik.errors);




    return (
        <>
            <h1>Form Component</h1>
            <input type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.firstName && formik.errors.firstName ? <tt className="bg-danger text-light">{formik.errors.firstName}</tt> : ""
            }
            <input type="text" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.lastName && formik.errors.lastName ? <tt className="bg-danger text-light">{formik.errors.lastName}</tt>:""
            }
            <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.email && formik.errors.email ? <tt className="bg-danger text-light">{formik.errors.email}</tt>:""
            }
            <input type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {
                formik.touched.password && formik.errors.password ? <tt className="bg-danger text-light">{formik.errors.password}</tt>:""
            }
            <button type='button' onClick={formik.handleSubmit}>Submit</button>
        </>
    )
}

export default Form
