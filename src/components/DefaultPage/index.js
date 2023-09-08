import React from 'react'
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

export const DefaultPage = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
