"use client";

import EventTab from "@/components/EventTab";
import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [events, setEvents] = useState([]);

  const supabase = createClient();
  const fetchData = async () => {
    const { data, error } = await supabase.from('events').select();
    setLoading(false);
    if (error) {
      console.error('Error fetching data:', error);
      setError(true);
    }
    console.log('Data:', data);
    // LOL
    // @ts-ignore
    setEvents(data);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      {loading &&
        <div className="flex flex-col self-stretch grow p-8">
          <p>Loading...</p>
        </div>}
      {!loading && !error &&
        <div className="flex flex-col items-center self-stretch grow p-8">
          <div className="flex flex-col rounded-lg overflow-hidden w-full shadow-md max-w-[1440px]">
            <div className="p-3 bg-slate-500 text-slate-50">Events</div>
            {events.map((e) =>
              // @ts-ignore
              <EventTab key={e.id} name={e.name}></EventTab>
            )}
          </div>
        </div>}
    </div>
  );
}
