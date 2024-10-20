import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black px-8">
        <div className="flex w-screen justify-center bg-slate-900">
          <div className=" ">Some Sort of marquee</div>
        </div>
        <div>Blog sub</div>
        <div className="mx-auto   h-screen w-full max-w-3xl space-y-8  rounded-md   bg-[#001534] px-8 py-4 lg:max-w-4xl print:space-y-2">
          <div className="mt-5 flex flex-col items-center justify-center  ">
            <Image
              src={
                "https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
              }
              height={800}
              width={800}
              alt={""}
              className=""
              content="center"
            />
            <p className="mt-1 text-sm text-gray-400">Image description</p>
          </div>
          <h1 className="text-[22px] font-semibold text-gray-300  ">
            Blog title , Should be little long like the title itself describes
            half the things
          </h1>
          <p>Content here</p>
        </div>
      </div>
    </div>
  );
}

export default page;
