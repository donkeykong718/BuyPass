import Image from "next/image";
import Link from "next/link";
// import { useContext } from "react";

// import { MuteContext } from "../page";

export default function Loader() {
  // const song = new Audio("./BezosKills.mp3");
  // const { mute, setMute } = useContext(MuteContext);

  return (
    <div className="fixed w-fit h-fit p-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-center text-lg font-Ember shadow-[100px_100px_100px_9999999px_rgba(0,0,0,0.7)] bg-white">
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/77cMmCVBT3g?controls=0&amp;start=73"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
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
      <div className="relative w-100; bottom-0 mt-5 bg-slate-900 text-white p-3 hover:bg-slate-400 hover:text-slate-900">
        <p className="italic text-sm">
          Credit: "Spirit Halloween Theme Song" by{" "}
          <Link
            className="hover:text-[#180ea4] bold mt-2 hover:underline"
            href="https://www.nicklutsko.com/"
            target="_blank"
          >
            Nick Lutsko
          </Link>
        </p>
      </div>
    </div>
  );
}
