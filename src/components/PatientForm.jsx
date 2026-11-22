import { useState } from 'react'
import './css/PatientForm.css'

function PatientForm({ patients, addPatient, deletePatient }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (name === '' || age === '' || department === '') {
      return
    }

    const patient = {
      name: name,
      age: age,
      department: department,
    }
    console.log(patient)
    addPatient(patient)

    setName('')
    setAge('')
    setDepartment('')
  }

  return (
    <div>
      <form className="card form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Patient</button>
      </form>

      <div className="card">
        <h2>Patients</h2>

        {patients.length === 0 && <p>No patients yet.</p>}

        {patients.map((patient, index) => (
          <div className="patient" key={index}>
            <span className="patient-name">
              {index + 1}. {patient.name}
            </span>
            <span className="patient-age">Age: {patient.age}</span>
            <span className="patient-dep">Department: {patient.department}</span>
            <button className="delete-btn" onClick={() => deletePatient(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientForm
