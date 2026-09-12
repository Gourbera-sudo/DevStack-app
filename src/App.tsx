import { Suspense } from "react";
import type { Itechnology } from "./type";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
      
    </>
  )
}

export default App
