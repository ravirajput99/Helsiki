import { useState } from 'react'

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
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown  with <input type="text" value={search} onChange={handleSearch} /></p>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input type="tel" value={newNumber} onChange={event => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.includes(search)).map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App