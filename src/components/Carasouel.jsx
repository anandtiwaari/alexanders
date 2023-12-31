// import Glider from "react-glider";
// import "glider-js/glider.min.css";
// import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alphabets } from "./Alphabets";
const sliderContent = [
  {
    title: "Jestem sroczka - bystrooczka",
    img: "https://static.wixstatic.com/media/0e312d_64b866d951bf422c843444c9df7d6b42~mv2.jpeg/v1/fill/w_425,h_800,fp_0.50_0.50,lg_1,q_80,enc_auto/0e312d_64b866d951bf422c843444c9df7d6b42~mv2.jpeg",
    description: `Jestem sroczka - bystrooczka

    Wszystko widze co sie dzieje
    Bedzie milo nam nadzieje
    I pogadać moge sobie
    z szarym wroblem o ten dobie
    Poplotkowac przyjdzie takze
    z wrona kawka i zurawiem,
    zuraw - pan profesor na blacisku ,
    A gdzie czapla, mój braciszku,
    Gdzie odeszla jasnie Pani
    mam rybeczke piekna dla niej
    Zjedz te rybke ma pieknisiu
    Moze piekny sên przysni sie
    O spotkaniu wszystkich ptáków
    Na polonie wsrod olszakow
    Wiec ' wybierzem sobie medrca
    Niech nim bedzie puchacz - sowa
    Wiele ksiag czytac gotowa
    Ona madrosc swa przeleje,
    nasmaruje nas olejem
    Olej w glowce, modrosc takze
    Dzieki sowo, wladasz ladnie`,
  },
  {
    title: "Storczyk I Koliber",
    img: "https://static.wixstatic.com/media/0e312d_bcab7b4a7e9145209c191419cd62290a~mv2.jpeg/v1/fill/w_600,h_306,al_c,lg_1,q_80,enc_auto/pexels-photo-hummingbird%20%26%20orchid.jpeg",
    description: "description 2",
  },
  {
    title: "Wyprawy na Rzeczki",
    img: "https://static.wixstatic.com/media/0e312d_5ff302a219434fcfbcb88c58a0c1f490~mv2.jpeg/v1/fill/w_500,h_234,al_c,q_80,enc_auto/pexels-photo-river%20boat.jpeg",
    description: "description 3",
  },
];
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 1,
};
export default function Carasouel() {
  return (
    <div className="App">
      <div className="w-[99%] m-auto ">
        <Slider {...slickSettings}>
          {sliderContent.map((data, key) => {
            return (
              <div class="p-20 bg-orange-200">
                <h3
                  class="text-orange-400 font-bold mb-4 bg-[#4c4141] min-w-min pb-4 px-4"
                  style={{ width: "fit-content", padding: "5px 8px" }}
                >
                  {data.title}
                </h3>
                <div class="bg-white rounded-lg shadow-2xl md:flex h-[70%]">
                  <div className="image_y w-[50%]">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={data.img}
                      alt="Laptop on Desk"
                      class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none h-full"
                    />
                  </div>
                  <div class="p-6">
                    <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                      {data.description.substring(0, 120)}
                    </h2>
                    <p class="text-orange-700">Look at me go sideways!</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <Alphabets />
    </div>
  );
}
