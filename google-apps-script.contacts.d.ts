// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Contacts {
    /**
     * Address field in a contact.
     */
    interface AddressField {

      /**
       * Deletes this address field.
       *
       *
       *     // The code below deletes the home addresses for a contact named "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddresses = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     for (var i in homeAddresses) {
       *       homeAddresses[i].deleteAddressField();
       *     }
       * https://developers.google.com/apps-script/reference/contacts/address-field#deleteAddressField()
       */
      deleteAddressField(): void;

      /**
       * Get the address for this field.
       *
       *
       *     // Logs the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     Logger.log(homeAddress[0].getAddress());
       * https://developers.google.com/apps-script/reference/contacts/address-field#getAddress()
       */
      getAddress(): string;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/address-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets whether this is the primary field value.
       *
       *
       *     // Logs whether or not the first address field associated with contact
       *     // 'John Doe' is labeled as primary. This method can be similarly called
       *     // for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     Logger.log(addressFields[0].isPrimary());
       * https://developers.google.com/apps-script/reference/contacts/address-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets the address of this field.
       *
       *
       *     // Sets the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
       * https://developers.google.com/apps-script/reference/contacts/address-field#setAddress(String)
       * @param address the new address
       */
      setAddress(address: string): AddressField;

      /**
       * Sets this field to primary.
       *
       *
       *     // Sets the the first address field associated with contact 'John Doe'
       *     // as primary. This method can be similarly called for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/address-field#setAsPrimary()
       */
      setAsPrimary(): AddressField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Work' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/address-field#setLabel(Field)
       * @param field the new standard label
       */
      setLabel(field: Field): AddressField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/address-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): AddressField;
    }
    /**
     * Company field in a Contact.
     */
    interface CompanyField {

      /**
       * Deletes this company field.
       *
       *
       *     // Deletes the first company associated with contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var company = contacts[0].getCompanies()[0];
       *     company.deleteCompanyField();
       * https://developers.google.com/apps-script/reference/contacts/company-field#deleteCompanyField()
       */
      deleteCompanyField(): void;

      /**
       * Gets the company name.
       *
       *
       *     // Logs company name for all companies associated with contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var companies = contacts[0].getCompanies();
       *     for (var i in companies) {
       *       Logger.log(companies[i].getCompanyName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/company-field#getCompanyName()
       */
      getCompanyName(): string;

      /**
       * Gets the job title.
       *
       *
       *     // Logs job title for all companies associated with contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var companies = contacts[0].getCompanies();
       *     for (var i in companies) {
       *       Logger.log(companies[i].getJobTitle());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/company-field#getJobTitle()
       */
      getJobTitle(): string;

      /**
       * Gets whether this is the primary company.
       *
       *
       *     // Logs true or false depending on whether each company is the primary
       *     // company for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var companies = contacts[0].getCompanies();
       *     for (var i in companies) {
       *       Logger.log(companies[i].isPrimary());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/company-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets this company as the primary company, and unsets whatever company was previously primary.
       *
       *
       *     // Sets the first company associated with contact 'John Doe' as primary
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var company = contacts[0].getCompanies()[0];
       *     company.setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/company-field#setAsPrimary()
       */
      setAsPrimary(): CompanyField;

      /**
       * Sets the company name.
       *
       *
       *     // Sets the company name for the first company associated with contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var company = contacts[0].getCompanies()[0];
       *     company.setCompanyName('ACME Corp');
       * https://developers.google.com/apps-script/reference/contacts/company-field#setCompanyName(String)
       * @param company the new name for the company
       */
      setCompanyName(company: string): CompanyField;

      /**
       * Sets the job title.
       *
       *
       *     // Sets the job title for the first company associated with contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var company = contacts[0].getCompanies()[0];
       *     company.setJobTitle('Manager');
       * https://developers.google.com/apps-script/reference/contacts/company-field#setJobTitle(String)
       * @param title the new job title for the contact at this company
       */
      setJobTitle(title: string): CompanyField;
    }
    /**
     * A Contact contains the name, address, and various contact details of a contact.
     */
    interface Contact {

      /**
       * Adds an address to the contact with either a standard or custom label.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the address
       *     // "123 Main St, Some City, NY 10011" with the the ContactsApp.Field.WORK_ADDRESS label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var address = contacts[0].addAddress(ContactsApp.Field.WORK_ADDRESS,
       *                                         '123 Main St, Some City, NY 10011');
       * https://developers.google.com/apps-script/reference/contacts/contact#addAddress(Object,String)
       * @param label the label of the new address, either from ContactsApp.Field or a custom string
       * @param address the new address
       */
      addAddress(label: object, address: string): AddressField;

      /**
       * Adds a company to the contact.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the company "Google" and the
       *     // job title "Product Manager".
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var url = contacts[0].addCompany('Google', 'Product Manager');
       * https://developers.google.com/apps-script/reference/contacts/contact#addCompany(String,String)
       * @param company the name of the company to add to this contact
       * @param title the job title associated with this contact for this company
       */
      addCompany(company: string, title: string): CompanyField;

      /**
       * Adds a custom field to the contact with either an extended or custom label.
       *
       *
       * The label can be either from ContactsApp.ExtendedField or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the custom field
       *     // ContactsApp.ExtendedField.HOBBY with the value "hiking".
       *     // Note that ContactsApp.ExtendedField.HOBBY is not the same as a custom field named 'HOBBY'.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     contacts[0].addCustomField(ContactsApp.ExtendedField.HOBBY, 'hiking');
       * https://developers.google.com/apps-script/reference/contacts/contact#addCustomField(Object,Object)
       * @param label the label of the new address, either from ContactsApp.ExtendedField or a custom string
       * @param content the value to store in the custom field
       */
      addCustomField(label: object, content: object): CustomField;

      /**
       * Adds a date to the contact with either an standard or custom label.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds a
       *     // ContactsApp.ExtendedField.BIRTHDAY with the value "April 19, 1950".
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].addDate(ContactsApp.Field.BIRTHDAY,
       *                                        ContactsApp.Month.APRIL, 19, 1950);
       * https://developers.google.com/apps-script/reference/contacts/contact#addDate(Object,Month,Integer,Integer)
       * @param label the label of the new date, either from ContactsApp.Field or a custom string
       * @param month the month, from ContactApps.Month
       * @param day the day
       * @param year the year
       */
      addDate(label: object, month: Base.Month, day: Integer, year: Integer): DateField;

      /**
       * Add an email address with a standard label (home, work, etc.) or a custom label
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the email address
       *     // "j.doe@example.com" to the ContactsApp.Field.HOME_EMAIL label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var emailField = contacts[0].addEmail(ContactsApp.Field.HOME_EMAIL, 'j.doe@example.com');
       * https://developers.google.com/apps-script/reference/contacts/contact#addEmail(Object,String)
       * @param label the label of the new email, either from ContactsApp.Field or a custom string
       * @param address the new email address
       */
      addEmail(label: object, address: string): EmailField;

      /**
       * Adds an IM address to the contact with either a standard or custom label.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the IM address "ChatWithJohn"
       *     // with the the ContactsApp.Field.AIM label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var email = contacts[0].addIM(ContactsApp.Field.AIM, 'ChatWithJohn');
       * https://developers.google.com/apps-script/reference/contacts/contact#addIM(Object,String)
       * @param label the label of the new IM address, either from ContactsApp.Field or a custom string
       * @param address the new IM address
       */
      addIM(label: object, address: string): IMField;

      /**
       * Adds a phone number to the contact with either a standard or custom label.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the phone number
       *     // "212-555-1234" with the the ContactsApp.Field.WORK_PHONE label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var phone = contacts[0].addPhone(ContactsApp.Field.WORK_PHONE, '212-555-1234');
       * https://developers.google.com/apps-script/reference/contacts/contact#addPhone(Object,String)
       * @param label the label of the new phone number, either from ContactsApp.Field or a custom string
       * @param number the new phone number
       */
      addPhone(label: object, number: string): PhoneField;

      /**
       * Adds this contact to the given contact group.
       *
       *
       *     // The code below creates a new contact and then adds it to the contact group named
       *     // "Work Friends"
       *     var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     contact = contact.addToGroup(group);
       * https://developers.google.com/apps-script/reference/contacts/contact#addToGroup(ContactGroup)
       * @param group the contact group to add this contact to
       */
      addToGroup(group: ContactGroup): Contact;

      /**
       * Adds a URL to the contact with either a standard or custom label.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and adds the URL
       *     // "http://www.example.com" with the the ContactsApp.Field.WORK_WEBSITE label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var url = contacts[0].addUrl(ContactsApp.Field.WORK_WEBSITE, 'http://www.example.com');
       * https://developers.google.com/apps-script/reference/contacts/contact#addUrl(Object,String)
       * @param label the label of the new address, either from ContactsApp.Field or a custom string
       * @param url the new URL
       */
      addUrl(label: object, url: string): UrlField;

      /**
       * Deletes this contact.
       *
       *
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].deleteContact();
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#deleteContact()
       */
      deleteContact(): void;

      /**
       * Gets all the addresses for this contact.
       *
       *
       *     // The code below logs the addresses of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getAddresses());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getAddresses()
       */
      getAddresses(): AddressField[];

      /**
       * Gets all the addresses for this contact matching a particular field.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the addresses
       *     // associated with that contact that are in the ContactsApp.Field.WORK_ADDRESS label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addresses = contacts[0].getAddresses(ContactsApp.Field.WORK_ADDRESS);
       *     for (var i in addresses) {
       *       Logger.log(addresses[i].getAddress());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getAddresses(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getAddresses(label: object): AddressField[];

      /**
       * Gets all the companies for this contact.
       *
       *
       *     // The code below logs the company names of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       var companies = contacts[i].getCompanies();
       *       for (var j in companies) {
       *         Logger.log(companies[j].getCompanyName());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getCompanies()
       */
      getCompanies(): CompanyField[];

      /**
       * Gets all the contact groups that contain this contact.
       *
       *
       *     // The code below gets a contact named "John Doe" and retrieves all the contact groups that
       *     // the contact belongs to
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var groups = contacts[0].getContactGroups();
       * https://developers.google.com/apps-script/reference/contacts/contact#getContactGroups()
       */
      getContactGroups(): ContactGroup[];

      /**
       * Gets all the custom fields for this contact.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the custom fields
       *     // associated with that contact
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var fields = contacts[0].getCustomFields();
       *     for (var i in fields) {
       *       Logger.log(fields[i].getValue());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getCustomFields()
       */
      getCustomFields(): CustomField[];

      /**
       * Gets all the custom fields for this contact matching a particular field.
       *
       *
       * The label can be either a standard label from ContactsApp.ExtendedField or a custom label
       * string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the custom fields
       *     // associated with that contact that are in the ContactsApp.ExtendedField.HOBBY label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var hobbies = contacts[0].getCustomFields(ContactsApp.ExtendedField.HOBBY);
       *     for (var i in hobbies) {
       *       Logger.log(hobbies[i].getValue());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getCustomFields(Object)
       * @param label the label to match, either from ContactsApp.ExtendedField or a custom string
       */
      getCustomFields(label: object): CustomField[];

      /**
       * Gets all the dates for this contact.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the label of the date
       *     // associated with that contact
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var dates = contacts[0].getDates();
       *     for (var i in dates) {
       *       Logger.log(dates[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getDates()
       */
      getDates(): DateField[];

      /**
       * Gets all the dates for this contact matching a particular field.
       *
       *
       * The label can be either a standard label from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the day of the month
       *     // associated with that contact that are in the ContactsApp.Field.BIRTHDAY label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthdays = contacts[0].getDates(ContactsApp.Field.BIRTHDAY);
       *     for (var i in birthdays) {
       *       Logger.log(birthdays[i].getDay());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getDates(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getDates(label: object): DateField[];

      /**
       * Gets the email addresses of this contact.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the email addresses
       *     // associated with that contact
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var emails = contacts[0].getEmails();
       *     for (var i in emails) {
       *       Logger.log(emails[i].getAddress());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getEmails()
       */
      getEmails(): EmailField[];

      /**
       * Gets the email addresses for this contact matching a particular field.
       *
       *
       * The label can be either a standard label from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the email addresses
       *     // associated with that contact that are in the ContactsApp.Field.HOME_EMAIL label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var emails = contacts[0].getEmails(ContactsApp.Field.HOME_EMAIL);
       *     for (var i in emails) {
       *       Logger.log(emails[i].getAddress());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getEmails(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getEmails(label: object): EmailField[];

      /**
       * Gets the family name (last name) of the contact as a string.
       *
       *
       *     // The code below logs the family name of all the contacts whose names contain "John"
       *     var contacts = ContactsApp.getContactsByName('John');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getFamilyName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getFamilyName()
       */
      getFamilyName(): string;

      /**
       * Gets the full name (given name and last name) of the contact as a string.
       *
       *
       *     // The code below logs the full name of all the contacts whose names contain "John"
       *     var contacts = ContactsApp.getContactsByName('John');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getFullName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getFullName()
       */
      getFullName(): string;

      /**
       * Gets the given name (first name) of the contact as a string.
       *
       *
       *     // The code below logs the given name of all the contacts whose names contain "Smith"
       *     var contacts = ContactsApp.getContactsByName('Smith');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getGivenName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getGivenName()
       */
      getGivenName(): string;

      /**
       * Gets all the IM addresses for this contact.
       *
       *
       *     // The code below logs the IM addresses of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getIMs());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getIMs()
       */
      getIMs(): IMField[];

      /**
       * Gets all the IM addresses for this contact matching a particular field.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the IM addresses
       *     // associated with that contact that are in the ContactsApp.Field.GOOGLE_TALK label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var imAddresses = contacts[0].getIMs(ContactsApp.Field.GOOGLE_TALK);
       *     for (var i in imAddresses) {
       *       Logger.log(imAddresses[i].getAddress());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getIMs(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getIMs(label: object): IMField[];

      /**
       * Returns the unique id of this contact.
       *
       *
       *     var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
       *     var id = contact.getId();
       * https://developers.google.com/apps-script/reference/contacts/contact#getId()
       */
      getId(): string;

      /**
       * Gets the contact's initials.
       *
       *
       *     // The code below logs the initials of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getInitials());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getInitials()
       */
      getInitials(): string;

      /**
       * Gets the date this contact was last updated.
       *
       *
       *     // The code below logs the last updated date of all the contacts whose names contain
       *     // "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getLastUpdated());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the maiden name of the contact as a string.
       *
       *
       *     // The code below logs the maiden name of all the contacts whose names contain "Jane"
       *     var contacts = ContactsApp.getContactsByName('Jane');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getMaidenName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getMaidenName()
       */
      getMaidenName(): string;

      /**
       * Gets the middle name of the contact as a string.
       *
       *
       *     // The code below logs the middle name of all the contacts whose names contain "Smith"
       *     var contacts = ContactsApp.getContactsByName('Smith');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getMiddleName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getMiddleName()
       */
      getMiddleName(): string;

      /**
       * Gets the nickname of the contact as a string.
       *
       *
       *     // The code below logs the nickname of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getNickname());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getNickname()
       */
      getNickname(): string;

      /**
       * Gets the notes associated with this contact, or an empty string if there are no notes.
       *
       *
       *     // The code below logs the notes of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getNotes());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getNotes()
       */
      getNotes(): string;

      /**
       * Gets all the phone numbers for this contact.
       *
       *
       *     // The code below logs the phone numbers of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getPhones());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getPhones()
       */
      getPhones(): PhoneField[];

      /**
       * Gets all the phone numbers for this contact matching a particular field.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the phone numbers
       *     // associated with that contact that are in the ContactsApp.Field.WORK_PHONE label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var phones = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
       *     for (var i in phones) {
       *       Logger.log(phones[i].getPhoneNumber());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getPhones(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getPhones(label: object): PhoneField[];

      /**
       * Gets the prefix to the contact's name.
       *
       *
       *     // The code below logs the prefix of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getPrefix());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getPrefix()
       */
      getPrefix(): string;

      /**
       * Gets the primary email address of the contact as a string.
       *
       *
       *     // The code below logs the primary email address of all the contacts whose names contain
       *     // "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getPrimaryEmail());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getPrimaryEmail()
       */
      getPrimaryEmail(): string;

      /**
       * Gets the short name of the contact as a string.
       *
       *
       *     // The code below logs the short name of all the contacts whose names contain "Johnathan"
       *     var contacts = ContactsApp.getContactsByName('Johnathan');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getShortName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getShortName()
       */
      getShortName(): string;

      /**
       * Gets the suffix to the contact's name.
       *
       *
       *     // The code below logs the suffix of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getSuffix());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getSuffix()
       */
      getSuffix(): string;

      /**
       * Gets all the URLs for this contact.
       *
       *
       *     // The code below logs the URLs of all the contacts whose names contain "John Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       Logger.log(contacts[i].getUrls());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getUrls()
       */
      getUrls(): UrlField[];

      /**
       * Gets all the URLs for this contact matching a particular field.
       *
       *
       * The label can be either from ContactsApp.Field or a custom label string.
       *
       *
       *     // The code below retrieves a contact named "John Doe" and logs the URLs
       *     // associated with that contact that are in the ContactsApp.Field.WORK_WEBSITE label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var urls = contacts[0].getUrls(ContactsApp.Field.WORK_WEBSITE);
       *     for (var i in urls) {
       *       Logger.log(urls[i].getAddress());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#getUrls(Object)
       * @param label the label to match, either from ContactsApp.Field or a custom string
       */
      getUrls(label: object): UrlField[];

      /**
       * Removes this contact from the given contact group.
       *
       *
       *     // The code below gets all the contacts named "John Doe" and then removes each of them from
       *     // the "Work Friends" contact group
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     for (var i in contacts) {
       *       contacts[i] = contacts[i].removeFromGroup(group);
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#removeFromGroup(ContactGroup)
       * @param group the contact group to remove this contact from
       */
      removeFromGroup(group: ContactGroup): Contact;

      /**
       * Sets the family name (last name) of the contact.
       *
       *
       *     // The code below changes the family name of all the contacts whose names are "John Doe"
       *     // to "Doe-Smith"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setFamilyName('Doe-Smith');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setFamilyName(String)
       * @param familyName the new family name of the contact
       */
      setFamilyName(familyName: string): Contact;

      /**
       * Sets the full name (given name and last name) of the contact.
       *
       *
       *     // The code below changes the full name of all the contacts whose names are "John Doe"
       *     // to "Johnny Doe"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setFullName('Johnny Doe');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setFullName(String)
       * @param fullName the new full name of the contact
       */
      setFullName(fullName: string): Contact;

      /**
       * Sets the given name (first name) of the contact.
       *
       *
       *     // The code below changes the given name of all the contacts whose names are "John Doe"
       *     // to "Johnny"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setGivenName('Johnny');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setGivenName(String)
       * @param givenName the new given name of the contact
       */
      setGivenName(givenName: string): Contact;

      /**
       * Sets the contact's initials.
       *
       *
       *     // The code below sets the initials of all the contacts whose names are "Johnathan Doe"
       *     // to "JD"
       *     var contacts = ContactsApp.getContactsByName('Johnathan Doe');
       *     for (var i in contacts) {
       *       contacts[i].setInitials('JD');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setInitials(String)
       * @param initials the new initials of the contact
       */
      setInitials(initials: string): Contact;

      /**
       * Sets the maiden name of the contact.
       *
       *
       *     // The code below changes the maiden name of all the contacts whose names are "Jane Doe"
       *     // to "Smith"
       *     var contacts = ContactsApp.getContactsByName('Jane Doe');
       *     for (var i in contacts) {
       *       contacts[i].setMaidenName('Smith');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setMaidenName(String)
       * @param maidenName the new maiden name of the contact
       */
      setMaidenName(maidenName: string): Contact;

      /**
       * Sets the middle name of the contact.
       *
       *
       *     // The code below changes the middle name of all the contacts whose names are "John Doe"
       *     // to "Danger"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setMiddleName('Danger');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setMiddleName(String)
       * @param middleName the new middle name of the contact
       */
      setMiddleName(middleName: string): Contact;

      /**
       * Sets the nickname of the contact.
       *
       *
       *     // The code below changes the nickname of all the contacts whose names are "John Doe"
       *     // to "JohnnyD"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setNickname('JohnnyD');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setNickname(String)
       * @param nickname the new nickname of the contact
       */
      setNickname(nickname: string): Contact;

      /**
       * Sets the notes associated with this contact.
       *
       *
       *     // The code below sets the notes of all the contacts whose names are "John Doe"
       *     // to "Met him at the hackathon"
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     for (var i in contacts) {
       *       contacts[i].setNotes('Met him at the hackathon');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setNotes(String)
       * @param notes the notes to be stored for this contact
       */
      setNotes(notes: string): Contact;

      /**
       * Sets the prefix to the contact's name.
       *
       *
       *     // The code below sets the prefix of all the contacts whose names are "Johnathan Doe"
       *     // to "Mr"
       *     var contacts = ContactsApp.getContactsByName('Johnathan Doe');
       *     for (var i in contacts) {
       *       contacts[i].setPrefix('Mr');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setPrefix(String)
       * @param prefix the new prefix of the contact's name
       */
      setPrefix(prefix: string): Contact;

      /**
       * Sets the short name of the contact.
       *
       *
       *     // The code below changes the short name of all the contacts whose names are "Johnathan Doe"
       *     // to "John"
       *     var contacts = ContactsApp.getContactsByName('Johnathan Doe');
       *     for (var i in contacts) {
       *       contacts[i].setShortName('John');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setShortName(String)
       * @param shortName the new short name of the contact
       */
      setShortName(shortName: string): Contact;

      /**
       * Sets the suffix to the contact's name.
       *
       *
       *     // The code below sets the suffix of all the contacts whose names are "Johnathan Doe"
       *     // to "Jr"
       *     var contacts = ContactsApp.getContactsByName('Johnathan Doe');
       *     for (var i in contacts) {
       *       contacts[i].setSuffix('Jr');
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact#setSuffix(String)
       * @param suffix the new suffix of the contact's name
       */
      setSuffix(suffix: string): Contact;
      /** @deprecated DO NOT USE */ getEmailAddresses(): string[];
      /** @deprecated DO NOT USE */ getHomeAddress(): string;
      /** @deprecated DO NOT USE */ getHomeFax(): string;
      /** @deprecated DO NOT USE */ getHomePhone(): string;
      /** @deprecated DO NOT USE */ getMobilePhone(): string;
      /** @deprecated DO NOT USE */ getPager(): string;
      /** @deprecated DO NOT USE */ getUserDefinedField(key: string): string;
      /** @deprecated DO NOT USE */ getUserDefinedFields(): object;
      /** @deprecated DO NOT USE */ getWorkAddress(): string;
      /** @deprecated DO NOT USE */ getWorkFax(): string;
      /** @deprecated DO NOT USE */ getWorkPhone(): string;
      /** @deprecated DO NOT USE */ setHomeAddress(addr: string): void;
      /** @deprecated DO NOT USE */ setHomeFax(phone: string): void;
      /** @deprecated DO NOT USE */ setHomePhone(phone: string): void;
      /** @deprecated DO NOT USE */ setMobilePhone(phone: string): void;
      /** @deprecated DO NOT USE */ setPager(phone: string): void;
      /** @deprecated DO NOT USE */ setPrimaryEmail(primaryEmail: string): void;
      /** @deprecated DO NOT USE */ setUserDefinedField(key: string, value: string): void;
      /** @deprecated DO NOT USE */ setUserDefinedFields(o: object): void;
      /** @deprecated DO NOT USE */ setWorkAddress(addr: string): void;
      /** @deprecated DO NOT USE */ setWorkFax(phone: string): void;
      /** @deprecated DO NOT USE */ setWorkPhone(phone: string): void;
    }
    /**
     * A ContactGroup is is a group of contacts.
     */
    interface ContactGroup {

      /**
       * Adds the given contact to this group
       *
       *
       *     // The code below creates a new contact and adds it to the "Work Friends" contact group
       *     var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     group.addContact(contact);
       * https://developers.google.com/apps-script/reference/contacts/contact-group#addContact(Contact)
       * @param contact the contact to be added to the group
       */
      addContact(contact: Contact): ContactGroup;

      /**
       * Deletes this contact group.
       *
       *
       * Deletes non-system groups only; system groups cannot be deleted.
       *
       *
       *     // The code below retrieves a contact group named "Work Friends" and deletes it
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     group.deleteGroup();
       * https://developers.google.com/apps-script/reference/contacts/contact-group#deleteGroup()
       */
      deleteGroup(): void;

      /**
       * Gets all the contacts in this contact group.
       *
       *
       *     // The code below retrieves all the contacts in the group named "Work Friends"
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     var contacts = group.getContacts();
       * https://developers.google.com/apps-script/reference/contacts/contact-group#getContacts()
       */
      getContacts(): Contact[];

      /**
       * Gets the id of this contact group.
       *
       *
       *     // The code below retrieves a contact group named "Work Friends" and gets its id
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     var id = group.getId();
       * https://developers.google.com/apps-script/reference/contacts/contact-group#getId()
       */
      getId(): string;

      /**
       * Gets the name of this contact group.
       *
       *
       *     // The code below creates a new contact group and then retrieves its name
       *     var group = ContactsApp.createContactGroup('Work Friends');
       *     var name = group.getName();
       * https://developers.google.com/apps-script/reference/contacts/contact-group#getName()
       */
      getName(): string;

      /**
       * Gets a boolean value to determine whether this contact group is a system group (undeletable) or
       * not.
       *
       *
       * Systems groups are a set of groups that are predefined in Google Contacts, such as "My
       * Contacts", "Family", "Coworkers", etc. The name of a system group usually contains the words
       * "System Group".
       *
       *
       *     // The code below retrieves two contact groups, then logs whether or not
       *     // each is a system group.
       *     var myGroup = ContactsApp.getContactGroup('Work Friends');
       *     var systemGroup = ContactsApp.getContactGroup('System Group: Coworkers');
       *     Logger.log(myGroup.isSystemGroup()); // Returns false, if the group exists.
       *     Logger.log(systemGroup.isSystemGroup()); // Returns true.
       * https://developers.google.com/apps-script/reference/contacts/contact-group#isSystemGroup()
       */
      isSystemGroup(): boolean;

      /**
       * Removes the given contact from this group
       *
       *
       *     // The code below retrieves all the contacts named "John Doe' and removes them from the
       *     // "Work Friends" contact group
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     for (var i in contacts) {
       *       group.removeContact(contacts[i]);
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contact-group#removeContact(Contact)
       * @param contact the contact to be removed from the group
       */
      removeContact(contact: Contact): ContactGroup;

      /**
       * Sets the name of this contact group.
       *
       *
       *     // The code below retrieves the contact group named "Work Friends" and renames it to
       *     // "Work Buddies"
       *     var group = ContactsApp.getContactGroup('Work Friends');
       *     group.setName('Work Buddies');
       * https://developers.google.com/apps-script/reference/contacts/contact-group#setName(String)
       * @param name the new name for the contact group
       */
      setName(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getGroupName(): string;
      /** @deprecated DO NOT USE */ setGroupName(name: string): void;
    }
    /**
     * This class allows users to access their own Google Contacts and create, remove, and update
     * contacts listed therein.
     */
    interface ContactsApp {
      ExtendedField: typeof ExtendedField;
      Field: typeof Field;
      Gender: typeof Gender;
      Month: typeof Base.Month;
      Priority: typeof Priority;
      Sensitivity: typeof Sensitivity;

      /**
       * Creates a new contact.
       *
       *
       *     // The code below creates a new contact with the name "John Doe" and the email address
       *     // "john.doe@example.com".
       *     var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#createContact(String,String,String)
       * @param givenName the first name of the contact
       * @param familyName the last name of the contact
       * @param email the email address of the contact
       */
      createContact(givenName: string, familyName: string, email: string): Contact;

      /**
       * Creates a contact group with the given name
       *
       *
       *     // The code below creates a new contact group named "Work Friends"
       *     var group = ContactsApp.createContactGroup("Work Friends");
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#createContactGroup(String)
       * @param name the name of the new contact group
       */
      createContactGroup(name: string): ContactGroup;

      /**
       * Deletes the contact.
       *
       *
       *     // The code below retrieves a contact with the email address "john.doe@example.com"
       *     // and then deletes that contact.
       *     var contact = ContactsApp.getContact('john.doe@example.com');
       *     ContactsApp.deleteContact(contact);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#deleteContact(Contact)
       * @param contact the contact to be deleted
       */
      deleteContact(contact: Contact): void;

      /**
       * Deletes the contact group
       *
       *
       *     // The code below creates deletes the contact group named "Work Friends"
       *     var group = ContactsApp.getContactGroup("Work Friends");
       *     ContactsApp.deleteContactGroup(group);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#deleteContactGroup(ContactGroup)
       * @param group the contact group to delete
       */
      deleteContactGroup(group: ContactGroup): void;

      /**
       * Gets a contact by the email address.
       *
       *
       * If multiple contacts share the same email address, the method favors those contacts who have
       * marked the email address as primary; if none of the contacts had the email address marked as
       * primary or multiple contacts had the email address marked as primary, then it returns the first
       * result in the sorted contacts order.
       *
       *
       *     // The code below retrieves a contact with the email address "john.doe@example.com".
       *     var contact = ContactsApp.getContact('john.doe@example.com');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContact(String)
       * @param emailAddress the email address of the contact
       */
      getContact(emailAddress: string): Contact;

      /**
       * Gets the contact with this id.
       *
       *
       *     // The code below retrieves the contact with the id
       *     // "http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34ca5"
       *     var id = 'http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34c';
       *     var contact = ContactApp.getContactById(id);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactById(String)
       * @param id the id of the contact to retrieve
       */
      getContactById(id: string): Contact;

      /**
       * Gets a contact group with the given name, or returns null if no such contact group is found.
       *
       *
       *     // The code below returns the contact group with the name "Work Friends"
       *     var group  = ContactsApp.getContactGroup('Work Friends');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactGroup(String)
       * @param name the name of the contact group to match
       */
      getContactGroup(name: string): ContactGroup;

      /**
       * Gets a contact group with the given id, or returns null if no such contact group is found.
       *
       *
       *     // The code below returns the contact group with the id
       *     // "http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb"
       *     var id = "http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb";
       *     var group  = ContactsApp.getContactGroupById(id);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactGroupById(String)
       * @param id the id of the contact group to match
       */
      getContactGroupById(id: string): ContactGroup;

      /**
       * Gets the complete list of the user's contact groups.
       *
       *
       * A user can have a list of Contacts, and potentially a list of Contact Groups also. Each
       * Contact Group can contain Contacts. This method returns a list of all the Contact Groups.
       *
       *
       *     // The retrieves all the contract groups for the user and then logs the group name of each
       *     // contact group.
       *     var groups  = ContactsApp.getContactGroups();
       *     for (var i = 0; i < groups.length; i++) {
       *       Logger.log(groups[i].getName());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactGroups()
       */
      getContactGroups(): ContactGroup[];

      /**
       * Gets all of the user's contacts.
       *
       *
       *     // The code below will retrieve all the user's contacts
       *     var contacts = ContactsApp.getContacts();
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContacts()
       */
      getContacts(): Contact[];

      /**
       * Get contacts matching an address.
       *
       *
       *     // The code below returns an array of contacts where the contact's address contains
       *     // "San Francisco'.
       *     var contacts = ContactsApp.getContactsByAddress('San Francisco');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByAddress(String)
       * @param query the string to search for in contact's addresses
       */
      getContactsByAddress(query: string): Contact[];

      /**
       * Get contacts matching an address, limited to a specific field.
       *
       *
       *     // The code below returns an array of contacts where the contact's address contains
       *     // "San Francisco" in the Home address field.
       *     var contacts = ContactsApp.getContactsByAddress('San Francisco',
       *                                                     ContactsApp.Field.HOME_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByAddress(String,Field)
       * @param query the string to search for in contact's addresses
       * @param label the field to search within
       */
      getContactsByAddress(query: string, label: Field): Contact[];

      /**
       * Get contacts matching an address, limited to the specified custom address label.
       *
       *
       *     // The code below returns an array of contacts where the contact's address contains
       *     // "San Francisco" in a custom address label (created by the user) called
       *     // "vacation".
       *     var contacts = ContactsApp.getContactsByAddress('San Francisco', 'vacation');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByAddress(String,String)
       * @param query the string to search for in contact's addresses with the specified custom address label
       * @param label the custom address label to search within
       */
      getContactsByAddress(query: string, label: string): Contact[];

      /**
       * Get contacts matching the company field.
       *
       *
       *     // The code below returns an array of contacts where the contact's company field
       *     // contains "Google".
       *     var contacts = ContactsApp.getContactsByCompany('Google');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByCompany(String)
       * @param query the string to search for in contact's company field
       */
      getContactsByCompany(query: string): Contact[];

      /**
       * Get contacts matching a given value in a custom field.
       *
       *
       * The custom field can be specified by a String or as one of the ContactsApp.ExtendedField
       * values.
       *
       *
       *     // The code below returns an array of contacts where the contact's custom field
       *     // named "Favorite Sport" contains "tennis".
       *     var contacts = ContactsApp.getContactsByCustomField('tennis', 'Favorite Sport');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByCustomField(Object,ExtendedField)
       * @param query the string to search for in contact's custom field
       * @param label the custom field to search within
       */
      getContactsByCustomField(query: object, label: ExtendedField): Contact[];

      /**
       * Get contacts matching a given month and day for a particular standard field.
       *
       *
       *     // The code below returns an array of contacts where the contact's "Birthday" field
       *     // contains April for the month and 19 for the day.
       *     var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19,
       *                                                   ContactsApp.Field.BIRTHDAY);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByDate(Month,Integer,Field)
       * @param month the month to match, as one of the values from ContactsApp.Month
       * @param day the day to match
       * @param label the field to search within, from ContactsApp.Field
       */
      getContactsByDate(month: Base.Month, day: Integer, label: Field): Contact[];

      /**
       * Get contacts matching a given month, day, and year for a particular standard field.
       *
       *
       *     // The code below returns an array of contacts where the contact's "Birthday" field
       *     // contains April for the month, 19 for the day, and 1950 for the year.
       *     var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 1950,
       *                                                  ContactsApp.Field.BIRTHDAY);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByDate(Month,Integer,Integer,Field)
       * @param month the month to match, as one of the values from ContactsApp.Month
       * @param day the day to match
       * @param year the year to match, can be null
       * @param label the field to search within, from ContactsApp.Field
       */
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: Field): Contact[];

      /**
       * Get contacts matching a given month, day, and year for a particular custom field.
       *
       *
       *     // The code below returns an array of contacts where the contact's custom "Start Date" field
       *     // contains April for the month, 19 for the day, and 2011 for the year.
       *     var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 2011, 'Start Date');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByDate(Month,Integer,Integer,String)
       * @param month the month to match, as one of the values from ContactsApp.Month
       * @param day the day to match
       * @param year the year to match, can be null
       * @param label the custom field to search within
       */
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: string): Contact[];

      /**
       * Get contacts matching a given month and day for a particular custom field.
       *
       *
       *     // The code below returns an array of contacts where the contact's custom "Start Date" field
       *     // contains April for the month and 19 for the day.
       *     var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 'Start Date');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByDate(Month,Integer,String)
       * @param month the month to match, as one of the values from ContactsApp.Month
       * @param day the day to match
       * @param label the custom field to search within
       */
      getContactsByDate(month: Base.Month, day: Integer, label: string): Contact[];

      /**
       * Get contacts matching an email address.
       *
       *
       *     // The code below returns an array of contacts where the contact's email address contains
       *     // "john.doe@example.com'.
       *     var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByEmailAddress(String)
       * @param query the string to search for in contact email addresses
       */
      getContactsByEmailAddress(query: string): Contact[];

      /**
       * Get contacts matching an email address, limited to a specific field.
       *
       *
       *     // The code below returns an array of contacts where the contact's email address contains
       *     // "john.doe@example.com" in the Home email field.
       *     var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com',
       *                                                          ContactsApp.Field.HOME_EMAIL);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByEmailAddress(String,Field)
       * @param query the string to search for in contact email addresses
       * @param label the field to search within
       */
      getContactsByEmailAddress(query: string, label: Field): Contact[];

      /**
       * Get contacts matching an email address, limited to the specified custom email address label.
       *
       *
       *     // The code below returns an array of contacts where the contact's email address contains
       *     // "john.doe@example.com" in a custom email address label (created by the user) called
       *     // "alternate".
       *     var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com', 'alternate');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByEmailAddress(String,String)
       * @param query the string to search for in contact email addresses with the specified custom email address label
       * @param label the custom email address label to search within
       */
      getContactsByEmailAddress(query: string, label: string): Contact[];

      /**
       * Get the contacts in a given ContactGroup.
       *
       *
       *     // The code below returns an array of contacts in the ContactGroup with the name
       *     // "Work Friends".
       *     var group  = ContactsApp.getContactGroup('Work Friends');
       *     var contacts = ContactsApp.getContactsByGroup(group);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByGroup(ContactGroup)
       * @param group the group of contacts
       */
      getContactsByGroup(group: ContactGroup): Contact[];

      /**
       * Get contacts matching an instant messaging address.
       *
       *
       *     // The code below returns an array of contacts where the contact's instant messaging address
       *     // contains "ChatWithJohnDoe" in any instant messaging field.
       *     var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByIM(String)
       * @param query the string to search for in contact's instant messaging addresses
       */
      getContactsByIM(query: string): Contact[];

      /**
       * Get contacts matching an instant messaging address, limited to a specific field.
       *
       *
       *     // The code below returns an array of contacts where the contact's instant messaging address
       *     // contains "ChatWithJohnDoe" in the AIM instant messaging field.
       *     var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe',
       *                                                 ContactsApp.Field.AIM);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByIM(String,Field)
       * @param query the string to search for in contact's instant messaging addresses
       * @param label the field to search within
       */
      getContactsByIM(query: string, label: Field): Contact[];

      /**
       * Get contacts matching an instant messaging address, limited to the specified custom instant
       * messaging label.
       *
       *
       *     // The code below returns an array of contacts where the contact's instant messaging address
       *     // contains "ChatWithJohnDoe" in a custom instant messaging label (created by the user) called
       *     // "eBuddy".
       *     var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe', 'eBuddy');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByIM(String,String)
       * @param query the string to search for in contact's instant messaging addresses with the specified custom instant messaging label
       * @param label the custom instant messaging label to search within
       */
      getContactsByIM(query: string, label: string): Contact[];

      /**
       * Get contacts matching the job title field.
       *
       *
       *     // The code below returns an array of contacts where the contact's job title field
       *     // contains "Product Manager".
       *     var contacts = ContactsApp.getContactsByJobTitle('Product Manager');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByJobTitle(String)
       * @param query the string to search for in contact's job title field
       */
      getContactsByJobTitle(query: string): Contact[];

      /**
       * Get contacts matching a name.
       *
       *
       *     // The code below returns an array of contacts where the contact name contains "John"
       *     var contacts = ContactsApp.getContactsByName('John');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByName(String)
       * @param query the string to search for in contact names
       */
      getContactsByName(query: string): Contact[];

      /**
       * Get contacts matching a name, limited to a specific field.
       *
       *
       *     // The code below returns an array of contacts where the contact name contains "John"
       *     // in the Given Name field.
       *     var contacts = ContactsApp.getContactsByName('John', ContactsApp.Field.GIVEN_NAME);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByName(String,Field)
       * @param query the string to search for in contact names
       * @param label the field to search within
       */
      getContactsByName(query: string, label: Field): Contact[];

      /**
       * Get contacts matching the notes field.
       *
       *
       *     // The code below returns an array of contacts where the contact's notes field
       *     // contains "sent birthday card".
       *     var contacts = ContactsApp.getContactsByNotes('sent birthday card');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByNotes(String)
       * @param query the string to search for in contact's notes field
       */
      getContactsByNotes(query: string): Contact[];

      /**
       * Get contacts matching a phone number.
       *
       *
       * This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
       * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
       * contact.
       *
       *
       *     // The code below returns an array of contacts where the contact's phone number contains
       *     // "212-555-1234' in any phone number field.
       *     var contacts = ContactsApp.getContactsByPhone('212-555-1234');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByPhone(String)
       * @param query the string to search for in contact's phone numbers
       */
      getContactsByPhone(query: string): Contact[];

      /**
       * Get contacts matching a phone number, limited to a specific field.
       *
       *
       * This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
       * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
       * contact.
       *
       *
       *     // The code below returns an array of contacts where the contact's phone number contains
       *     // "212-555-1234" in the Home phone number field.
       *     var contacts = ContactsApp.getContactsByPhone('212-555-1234',
       *                                                   ContactsApp.Field.HOME_PHONE);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByPhone(String,Field)
       * @param query the string to search for in contact's phone numbers
       * @param label the field to search within
       */
      getContactsByPhone(query: string, label: Field): Contact[];

      /**
       * Get contacts matching a phone number, limited to the specified custom phone number label.
       *
       *
       * This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
       * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
       * contact.
       *
       *
       *     // The code below returns an array of contacts where the contact's phone number contains
       *     // "212-555-1234" in a custom phone number label (created by the user) called
       *     // "alternate".
       *     var contacts = ContactsApp.getContactsByPhone('212-555-1234', 'alternate');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByPhone(String,String)
       * @param query the string to search for in contact's phone numbers with the specified custom phone number label
       * @param label the custom phone number label to search within
       */
      getContactsByPhone(query: string, label: string): Contact[];

      /**
       * Get contacts matching a URL.
       *
       *
       *     // The code below returns an array of contacts where the contact's URL contains
       *     // "www.example.com' in any URL field.
       *     var contacts = ContactsApp.getContactsByUrl('www.example.com');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByUrl(String)
       * @param query the string to search for in contact's URLs
       */
      getContactsByUrl(query: string): Contact[];

      /**
       * Get contacts matching a URL, limited to a specific field.
       *
       *
       *     // The code below returns an array of contacts where the contact's URL contains
       *     // "www.example.com" in the Work URL field.
       *     var contacts = ContactsApp.getContactsByUrl('www.example.com',
       *                                                 ContactsApp.Field.WORK_WEBSITE);
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByUrl(String,Field)
       * @param query the string to search for in contact's URLs
       * @param label the field to search within
       */
      getContactsByUrl(query: string, label: Field): Contact[];

      /**
       * Get contacts matching a URL, limited to the specified custom URL label.
       *
       *
       *     // The code below returns an array of contacts where the contact's URL contains
       *     // "www.example.com" in a custom URL label (created by the user) called
       *     // "alternate work".
       *     var contacts = ContactsApp.getContactsByUrl('www.example.com', 'alternate work');
       * https://developers.google.com/apps-script/reference/contacts/contacts-app#getContactsByUrl(String,String)
       * @param query the string to search for in contact's URLs with the specified custom URL label
       * @param label the custom URL label to search within
       */
      getContactsByUrl(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ findByEmailAddress(email: string): Contact;
      /** @deprecated DO NOT USE */ findContactGroup(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getAllContacts(): Contact[];
    }
    /**
     * A custom field in a Contact.
     */
    interface CustomField {

      /**
       * Deletes this field.
       *
       *
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var fields = contacts[0].getCustomFields();
       *     for (var i = 0; i < fields.length; i++) {
       *       if (fields[i].getLabel() == 'foo') {
       *         fields[i].deleteCustomField();
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/contacts/custom-field#deleteCustomField()
       */
      deleteCustomField(): void;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/custom-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets the value of the field.
       *
       *
       *     // Logs the value of all the custom fields for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var fields = contacts[0].getCustomFields();
       *     for (var i in fields) {
       *       Logger.log(fields[i].getValue());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/custom-field#getValue()
       */
      getValue(): object;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the first custom field associated with contact 'John Doe' to use 'Mail application' as
       *     // a label, with 'Gmail' as the value.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var field = contacts[0].getCustomFields()[0];
       *     field.setLabel('Mail application');
       *     field.setValue('Gmail');
       * https://developers.google.com/apps-script/reference/contacts/custom-field#setLabel(ExtendedField)
       * @param field the new standard label
       */
      setLabel(field: ExtendedField): CustomField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/custom-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): CustomField;

      /**
       * Sets the value of this field.
       *
       *
       *     // Sets the first custom field associated with contact 'John Doe' to use 'Mail application' as
       *     // a label, with 'Gmail' as the value.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var field = contacts[0].getCustomFields()[0];
       *     field.setLabel('Mail application');
       *     field.setValue('Gmail');
       * https://developers.google.com/apps-script/reference/contacts/custom-field#setValue(Object)
       * @param value the new value
       */
      setValue(value: object): CustomField;
    }
    /**
     * A date field in a Contact.
     *
     * This class is only used by the Contacts service, and dates used elsewhere in App Script use
     * JavaScript's standard
     * Date object.
     */
    interface DateField {

      /**
       * Deletes this date.
       *
       *
       *     // Deletes all the dates that are set for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var dates = contacts[0].getDates();
       *     for (var i = 0; i < dates.length; i++) {
       *       dates[i].deleteDateField();
       *     }
       * https://developers.google.com/apps-script/reference/contacts/date-field#deleteDateField()
       */
      deleteDateField(): void;

      /**
       * Gets the day of the month for this date.
       *
       *
       * Note: For standard JavaScript Date objects the
       * getDay() method returns the day of the week instead.
       *
       *
       *     // Logs the day of the birthday for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
       *     Logger.log(birthday.getDay());
       * https://developers.google.com/apps-script/reference/contacts/date-field#getDay()
       */
      getDay(): Integer;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/date-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets the month for this date.
       *
       *
       *     // Logs the month of the birthday for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
       *     Logger.log(birthday.getMonth());
       * https://developers.google.com/apps-script/reference/contacts/date-field#getMonth()
       */
      getMonth(): Base.Month;

      /**
       * Gets the year for this date.
       *
       *
       *     // Logs the year of the birthday for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
       *     Logger.log(birthday.getYear());
       * https://developers.google.com/apps-script/reference/contacts/date-field#getYear()
       */
      getYear(): Integer;

      /**
       * Sets the date to this day, without a year.
       *
       *
       * This method only applies to date fields that don't require a year, such as birthdays.
       *
       *
       *     // Sets the birthday for contact 'John Doe' to April 1
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
       *     birthday.setDate(ContactsApp.Month.APRIL, 1);
       * https://developers.google.com/apps-script/reference/contacts/date-field#setDate(Month,Integer)
       * @param month the month
       * @param day the day
       */
      setDate(month: Base.Month, day: Integer): DateField;

      /**
       * Sets the date to this day.
       *
       *
       *     // Sets the birthday for contact 'John Doe' to April 1, 1980
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
       *     birthday.setDate(ContactsApp.Month.APRIL, 1, 1980);
       * https://developers.google.com/apps-script/reference/contacts/date-field#setDate(Month,Integer,Integer)
       * @param month the month
       * @param day the day
       * @param year the year
       */
      setDate(month: Base.Month, day: Integer, year: Integer): DateField;

      /**
       * Sets the label of this field, such as 'Birthday' or 'Anniversary'.
       *
       *
       *     // Retrieves the first date that's set for contact 'John Doe' and re-labels
       *     // it as an anniversary
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var firstDate = contacts[0].getDates()[0];
       *     firstDate.setLabel(ContactsApp.Field.ANNIVERSARY);
       * https://developers.google.com/apps-script/reference/contacts/date-field#setLabel(Field)
       * @param label the new standard label
       */
      setLabel(label: Field): DateField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/date-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): DateField;
    }
    /**
     * An email field in a Contact.
     */
    interface EmailField {

      /**
       * Deletes this email address from the Contact.
       *
       *
       *     // Retrieves and deletes the work email address for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
       *     workEmail[0].deleteEmailField();
       * https://developers.google.com/apps-script/reference/contacts/email-field#deleteEmailField()
       */
      deleteEmailField(): void;

      /**
       * Get the address for this field.
       *
       *
       *     // Logs the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     Logger.log(homeAddress[0].getAddress());
       * https://developers.google.com/apps-script/reference/contacts/email-field#getAddress()
       */
      getAddress(): string;

      /**
       * Returns the display name for this email address.
       *
       *
       *     // Logs the display name for the the work email address for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
       *     Logger.log(workEmail[0].getDisplayName());
       * https://developers.google.com/apps-script/reference/contacts/email-field#getDisplayName()
       */
      getDisplayName(): string;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/email-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets whether this is the primary field value.
       *
       *
       *     // Logs whether or not the first address field associated with contact
       *     // 'John Doe' is labeled as primary. This method can be similarly called
       *     // for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     Logger.log(addressFields[0].isPrimary());
       * https://developers.google.com/apps-script/reference/contacts/email-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets the address of this field.
       *
       *
       *     // Sets the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
       * https://developers.google.com/apps-script/reference/contacts/email-field#setAddress(String)
       * @param address the new address
       */
      setAddress(address: string): EmailField;

      /**
       * Sets this field to primary.
       *
       *
       *     // Sets the the first address field associated with contact 'John Doe'
       *     // as primary. This method can be similarly called for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/email-field#setAsPrimary()
       */
      setAsPrimary(): EmailField;

      /**
       * Sets the display name for this email address.
       *
       *
       *     // Sets the display name to 'Doe, John' for the the work email address for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
       *     workEmail[0].setDisplayName('Doe, John');
       * https://developers.google.com/apps-script/reference/contacts/email-field#setDisplayName(String)
       * @param name the new display name for this email address
       */
      setDisplayName(name: string): EmailField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Work' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/email-field#setLabel(Field)
       * @param field the new standard label
       */
      setLabel(field: Field): EmailField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/email-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): EmailField;
    }
    /**
     * An enum for extended contacts fields.
     */
    enum ExtendedField { HOBBY, MILEAGE, LANGUAGE, GENDER, BILLING_INFORMATION, DIRECTORY_SERVER, SENSITIVITY, PRIORITY, HOME, WORK, USER, OTHER }
    /**
     * An enum for contacts fields.
     */
    enum Field { FULL_NAME, GIVEN_NAME, MIDDLE_NAME, FAMILY_NAME, MAIDEN_NAME, NICKNAME, SHORT_NAME, INITIALS, PREFIX, SUFFIX, HOME_EMAIL, WORK_EMAIL, BIRTHDAY, ANNIVERSARY, HOME_ADDRESS, WORK_ADDRESS, ASSISTANT_PHONE, CALLBACK_PHONE, MAIN_PHONE, PAGER, HOME_FAX, WORK_FAX, HOME_PHONE, WORK_PHONE, MOBILE_PHONE, GOOGLE_VOICE, NOTES, GOOGLE_TALK, AIM, YAHOO, SKYPE, QQ, MSN, ICQ, JABBER, BLOG, FTP, PROFILE, HOME_PAGE, WORK_WEBSITE, HOME_WEBSITE, JOB_TITLE, COMPANY }
    /**
     * An enum for contact gender.
     */
    enum Gender { MALE, FEMALE }
    /**
     * An instant messaging field in a Contact.
     */
    interface IMField {

      /**
       * Deletes this instant messaging field.
       *
       *
       *     // Retrieves and deletes the AIM instant messaging field for contact 'John
       *     // Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var imFields = contacts[0].getIMs(ContactsApp.Field.AIM);
       *     imFields[0].deleteIMField();
       * https://developers.google.com/apps-script/reference/contacts/im-field#deleteIMField()
       */
      deleteIMField(): void;

      /**
       * Get the address for this field.
       *
       *
       *     // Logs the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     Logger.log(homeAddress[0].getAddress());
       * https://developers.google.com/apps-script/reference/contacts/im-field#getAddress()
       */
      getAddress(): string;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/im-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets whether this is the primary field value.
       *
       *
       *     // Logs whether or not the first address field associated with contact
       *     // 'John Doe' is labeled as primary. This method can be similarly called
       *     // for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     Logger.log(addressFields[0].isPrimary());
       * https://developers.google.com/apps-script/reference/contacts/im-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets the address of this field.
       *
       *
       *     // Sets the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
       * https://developers.google.com/apps-script/reference/contacts/im-field#setAddress(String)
       * @param address the new address
       */
      setAddress(address: string): IMField;

      /**
       * Sets this field to primary.
       *
       *
       *     // Sets the the first address field associated with contact 'John Doe'
       *     // as primary. This method can be similarly called for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/im-field#setAsPrimary()
       */
      setAsPrimary(): IMField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Work' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/im-field#setLabel(Field)
       * @param field the new standard label
       */
      setLabel(field: Field): IMField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/im-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): IMField;
    }
    /**
     * A phone number field in a Contact.
     */
    interface PhoneField {

      /**
       * Deletes this phone number field.
       *
       *
       *     // Retrieves and deletes the work phone number field for contact 'John
       *     // Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
       *     phoneFields[0].deletePhoneField();
       * https://developers.google.com/apps-script/reference/contacts/phone-field#deletePhoneField()
       */
      deletePhoneField(): void;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/phone-field#getLabel()
       */
      getLabel(): object;

      /**
       * Get the phone number for this field.
       *
       *
       *     // Logs the work phone number for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
       *     Logger.log(phoneFields[0].getPhoneNumber());
       * https://developers.google.com/apps-script/reference/contacts/phone-field#getPhoneNumber()
       */
      getPhoneNumber(): string;

      /**
       * Gets whether this is the primary field value.
       *
       *
       *     // Logs whether or not the first address field associated with contact
       *     // 'John Doe' is labeled as primary. This method can be similarly called
       *     // for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     Logger.log(addressFields[0].isPrimary());
       * https://developers.google.com/apps-script/reference/contacts/phone-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets this field to primary.
       *
       *
       *     // Sets the the first address field associated with contact 'John Doe'
       *     // as primary. This method can be similarly called for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/phone-field#setAsPrimary()
       */
      setAsPrimary(): PhoneField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Work' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/phone-field#setLabel(Field)
       * @param field the new standard label
       */
      setLabel(field: Field): PhoneField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/phone-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): PhoneField;

      /**
       * Sets the phone number for this field.
       *
       *
       *     // Sets the work phone number for contact 'John Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
       *     phoneFields[0].setPhoneNumber('212-555-1234');
       * https://developers.google.com/apps-script/reference/contacts/phone-field#setPhoneNumber(String)
       * @param number the new number
       */
      setPhoneNumber(number: string): PhoneField;
    }
    /**
     * An enum for contact priority.
     */
    enum Priority { HIGH, LOW, NORMAL }
    /**
     * An enum for contact sensitivity.
     */
    enum Sensitivity { CONFIDENTIAL, NORMAL, PERSONAL, PRIVATE }
    /**
     * A URL field in a Contact.
     */
    interface UrlField {

      /**
       * Deletes this URL field.
       *
       *
       *     // Retrieves and deletes the Blog URL field for contact 'John
       *     // Doe'
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var urlFields = contacts[0].getUrls(ContactsApp.Field.BLOG);
       *     urlFields[0].deleteUrlField();
       * https://developers.google.com/apps-script/reference/contacts/url-field#deleteUrlField()
       */
      deleteUrlField(): void;

      /**
       * Get the address for this field.
       *
       *
       *     // Logs the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     Logger.log(homeAddress[0].getAddress());
       * https://developers.google.com/apps-script/reference/contacts/url-field#getAddress()
       */
      getAddress(): string;

      /**
       * Gets the label for this field. This may be a Field, ExtendedField, or a String.
       *
       *
       *     // Logs the label for all the address fields associated with contact
       *     // 'John Doe'. This method can be similarly called for any field that has
       *     // a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     for (var i = 0; i < addressFields.length; i++) {
       *       Logger.log(addressFields[i].getLabel());
       *     }
       * https://developers.google.com/apps-script/reference/contacts/url-field#getLabel()
       */
      getLabel(): object;

      /**
       * Gets whether this is the primary field value.
       *
       *
       *     // Logs whether or not the first address field associated with contact
       *     // 'John Doe' is labeled as primary. This method can be similarly called
       *     // for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     Logger.log(addressFields[0].isPrimary());
       * https://developers.google.com/apps-script/reference/contacts/url-field#isPrimary()
       */
      isPrimary(): boolean;

      /**
       * Sets the address of this field.
       *
       *
       *     // Sets the address for the 'Home Address' field for contact 'John Doe'.
       *     // Can be used similarly for other fields that contain addresses.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
       *     homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
       * https://developers.google.com/apps-script/reference/contacts/url-field#setAddress(String)
       * @param address the new address
       */
      setAddress(address: string): UrlField;

      /**
       * Sets this field to primary.
       *
       *
       *     // Sets the the first address field associated with contact 'John Doe'
       *     // as primary. This method can be similarly called for any field.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setAsPrimary();
       * https://developers.google.com/apps-script/reference/contacts/url-field#setAsPrimary()
       */
      setAsPrimary(): UrlField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Work' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
       * https://developers.google.com/apps-script/reference/contacts/url-field#setLabel(Field)
       * @param field the new standard label
       */
      setLabel(field: Field): UrlField;

      /**
       * Sets the label of this field.
       *
       *
       *     // Sets the label to 'Apartment' for the first address field associated
       *     // with contact 'John Doe'. This method can be similarly called for any
       *     // field that has a label.
       *     var contacts = ContactsApp.getContactsByName('John Doe');
       *     var addressFields = contacts[0].getAddresses();
       *     addressFields[0].setLabel('Apartment');
       * https://developers.google.com/apps-script/reference/contacts/url-field#setLabel(String)
       * @param label the new label for this field
       */
      setLabel(label: string): UrlField;
    }
  }
}

declare var ContactsApp: GoogleAppsScript.Contacts.ContactsApp;
