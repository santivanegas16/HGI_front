import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUrl from "../../apiUrl";
import axios from "axios";

export default function Index() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "/users")
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, [])

  return (
    <main className="flex flex-col items-center pt-10 px-5 pb-5 min-h-screen bg-[#EBEBEB]">
      <h1 className='leading-10 font-bold text-4xl mb-[30px]'>Users</h1>
      <table className="table-auto text-center bg-white rounded-2xl ">
        <thead className="border-b border-black">
          <tr>
            <th className="w-[200px] p-2">Name</th>
            <th className="w-[200px] p-2">Last Name</th>
          </tr>
        </thead>
        <tbody className="">
          {(users.length !== 0) ? (
            users?.map((each, index) =>
              <tr key={index}>
                <td className="w-[200px] p-2"><Link to={"user/" + each?.id}>{each?.name}</Link></td>
                <td className="w-[200px] p-2">{each?.last_name}</td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={2} className="w-[200px] p-2">No registered users</td>

            </tr>
          )}



        </tbody>
      </table>
    </main>
  )
}
