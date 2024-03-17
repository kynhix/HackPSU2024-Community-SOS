"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export default function Dashboard() {
  const supabase = createClient();
  const fetchData = async () => {
    const { data, error } = await supabase.from('events').select();
    if (error) {
      console.error('Error fetching data:', error);
    }
    console.log('Data:', data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Dashboard</div>;
}
