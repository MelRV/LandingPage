import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill } from "react-icons/ri";


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
            {/*Image*/}
            <div className="md:col-span-3 flex items-center justify-center relative">
                <div>
                <img src="hero.png" className="w-[450px] h-[450px] object-cover -mt-28" />
                 <div className="bg-white relative p-4 flex flex-col gap-2 justify-center max-w-[250px] mx-auto">
                    <div className="rounded-lg shadow-xl">
                    <div className="flex items-center">
                    <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" 
                    className="h-10 w-10 object-contain rounded-full ring-2 ring-gray-300 bg-white"
                    />
                    <img src="https://img.freepik.com/psd-gratis/hombre-sonriendo_1154-473.jpg" 
                    className="h-10 w-10 object-contain rounded-full ring-2 ring-gray-300 bg-white -ml-4"
                    />
                    <img src="https://img.freepik.com/psd-gratis/hombre-pulgares-arriba_1154-467.jpg" 
                    className="h-10 w-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                    />
                    <img src="https://img.freepik.com/psd-gratis/mujer-joven-sonriente-manos-su-espalda_1154-300.jpg" 
                    className="h-10 w-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                    />
                    </div>
                    <h2 className="text-xl font-bold tracking-[1px] text-gray-800">120 + Employees</h2>
                    <div className="flex items-center gap-2 text-lg text-gray-500">
                        <RiStarFill className="text-primary" />5.0 (3.1K Reviews)
                    </div>
                    <RiCheckboxBlankCircleFill className="absolute text-primary text-8xl -right-11 -bottom-10 -z-10"/>
                    </div>
                 </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 
                -translate-x-1/2 w-[380px] h-[380px] bg-white border-[10px] border-primary rounded-full -z-10">
                </div>
            </div>
        </section>
    )
}

export default Hero