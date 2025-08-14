import { useState } from 'react'
import SearchBar from '../src/components/SearchBar'
import './App.css'
import PhotosCard from './components/PhotosCard'

function App() {
  
  const [ image,setImage] = useState<string>("");


  return (
    <div>
      <h1>GooDog</h1>
      <SearchBar setImage={setImage}/> 
 

      <section>
        <PhotosCard image={image} />
        </section>
    </div>

 


  )
}

export default App
