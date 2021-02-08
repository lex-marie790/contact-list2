// test data 
const contacts = [
    {
        id: 1,
        name: 'Lexi Marie',
        email: 'test@gmail.com',
        phone: '8184709146',
    }
]
    

const ContactList = () => {
    return (
        <>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            ))}
        </>
    )
}

export default ContactList
