import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Error from './Error/Error'
import Loader from './Loader/Loader'

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return <div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <SearchBox />
    {loading && <Loader />}
    {error && <Error />}
    <ContactList/>
  </div>
}

export default App
