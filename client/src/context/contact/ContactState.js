import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        _id: "5e5fab3aed04b903ec9b5d11",
        name: "Hary Bla",
        email: "hb@gmail.com",
        phone: "123-122-111",
        user: "5e5f6c47db45890d54308904",
        date: "2020-03-04T13:20:58.641Z",
        __v: 0
      },
      {
        type: "professional",
        _id: "5e5fab09ed04b903ec9b5d0f",
        name: "Sara Smith",
        email: "ssmith@gmail.com",
        phone: "123-122-111",
        user: "5e5f6c47db45890d54308904",
        date: "2020-03-04T13:20:09.410Z",
        __v: 0
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
