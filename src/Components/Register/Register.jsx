import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //create new user
    createNewUser(email, password).then((result) => {
      //send verification
      sendEmailVerification(result.user).then(() => {
        toast.success("Profile Successfully Created! Check Your Email");
      });
      //update profile
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      }).then(() => {});
      console.log(result);
      event.target.reset();
    });
  };

  return (
    <div className="h-screen">
      <Header></Header>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card mt-5 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="https//:..."
                  className="input input-bordered"
                  name="photoUrl"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="p-4">
              Already Have An Account?
              <Link className="text-red-600 font-medium ml-2" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
