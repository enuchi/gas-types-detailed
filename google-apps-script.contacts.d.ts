// Type definitions for Google Apps Script 2023-10-28
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Contacts {
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * Address field in a contact.
     */
    interface AddressField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteAddressField(): void;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * Company field in a Contact.
     */
    interface CompanyField {
      /** @deprecated DO NOT USE */ deleteCompanyField(): void;
      /** @deprecated DO NOT USE */ getCompanyName(): string;
      /** @deprecated DO NOT USE */ getJobTitle(): string;
      /** @deprecated DO NOT USE */ isPrimary(): boolean;
      /** @deprecated DO NOT USE */ setAsPrimary(): CompanyField;
      /** @deprecated DO NOT USE */ setCompanyName(company: string): CompanyField;
      /** @deprecated DO NOT USE */ setJobTitle(title: string): CompanyField;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A Contact contains the name, address, and various contact details of a contact.
     */
    interface Contact {
      /** @deprecated DO NOT USE */ addAddress(label: any, address: string): AddressField;
      /** @deprecated DO NOT USE */ addCompany(company: string, title: string): CompanyField;
      /** @deprecated DO NOT USE */ addCustomField(label: any, content: any): CustomField;
      /** @deprecated DO NOT USE */ addDate(label: any, month: Base.Month, day: Integer, year: Integer): DateField;
      /** @deprecated DO NOT USE */ addEmail(label: any, address: string): EmailField;
      /** @deprecated DO NOT USE */ addIM(label: any, address: string): IMField;
      /** @deprecated DO NOT USE */ addPhone(label: any, number: string): PhoneField;
      /** @deprecated DO NOT USE */ addToGroup(group: ContactGroup): Contact;
      /** @deprecated DO NOT USE */ addUrl(label: any, url: string): UrlField;
      /** @deprecated DO NOT USE */ deleteContact(): void;
      /** @deprecated DO NOT USE */ getAddresses(): AddressField[];
      /** @deprecated DO NOT USE */ getAddresses(label: any): AddressField[];
      /** @deprecated DO NOT USE */ getCompanies(): CompanyField[];
      /** @deprecated DO NOT USE */ getContactGroups(): ContactGroup[];
      /** @deprecated DO NOT USE */ getCustomFields(): CustomField[];
      /** @deprecated DO NOT USE */ getCustomFields(label: any): CustomField[];
      /** @deprecated DO NOT USE */ getDates(): DateField[];
      /** @deprecated DO NOT USE */ getDates(label: any): DateField[];
      /** @deprecated DO NOT USE */ getEmailAddresses(): string[];
      /** @deprecated DO NOT USE */ getEmails(): EmailField[];
      /** @deprecated DO NOT USE */ getEmails(label: any): EmailField[];
      /** @deprecated DO NOT USE */ getFamilyName(): string;
      /** @deprecated DO NOT USE */ getFullName(): string;
      /** @deprecated DO NOT USE */ getGivenName(): string;
      /** @deprecated DO NOT USE */ getHomeAddress(): string;
      /** @deprecated DO NOT USE */ getHomeFax(): string;
      /** @deprecated DO NOT USE */ getHomePhone(): string;
      /** @deprecated DO NOT USE */ getIMs(): IMField[];
      /** @deprecated DO NOT USE */ getIMs(label: any): IMField[];
      /** @deprecated DO NOT USE */ getId(): string;
      /** @deprecated DO NOT USE */ getInitials(): string;
      /** @deprecated DO NOT USE */ getLastUpdated(): Date;
      /** @deprecated DO NOT USE */ getMaidenName(): string;
      /** @deprecated DO NOT USE */ getMiddleName(): string;
      /** @deprecated DO NOT USE */ getMobilePhone(): string;
      /** @deprecated DO NOT USE */ getNickname(): string;
      /** @deprecated DO NOT USE */ getNotes(): string;
      /** @deprecated DO NOT USE */ getPager(): string;
      /** @deprecated DO NOT USE */ getPhones(): PhoneField[];
      /** @deprecated DO NOT USE */ getPhones(label: any): PhoneField[];
      /** @deprecated DO NOT USE */ getPrefix(): string;
      /** @deprecated DO NOT USE */ getPrimaryEmail(): string;
      /** @deprecated DO NOT USE */ getShortName(): string;
      /** @deprecated DO NOT USE */ getSuffix(): string;
      /** @deprecated DO NOT USE */ getUrls(): UrlField[];
      /** @deprecated DO NOT USE */ getUrls(label: any): UrlField[];
      /** @deprecated DO NOT USE */ getUserDefinedField(key: string): string;
      /** @deprecated DO NOT USE */ getUserDefinedFields(): any;
      /** @deprecated DO NOT USE */ getWorkAddress(): string;
      /** @deprecated DO NOT USE */ getWorkFax(): string;
      /** @deprecated DO NOT USE */ getWorkPhone(): string;
      /** @deprecated DO NOT USE */ removeFromGroup(group: ContactGroup): Contact;
      /** @deprecated DO NOT USE */ setFamilyName(familyName: string): Contact;
      /** @deprecated DO NOT USE */ setFullName(fullName: string): Contact;
      /** @deprecated DO NOT USE */ setGivenName(givenName: string): Contact;
      /** @deprecated DO NOT USE */ setHomeAddress(addr: string): void;
      /** @deprecated DO NOT USE */ setHomeFax(phone: string): void;
      /** @deprecated DO NOT USE */ setHomePhone(phone: string): void;
      /** @deprecated DO NOT USE */ setInitials(initials: string): Contact;
      /** @deprecated DO NOT USE */ setMaidenName(maidenName: string): Contact;
      /** @deprecated DO NOT USE */ setMiddleName(middleName: string): Contact;
      /** @deprecated DO NOT USE */ setMobilePhone(phone: string): void;
      /** @deprecated DO NOT USE */ setNickname(nickname: string): Contact;
      /** @deprecated DO NOT USE */ setNotes(notes: string): Contact;
      /** @deprecated DO NOT USE */ setPager(phone: string): void;
      /** @deprecated DO NOT USE */ setPrefix(prefix: string): Contact;
      /** @deprecated DO NOT USE */ setPrimaryEmail(primaryEmail: string): void;
      /** @deprecated DO NOT USE */ setShortName(shortName: string): Contact;
      /** @deprecated DO NOT USE */ setSuffix(suffix: string): Contact;
      /** @deprecated DO NOT USE */ setUserDefinedField(key: string, value: string): void;
      /** @deprecated DO NOT USE */ setUserDefinedFields(o: any): void;
      /** @deprecated DO NOT USE */ setWorkAddress(addr: string): void;
      /** @deprecated DO NOT USE */ setWorkFax(phone: string): void;
      /** @deprecated DO NOT USE */ setWorkPhone(phone: string): void;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A ContactGroup is is a group of contacts.
     */
    interface ContactGroup {
      /** @deprecated DO NOT USE */ addContact(contact: Contact): ContactGroup;
      /** @deprecated DO NOT USE */ deleteGroup(): void;
      /** @deprecated DO NOT USE */ getContacts(): Contact[];
      /** @deprecated DO NOT USE */ getGroupName(): string;
      /** @deprecated DO NOT USE */ getId(): string;
      /** @deprecated DO NOT USE */ getName(): string;
      /** @deprecated DO NOT USE */ isSystemGroup(): boolean;
      /** @deprecated DO NOT USE */ removeContact(contact: Contact): ContactGroup;
      /** @deprecated DO NOT USE */ setGroupName(name: string): void;
      /** @deprecated DO NOT USE */ setName(name: string): ContactGroup;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
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
      /** @deprecated DO NOT USE */ createContact(givenName: string, familyName: string, email: string): Contact;
      /** @deprecated DO NOT USE */ createContactGroup(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ deleteContact(contact: Contact): void;
      /** @deprecated DO NOT USE */ deleteContactGroup(group: ContactGroup): void;
      /** @deprecated DO NOT USE */ findByEmailAddress(email: string): Contact;
      /** @deprecated DO NOT USE */ findContactGroup(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getAllContacts(): Contact[];
      /** @deprecated DO NOT USE */ getContact(emailAddress: string): Contact;
      /** @deprecated DO NOT USE */ getContactById(id: string): Contact;
      /** @deprecated DO NOT USE */ getContactGroup(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getContactGroupById(id: string): ContactGroup;
      /** @deprecated DO NOT USE */ getContactGroups(): ContactGroup[];
      /** @deprecated DO NOT USE */ getContacts(): Contact[];
      /** @deprecated DO NOT USE */ getContactsByAddress(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByAddress(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByAddress(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByCompany(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByCustomField(query: any, label: ExtendedField): Contact[];
      /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByGroup(group: ContactGroup): Contact[];
      /** @deprecated DO NOT USE */ getContactsByIM(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByIM(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByIM(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByJobTitle(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByName(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByName(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByNotes(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByPhone(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByPhone(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByPhone(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByUrl(query: string): Contact[];
      /** @deprecated DO NOT USE */ getContactsByUrl(query: string, label: Field): Contact[];
      /** @deprecated DO NOT USE */ getContactsByUrl(query: string, label: string): Contact[];
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A custom field in a Contact.
     */
    interface CustomField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteCustomField(): void;
      /** @deprecated DO NOT USE */ getValue(): any;
      /** @deprecated DO NOT USE */ setLabel(field: ExtendedField): CustomField;
      /** @deprecated DO NOT USE */ setValue(value: any): CustomField;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A date field in a Contact.
     *
     * This class is only used by the Contacts service, and dates used elsewhere in App Script use
     * JavaScript's standard
     * Date object.
     */
    interface DateField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteDateField(): void;
      /** @deprecated DO NOT USE */ getDay(): Integer;
      /** @deprecated DO NOT USE */ getMonth(): Base.Month;
      /** @deprecated DO NOT USE */ getYear(): Integer;
      /** @deprecated DO NOT USE */ setDate(month: Base.Month, day: Integer): DateField;
      /** @deprecated DO NOT USE */ setDate(month: Base.Month, day: Integer, year: Integer): DateField;
      /** @deprecated DO NOT USE */ setLabel(label: Field): DateField;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An email field in a Contact.
     */
    interface EmailField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteEmailField(): void;
      /** @deprecated DO NOT USE */ getDisplayName(): string;
      /** @deprecated DO NOT USE */ setDisplayName(name: string): EmailField;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An enum for extended contacts fields.
     */
    enum ExtendedField { HOBBY, MILEAGE, LANGUAGE, GENDER, BILLING_INFORMATION, DIRECTORY_SERVER, SENSITIVITY, PRIORITY, HOME, WORK, USER, OTHER }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An enum for contacts fields.
     */
    enum Field { FULL_NAME, GIVEN_NAME, MIDDLE_NAME, FAMILY_NAME, MAIDEN_NAME, NICKNAME, SHORT_NAME, INITIALS, PREFIX, SUFFIX, HOME_EMAIL, WORK_EMAIL, BIRTHDAY, ANNIVERSARY, HOME_ADDRESS, WORK_ADDRESS, ASSISTANT_PHONE, CALLBACK_PHONE, MAIN_PHONE, PAGER, HOME_FAX, WORK_FAX, HOME_PHONE, WORK_PHONE, MOBILE_PHONE, GOOGLE_VOICE, NOTES, GOOGLE_TALK, AIM, YAHOO, SKYPE, QQ, MSN, ICQ, JABBER, BLOG, FTP, PROFILE, HOME_PAGE, WORK_WEBSITE, HOME_WEBSITE, JOB_TITLE, COMPANY }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An enum for contact gender.
     */
    enum Gender { MALE, FEMALE }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An instant messaging field in a Contact.
     */
    interface IMField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteIMField(): void;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A phone number field in a Contact.
     */
    interface PhoneField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deletePhoneField(): void;
      /** @deprecated DO NOT USE */ getPhoneNumber(): string;
      /** @deprecated DO NOT USE */ setPhoneNumber(number: string): PhoneField;
    }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An enum for contact priority.
     */
    enum Priority { HIGH, LOW, NORMAL }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * An enum for contact sensitivity.
     */
    enum Sensitivity { CONFIDENTIAL, NORMAL, PERSONAL, PRIVATE }
    /**
     *
     * Deprecated. Instead, use the People API advanced
     *     service
     *
     * A URL field in a Contact.
     */
    interface UrlField {

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
      getLabel(): any;

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
      /** @deprecated DO NOT USE */ deleteUrlField(): void;
    }
  }
}

declare var ContactsApp: GoogleAppsScript.Contacts.ContactsApp;
