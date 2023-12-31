import React from "react";
import { MdExplore } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import styles from "../../styles/Popover.module.css";
import { AiOutlineSend } from "react-icons/ai";
const FriendsList = () => {
  const Data = [
    {
      img: "https://gravatar.com/avatar/4eef2f632f445c6d8a1185d8613bc6a3?s=400&d=robohash&r=x",
      name: "UserOlivia",
      follower: "20",
      following: "45"
    },
    {
      img: "https://gravatar.com/avatar/bff5b51079602e067f4fcb32fb45faff?s=400&d=robohash&r=x",
      name: "Mason",
      follower: "50",
      following: "15"
    },
    {
      img: "https://gravatar.com/avatar/b1b006c4c0bf5fb5edb8c1977b5e9e36?s=400&d=retro&r=x",
      name: "Sophia",
      follower: "22",
      following: "12"
    },
    {
      img: "https://gravatar.com/avatar/50abd2399b6cb03ceef7df05f2559526?s=400&d=retro&r=x",
      name: "Jackson",
      follower: "62",
      following: "16"
    },
    {
      img: "https://gravatar.com/avatar/c8e2517a89cf8c58595438af42a2af40?s=400&d=robohash&r=x",
      name: "Amelia",
      follower: "90",
      following: "32"
    },
  ];

  return (
    <>
      <div className="flex flex-col mt-20">
        <div>
          <MdExplore className="text-4xl" />
        </div>

        {Data.map((item) => {
          return (
            <div className={styles.container} key={item.name}>
              <img
                className="w-24 h-8 mt-5 rounded-full"
                src={item.img}
                alt="Rounded avatar"
              ></img>
              <div className={styles.content}>
                <div className={styles.arrow}></div>
                <div className="bg-black flex flex-col ml-5 mt-5">
                  <div className="flex justify-between">
                    <img
                      className="w-16  h-16 rounded-full"
                      src={item.img}
                      alt="Rounded avatar"
                    ></img>
                    <button className="text-white font-abc bg-inherit border-2 border-white px-2 focus:outline-none rounded text-2xl mr-5">
                      Following
                    </button>
                  </div>
                  <h1 className="font-abc text-white text-3xl mt-2">
                    {item.name}
                  </h1>
                  <h1 className="font-abc text-2xl text-white">
                    A proff. of retro games
                  </h1>

                  <div className="flex flex-row mt-5">
                    <h1 className="font-abc text-2xl text-white">
                     Following {item.following}
                    </h1>
                    <h1 className="font-abc text-2xl text-white ml-5">
                      Followers {item.follower}
                    </h1>
                  </div>
                  <div>
                    <h1 className="mt-5 font-abc text-3xl ">Chats</h1>
                    <div className="text-white font-abc text-2xl mr-2 ml-2 mt-5 rounded-2xl w-30">
                      <h1 className="w-1/2 bg-green-500 p-2 m-2  rounded-xl">
                        My Message
                      </h1>
                    </div>

                    <div className="flex justify-between mr-3 mt-5">
                      <input
                        placeholder="Message"
                        className="bg-gray-900 p-2 rounded-2xl w-30"
                        onChange={() => {
                          console.log("friendlist");
                        }}
                      />
                      <AiOutlineSend className="text-xl mt-3 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <img className="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/201" alt="Rounded avatar"></img>
                <img className="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/202" alt="Rounded avatar"></img>
                <img className="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/203" alt="Rounded avatar"></img>
                <img className="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/204" alt="Rounded avatar"></img> */}
        <div>
          <AiOutlineUsergroupAdd className="text-4xl mt-5" />
        </div>
      </div>
    </>
  );
};

export default FriendsList;
