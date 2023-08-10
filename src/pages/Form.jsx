import { useRef } from 'react';
import axios from 'axios';
import apiUrl from "../../apiUrl";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Form() {

    const navigate = useNavigate();

    const actionButton = () => {

        let data = {
            name: name.current?.value.trim(),
            last_name: last_name.current?.value.trim(),
            email: email.current?.value.trim(),
            phone: phone.current?.value.trim(),
        }

        axios.post(apiUrl + "/new_user", data)
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "User registered",
                })
            }).then(() => navigate('/'))
            .catch(error =>
                Swal.fire({
                    icon: "error",
                    title: "Error Creating Author",
                    html: error.response.data,               
                })
            )
    }

    const name = useRef()
    const last_name = useRef()
    const email = useRef()
    const phone = useRef()

    return (
        <main className="w-full min-h-screen flex justify-center bg-[#EBEBEB] ">
            <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center py-2 ">
                <h1 className='leading-10 font-bold text-4xl mb-[30px]'>New User</h1>
                <form className='flex flex-col items-center w-[280px] md:w-[350px] lg:w-[420px] text-base gap-[12px] bg-white rounded-2xl p-5'>
                    <input ref={name} className='w-full border border-transparent border-b-[#424242]  px-4 py-2' type="text" placeholder="Name" id="name" required />
                    <input ref={last_name} className='w-full border border-transparent border-b-[#424242] px-4 py-2' type="text" placeholder="Last name" id="last_name" required />
                    <input ref={email} className='w-full border border-transparent border-b-[#424242] px-4 py-2' type="email" placeholder="Email" id="email" required />
                    <input ref={phone} className='w-full border border-transparent border-b-[#424242] px-4 py-2' type="tel" placeholder="Phone" id="phone" required />
                    <input onClick={actionButton} className='bg-black text-white text-2xl cursor-pointer font-medium py-2 transition hover:scale-110 w-[150px] rounded-full text-center mt-[20px]' type="button" value="Send" />
                </form>
            </div>
        </main>
    )
}
