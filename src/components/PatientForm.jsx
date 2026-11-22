import { useState } from 'react'

function PatientForm({ patients, addPatient }) {
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Patient</button>
      </form>

      <h2>Patients</h2>

      {patients.length === 0 && <p>No patients yet.</p>}

      {patients.map((patient, index) => (
        <div key={index}>
          <span>
            {index + 1}. {patient.name}
          </span>
          <span>Age: {patient.age}</span>
          <span>Department: {patient.department}</span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default PatientForm
