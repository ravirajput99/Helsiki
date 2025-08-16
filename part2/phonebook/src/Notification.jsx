import './index.css'
const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    else if (message.success)
        return (
            <div className='success'>
                {message.success}
            </div>
        )
    return (
        <div className='error'>
            {message.error}
        </div>
    )
}
export default Notification