import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function Page() {
  return <div className="bg-stone-200">
    <div className="m-auto max-w-[1440px] flex h-[64px] w-full p-4 items-center bg-stone-200">
      <Link href='/dashboard' className="hover:border-b-2 transition-all hover:border-black">Dashboard</Link>
      <div className="grow self-stretch"></div>
      <SignOutButton className="self-baseline hover:border-b-2 transition-all hover:border-black"></SignOutButton>
    </div>
  </div>
}
