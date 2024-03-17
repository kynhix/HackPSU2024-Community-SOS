"use client";

import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

// Assuming the event object shape
interface Event {
  id: number;
  created_at: string;
  name: string;
  description: string;
  location: string;
  volunteers: number;
}

export default function CreateEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [volunteers, setVolunteers] = useState(0);
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date().toISOString();
      const { data, error } = await supabase.from<Event>('events').insert([
        { name, description, location, volunteers }
      ]);
      if (error) {
        throw error;
      }
      console.log('Event added successfully:', data);
      // Redirect to dashboard or perform any other action upon successful insertion
      // You can use client-side routing here if needed
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[600px] m-auto my-8 bg-slate-200 p-12 rounded-lg border border-black/10 shadow-md">
        <h1 className="mb-14 font-bold text-center">Create Event</h1>
        <form className='flex flex-col gap-12' onSubmit={handleSubmit}>
          <label>Name</label>
          <input className="p-4 border rounded-lg" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Description</label>
          <input className="p-4 border rounded-lg" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label>Location</label>
          <input className="p-4 border rounded-lg" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <label>Volunteers Needed</label>
          <input className="p-4 border rounded-lg" type="number" value={volunteers} onChange={(e) => setVolunteers(parseInt(e.target.value))} />
          <button className="rounded-lg bg-white transition-colors hover:text-white hover:bg-blue-500 p-4" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
