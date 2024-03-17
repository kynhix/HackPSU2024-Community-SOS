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

  // @ts-ignore
  const handleSubmit = async (e) => {
    // @ts-ignore
    e.preventDefault();
    try {
      const currentDate = new Date().toISOString();
      // @ts-ignore
      const { data, error } = await supabase.from<Event>('events').insert([
        { name, description, location, volunteers, created_at: currentDate }
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
        <h1 className="mb-14 font-medium text-2xl text-center">Create Event</h1>
        {/*@ts-ignore*/}
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <label>Name</label>
          <input className="p-4 border rounded-lg" type="text" value={name} required minLength={4} maxLength={64} onChange={(e) => setName(e.target.value)} />
          <label>Description</label>
          <textarea className="p-4 border rounded-lg" required rows={5} minLength={24} maxLength={512} value={description} onChange={(e) => setDescription(e.target.value)} />
          <label>Location</label>
          <input className="p-4 border rounded-lg" type="text" value={location} required onChange={(e) => setLocation(e.target.value)} />
          <label>Volunteers Needed</label>
          <input className="p-4 border rounded-lg" type="number" min={1} max={50} value={volunteers} onChange={(e) => setVolunteers(parseInt(e.target.value))} />
          <input className="rounded-lg text-white bg-blue-500 transition-colors hover:text-white hover:bg-blue-400 hover:shadow p-4 cursor-pointer" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
