import { useState } from 'react'
import PatientForm from './components/PatientForm'
import './App.css'

function App() {
  const [patients, setPatients] = useState([])

  function addPatient(patient) {
    setPatients([...patients, patient])
  }

  function deletePatient(index) {
    setPatients(patients.filter((p, i) => i !== index))
  }

  return (
    <div>
      <h1>Hospital Patient Manager</h1>
      <PatientForm
        patients={patients}
        addPatient={addPatient}
        deletePatient={deletePatient}
      />
      <p>Total: {patients.length}</p>
    </div>
  )
}

export default App
