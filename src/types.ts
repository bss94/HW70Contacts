export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export type ContactMutation = Omit<Contact, 'id'>;

export type ApiContact = ContactMutation;

export interface ApiContacts {
  [id: string]: ApiContact;
}
