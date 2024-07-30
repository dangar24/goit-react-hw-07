import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from './Contact.module.css'

export default function Contact({ contact: { name, number, id } }) {

    const dispatch = useDispatch()

    return <div className={css.element}>
        <div className={css.container}>
            <p className={css.text}><FaUser size='18' />{name}</p>
            <p className={css.text}><FaPhoneAlt size='18'/>{number}</p>
        </div>
        <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
}