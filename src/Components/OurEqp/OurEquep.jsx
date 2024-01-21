import React, { useEffect, useState } from "react";
import data from "../../../src/assets/data.json";
const OurEquep = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("../../../src/assets/data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto border-2 rounded-xl">
        {datas.map((data, index) => (
          <div key={index} className=" w-[300px] h-[360px] mx-auto rounded-xl border-t-2 border-t-black">
            <div className=" flex justify-center">
            <img
            className=" h-[200px] w-full px-4 py-2 rounded-t-xl shadow-lg flex justify-center items-center"
            src={data.image}></img>
            </div>
            <div className=" h-[150px] shadow-transparent bg-blue-300 bg-opacity-10 rounded-b-xl border-b-2 border-x-[1px] border-x-black border-b-black py-3">
            <p className=" text-2xl px-2 py-1 font-bold" >{data.title}</p>
            <p  className=" text-2xl px-2 py-1" >{data.description}</p>
            <div className=" flex justify-between items-center px-2 py-1">
          <button className=" hover:border-b-4 text-xl border-black border-2 rounded-b-md rounded-t-md px-4">
            Details
          </button>
          <button className=" hover:border-b-4 text-xl text-green-600 font-bold border-black border-2 rounded-b-md rounded-t-md px-4">
            Book Now
          </button>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEquep;
