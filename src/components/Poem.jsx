import React from "react";
import { poemData } from "./poemData";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Poem = () => {
  console.log(poemData, "show the poem data");
  const { id } = useParams();
  const filteredData = poemData.find((d) => d.elem == id);
  console.log(filteredData, "show the filtered data");
  const navigate = useNavigate();
  // filteredData?.poem?.map((d) => {
  //   console.log(d, "shjowe the mapped");
  // });

  // const PoemAwith = [
  //   {
  //     name: "Poem A",
  //     url: "https://t3.ftcdn.net/jpg/04/91/60/94/240_F_491609438_hkYg173p2PXJssKQw36nxQLbuwdJQKYc.jpg",
  //   },
  //   {
  //     name: "Poem A",
  //     url: "https://t3.ftcdn.net/jpg/04/91/60/94/240_F_491609438_hkYg173p2PXJssKQw36nxQLbuwdJQKYc.jpg",
  //   },
  //   {
  //     name: "Poem A",
  //     url: "https://t3.ftcdn.net/jpg/04/91/60/94/240_F_491609438_hkYg173p2PXJssKQw36nxQLbuwdJQKYc.jpg",
  //   },
  //   {
  //     name: "Poem A",
  //     url: "https://t3.ftcdn.net/jpg/04/91/60/94/240_F_491609438_hkYg173p2PXJssKQw36nxQLbuwdJQKYc.jpg",
  //   },
  // ];
  return (
    <div>
      <div
        className="flex items-center bg-indigo-100 w-screen min-h-screen"
        // style="font-family: 'Muli', sans-serif;"
      >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold mb-4">
              Poems Category {id}
            </h1>
          </div>
          <div className="w-full flex flex-wrap">
            {filteredData?.poem?.map((data) => {
              return (
                // <Link
                //   to={`/poem/${data.id}/detail`}
                //   className="flex items-center bg-indigo-100 w-screen min-h-screen"
                // >
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
                      {/* <div className="flex items-center">
                      <button
                        href="javascript:;"
                        className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="stroke-current m-auto"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div> */}
                    </div>
                  </div>
                </div>
                // </Link>
              );
            })}
          </div>

          {/* <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img
                  src="https://srv-cdn.onedio.com/store/7fd6410ffac110960cb4a60b09878db19ebbdf3c8b6e842918d16f3c61784763.png"
                  alt=""
                  className="h-64 ml-auto mr-auto"
                />
              </figure>
              <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone 11
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Just the right amount of everything.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$699,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img
                  src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"
                  alt=""
                  className="h-64 ml-auto mr-auto"
                />
              </figure>
              <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone XR
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Brilliant. In every way.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$599,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img
                  src="https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png"
                  alt=""
                  className="h-64 ml-auto mr-auto"
                />
              </figure>
              <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    iPhone SE
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Lots to love. Less to spend.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">$399,00</div>
                  <button
                    href="javascript:;"
                    className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
