import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  const contactsToShow = filtered !== null ? filtered : contacts;

  return (
    <Fragment>
      <TransitionGroup>
        {contactsToShow.map(contact => (
          <CSSTransition
            key={contact.id}
            timeout={5000}
            classNames='item'
            appear={true}
          >
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
