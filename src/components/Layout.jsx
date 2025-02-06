
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import SearchBar from '../components/SearchBar';

function Layout() {
  return (
    <div>
      <Sidebar/>
      <SearchBar/>
      <Outlet />
    </div>
  );
}

export default Layout