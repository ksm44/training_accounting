import { useState } from 'react'
import InputForm from './components/InputForm'
import ViewData from './components/ViewData'
import './App.css'

function App() {
  const [date, setDate] = useState('')
  const [distance, setDistance] = useState('')
  const [trainingList, setTrainingList] = useState([])

  return (
    <>
      <div className="container">
        <InputForm date={date} setDate={setDate} distance={distance} setDistance={setDistance} trainingList={trainingList} setTrainingList={setTrainingList}/>
        <ViewData trainingList={trainingList} setTrainingList={setTrainingList} setDate={setDate} setDistance={setDistance}/>
      </div>
    </>
  )
}

export default App
