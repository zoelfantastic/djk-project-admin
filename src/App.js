import React from 'react'
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Content from "./components/content";

export default function App() {
  return (
    <div>
        <Header />
        <Menu />
        <Content />
        <Footer />
    </div>
  )
}
