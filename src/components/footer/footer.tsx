import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faMailBulk,
    faLocationDot

} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (<div className="flex flex-col bg-[#18414e] h-[540px] md:h-80 lg:h-80 xl:h-80 2xl:h-80 mb-8 mt-4  justify-center items-center md:items-start lg:items-start xl:items-start 2xl:items-start">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center ml-10 xl:ml-40 lg:ml-40 md:ml-40 2xl:ml-40">
            <div className="flex h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20  w-72  md:w-80 lg:w-80 xl:w-80 2xl:w-80 bg-[#215d72] rounded-lg items-center justify-center mr-6 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8 mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <div className="flex space-x-6">
                    <div className="flex items-center mr-8 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8">
                        <FontAwesomeIcon className="text-white text-[25px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]" icon={faPhone} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal">Phone Number</p>
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal">+974 3118 1843</p>
                    </div>
                </div>
            </div>
            <div className="flex h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20  w-72 md:w-80 lg:w-80 xl:w-80 2xl:w-80 bg-[#215d72] rounded-lg items-center justify-center mr-6  md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8 mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <div className="flex">
                    <div className="flex items-center mr-4 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8">
                        <FontAwesomeIcon className="text-white text-[25px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]" icon={faMailBulk} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal">Email Address</p>
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal">Elbritcqhr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex h-16 md:h-20 lg:h-20 xl:h-20 2xl:h-20  w-72 md:w-80 lg:w-80 xl:w-80 2xl:w-80 bg-[#215d72] rounded-lg items-center justify-center mr-6  md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8 mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <div className="flex space-x-2">
                    <div className="flex items-center mr-4 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8">
                        <FontAwesomeIcon className="text-white text-[25px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]" icon={faLocationDot} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal ">Office location</p>
                        <p className="text-white text-sm font-normal md:text-normal lg:text-normal xl:text-normal 2xl:text-normal">Ambassador street, Zone 61</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center mt-2 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8  mb-4 ml-0 xl:ml-40 lg:ml-40 md:ml-40 2xl:ml-40">
            <div>
                <Image
                    src="/assets/tablet_small.png"
                    alt="Logo Image"
                    className="rounded-lg mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
                    width={200}
                    height={200}
                    priority={true} />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-white text-[12px] w-[80%] md:w-96 lg:w-96 xl:w-96 2xl:w-96 md:ml-20 lg:ml-20 xl:ml-20 2xl:ml-20">Your health, physical and emotional well-being is important
                    to us. We are always by your side and have made it even
                    easier for you to find the necessary vitamins.</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-2 ml-10 xl:ml-40 lg:ml-40 md:ml-40 2xl:ml-40">
            <div className="flex mr-8 items-center">
                <FontAwesomeIcon className="text-[15px] text-slate-400" icon={faLocationDot} />
                <p className="text-xs text-[#fefefe] ml-4">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
            </div>
        </div>
    </div>)
}