import React from 'react';
// import { Link } from 'react-router-dom';
import connectToStores from 'alt/utils/connectToStores';
import AppNav from './../../components/appnav/AppNav.react';
import AccordionItem from './../../components/accordion/accordion.react';
import Store from '../../stores/Contacts.store';
import Actions from '../../actions/Contacts.actions';
import styles from './Contacts.styles';

class Contacts extends React.Component {

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

        var listItems = this.props.Contacts.map(function (item) {
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
