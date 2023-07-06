import React, { useEffect, useState } from "react";

import ContactCard from "./ContactCard";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const OndeleteContact = (data) => {
    setAllContact(data);
  };

  const onUpdate = (data) => {
    setAllContact(data);
  };

  const [AllContacts, setAllContact] = useState([]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleClick = () => {
    contact.id = new Date().getTime().toString();
    if (contact.name === "" || contact.email === "") {
      window.alert("dont leave blank");
      return false;
    }
    if (localStorage.getItem("contact") == null) {
      localStorage.setItem("contact", JSON.stringify([contact]));
      updateAllContacts();
      return;
    }
    const addNote = JSON.parse(localStorage.getItem("contact"));
    addNote.unshift(contact);
    localStorage.setItem("contact", JSON.stringify(addNote));
    updateAllContacts();
  };

  const updateAllContacts = () => {
    const getListContact = localStorage.getItem("contact");
    if (getListContact != null) {
      setAllContact(JSON.parse(getListContact));
    }
  };

  useEffect(() => {
    updateAllContacts();
  }, []);

  // const
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 card shadow">
            <form className=" ">
              <div className="form-group  ">
                <label>Enter name</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={handleInput}
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-4">
                <label>Enter Phone</label>
                <input
                  type="phone"
                  value={contact.phone}
                  onChange={handleInput}
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="phone"
                />
              </div>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContactCard contacts={AllContacts} OndeleteContact={OndeleteContact} />
    </>
  );
};

export default AddContact;
