import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSide from "../LeftSide/LeftSide";

const SeeMore = () => {
  const allNews = useLoaderData();
  const { id } = useParams();
  const getNews = allNews.find((news) => news._id == id);
  console.log(getNews.details);
  return (
    <div>
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <h1 className="font-semibold text-xl my-4">Dragon News</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="card col-span-3 my-4 card-compact h-2/3 bg-base-100 p-4 shadow-xl">
          <figure>
            <img className="" src={getNews.thumbnail_url} alt="Shoes" />
          </figure>
          <h2 className="card-title">{getNews.title}</h2>
          <div className="card-body">{getNews.details}</div>
        </div>
        <div className="font-semibold text-xl my-4">
          <h1>Login With</h1>
          <LeftSide></LeftSide>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
