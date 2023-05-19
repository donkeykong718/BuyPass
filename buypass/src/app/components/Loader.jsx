import Image from "next/image";
import Link from "next/link";

export default function Loader() {
  return (
    <div className="text-center pb-[8]">
      <p className="text-bold">Did you know?</p>
      <p>Amazon's speed comes with a hidden cost: </p>
      <p className="text-red-500 italic">worker exploitation</p>
      <div>
        <Image
          className="animate-spin"
          src="/buypass_loader_solo.png"
          height={32}
          width={32}
          alt="/"
        />
        <p>Loading...</p>
      </div>
      <p>While you're waiting, learn more by visiting:</p>
      <Link href="https://www.amazonlaborunion.org/" target="_blank">
        https://www.amazonlaborunion.org
      </Link>
    </div>
  );
}
