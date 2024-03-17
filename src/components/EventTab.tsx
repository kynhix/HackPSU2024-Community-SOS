import Link from "next/link";

export default function EventTab(props: { name: string, id: number, created_at: Date }) {

  function timeSince(date:Date){
    let seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;

    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  
  let eventDate = new Date(props.created_at);

  console.log(timeSince(eventDate));
  
  return <div className="flex justify-between p-6 hover:py-9 truncate hover:bg-gray-200 duration-300 transition-all bg-gray-100">
    <Link href='/'>{props.name}</Link>
    <p className="text-neutral-500">{timeSince(eventDate)}</p>
    </div>;
}
