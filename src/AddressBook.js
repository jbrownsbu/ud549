class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(newContact) {
    this.contacts.push(newContact);
  }

  getContact(contact) {
    return this.contacts[contact];
  }
}