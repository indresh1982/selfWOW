import utils from './ActionUtils';
import alt from './../altInstance';

class ContactsActions {


    updateStore(data) {
        console.log("updatestore from action");
        this.dispatch(data);

    }
    getContactsDB() {
        console.log("getContacts from action");

        var mockData = [
            { name: 'Bobby KC', mobile: '4545454545' },
            { name: 'Indresh Kumar', mobile: '155554545' },
            { name: 'Luke', mobile: '755554545' },
            { name: 'John', mobile: '204565785' }
        ];

        this.actions.getContacts(mockData);

    }

    
    getContacts(data) {
        console.log("getContacts dispatch from action");
        this.dispatch(data);
    }
}

export default alt.createActions(ContactsActions);
