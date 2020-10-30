import React from "react";
import { Nav, Footer } from './';

export default function Layout({ children }) {
  return <div>
    <Nav />
    {children}
    <Footer />
  </div>;
}
