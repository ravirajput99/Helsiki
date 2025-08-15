import React from 'react'

function Persons(props) {
    return (
        <div>{props.persons.filter(person => person?.name && person.name.includes(props.search)).map((person, i) =>
            <p key={person.id}>{person.name} {person.number} <button onClick={() => props.handleDelete(person.id)} type='button'>delete</button></p>

        )}
        </div>
    )
}

export default Persons