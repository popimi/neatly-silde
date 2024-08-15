import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import useShow from "../../customhooks/show-hook";
import { usePage } from "../../contexts/use-page";
import { image } from "../../datas/image-data";
import { member } from "../../datas/member-data";

const IntroductionMain = () => {
  const { size, setSize } = usePage();
  return (
    <div>
      {/*section1 */}
      <section
        id="section1"
        className="h-[100dvh] w-full items-center justify-center flex relative"
      >
        <img
          src={logo}
          className={`absolute z-20 size-96 hover:scale-125 bg-green-500 duration-1000 transition-all `}
          alt=""
        />
        <div className="flex flex-wrap w-full h-full justify-center items-center overflow-hidden">
          {image &&
            image.map((v, i) => {
              return (
                <div
                  key={i}
                  className="xl:w-1/2 xl:h-1/2 flex justify-center items-center "
                >
                  <img src={v} className="" />
                </div>
              );
            })}
        </div>
      </section>
      {/*section2 */}
      <section
        id="section2"
        className="w-full h-[100dvh] flex flex-col justify-evenly relative items-center"
      >
        <img
          src={image[0]}
          alt=""
          className="absolute top-0 -z-20 blur-[2px] w-full bg-blend-multiply h-full"
        />
        <h1 className="bg-green-200 rounded-lg px-10 text-green-700 shadow-shadow">
          Features
        </h1>
        <div className="flex flex-row justify-between gap-10 md:w-1/2">
          <div className="flex flex-col gap-10 bg-white justify-center p-4 relative rounded-bl-lg rounded-r-lg shadow-shadow">
            <h3 className="absolute -top-16 left-0 bg-white rounded-t-lg p-2 pr-5 text-center items-center flex justify-center gap-2">
              <span className="material-symbols-outlined text-center">
                person
              </span>{" "}
              User
            </h3>
            <h4 className="text-white cursor-pointer font-sans font-[600] py-1 px-3 shadow-shadow bg-orange-600 rounded-md  duration-200 hover:scale-110">
              <span className="material-symbols-outlined ">search</span> Search
              & Filter
            </h4>
            <h4 className="text-white cursor-pointer font-sans font-[600] py-1 px-3 shadow-shadow bg-orange-600 rounded-md hover:bg-orange-400 duration-200 hover:scale-110">
              <span className="material-symbols-outlined">calendar_month</span>{" "}
              Booking
            </h4>
            <h4 className="text-white cursor-pointer font-sans font-[600] py-1 px-3 shadow-shadow bg-orange-600 rounded-md hover:bg-orange-400 duration-200 hover:scale-110">
              <span className="material-symbols-outlined">payments</span>{" "}
              Payment
            </h4>
            <h4 className="text-white cursor-pointer font-sans font-[600] py-1 px-3 shadow-shadow bg-orange-600 rounded-md hover:bg-orange-400 duration-200 hover:scale-110">
              <span className="material-symbols-outlined">cloud_upload</span>{" "}
              Uploading
            </h4>
          </div>
          <div className="flex flex-col gap-10 bg-orange-600 justify-center p-4 relative rounded-bl-lg rounded-r-lg shadow-inner">
            <h3 className="absolute -top-16 left-0 text-white bg-orange-600 rounded-t-lg p-2 pr-5 flex justify-center items-center gap-2 ">
              <span className="material-symbols-outlined">manage_accounts</span>{" "}
              Admin
            </h3>

            <h4 className=" cursor-pointer py-1 px-3 bg-white shadow-shadow button-secondary rounded-md duration-200 hover:scale-110">
              <span className="material-symbols-outlined ">search</span> Search
              & Filter
            </h4>
            <h4 className=" cursor-pointer py-1 px-3 bg-white shadow-shadow button-secondary rounded-md duration-200 hover:scale-110">
              <span className="material-symbols-outlined">gesture_select</span>{" "}
              Drag and Drop
            </h4>
            <h4 className="cursor-pointer py-1 px-3 bg-white shadow-shadow button-secondary duration-200 hover:scale-110">
              <span className="material-symbols-outlined">cloud_upload</span>{" "}
              Uploading
            </h4>
          </div>
        </div>
      </section>
      {/*section3 */}
      <section
        id="section3"
        className="min-h-[100dvh] flex flex-col justify-center items-center gap-10 relative"
      >
        <img
          src={image[1]}
          alt=""
          className="absolute top-0 -z-20 blur-[3px] bg-blend-multiply w-full h-full"
        />
        <h2 className="text-green-600  bg-white p-4 rounded-lg">Members</h2>
        <div className="flex flex-wrap gap-5">
          {member.map((v, i) => {
            return (
              <div
                key={i}
                className="bg-green-500 h-[400px] w-[250px] flex rounded-lg shadow-shadow duration-300 hover:scale-110"
              >
                <div className="w-fit ">
                  <div className=" rounded-b-lg p-2 flex items-center flex-col">
                    <img src={logo} alt="" className="" />
                    <img
                      src={v.image || null}
                      alt=""
                      className="size-48 object-cover p-2 rounded-full"
                    />
                  </div>
                  <div className="bg-slate-100 h-[150px] border-white border-2 px-2 ">
                    <code className="body-1 text-pink-500">
                      const{" "}
                      <span className="text-blue-600 font-bold">name</span> ={" "}
                      <span className="text-blue-700 font-bold">{v.name}</span>
                    </code>
                    <br />
                    <code className="body-1 text-pink-500">
                      const{" "}
                      <span className="text-blue-600 font-bold">position</span>{" "}
                      =
                    </code>
                    <ol className="pl-5 list-disc">
                      <span className="text-blue-700 font-bold">
                        <span className="text-slate-500">[</span>
                        {v.detail.map((value, i) => (
                          <code key={i} className="body-1">
                            <span className="text-blue-700">
                              {value}
                              <span className="text-slate-500 font-bold">
                                {i === v.detail.length - 1 ? "]" : ","}
                              </span>
                            </span>
                            <br />
                          </code>
                        ))}
                      </span>
                    </ol>
                    <code className="body-1 text-pink-500">return;</code>
                  </div>
                </div>
                <div className="bg-orange-600 w-[50px] rounded-r-md flex justify-center items-center">
                  <code className="[writing-mode:vertical-lr] text-white body-1">
                    Full-Stack Deverloper ID: FSD6-00{v.id}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/*section4 */}
      <section
        id="section4"
        className="h-[100dvh] bg-bg flex justify-center items-center flex-col relative z-10 "
      >
        <img
          src={image[2]}
          alt=""
          className="absolute top-0 -z-50 blur-[2px] w-full h-full "
        />
        <div className="flex flex-col gap-10 bg-green-700  z-20">
          <div className="w-full bg-green-800 flex justify-center items-center p-4 z-20">
            <h2 className="text-white">Tech Stack</h2>
          </div>
          <div className="bg-green-600 m-4 p-4 flex flex-col gap-20 z-20">
            <div className="flex items-center text-white">
              <h3 className="text-white">Front-End : </h3>
              <div className="flex ">
                <img
                  width="84"
                  height="84"
                  src="https://img.icons8.com/color/48/javascript--v1.png"
                  alt="javascript--v1"
                  className="bg-white m-2 rounded-lg"
                />
                <img
                  width="84"
                  height="84"
                  src="https://img.icons8.com/color/48/react-native.png"
                  alt="react-native"
                  className="bg-white m-2 rounded-lg"
                />
                <img
                  width="84"
                  height="84"
                  src="https://img.icons8.com/fluency/48/tailwind_css.png"
                  alt="tailwind_css"
                  className="bg-white m-2 rounded-lg"
                />
                <img
                  width="84"
                  height="84"
                  src="https://img.icons8.com/fluency/48/vite.png"
                  alt="vite"
                  className="bg-white m-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="text-white">Back-End : </h3>
              <img
                width="84"
                height="84"
                src="https://media.discordapp.net/attachments/1238408008048971821/1273278176231030784/express.png?ex=66be0835&is=66bcb6b5&hm=d443eba9d3fe6767c7c28538f44692cb026675925bf311e44ae1f5ae408e66bd&=&format=webp&quality=lossless&width=900&height=900"
                alt="expressjs"
                className="bg-white m-2 rounded-lg"
              />
              <img
                width="84"
                height="84"
                src="https://media.discordapp.net/attachments/1238408008048971821/1273298878958932081/pngwing.com.png?ex=66be1b7d&is=66bcc9fd&hm=971c7c13080081006a99b0b4f8d1f96676b44a8c806e04a46f4ce00f3f898948&=&format=webp&quality=lossless&width=525&height=525"
                alt="nodejs"
                className="bg-white m-2 rounded-lg p-1"
              />
            </div>
            <div className="flex items-center">
              <h3 className="text-white">Others : </h3>
              <img
                width="84"
                height="84"
                src="https://media.discordapp.net/attachments/1238408008048971821/1273278177036341268/supabase-logo-DCC676FFE2-seeklogo.com.png?ex=66be0835&is=66bcb6b5&hm=153fb13d06d964b634b4ec57b80f944493efcb44807f5588659c1711c33ecf91&=&format=webp&quality=lossless&width=439&height=450"
                alt="supabase"
                className="bg-white m-2 rounded-lg p-1"
              />
              <img
                width="84"
                height="84"
                src="https://media.discordapp.net/attachments/1238408008048971821/1273300812940054678/pngwing.com_1.png?ex=66be1d4a&is=66bccbca&hm=03125ca94de3cc532d7b7000237a69648af7979bceb287daab491cc6b1e2dd2a&=&format=webp&quality=lossless&width=523&height=525"
                alt="postgres"
                className="bg-white m-2 rounded-lg p-1"
              />
              <img
                width="84"
                height="84"
                src="https://media.discordapp.net/attachments/1238408008048971821/1273278176768036987/ff19f5f57213dced9e6b0e3bc5181b6d.png?ex=66be0835&is=66bcb6b5&hm=b1085487a087e5b48be142a96a2215f22d5abc907a37abe9a082273b167bdcb1&=&format=webp&quality=lossless&width=993&height=993"
                alt=""
                className="bg-white m-2 rounded-lg p-1"
              />
              <div className="size-[84px] m-2">
                <img
                  width="84"
                  height="84"
                  src="https://media.discordapp.net/attachments/1238408008048971821/1273316466661265410/d69a52f45ba68b83254c08d662f4b863.png?ex=66be2bde&is=66bcda5e&hm=4d92012012575de3caf2a812e2d15d36e7f7e84d4f0239a351a71182d2270881&=&format=webp&quality=lossless&width=1800&height=855"
                  alt=""
                  className="bg-white rounded-lg object-contain size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*section5 */}
      <section
        id="section5"
        className="h-[100dvh] relative flex justify-center items-center "
      >
        <img
          src="https://media.discordapp.net/attachments/1238408008048971821/1273305139985252352/image.png?ex=66be2152&is=66bccfd2&hm=d4d36c36c06d40cfea460946e0cf181d277cecc94dcd21dbfa5a4a2db236e43d&=&format=webp&quality=lossless&width=825&height=462"
          alt=""
          className="absolute top-0 -z-50  w-full h-full "
        />
        <iframe
          className={` transition-all duration-500 transform ${
            size === "Desktop"
              ? "size-full"
              : size === "Tablet"
              ? "w-[768px] h-full"
              : "w-[425px] h-full"
          } `}
          src="https://neatly-hotel-management-system.vercel.app/"
        ></iframe>
      </section>
      {/*section6 */}
      <section
        id="section6"
        className="h-[100dvh] bg-cover bg-bg flex justify-center items-center relative"
      >
        <img
          src={image[3]}
          alt=""
          className="blur-sm absolute top-0 w-full h-full"
        />
        <h1 className="bg-white/90 z-10 py-80 px-[450px] rounded-xl">Q&A</h1>
      </section>
    </div>
  );
};

export default IntroductionMain;
