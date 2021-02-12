import { FaUser, FaEnvelopeOpenText, FaPhoneAlt, FaUserTimes, FaEyeSlash } from 'react-icons/fa';

const Contact = ({ contact, onDelete, onToggle }) => {
    return (
        <div className={`contact ${contact.important ? 'important' : '' }`} onDoubleClick={() => onToggle(contact.id)}>
            <h3><FaUser /> {contact.contact}</h3>
            <p><FaEnvelopeOpenText /> {contact.email}</p>
            <p><FaPhoneAlt /> {contact.phone}</p>
            <FaUserTimes onClick = {() => onDelete(contact.id)}  />
        </div>
    )
}

export default Contact
