import Header from './Components/Header.js'
import ContactList from './Components/ContactList.js'
import { useState } from 'react'
import AddContact from './Components/AddContact.js'
import AddButton from './Components/AddButton.js'

function App() {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([
    {
        id: 1,
        contact: 'Lexi Marie',
        email: 'test@gmail.com',
        phone: '8184709146',
        important: true
    },
    {
        id: 2,
        contact: 'Lexi Marie',
        email: 'test@gmail.com',
        phone: '8184709146',
        important: true
    }
  ])

  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newContact = {id, ...contact}
    setContacts([...contacts, newContact])

    // console.log(id)
  }

  // delete contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
    // console.log('delete' ,id)
  }

  const toggleImportant = (id) => {
    setContacts(contacts.map((contact) => contact.id === id ? {...contact, important: !contact.important}: contact))
  }

  

  return (
    <div className="container">
       <Header onAdd={()=>setShowAddContact(!showAddContact)} showAdd={showAddContact} />
       {showAddContact && <AddContact onAdd={addContact}/>}
        <div className= 'content-box'>
          {/* {showAddContact && <AddContact onAdd={addContact}/>} */}
          {contacts.length > 0 ?
          <ContactList contacts={contacts} onDelete={deleteContact} onToggle={toggleImportant}  /> : 'Add some people to your Contacts List'
          }
        </div>
    </div>
  );
}

export default App;
