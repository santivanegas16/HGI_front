import { useState } from "react";
import Display from './Display';
import { Link } from "react-router-dom"

export default function Navbar() {

    const [show, setShow] = useState(false)

    return (
        <nav className="bg-[#EBEBEB] w-full ">
            <div className="flex justify-between items-center w-full top-0 z-10 h-[50px] bg-gray-500 text-white px-7 font-bold text-[24px] rounded-b-2xl">
                <h1>HGI S.A.S</h1>
                <div className='hidden md:flex'>
                    <Link to="/" className='pr-5 cursor-pointer transition hover:scale-110'>Home</Link>
                    <p className=''>|</p>
                    <Link to="form" className='pl-5 cursor-pointer transition hover:scale-110'>Form</Link>
                </div>
                {show && <Display show={show} setShow={setShow} />}
                <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="md:hidden bg-gray-500 hover:bg-gray-700 hover:border-2 hover:border-white rounded-lg bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </nav>
    )
}
