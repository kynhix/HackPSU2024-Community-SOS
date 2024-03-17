import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function Page() {
  return <div className="bg-stone-200">
    <div className="m-auto max-w-[1440px] flex w-full p-4 items-center bg-stone-200">
      <Link href='/dashboard'>Dashboard</Link>
      <div className="grow self-stretch"></div>
      <SignOutButton className="self-baseline"></SignOutButton>
    </div>
  </div>
}
