import Image from "next/image";
import Link from "next/link";

export default function Loader() {
  return (
    <div className="text-center text-lg pb-[8] font-Ember">
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
          className="text-[#180ea4] mt-1 hover:underline"
          href="https://www.amazonlaborunion.org/"
          target="_blank"
        >
          https://www.amazonlaborunion.org
        </Link>
      </div>
    </div>
  );
}
