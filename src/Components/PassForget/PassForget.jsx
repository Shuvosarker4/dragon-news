import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const PassForget = () => {
  return (
    <div className="h-screen">
      <Header></Header>
      <Navbar></Navbar>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Reset Your Password</h1>
          </div>
          <div className="card mt-5 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassForget;
