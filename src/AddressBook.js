class AddressBook {
  constructor() {
    this.contacts = [];
    this.initialComplete = false;
  }

  addContact(newContact) {
    this.contacts.push(newContact);
  }

  getContact(contact) {
    return this.contacts[contact];
  }

  deleteContact(contact) {
    this.contacts.splice(contact, 1);
  }

  getInitialContacts(callback) {
    // fake some asynchronicity
    setTimeout(()=>{
      this.initialComplete = true;
      if (callback) {
        return callback();
      }
    }, 3);
  }
}