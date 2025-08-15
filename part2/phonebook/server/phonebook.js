import axios from "axios"


const getPhonebook = () => {
    const response = axios.get('http://localhost:3001/persons')
    return response.then(response => response.data)
}
export default { getPhonebook };