import { Suspense } from "react";
import type { Itechnology } from "./type";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const techDataFetch = async():Promise<Itechnology[]>=>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const techPromise = techDataFetch();
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback = {<h2>Loading...</h2>}>
      <Technologies techPromise= {techPromise}></Technologies>
    </Suspense>
    <Footer></Footer>
      
    </>
  )
}

export default App
