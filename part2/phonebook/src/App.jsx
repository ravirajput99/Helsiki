import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import phonebook from '../server/phonebook'
const App = () => {
  const [persons, setPersons] = useState([])
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
    debugger
    phonebook.getPhonebook().then(response => {
      setPersons(response)
    })
  }, [])
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