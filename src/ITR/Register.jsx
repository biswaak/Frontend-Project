import React from "react";
import { ErrorMessage, Field,Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";

export default function ITRRegisterComponent()
{
    let navigate = useNavigate();
    return(
        <div className="container-fluid text-center">
        <Formik
        initialValues={{
          UserName: "",
          Password: "",
          Email: "",
          MobNo:"",
          Region:"",
          State:"",
          PostAddress:"",
          DOB:"",
          havetravelInsurance : "",
          wanttravelInsurance : "",
          termcondition: "",
        }}
        validationSchema={yup.object({
          UserName: yup.string().required("Name required").min(4, "Name too short").max(10, "Name too long"),
          Password: yup.string() .required("Password Required to Login") .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) .min(4,"Invalid.."),
          Email: yup.string() .required("Email-@gmail.com Required") .email("is not valid email type") .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only @gmail.com addresses are allowed"),
          MobNo: yup.string() .required("enter your 10-degit with +91 mobile number") .matches(/^\+\d{1,4}[1-9]\d{6,14}$/, 'Invalid phone number'),
          Region: yup.string().required('Region is required'),
          State: yup.string().required('State is required'),
          PostAddress: yup.string().required('Post address is required'),
          DOB: yup.date().required('Date of Birth is required'),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form className="bg-transparent text-warning text-center form-control">
            <marquee behavior="" direction="left" >
                <span className="bi bi-airplane-engines-fill text-center text-primary"></span> ITR-INDIAN TRAVELERS RESOURCES <span className="bi-airplane-engines-fill text-primary"></span>
            </marquee>
          <dl>
            <dt className=" form-label">UserName</dt>
            <dd className=" bi bi-person">
              <Field type="text" name="UserName" />
              <ErrorMessage name="UserName" />
            </dd>

            <dt>Password</dt>
            <dd className="bi bi-key">
              <Field type="password" name="Password" />
              <ErrorMessage name="Password" />
            </dd>
            
            <dt>Email</dt>
            <dd className=" bi bi-mailbox">
              <Field type="email" name="Email" />
              <ErrorMessage name="Email" />
            </dd>
            
            <dt>Mobile Number</dt>
            <dd className="bi bi-phone">
                <Field type="text" name="MobNo"/>
                <ErrorMessage name="MobNo"/>
            </dd>

            <dt>Region</dt>
            <dd className=" bi bi-globe">
                <Field type="text" name="Region"/>
                <ErrorMessage name="Region"/>
            </dd>

            <dt>State</dt>
            <dd className="bi bi-globe2">
                <Field type="text" name="State"/>
                <ErrorMessage name="State"/>
            </dd>

            <dt>Postal Adress</dt>
            <dd className="bi bi-postcard">
                <Field type="text" name="PostAddress"/>
                <ErrorMessage name="PostAddress"/>
            </dd>

            <dt>DOB</dt>
            <dd className=" bi bi-calendar-date">
                <Field type="date" name="DOB"/>
                <ErrorMessage name="DOB"/>
            </dd>
            
            <dt>
                <label htmlFor="havetravelInsurance">Do you have travel insurance?</label>
            </dt>
            <dd>
                <Field as="select" id="havetravelInsurance" name="havetravelInsurance">
                <option value="" disabled>Select an option</option>
                    <optgroup>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </optgroup>
                </Field>
            </dd>

            <dt>
                <label htmlFor="wanttravelInsurance">Do you want travel insurnace?</label>
            </dt>
            <dd>
                <Field as="select" id="wanttravelInsurance" name="wanttravelInsurance">
                <option value="" disabled>Select an option</option>
                    <optgroup>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </optgroup>
                </Field>
            </dd>
            
            <p>By creating an account, you agree to ITR's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
            
            <dt>
                <label htmlFor="term&condition">Do you agree to the terms and conditions?</label>
            </dt>
            <dd>
                <Field as="select" id="termcondition" name="termcondition">
                <option value="" disabled>Select an option</option>
                    <optgroup>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </optgroup>
                </Field>
            </dd>
          </dl>

          <button type="submit">Register</button>
        </Form>
      </Formik>
      <hr />
      <br />

      <Link to="/login" className="p-2 ">Already have an Account?</Link>
      <br />
      <Link to="/Home">Home</Link>
        </div>
    )
}