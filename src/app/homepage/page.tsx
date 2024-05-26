"use client"

import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react"
import axios from 'axios';

interface Profile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  bio: string
  gender: string;
  birthdate: string;
}

export default function Homepage() {
  const { setToken, token } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const PROFILE_API_URL = process.env.NEXT_PUBLIC_PROFILE_API_URL;

  useEffect(() => {
    axios.get(`${PROFILE_API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log("Profile", res);
      setProfile(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [token])

  return (
    <main>
      {profile && (
        <div>
          <h2>User Profile</h2>
          <p>ID: {profile.id}</p>
          <p>Email: {profile.email}</p>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Profile Picture: {profile.profilePicture}</p>
          <p>Bio: {profile.bio}</p>
          <p>Gender: {profile.gender}</p>
          <p>Birthdate: {profile.birthdate}</p>
        </div>
      )}
    </main>
  )
}