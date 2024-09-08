// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Allows nested routes
import './Layout.css';
import ImageCarousel from '../imagecarousel/ImageCarousel';

const Layout = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet /> {/* Renders the current route's component */}
      </div>
      <div className="carousel-container">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Layout;


