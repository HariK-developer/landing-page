import Image from "next/image";

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-center mt-6 mb-6 w-full">
            <div className="flex flex-col items-center mt-4 mb-8">
                <p className="text-sm font-semibold text-[#013569] mb-2">our blog</p>
                <p className="text-3xl font-bold">Latest News</p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                <div className="mr-8 mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                    <div className="relative">
                        <Image
                            src="/assets/ginger.png"
                            alt="Ginger Image"
                            className="mb-4 rounded-xl"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2022 Is Back</p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/assets/tablet_small.png"
                            alt="Tablet Small Image"
                            className=" rounded-xl"
                            width={300}
                            height={20}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2023 Is Back</p>
                    </div>
                </div>
                <div className="mr-8">
                    <div className="relative">
                        <Image
                            src="/assets/ginger_small.png"
                            alt="Ginger small Image"
                            className="mb-4 rounded-xl"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2022 Is Back</p>
                    </div>
                    <Image
                        src="/assets/tablet.png"
                        alt="Tablet Image"
                        className=" rounded-xl mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
                        width={300}
                        height={300}
                        priority={true}
                    />
                </div>
                <div className="mr-8">
                    <div className="relative">
                        <Image
                            src="/assets/ginger.png"
                            alt="Ginger Image"
                            className="mb-4 rounded-xl"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2022 Is Back</p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/assets/tablet_small.png"
                            alt="Tablet Small Image"
                            className="rounded-xl mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2023 Is Back</p>
                    </div>
                </div>
                <div className="">
                    <div className="relative">
                        <Image
                            src="/assets/ginger_small.png"
                            alt="Ginger small Image"
                            className="mb-4 rounded-xl"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">20 APR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">The Covid-19 Epidemic In 2022 Is Back</p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/assets/tablet.png"
                            alt="Tablet Image"
                            className="rounded-xl"
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <div className="flex absolute top-4 -left-2 h-7 w-24 bg-blue-500 bg-[#013569] rounded-r-full items-center justify-center">
                            <p className="text-white text-xs font-semibold">17 MAR</p>
                        </div>
                        <p className="absolute top-16 w-[80%] text-medium text-white ml-8 font-semibold">Hac hendrerit mus nons semper suspendisse</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
