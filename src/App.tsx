import { Suspense } from "react"
import Banner from "./component/Banner"
import Cards from "./component/Cards/Cards"
import Heading from "./component/Heading"
import Nav from "./component/Nav"
import type { Icard } from "./types/cardType"

const cardsFetch = async() : Promise<Icard[]>=> {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data;

  }

function App() {

  const cardsPromise = cardsFetch()
  return (
    <>
 
     <Nav/>
     <Banner/>
     <Heading/>
      
      <Suspense fallback={<h2>Loading</h2>}>
        <Cards cardsPromise={cardsPromise}/>
      </Suspense>
      
    </>
  )
}

export default App
