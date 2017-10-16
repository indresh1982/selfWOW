import React from 'react';
// import { Link } from 'react-router-dom';
import connectToStores from 'alt/utils/connectToStores';
import AppNav from './../../components/appnav/AppNav.react';
import AccordionItem from './../../components/accordion/accordion.react';
import Store from '../../stores/Contacts.store';
import Actions from '../../actions/Contacts.actions';
import styles from './Contacts.styles';

class Contacts extends React.Component {

  items = [
    { name: 'Bobby KC', mobile: '4545454545' },
    { name: 'Indresh Kumar', mobile: '155554545' },
    { name: 'Luke', mobile: '755554545' },
    { name: 'John', mobile: '204565785' }
];

    static getStores() {
        return [Store];
    }

    static getPropsFromStores() {
        return Store.getState();
    }

    constructor(props, context) {
        super(props, context);
        console.log("Contact constructor");
      
    }

 
    componentDidMount() {
        console.log("componentDidMount");
        Actions.getContactsDB();
    }

    render() {
        console.log(this.props);

        var listItems = this.items.map(function (item) {
            return (
                <AccordionItem key={item.name} header={item.name}></AccordionItem>
            );
        });

        return (
            
            <AppNav title="Contacts">
                <h1>Contacts</h1>
                <ul>
                     {listItems}
                </ul>
            </AppNav>

        );
    }
}


export default connectToStores(Contacts);
