import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { poemData } from "./poemData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const PoemDetail = () => {
  const navigate = useNavigate();
  const CustomNextArrow = (props) => (
    <button onClick={props.onClick} className="bg-[white] ">
      Next
    </button>
    // You can customize the button as per your design
  );

  const CustomPrevArrow = (props) => (
    <button onClick={props.onClick} className="bg-[white] ">
      Prev
    </button>
    // You can customize the button as per your design
  );
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 2,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };

  const { id } = useParams();
  const [currentPoem, setCurrentPoem] = useState(id.split("")[1]);
  let newPoemCount = poemData.find((data) => {
    return data.poem.find((d) => d.id == id);
  });
  let filteredDetailData = poemData.find((data) => {
    return data.poem.find((d) => d.id == id);
  });
  console.log(filteredDetailData, "show the filteredDetailData ....");
  filteredDetailData = filteredDetailData.poem.find((data) => {
    return data.id == id;
  });
  console.log(filteredDetailData, "show the filteredDetailData .... again");
  console.log(currentPoem, "currentPoemcurrentPoem");
  console.log(id, "its a id333333333");

  let getTheListOfPoems = poemData.find((d) => {
    return d.elem.includes(id.split("")[0]);
  });
  console.log(getTheListOfPoems, "show the  getTheListOfPoems");

  // const Slide = () => {
  //   return (
  //     <h4 color="white" fontWeight="bold">
  //       its a h4 title
  //     </h4>
  //   );
  // };
  return (
    <div className="dark:bg-gray-800">
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={filteredDetailData?.url}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {filteredDetailData.name}
              </h2>
              <h3 className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                {filteredDetailData.poemDescription}
              </h3>
            </div>
          </div>
        </div>

        <Slider {...slickSettings}>
          {/* <div className="flex items-center bg-indigo-100 w-screen min-h-screen"> */}

          {getTheListOfPoems?.poem?.map((data) => {
            return (
              <div
                className=" md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 cursor-pointer"
                onClick={() => {
                  navigate(`/poem/${data.id}/detail`);
                }}
              >
                <div
                  className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 "
                  style={{ width: "fit-content" }}
                >
                  <figure className="mb-2">
                    <img
                      src={data?.url}
                      alt=""
                      className="h-64 ml-auto mr-auto"
                    />
                  </figure>
                  <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                    <div>
                      <h5 className="text-white text-2xl font-bold leading-none">
                        {data?.name}
                      </h5>
                      <span className="text-md text-gray-400 leading-none">
                        {data?.poemDescription?.substring(0, 60) + "......."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* </div> */}
          {/* <div>
            <div className="flex items-center bg-indigo-100 w-screen min-h-screen">
              <div className="container ml-auto mr-auto flex flex-wrap items-start">
                <div className="w-full pl-5 lg:pl-2 mb-4 mt-4"></div>
                <div className="w-full flex flex-wrap"></div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};
