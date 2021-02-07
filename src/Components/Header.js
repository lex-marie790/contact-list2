import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header className= 'header'>
            <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
            <button className = 'btn'>Add Contact</button>
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
