import Image from "next/image";

export default function Ingredient() {
  return (
    <div className="flex flex-col mt-[850px] lg:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40 items-center">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-[80%]">
        <div className="flex flex-col basis-[39%] mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <p className="text-[#013569] font-semibold">Ingredients</p>
          <p className="text-3xl font-bold mt-4">Better Ingredients</p>
          <p className="text-gray-400 text-xs  mt-4">
            Only the best when you choose products offered on our platform
            high-quality ingredients for high quality products!{" "}
          </p>
        </div>
        <div className="flex basis-[28.3333333333%] relative mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <Image
            src="/assets/vitamin_c.png"
            alt="vitamin C"
            className=""
            width={300}
            height={300}
            priority={true}
          />
          <p className="absolute ml-6 top-6 text-[#013569] font-semibold text-lg">
            Vitamin C
          </p>
          <p className="absolute ml-6 top-14 text-gray-600 font-medium text-sm">
            Vitamin C as ascorbic acid
          </p>
          <p className="absolute ml-6 bottom-6 text-sm text-[#013569] font-semibold underline underline-offset-4 decoration-2 cursor-pointer">
            SEE More
          </p>
        </div>
        <div className="flex basis-[28.3333333333%] relative mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <Image
            src="/assets/vitamin_b3.png"
            alt="vitamin B3"
            className=""
            width={300}
            height={300}
            priority={true}
          />
          <p className="absolute ml-6 top-6 text-[#013569] font-semibold text-lg">
            Vitamin B3
          </p>
          <p className="absolute ml-6 top-14 text-gray-600 font-medium text-sm">
          Niacin for healthy gut and skin
          </p>
          <p className="absolute ml-6 bottom-6 text-sm text-[#013569] font-semibold underline underline-offset-4 decoration-2 cursor-pointer">
            SEE More
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 w-[80%]">
        <div className="flex basis-[28.3333333333%] relative mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <Image
            src="/assets/Magnesium.png"
            alt="Magnesium"
            className=""
            width={300}
            height={300}
            priority={true}
          />
          <p className="absolute ml-6 top-6 text-[#013569] font-semibold text-lg">
            Magnesium
          </p>
          <p className="absolute ml-6 top-14 text-gray-600 w-44 font-medium text-sm">
          Boost energy and support muscle function
          </p>
          <p className="absolute ml-6 bottom-6 text-s text-[#013569] font-semibold underline underline-offset-4 decoration-2 cursor-pointer">
            SEE More
          </p>
        </div>
        <div className="flex basis-[28.3333333333%]  relative mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <Image
            src="/assets/Hyaluronic_Acid.png"
            alt="Hyaluronic Acid"
            className=""
            width={300}
            height={300}
            priority={true}
          />
          <p className="absolute ml-6 top-6 text-[#013569] font-semibold text-lg">
          Hyaluronic Acid
          </p>
          <p className="absolute ml-6 top-14 text-gray-600 w-44 font-medium text-sm">
          For smooth, supple and soft skin!
          </p>
          <p className="absolute ml-6 bottom-6 text-sm text-[#013569] font-semibold underline underline-offset-4 decoration-2 cursor-pointer">
            SEE More
          </p>
        </div>
        <div className="flex basis-[28.3333333333%]  relative mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
          <Image
            src="/assets/Lactobacillus.png"
            alt="Lactobacillus"
            className=""
            width={300}
            height={300}
            priority={true}
          />
          <p className="absolute ml-6 top-6 text-[#013569] font-semibold text-lg">
          Lactobacillus
          </p>
          <p className="absolute ml-6 top-14 text-gray-600 w-44 font-medium text-sm">
          Invigorate your gut microbiome
          </p>
          <p className="absolute ml-6 bottom-6 text-[#013569] text-sm font-semibold underline underline-offset-4 decoration-2 cursor-pointer">
            SEE More
          </p>
        </div>
        <div className="flex flex-col basis-[10%] relative hidden md:block lg:block xl:block 2xl:block">
          <div className="bg-[#a0ddf2] h-24 w-24 rounded-br-full"></div>
          <div className="mt-4 h-24 w-24 rounded-full bg-[#ffcc55]"></div>
        </div>
      </div>
    </div>
  );
}



