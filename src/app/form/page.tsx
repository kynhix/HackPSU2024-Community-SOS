"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import styled from 'styled-components';

// Assuming the event object shape
interface Event {
  id: number;
  created_at: string;
  name: string;
  description: string;
  location: string;
  volunteers: number;
}

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #333333;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const FormButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

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
    <FormContainer>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#007bff' }}>Create Event</h1>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Name:</FormLabel>
        <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <FormLabel>Description:</FormLabel>
        <FormInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <FormLabel>Location:</FormLabel>
        <FormInput type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        <FormLabel>Volunteers Needed:</FormLabel>
        <FormInput type="number" value={volunteers} onChange={(e) => setVolunteers(parseInt(e.target.value))} />
        <FormButton type="submit">Submit</FormButton>
      </Form>
    </FormContainer>
  );
}
