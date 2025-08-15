import axios from "axios"


const getPhonebook = () => {
    const response = axios.get('http://localhost:3001/persons')
    return response.then(response => response.data)
}
const createPhonebook = (person) => {
    const response = axios.post('http://localhost:3001/persons', person)
    return response.then(response => response.data)
}
const deletePhonebook = (id) => {
    const response = axios.delete(`http://localhost:3001/persons/${id}`)
    return response.then(response => response.data)
}
const updatePhonebook = (id, person) => {
    const response = axios.put(`http://localhost:3001/persons/${id}`, person)
    return response.then(response => response.data)
}
export default { getPhonebook, deletePhonebook, updatePhonebook, createPhonebook };