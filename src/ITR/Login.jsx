import { Form, ErrorMessage, Formik, Field } from "formik";
import { useNavigate , Link } from "react-router-dom";
import * as yup from "yup";

export default function ITRLoginComponent() {
  let navigate = useNavigate();
  return (
    <div className="container-fluid text-center">
      <h2>Login</h2>
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Password: ""
        }}
        validationSchema={yup.object({
          UserName: yup.string().required("Name required").min(4, "Name too short").max(10, "Name too long"),
          Email: yup.string() .required("Email-@gmail.com Required") .email("is not valid email type") .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only @gmail.com addresses are allowed"),
          Password: yup.string() .required("Password Required to Login") .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) .min(4,"Invalid.."),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <dl>
            <dt>UserName</dt>
            <dd>
              <Field type="text" name="UserName" />
              <ErrorMessage name="UserName" />
            </dd>
            
            <dt>Email</dt>
            <dd>
              <Field type="email" name="Email" />
              <ErrorMessage name="Email" />
            </dd>
            
            <dt>Password</dt>
            <dd>
              <Field type="password" name="Password" />
              <ErrorMessage name="Password" />
            </dd>
          </dl>
        
          <button type="submit">Login</button>
        </Form>
      </Formik>
        <hr />
      <br />

      <Link to="/register" className="p-2 ">New User?</Link>
      <br />
      <Link to="/Home">Home</Link>
    </div>
  );
}


