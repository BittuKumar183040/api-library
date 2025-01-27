"use client"

import { useEffect, useState } from "react";
import { VscGitFetch } from "react-icons/vsc";

const url = "https://api.adviceslip.com/advice";
export default function Home() {
  const [advice, setAdvice] = useState({ id: 0, advice: "" })
  const [loading, setLoading] = useState(false)
  const adviceChanger = async () => {
    setLoading(true)
    const request = await fetch(url)
    const data = await request.json()
    console.log(data.slip)
    setAdvice(data.slip)
    setLoading(false)
  }

  useEffect(() => {
    adviceChanger();
  }, [])


  return (
    <div>
      <main className=" flex justify-center items-center flex-col h-dvh">
        <div className=" container mx-auto flex flex-col items-center justify-center pt-5">
          <p className=" font-bold">Advice Generator</p>
          <div className=" h-px mt-1 w-10/12 bg-slate-500 "></div>
        </div>
        <div className=" flex-1 flex justify-between items-center">
          {loading ?
            <div className=" animate-pulse relative bg-[#dedede] p-2 rounded-lg shadow-md h-96 w-96">
              <div className=" absolute h-7 flex gap-2 -top-3 left-10 ">
                <span className=" h-full w-2 bg-gray-500"></span>
                <span className=" h-full w-2 bg-gray-500"></span>
              </div>

              <div className=" mt-10 p-4 flex gap-5 flex-col">
                <p className=" h-4 w-64 bg-gray-300 rounded-full"></p>
                <p className=" h-4 w-72 bg-gray-400 rounded-full"></p>
                <p className=" h-4 w-64 bg-gray-300 rounded-full"></p>
              </div>

              <div className=" absolute -bottom-4 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 text-sm rounded-full px-4 text-white p-2 flex gap-4 items-center justify-between ">
                  <VscGitFetch size={20} />
                  <p className=" h-4 w-10 bg-gray-100 rounded-full"></p>
                </div>
              </div>
            </div>
            :
            <div className=" relative bg-[#cdf301] p-2 rounded-lg shadow-md h-96 w-96 overflow">
              <div className="group absolute h-7 flex gap-2 -top-3 left-10 ">
                <span className=" h-full w-2 bg-gray-800"></span>
                <span className=" h-full w-2 bg-gray-800"></span>
                <span className=" group-hover:w-10 w-0 text-black transition-all overflow-hidden text-xl">{advice.id}</span>
              </div>

              <div className=" mt-10 p-4 whitespace-break-spaces">
                <p className=" text-2xl font-extrabold text-black">{advice.advice}</p>
              </div>

              <div className=" absolute -bottom-4 left-0 w-full flex items-center justify-center">
                <div className="bg-orange-500 text-sm rounded-full px-4 text-white p-2 flex gap-4 items-center justify-between cursor-pointer "
                  onClick={adviceChanger}>
                  <VscGitFetch size={20} />
                  <p>Next</p>
                </div>
              </div>
            </div>

          }
        </div>
      </main>

    </div>
  );
}
