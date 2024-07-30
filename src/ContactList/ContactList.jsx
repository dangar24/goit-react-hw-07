import { useSelector } from "react-redux"
import { selectNameFilter } from "../redux/filtersSlice";
import { selectContacts } from "../redux/contactsSlice";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContackList() {
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter)

    const filtredCont = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))

    return <>
        {filtredCont.length === 0 && <p>Its empty now</p>}
        {filtredCont.length > 0 && <ul className={css.list}>
            {filtredCont.map((contact) => (<li className={css.item} key={contact.id}>
                <Contact
                    contact={contact} />
            </li>))}
        </ul>}
        </>
}