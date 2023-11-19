import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../public/qZone1.png";
import qZone2 from "../../../public/qZone2.png";
import qZone3 from "../../../public/qZone3.png";
const LeftSide = () => {
  return (
    <div className="text-center mt-2">
      <div>
        <button className="btn btn-outline btn-md">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-outline mt-2 btn-md">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div>
        <h1 className="text-start">Find Us On</h1>
        <div className="mt-2">
          <button className="border rounded-t-lg flex gap-2 mx-auto items-center justify-center py-3 px-10">
            <FaFacebookF /> Facebook
          </button>
          <button className=" border flex gap-2 mx-auto items-center justify-center py-3 px-14">
            <FaTwitter /> Twitter
          </button>
          <button className="border rounded-b-lg flex gap-2 mx-auto items-center justify-center py-3 px-9">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-start">Q Zone</h1>
        <div className="mt-2">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
