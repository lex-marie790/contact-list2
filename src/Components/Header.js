import PropTypes from 'prop-types'
import Button from './Button.js'
import { FaAddressCard, FaUserPlus, FaUserTimes, FaEyeSlash } from 'react-icons/fa'

const Header = ({ title, onHide, onAdd, showAdd }) => {


    // const hideContact = (id) => {
    //     console.log('hide')
    //     // setContacts(contacts.map((contact) => contact.id !== id))
    // }

    return (
        <header className= 'header'>
            <h1 style={{ color: 'red', backgroundColor: 'pink' }}><FaAddressCard/> {title} <FaAddressCard/></h1>
            <FaUserPlus />
            <Button color={showAdd ? 'pink' : 'red'} text={showAdd ? 'Closed' : 'Add'} onClick={onAdd} /> 
            {/* <FaEyeSlash />
            {/* <Button color='pink' text='Hide Contacts' onClick={hideContact}  /> */}
        </header>
    )
}

Header.defaultProps = {
    title: "Lexi's Contact List",
}

Header.propTypes= {
    title: PropTypes.string.isRequired,
}

export default Header
