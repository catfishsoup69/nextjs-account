'use client'

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function ProfileDesk() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        setUser(userData[0]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      {user ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Имя:</label>
            <span className="text-gray-800">{user.name}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Телефон:</label>
            <span className="text-gray-800">{user.phone}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-700">Загрузка данных пользователя...</p>
      )}
    </div>
  )
}
