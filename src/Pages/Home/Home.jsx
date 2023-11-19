import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LeftSide from "../../Components/LeftSide/LeftSide";
import Navbar from "../../Components/Navbar/Navbar";
import CateLink from "../../Components/CateLink/CateLink";
import { useEffect, useState } from "react";
import NewsCard from "../../Components/NewsCard/NewsCard";
import HomeRightCard from "./HomeRightCard/HomeRightCard";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  const [show, setShow] = useState(false);
  console.log(show);
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
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 my-2 
      "
      >
        <div>
          <h2 className="font-semibold text-xl">All Categories</h2>
          <div>
            {newsCate?.map((news) => (
              <CateLink key={news.id} news={news}></CateLink>
            ))}
          </div>

          <div>
            <HomeRightCard></HomeRightCard>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2 font-semibold text-xl">
          <h2>Dragon News Home</h2>

          <div>
            {show ? (
              <>
                {allNews?.map((singleNews) => (
                  <NewsCard
                    key={singleNews._id}
                    singleNews={singleNews}
                  ></NewsCard>
                ))}
              </>
            ) : (
              <>
                {allNews?.slice(0, 2).map((singleNews) => (
                  <NewsCard
                    key={singleNews._id}
                    singleNews={singleNews}
                  ></NewsCard>
                ))}
              </>
            )}

            <div className="text-center">
              <button
                onClick={() => setShow(!show)}
                className="btn btn-primary"
              >
                {show ? " Show Less" : "Show All"}
              </button>
            </div>
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
