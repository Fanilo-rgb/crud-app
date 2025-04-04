import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>GTCoding.</Link>
      <Link className="bg-white p-2" href={"/addTopic"}>Add Topic</Link>
    </div>
  )
}
export default Navbar
