import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { MuteContext } from "../page";

export default function Loader() {
  const { mute, setMute } = useContext(MuteContext);

  const handleClick = (event) => {
    if (event.target.checked === true) {
      setMute(true);
    } else {
      setMute(false);
    }
  };

  return (
    <div className="fixed w-fit h-fit p-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-center text-lg font-Ember shadow-[100px_100px_100px_9999999px_rgba(0,0,0,0.7)] bg-white">
      <p className="text-xl font-bold mb-2">Did you know?</p>
      <p>Amazon's speed comes with a hidden cost: </p>
      <p className="text-red-500 italic font-bold">worker exploitation</p>
      <div className="m-6">
        <Image
          className="animate-spin duration-1400 m-auto font-bold"
          src="/buypass_loader_duo.png"
          height={64}
          width={64}
          alt="/"
        />
        <p className="text-sm italic mt-2">Loading...</p>
      </div>
      <div className="text-base">
        <p>While you're waiting, learn more by visiting:</p>
        <Link
          className="text-[#180ea4] bold mt-2 hover:underline"
          href="https://www.amazonlaborunion.org/"
          target="_blank"
        >
          https://www.amazonlaborunion.org
        </Link>
      </div>
      <div className="relative w-100; bottom-0 mt-5 bg-slate-900 text-white p-3 hover:bg-slate-400 hover:text-slate-900 hover:bold">
        <p className="italic text-xs">
          Song Credit: "Spirit Halloween Theme Song" by{" "}
          <Link
            className="hover:text-[#180ea4] bold mt-2 hover:underline"
            href="https://www.nicklutsko.com/"
            target="_blank"
          >
            Nick Lutsko
          </Link>
        </p>
        <div className="flex z-20 justify-start align-baseline">
          <div>
            <Image
              src="/buypassicon.ico"
              width={16}
              height={16}
              alt="icon"
              className="w-5 h-5 m-1 inline"
            />
            <label
              className="m-1 text-[#5f5f5f] text-xs"
              htmlFor="mute_checkbox"
            >
              Mute Audio?{" "}
            </label>
            <input
              type="checkbox"
              id="mute_checkbox"
              defaultChecked="true"
              onClick={(event) => handleClick(event)}
              className="ml-1 checked:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
