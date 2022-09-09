import { Link , useNavigate , useSearchParams } from "react-router-dom";
import Inputs from "../components/forms/inputs";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import {
  defaultInputs,
  defaultCheckbox,
  defaultPassword,
} from "../utils/inputs";
import CheckBox from "../components/forms/checkbox";
import Passwords from "../components/forms/passwords";
import { signInUsers } from "../services/regiseter";
import { useState } from "react";
import { useAuthAction } from "../Provider/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  access: false,
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
  name: Yup.string().required("name is not required"),
  email: Yup.string()
    .email("email not currect")
    .required("email is not required"),
  password: Yup.string()
    .required("password not required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  access: Yup.bool().oneOf([true], "Please read term of the service"),
});

const SignUpPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthAction();
  const [searchPara] = useSearchParams();
  const redirect =searchPara.get('redirect') || "";
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const {data} =  await signInUsers(userData);
      toast.success(`${name} sign In to Shopping.me `);
      setError(null);
      setAuth(data);
      navigate(`/${redirect}`);
    } catch (err) {
      if(err.response && err.response.data.message){
        setError(err.response.data.message);
        toast.error(err.response.data.message , {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <div className="grid grid-cols-12 w-full gap-8">
        <div className="col-span-12 md:col-span-6 mt-12">
          <div className="flex justify-center  flex-col w-full gap-y-6 px-4">
            <h1 className=" text-4xl font-bold">Sign In</h1>
            <form
              className="w-full flex flex-col gap-y-6"
              onSubmit={formik.handleSubmit}
            >
              {defaultInputs.map((input, index) => {
                return <Inputs key={index} {...input} formik={formik} />;
              })}
              {defaultPassword.map((password, index) => {
                return <Passwords {...password} formik={formik} key={index} />;
              })}
              {error && <p className="text-rose-500 font-bold animate-pulse">{error}</p>}
              <CheckBox {...defaultCheckbox} formik={formik} />
              <div className="mt-6 w-full md:w-1/3">
                <button
                  type="submit"
                  className="w-full p-4 bg-orange-500 text-slate-100 rounded-md focus:ring focus:ring-offset-2 focus:ring-orange-500 hover:ring-2 hover:ring-offset-2 hover:ring-orange-500 transition-all ease-in-out delay-100 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!formik.isValid}
                >
                  Register
                </button>

              </div>
              <Link to={`/login?redirect=${redirect}`} className="text-orange-400">
                have Account ? click here !
              </Link>
            </form>
          </div>
        </div>
        <div className="col-span-6 h-fit hidden md:block">
          <img
            src={require("./../assets/images/signinForms2.png")}
            alt="signIn"
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
