import { useNavigate , useSearchParams } from "react-router-dom";

import Layout from "../layout/Layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { defaultLoginInputs, defaultLoginPassword } from "../utils/inputs";
import Inputs from "../components/forms/inputs";
import Passwords from "../components/forms/passwords";
import {Link} from 'react-router-dom';  
import { useState } from "react";
import { loginUsers } from "../services/loginService";
import {toast} from 'react-toastify';
import { useAuthAction } from "../Provider/AuthProvider";

const initialValues = {
  email : "",
  password : "",
}



const validationSchema = Yup.object({
  email: Yup.string()
    .email("email not currect")
    .required("email is not required"),
  password: Yup.string()
    .required("password not required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const LoginPage = () => {
  const [error , setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthAction();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || ""; 

  const onSubmit = async (values) =>{
    try{
      const {data} = await loginUsers(values);
      console.log(data)
      toast.success(`${values.email} Login to shopping.me` , {
        position : toast.POSITION.TOP_CENTER,
      });
      setError(null);
      setAuth(data);
      navigate(`/${redirect}`);
    }
    catch(err){
      if(err.response && err.response.data.message){
        setError(err.response.data.message);
        toast.error(err.response.data.message , {
          position : toast.POSITION.TOP_CENTER,
        });
      }
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount : true
  })


    return (
      <Layout>
        <div className="grid grid-cols-12 w-full gap-8">
          <div className="col-span-12 md:col-span-6 mt-12">
            <div className="flex justify-center  flex-col w-full gap-y-6 px-4 h-full">
              <h1 className=" text-4xl font-bold">Login</h1>
              <form
                className="w-full flex flex-col gap-y-6"
                onSubmit={formik.handleSubmit}
              >
                <Inputs {...defaultLoginInputs} formik={formik} />
                <Passwords {...defaultLoginPassword} formik={formik} />
                {error && <p className="text-rose-500 font-bold animate-pulse">{error}</p>}
                <div className="mt-6 w-full md:w-1/3">
                  <button
                    type="submit"
                    className="w-full p-4 bg-orange-500 text-slate-100 rounded-md focus:ring focus:ring-offset-2 focus:ring-orange-500 hover:ring-2 hover:ring-offset-2 hover:ring-orange-500 transition-all ease-in-out delay-100 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!formik.isValid}
                  >
                    Login
                  </button>
                </div>
                <Link
                  to={`/signIn?redirect=${redirect}`}
                  className="text-orange-400  hover:underline hover:underline-offset-2 transition-all ease-in-out delay-500"
                >
                  No Account ? create new Account !
                </Link>
              </form>
              <div className="flex-1 flex items-end">
                <Link
                  to={"/"}
                  className="text-slate-800 underline underline-offset-4 block hover:text-orange-400 transition-all ease-in-out delay-100"
                >
                  Forgot Youre Password !
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-6 h-fit hidden md:block">
            <img
              src={require("./../assets/images/Login.png")}
              alt="signIn"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </Layout>
    );
}
 
export default LoginPage;