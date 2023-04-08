import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Search} from "../Assets/search.svg";
export default function Navbar() {
    return(
        <div className={'flex item-center justify-center h-full border border-t-[3px] border-t-[#ef8236] shadow-lg bg-[#f8f9f9]'}>
            <div className="flex items-center justify-between w-5/6 font-medium py-[10px]">
                <Link to={'/'}>
                    <img src={require("../Assets/logo-stackoverflow.png")} alt={"logo"} className={'h-[40px] w-[200px]'}/>
                </Link>
                <div className={'cursor-pointer rounded-[25px] hover:bg-gray-300 px-[10px] py-[10px]'}><Link to={'/'}>About</Link></div>
                <div className={'cursor-pointer rounded-[25px] hover:bg-gray-300 px-[10px] py-[10px]'}><Link to={'/'}>Products</Link></div>
                <div className={'cursor-pointer rounded-[25px] hover:bg-gray-300 px-[10px] py-[10px]'}><Link to={'/'}>For Teams</Link></div>
                <form className={'flex border border-[#0000003e] rounded-[3px]'}>
                    <div className={'px-5 py-1'}><Search /></div>
                    <input className={'w-[300px] active:outline-none px-5 py-1'} type={"text"} placeholder={"Search..."}/>
                </form>
                <div className={'hover:bg-[#d3e4eb] border border-blue bg-[#e7f8fe] px-3 py-2 rounded-[3px] cursor-pointer'}><button>Log In</button></div>
            </div>
        </div>
    )
}