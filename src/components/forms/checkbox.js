import { useState } from "react";
import TermOfServices from "../TermsOfService/TermOfServices";

const CheckBox = ({formik , name }) => {
  const [terms , setTerms] = useState(false);
    return (
      <div className="flex items-center gap-x-2 w-full  text-slate-600">
        <input
          type="checkbox"
          className="p-2 w-4 h-4 rounded-md text-orange-500"
          placeholder="Report  Your Password"
          name={name}
          {...formik.getFieldProps(name)}
        />
        <p
          className={
            formik.errors[name] && formik.touched[name]
              ? "text-rose-500 font-bold"
              : "text-slate-700"
          }
        >
          I agree all statements in <span className="underline hover:text-orange-500 cursor-pointer" onClick={()=> setTerms(!terms)}>Terms of Services</span>
        </p>
        {terms && <TermOfServices setTerms={setTerms}/>}
      </div>
    );
}
 
export default CheckBox;


//I agree all statements in Terms of Services