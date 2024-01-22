import React, { useEffect, useState } from "react";
import data from "../../../src/assets/data.json";
import { RxCross2 } from "react-icons/rx";
const OurEquep = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("../../../src/assets/data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(data);
const [setDetails, setdetails]=useState()
  const handelDetails=(id)=>{
    setdetails(id)
  }

  const hnadelClosed=()=>{
    setdetails()
  }
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto  rounded-xl">
        {datas.map((data, index) => (
          <div key={index} className=" w-[300px] h-[360px] mx-auto rounded-xl border-t-2 border-t-black relative">
            <div className=" flex justify-center">
            <img
            className=" h-[200px] w-full px-4 py-2 border-x-2 border-black rounded-t-xl shadow-lg flex justify-center items-center"
            src={data.image}></img>
            </div>
            <div className=" h-[150px] shadow-transparent bg-blue-300 bg-opacity-10 rounded-b-xl border-b-2 border-x-[1px] border-x-black border-b-black py-3">
            <p className=" text-2xl px-2  font-bold" >{data.title}</p>
            <p  className=" text-2xl px-2 font-bold " >{data.description.brand}</p>
            {/* Button All Function */}
            <div className=" h-[60px] flex justify-between items-center px-2">
          <div>
          <button
          onClick={()=>handelDetails(data.id)}
          className=" hover:border-b-4 hover:border-black text-xl font-bold border-yellow-400 border-2 rounded-b-md rounded-t-md px-4">
            Details
          </button>
          </div>
          <div>
          <button className=" hover:border-b-4 hover:border-black text-xl text-green-600 font-bold border-yellow-400 border-2 rounded-b-md rounded-t-md px-4">
            Book Now
          </button>
          </div>
        </div>
            </div>


            <div
             className={`${setDetails === data.id ? " absolute top-0   w-[300px] h-[350px] rounded-xl bg-black bg-opacity-80"
             
             : " hidden "}`}>
              <div>
                <div onClick={hnadelClosed}>
                <p className=" p-4"><RxCross2 className=" text-red-600 text-2xl font-bold" /></p>
                </div>
                <div>
          
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p className=" text-white text-2xl"> <span className=" mx-2 text-green-600">Brand:</span> {data.description.brand}</p>
                  <p>{data.description.Weight}</p>
                </div>

              </div>

            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default OurEquep;
