import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../pages/Navbar';

export default function LoginPrivatePage() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
