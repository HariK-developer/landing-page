import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faMailBulk,
    faLocationDot

} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (<div className="flex flex-col bg-[#18414e] h-80 mb-8 mt-8 w-full justify-center items-start ">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center ml-10 xl:ml-40 lg:ml-40 md:ml-40 2xl:ml-40">
            <div className="flex h-20 w-80 bg-[#215d72] rounded-lg items-center justify-center mr-8">
                <div className="flex">
                    <div className="flex mr-8 items-center">
                        <FontAwesomeIcon className="text-[40px] text-white" icon={faPhone} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-normal font-normal">Phone Number</p>
                        <p className="text-white text-normal font-normal">+974 3118 1843</p>
                    </div>
                </div>
            </div>
            <div className="flex h-20 w-80 bg-[#215d72] rounded-lg items-center justify-center mr-8">
                <div className="flex">
                    <div className="flex mr-8 items-center">
                        <FontAwesomeIcon className="text-[40px] text-white" icon={faMailBulk} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-normal font-normal">Email Address</p>
                        <p className="text-white text-normal font-normal">Elbritcqhr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex h-20 w-80 bg-[#215d72] rounded-lg items-center justify-center">
                <div className="flex">
                    <div className="flex mr-8 items-center">
                        <FontAwesomeIcon className="text-[40px] text-white" icon={faLocationDot} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-normal font-normal">Office location</p>
                        <p className="text-white text-normal font-normal">Ambassador street, Zone 61</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-8 ml-40">
            <div>
                <Image
                    src="/assets/tablet_small.png"
                    alt="Logo Image"
                    className="rounded-xl"
                    width={200}
                    height={200}
                    priority={true} />
            </div>
            <div>
                <p className="text-white text-[11px] w-80 ml-20">Your health, physical and emotional well-being is important
                    to us. We are always by your side and have made it even
                    easier for you to find the necessary vitamins.</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-8 ml-40">
            <div className="flex mr-8 items-center">
                <FontAwesomeIcon className="text-[15px] text-slate-400" icon={faLocationDot} />
                <p className="text-xs text-[#fefefe] ml-4">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
            </div>
        </div>
    </div>)
}