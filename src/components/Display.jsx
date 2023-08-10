import { Link } from "react-router-dom"

export default function Display({ show, setShow }) {

    return (
        <div className="transition fixed z-20 top-0 right-0 bg-gray-500 min-w-[200px] h-[200px] rounded-lg border-2 border-white">
            <div onClick={() => setShow(!show)} className=" cursor-pointer absolute right-[25px] top-[25px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>
            <div className=" w-full justify-center absolute top-[70px]  flex flex-col items-center text-white">
                <Link to="/" className='transition hover:scale-110 pb-2'> Home </Link>
                <hr className="border-2 border-white w-[80%] "></hr>
                <Link to="form" className='transition hover:scale-110 pt-2'> Form </Link>
            </div>

        </div>
    )
}
