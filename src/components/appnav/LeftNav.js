import React from 'react';
import { Link } from 'react-router-dom';
import styles from './appNav.styles';

class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <ul style={styles.navContentContainer}>
          <li style={styles.leftLink}><Link to={'/notes'}>Notes</Link></li>
          <li style={styles.leftLink}><Link to={'/contacts'}>Contacts</Link></li>
          <li style={styles.leftLink}><Link to={'/greeting'}>Greeting</Link></li>
          <li style={styles.leftLink}><Link to={'/invitation'}>Invitation</Link></li>
          <li style={styles.leftLink}><Link to={'/chats'}>Chats</Link></li>
          <li style={styles.leftLink}><Link to={'/setting'}>Setting</Link></li>
          <li style={styles.leftLink}><Link to={'/logout'}>Logout</Link></li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
