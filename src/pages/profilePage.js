import Layout from "../layout/Layout";
import { useAuth, useAuthAction } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const Auth = useAuth();
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const logout = () =>{
    setAuth(false);
    navigate("/signIn");
  }
  return (
    <Layout>
      <div className="grid grid-cols-12 w-full gap-8 mt-12">
        <div className="col-span-12 md:col-span-6 mt-12">
            <div className="flex flex-col  gap-y-6 mb-6">
                <p>Name : {Auth.name}</p>
                <p>Email : {Auth.email}</p>
                <p>Phone Number : {Auth.phoneNumber}</p>
            </div>
            <button onClick={logout} className ="p-2 bg-orange-500 rounded-md text-slate-100 ">LogOut</button>
        </div>
        <div className="col-span-6 h-fit hidden md:block">
          <img
            src={require("./../assets/images/21207.jpg")}
            alt="signIn"
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
