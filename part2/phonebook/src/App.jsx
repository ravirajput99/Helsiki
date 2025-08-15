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
    const index = persons.findIndex(person => person.name === newName)
    if (index !== -1) {
      if (confirm(`${newName} is already added to phonebook, replace the old one with the new one?`)) {
        phonebook.updatePhonebook(persons[index].id, { name: newName, number: newNumber, id: persons[index].id }).then(response => setPersons(persons.map(person => person.id === response.id ? response : person)))
      }
    }
    else {
      if (newName && newNumber) {
        phonebook.createPhonebook({ name: newName, number: newNumber, id: newName + persons.length })
        setPersons(persons.concat({ name: newName, number: newNumber, id: newName + persons.length }))
      }
    }
    setNewName('')
    setNewNumber('')

  }
  useEffect(() => {
    phonebook.getPhonebook().then(response => {
      setPersons(response)
    })
  }, [])
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const handleDelete = (id) => {
    const deletePerson = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${deletePerson.name} ?`)) {
      phonebook.deletePhonebook(id, { name: deletePerson.name, number: deletePerson.number, id: deletePerson.id }).then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  )
}

export default App