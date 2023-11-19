import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LeftSide from "../../Components/LeftSide/LeftSide";
import Navbar from "../../Components/Navbar/Navbar";
import CateLink from "../../Components/CateLink/CateLink";
import { useEffect, useState } from "react";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  console.log(allNews);
  const newsCate = useLoaderData();

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="grid grid-cols-4 gap-3 mt-6 
      "
      >
        <div>
          <h2 className="font-semibold text-xl">All Categories</h2>
          <div>
            {newsCate?.map((news) => (
              <CateLink key={news.id} news={news}></CateLink>
            ))}
          </div>
        </div>

        <div className="col-span-2  font-semibold text-xl">
          <h2>Dragon News Home</h2>

          <div>
            {allNews?.map((singleNews) => (
              <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
            ))}
          </div>
        </div>

        <div className=" font-semibold text-xl">
          <h2>Login With</h2>
          <LeftSide></LeftSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
