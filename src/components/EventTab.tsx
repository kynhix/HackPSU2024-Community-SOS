import Link from "next/link";

export default function EventTab(props: { name: string, id: number, created_at: Date }) {

  function timeSince(date: Date) {
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

  return <Link href={`/event/${props.id}`}><div className="flex flex-col sm:flex-row justify-between p-6 hover:py-9 border-b truncate hover:bg-gray-200 duration-300 transition-all bg-gray-100">
    <div className="shrink">{props.name}</div>
    <p className="text-neutral-500 shrink-0">{timeSince(eventDate)}</p>
  </div></Link>;
}
