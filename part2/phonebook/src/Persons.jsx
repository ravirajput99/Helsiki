import React from 'react'

function Persons(props) {
    return (
        <div>{props.persons.filter(person => person.name.includes(props.search)).map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Persons