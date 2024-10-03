import { useState } from 'react'
import './App.css'

export default function App() {
  
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts)
  
  return (
    <>
      <ContactList/>
    </>
  );
}
