import PropTypes from 'prop-types'
import Button from './Button.js'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className= 'header'>
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
            <Button color='blue' text='Add Contact' onClick={onClick} />
            <Button color='red' text='Remove Contact' />
            <Button color='pink' text='Hide Contacts' />
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
