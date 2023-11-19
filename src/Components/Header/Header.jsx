import moment from "moment/moment";
import logo from "../../../public/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="my-4">
      <div
        className=" flex flex-col space-y-3

         justify-center items-center
      "
      >
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <h1 className="text-xl font-medium">
          {moment().format("dddd, MMMM D, YYYY")}
        </h1>
      </div>
      <div
        className="flex justify-center
      items-center
      "
      >
        <button className="btn btn-secondary">Latest</button>
        <div>
          <Marquee pauseOnHover={true}>
            Match Highlights: India vs Australia — as it happened ! Match
            Highlights: India vs Australia as...
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
