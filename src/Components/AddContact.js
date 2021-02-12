import { useState } from 'react'

const AddContact = ({ onAdd }) => {
    const [contact, setContact] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        // console.log("click")
        e.preventDefault()

        if (!contact) {
            alert('Please add contact name')
            return
        }
        onAdd({ contact, phone, email, important })

        setContact('')
        setPhone('')
        setEmail('')
        setImportant(false)
    }

    return (
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Contact</label>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        value={contact} 
                        onChange={(e)=> setContact(e.target.value) } 
                    />
                </div> 
                <div className='form-control'>
                    <label>Phone Number</label>
                    <input 
                        type='text' 
                        placeholder='Phone Number' 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                </div> 
                <div className='form-control'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)} 
                    />
                </div> 
                <div className='form-control'>
                    <label>Important?</label>
                    <input 
                        type='checkbox' 
                        checked={important} 
                        value={important} 
                        onChange={(e)=> setImportant(e.currentTarget.checked)} 
                    />
                </div> 
            <input type='submit' value='Save Contact' />
        </form>
    )
}

export default AddContact
