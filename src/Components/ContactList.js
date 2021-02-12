import Contact from './Contact.js';

const ContactList = ({ contacts, onDelete, onHide, onToggle }) => {
    return (
        <>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete} onHide={onHide} onToggle={onToggle} />
            ))}
        </>
    )
}

export default ContactList
