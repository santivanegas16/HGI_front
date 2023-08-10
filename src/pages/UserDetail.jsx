import { useEffect, useState } from "react";
import apiUrl from "../../apiUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function UserDetail() {

    const { id } = useParams()

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(apiUrl + "/userdetail/" + id)
        .then(res => setUser(res.data))
        .catch(error => console.log(error));
      }, [])

    return (
        <main className="flex flex-col items-center pt-10 px-5 pb-5 min-h-screen bg-[#EBEBEB]">
            <h1 className='leading-10 font-bold text-4xl mb-[30px]'>Users</h1>
            <table className="table-auto text-center bg-white rounded-2xl hidden md:block">
                <thead className="border-b border-black">
                    <tr>
                        <th className="w-[200px] p-2">ID</th>
                        <th className="w-[200px] p-2">Name</th>
                        <th className="w-[200px] p-2">Last Name</th>
                        <th className="w-[200px] p-2">Email</th>
                        <th className="w-[200px] p-2">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-[200px] p-2">{id}</td>
                        <td className="w-[200px] p-2">{user.name}</td>
                        <td className="w-[200px] p-2">{user.last_name}</td>
                        <td className="w-[200px] p-2">{user.email}</td>
                        <td className="w-[200px] p-2">{user.phone}</td>
                    </tr>
                </tbody>
            </table>

            <table className="text-center bg-white rounded-2xl md:hidden table-row">
                <tbody>
                    <tr>
                        <th className="w-[200px] p-2 border-r border-black">ID</th>
                        <td className="w-[200px] p-2">Santiago</td>
                    </tr>
                    <tr>
                        <th className="w-[200px] p-2 border-r border-black">Name</th>
                        <td className="w-[200px] p-2">Santiago</td>
                    </tr>
                    <tr>
                        <th className="w-[200px] p-2 border-r border-black">Last Name</th>
                        <td className="w-[200px] p-2">Santiago</td>
                    </tr>
                    <tr>
                        <th className="w-[200px] p-2 border-r border-black">Email</th>
                        <td className="w-[200px] p-2">Santiago</td>
                    </tr>
                    <tr>
                        <th className="w-[200px] p-2 border-r border-black">Phone</th>
                        <td className="w-[200px] p-2">Santiago</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}
