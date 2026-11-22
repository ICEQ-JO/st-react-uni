import { useState } from 'react'

function PatientForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')

  return (
    <form>
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
      <p>{name}</p>
    </form>
  )
}

export default PatientForm
