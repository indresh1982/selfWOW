import React from 'react';
import { Link } from 'react-router-dom';
import styles from './appNav.styles';

class BottomNav extends React.Component {
  render() {
    return (
      <div style={styles.bottomNav}>
        <ul style={styles.navContentContainer}>
          <li style={styles.link}><Link to={'/notes'}>Notes</Link></li>
          <li style={styles.link}><Link to={'/contacts'}>Contacts</Link></li>
          <li style={styles.link}><Link to={'/greeting'}>Greeting</Link></li>
          <li style={styles.link}><Link to={'/invitation'}>Invitation</Link></li>
          <li style={styles.link}><Link to={'/chats'}>Chats</Link></li>
        </ul>
      </div>
    );
  }
}

export default BottomNav;
