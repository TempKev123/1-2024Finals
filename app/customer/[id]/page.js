"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/compat/router';

export default function GameDetails({params}) {
  const id = params.id;
  const [customer, setGame] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(id)
    if (id) {
      const fetchGame = async () => {
        const res = await fetch(`/api/customer/${id}`);
        const { data } = await res.json();
        setGame(data);
      };
      fetchGame();
    }
  }, [id]);



  if (!customer) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">{customer.title}</h1>
      <p><strong>Name:</strong> {customer.genre}</p>
      <p><strong>Date of birth:</strong> {new Date(customer.dob).toLocaleDateString()}</p>
      <p><strong>Member Number:</strong> {customer.memberNo}</p>
      <p><strong>Interests:</strong> {customer.interests}</p>
    </div>
  );
}
