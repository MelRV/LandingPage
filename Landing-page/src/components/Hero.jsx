import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill } from "react-icons/ri";


const Hero = () => {
    return (
        <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8">
            {/*Information*/}
            <div className="md:col-span-5 flex items-center justify-center p-16">
                <div className="flex flex-col gap-8">
                    <h1 className="text-7xl font-bold leading-[7.5rem]">Web Design Impactful Digital{" "}
                    <span className="text-primary py-2 px-6 border-8 border-primary relative">
                        Products
                        <RiCheckboxBlankCircleFill className="text-white text-lg absolute -left-5 -top-5 p-2 
                        bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-white text-lg absolute -right-5 -top-5 p-2 
                        bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-white text-lg absolute -left-5 -bottom-5 p-2 
                        bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-white text-lg absolute -right-5 -bottom-5 p-2 
                        bg-primary rounded-full box-content" />
                    </span>
                    </h1>
                    <p className="text-gray-500 text-2lx leading-[2.5rem]">Help find solutions with initutive and in accordance with client business goals. We
                        provide high queality services.</p>
                    <div className="flex items-center gap-4">
                        <button className="bg-primary text-white py-2 px-8 rounded-xl text-xl">Contact us</button>
                        <button className=" flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
                            <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />Watch our <br />introduction video
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-red-600 md:col-span-3">Image</div>
        </section>
    )
}

export default Hero