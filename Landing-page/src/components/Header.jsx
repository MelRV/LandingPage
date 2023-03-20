import React from "react";
import {RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {
    return (<header className="flex items-center w-full p-4">
        <div className="texte-center w-1/6">
            <span className="text-2xl font-bold relative p-2">
                Power<span className="text-primary text-5xl">.</span>{" "}
                <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3" />
            </span>
        </div>
        <nav className="flex-1 text-center">
            <h1>Nav</h1>
        </nav>
    </header>
    )
}

export default Header
