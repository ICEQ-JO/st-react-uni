import { useState } from 'react'
import PatientForm from './components/PatientForm'
import './App.css'

function App() {
  const [patients, setPatients] = useState([])

  function addPatient(patient) {
    setPatients([...patients, patient])
  }

  return (
    <div>
      <h1>Hospital Patient Manager</h1>
      <PatientForm patients={patients} addPatient={addPatient} />
      <p>Total: {patients.length}</p>
    </div>
  )
}

export default App
