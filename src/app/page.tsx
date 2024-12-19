import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTablet,
  faWeightScale,
  faFaceAngry,
  faFlask,
  faLeaf,
  faFlag,
  faCartPlus,
  faTree,
  faCarCrash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen p-8">
      <div className="bg-[#e3f5fb] h-full w-full">
        <div className="">
          <h1 className="text-center text-[#013569] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold p-8">
            Essential Vitamins
          </h1>
          <div className="flex flex-col sm:flex-row md:flex-row items-center">
            <div className="flex flex-col basis-1/3 items-center mt-2 sm:mt-6 md:mt-0 lg:mt-0 xl:mt-6">
              <div>
                <p className="mb-2 text-slate-500 text-lg">
                  Online Medical Supplies
                </p>
                <p className="text-[#013569] font-semibold text-2xl">
                  Get Your Vitamins
                </p>
                <p className="text-[#013569] font-semibold text-2xl mb-2">
                  & Minerals
                </p>
                <button className="rounded-3xl bg-[#18414e] h-10 w-36">
                  <p className="text-white">Explore</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col basis-1/3 items-center mt-6 md:m-0 lg:m-0 xl:mt-0">
              <div>
                <Image
                  src="/assets/f2-1.png"
                  alt="bottle"
                  className="h-52 w-52 md:h-76 md:w-76 lg:h-76 lg:w-76 xl:h-72 xl:w-72 2xl:h-76 2xl:h-76"
                  width={300}
                  height={300}
                  priority={true}
                />
              </div>
            </div>
            <div className="flex  flex-col basis-1/3 items-center mt-8">
              <div className="flex items-center mb-4">
                <div className="flex rounded-full h-12 w-12 bg-[#18414e] justify-center items-center">
                  <FontAwesomeIcon icon={faTablet} />
                </div>
                <div className="ml-4 w-52">
                  <p className="text-[#18414e] text-xl font-bold">Vitamins</p>
                  <p className="text-slate-500 text-xs">
                    Increased Vitamins and minerals in your diet
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex rounded-full h-12 w-12 bg-[#18414e] justify-center items-center">
                  <FontAwesomeIcon icon={faWeightScale} />
                </div>
                <div className="ml-4 w-52">
                  <p className="text-[#18414e] text-xl font-bold">
                    Weight Loss
                  </p>
                  <p className="text-slate-500 text-xs">
                    Weight Loss Find scientifically proven solutions
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex rounded-full h-12 w-12 bg-[#18414e] justify-center items-center">
                  <FontAwesomeIcon icon={faFaceAngry} />
                </div>
                <div className="ml-4 w-52">
                  <p className="text-[#18414e] text-xl font-bold">
                    Functional Foods
                  </p>
                  <p className="text-slate-500 text-xs">
                    Functional Foods From protein powers to baby formula
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[50px] mt-20 md:mt:28 lg:mt-28 h-[950px] sm:h-1/4 md:h-2/6 lg:h-2/5 xl:h-96   w-full md:w-11/12 lg:w-4/5 bg-[#18414e] items-center mx-auto my-auto relative">
          <div className="absolute top-[-40px] md:top-[-60px] lg:top-[-60px] w-full">
            <div className="flex flex-col md:flex-row lg:flex-row items-center mb-12">
              <div className="flex flex-col mb-4 md:mb-0 lg:mb-0 basis-1/3 items-center justify-center ">
                <div className="flex rounded-full bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24  items-center justify-center">
                  <FontAwesomeIcon
                    icon={faFlask}
                    className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                  />
                </div>
                <p className="text-white text-lg font-semibold mt-2 mb-2">
                  Clinically Studied
                </p>
                <p className="text-slate-300 text-xs text-center w-52">
                  All products that we offer have undergone lab and safety tests
                </p>
              </div>
              <div className="flex basis-1/3 items-center mb-4 md:mb-0 lg:mb-0 justify-center">
                <div className="flex flex-col basis-1/3 items-center justify-center ">
                  <div className="flex rounded-full bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24  items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLeaf}
                      className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-2 mb-2">
                    Vegetarian Friendly
                  </p>
                  <p className="text-slate-300 text-xs text-center w-56 ">
                    We have a wide selection of vegetarian products to meet your
                    needs
                  </p>
                </div>
              </div>
              <div className="flex basis-1/3 items-center justify-center mb-2 md:mb-0 lg:mb-0">
                <div className="flex flex-col basis-1/3 items-center justify-center ">
                  <div className="flex rounded-full bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24  items-center justify-center">
                    <FontAwesomeIcon
                      icon={faFlag}
                      className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-2 mb-2">
                    Made in India
                  </p>
                  <p className="text-slate-300 text-xs text-center w-52">
                    Shop local and explore health products made right here in
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full top-0 bottom-0 mt-52 xl:mt-40 md:mt-32">
            <div className="flex flex-col md:flex-row lg:flex-row mt-60 md:mt-0 lg:mt-0  items-center">
              <div className="flex basis-1/3 items-center justify-center">
                <div className="flex flex-col basis-1/3 items-center justify-center ">
                  <div className="flex rounded-full bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-2 mb-2">
                    Free shipping
                  </p>
                  <p className="text-slate-300 text-xs text-center w-52">
                    We deliver to your door with no shipping costs on your
                    orders
                  </p>
                </div>
              </div>
              <div className="flex basis-1/3 items-center justify-center mt-4">
                <div className="flex flex-col basis-1/3 items-center justify-center ">
                  <div className="flex rounded-full bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCarCrash}
                      className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-2 mb-2">
                    No Risk
                  </p>
                  <p className="text-slate-300 text-xs text-center w-52">
                    We ensure that all products are safe and within their use-by
                    date
                  </p>
                </div>
              </div>
              <div className="flex basis-1/3 items-center justify-center mt-4">
                <div className="flex flex-col basis-1/3 items-center justify-center ">
                  <div className="flex rounded-full  bg-white h-16 w-16 md:h-24 md:w-24 lg:h-24 lg:w-24 items-center justify-center">
                    <FontAwesomeIcon
                      icon={faTree}
                      className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[50px]"
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-2 mb-2">
                    GMO free
                  </p>
                  <p className="text-slate-300 text-xs text-center w-52">
                    Natural, no modified products and derivatives for those who
                    need it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
