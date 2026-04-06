import { useState } from 'react'
import InputForm from './components/InputForm'
import ViewData from './components/ViewData'
import './App.css'

function App() {
  const [date, setDate] = useState('')
  const [distance, setDistance] = useState('')
  const [trainingList, setTrainingList] = useState([])

  const handleChangeDate = function (e) {
    let value = e.target.value;
    if (value.length <= 10) {
      setDate(value)
    }
  }

  const handleChangeDistance = function (e) {
    setDistance(e.target.value);
  }

  const handleSubmit = function (e) {
    e.preventDefault();

    const existDateIndex = trainingList.findIndex(item => item.date === date);

    const trainingsSort = function (list) {
      return list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (existDateIndex !== -1) {
      let newList = [...trainingList];

      newList[existDateIndex] = {
        ...newList[existDateIndex],
        distance: newList[existDateIndex].distance + parseFloat(distance)
      };

      newList = trainingsSort(newList)

      setTrainingList(newList);
    } else {
      const training = {
        date: date,
        distance: parseFloat(distance)
      }

      setTrainingList(trainingsSort([...trainingList, training]));
    }

    setDate('');
    setDistance('')
  }

  const handleDelete = (dateToDelete) => {
    const newList = trainingList.filter(training => training.date !== dateToDelete);
    setTrainingList(newList);
  }

  const handleEdit = (editTraining) => {
    setDate(editTraining.date);
    setDistance(editTraining.distance)
    handleDelete(editTraining.date);
  }

  const dateFormated = (date) => {
    return date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);
  }

  return (
    <div className="container">
      <InputForm
        date={date}
        distance={distance}
        onSubmit={handleSubmit}
        onChangeDate={handleChangeDate}
        onChangeDistance={handleChangeDistance}
      />
      <ViewData
        trainingList={trainingList}
        dateFormated={dateFormated}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
