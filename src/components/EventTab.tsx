import Link from "next/link";

export default function EventTab(props: { name: string, id: number }) {
  return <Link href='/' className="p-3 hover:py-6 hover:bg-gray-200 duration-300 transition-all bg-gray-100">{props.name}</Link>;
}
