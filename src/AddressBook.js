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

  deleteContact(contact) {
    this.contacts.splice(contact, 1);
  }
}