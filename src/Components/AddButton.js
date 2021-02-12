import Button from './Button.js'
import { FaAddressCard, FaUserPlus, FaUserTimes, FaEyeSlash } from 'react-icons/fa'

const AddButton = ({onAdd, showAdd}) => {
    return (
        <div>
            <FaUserPlus />
            <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Closed' : 'Add'} onClick={onAdd}  />
        </div>
    )
}

export default AddButton
