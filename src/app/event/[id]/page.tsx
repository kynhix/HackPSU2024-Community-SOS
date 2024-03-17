"use client";

import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type EventType = {
  name: string;
  created_at: string;
  location: string;
  id: number;
  description: string;
  volunteers: number
};

export default function Page({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [event, setEvent] = useState<EventType | null>(null);

  const supabase = createClient();
  const fetchEvent = async () => {
    const { data, error } = await supabase.from("events").select().eq("id", id);
    setLoading(false);
    // @ts-ignore
    if (error) {
      setError(true);
      return;
    }
    setEvent(data[0] as EventType);
  }

  useEffect(() => {
    fetchEvent();
  }, []);

  const id = parseInt(params.id);
  if (!Number.isSafeInteger(id) || id < 0) {
    return <p>Invalid Event ID</p>;
  }
  // displayMap("Penn State Business Building")

  return <div>
    <Navbar></Navbar>
    <div className="flex flex-col w-full my-8 gap-2 max-w-[1440px] m-auto">
      {loading && <p>Loading...</p>}
      {error || !event && <p>Event not found</p>}
      {!loading && !error && event &&
        <>
          <div className="w-full p-8 bg-slate-200 rounded-xl">
            <h1 className="font-bold text-3xl mb-3">{event.name}</h1>
            <h2 className="text-lg mb-6">Created: {event.created_at}</h2>
            <h2 className="text-lg mb-10">Need <span className="font-bold">{event.volunteers}</span> volunteers.</h2>
            <p>{event.description}</p>
          </div>
          <iframe
            id="map-view"
            width="450"
            height="450"
            loading="lazy"
            src={`https://www.google.com/maps?q=${event.location}&output=embed`}
          ></iframe>
        </>}
    </div>
  </div>
}
