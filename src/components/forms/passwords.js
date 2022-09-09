import { useRef, useState } from "react";

const Passwords = ({
  formik,
  type = "password",
  name,
  Icon,
  placeHolder,
  autoComplete = "off",
  Show,
  Hide,
}) => {
  const [show, setShow] = useState(true);
  const showIcon = useRef();
  const hnadleChange = (e) => {
    if(e.target.value !== ""){
        showIcon.current.style.display = "block";
    }else{
        showIcon.current.style.display = "none";
    }
  };
  return (
    <div className="flex items-center w-full  text-slate-600 relative z-0">
      <span className="absolute top-0 py-3">
        <Icon />
      </span>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <button
            type="button"
            className={
              "absolute hidden right-5 top-0 py-3 cursor-pointer transition-all ease-in-out delay-300"
            }
            ref={showIcon}
            onClick={() => setShow(!show)}
          >
            {show ? <Hide /> : <Show />}
          </button>
          <input
            type={show ? type : "text"}
            className={
              formik.errors[name] && formik.touched[name]
                ? "border-b-2 border-rose-500 w-full p-2 px-6 text-slate-500 focus:text-slate-800 focus:outline-none  focus:border-slate-800 transition-all ease-in-out delay-300"
                : "text-slate-500 border-b-2 border-slate-400 w-full p-2 px-6 focus:text-slate-800 focus:outline-none  focus:border-slate-800 transition-all ease-in-out delay-300"
            }
            placeholder={placeHolder}
            name={name}
            autoComplete={autoComplete}
            {...formik.getFieldProps(name)}
            onInput={hnadleChange}
          />
        </div>
        {formik.errors[name] && formik.touched[name] && (
          <p className="text-rose-500 font-bold transition-all ease-in-out delay-300">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Passwords;
