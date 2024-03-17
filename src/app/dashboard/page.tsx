"use client";

import SignOutButton from "@/components/SignOutButton";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const supabase = createClient();
  const fetchData = async () => {
    const { data, error } = await supabase.from('events').select();
    setLoading(false);
    if (error) {
      console.error('Error fetching data:', error);
      setError(true);
    }
    console.log('Data:', data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-full p-4 items-center bg-slate-200">
        <h1>Dashboard</h1>
        <div className="grow self-stretch"></div>
        <SignOutButton className="self-baseline"></SignOutButton>
      </div>
      {loading &&
        <div className="flex flex-col self-stretch grow p-8">
          <p>Loading...</p>
        </div>}
      {!loading && !error &&
        <div className="flex flex-col self-stretch grow p-8">
          Dashboard content
        </div>}
    </div>
  );
}
