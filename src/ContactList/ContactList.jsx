import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../redux/contactsSlice";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContackList() {
   

    const filtredCont = useSelector(selectFilteredContacts);

    return <>
        {filtredCont.length > 0 && <ul className={css.list}>
            {filtredCont.map((contact) => (<li className={css.item} key={contact.id}>
                <Contact
                    contact={contact} />
            </li>))}
        </ul>}
        </>
}