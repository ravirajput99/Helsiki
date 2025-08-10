import React from 'react'

function Filter(props) {
    return (
        <p>filter shown  with <input type="text" value={props.search} onChange={props.handleSearch} /></p>

    )
}

export default Filter