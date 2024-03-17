import Link from "next/link";

export default function EventTab(props: { name: string, id: number }) {
  return <Link href='/' className="p-6 border-b border-slate-950/10 hover:py-9 truncate hover:bg-gray-200 duration-300 transition-all bg-gray-100">{props.name}</Link>;
}
