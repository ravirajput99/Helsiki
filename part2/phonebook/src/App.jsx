import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.findIndex(person => person.name === newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      if (newName && newNumber) {
        setPersons(persons.concat({ name: newName, number: newNumber }))
        setNewName('')
        setNewNumber('')
      }
    }

  }
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  })
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App