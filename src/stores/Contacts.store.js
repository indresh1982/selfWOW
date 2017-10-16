import alt from './../altInstance';
import ContactsActions from './../actions/Contacts.actions';

class ContactsStore {
    constructor() {
        this.bindActions(ContactsActions);

        this.state = {
            Contacts: [],
            email :"test.com"

        };
    }

    clearStore() {
        
    }

    getContacts(data) {
       
        this.setState({ Contacts: data });
        console.log("get Contacts in store after dispatch " + data);
    }

}

export default alt.createStore(ContactsStore, 'ContactsStore');
