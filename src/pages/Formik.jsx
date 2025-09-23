import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Formik = () => {
    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
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
    // console.log(formik.errors);
    // console.log(formik.values);
    console.log(formik.touched);


    return (
        <>
            <input type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.firstName && formik.errors.firstName ? <small className='text-danger'>{formik.errors.firstName}</small>:""}

            <input type="text" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.lastName && formik.errors.lastName ? <small className='text-danger'>{formik.errors.lastName}</small>:""}
            <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? <small className='text-danger'>{formik.errors.email}</small>:""}
            <input type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password ? <small className='text-danger'>{formik.errors.password}</small>:""}
            <button type='button ' onClick={formik.handleSubmit}>Submit</button>
        </>
    )
}

export default Formik