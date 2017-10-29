import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import styles from './appNav.styles';

class BottomNav extends React.Component {
  render() {
    let cPath = '';
    if (window && window.location && window.location.pathname) {
      cPath = window.location.pathname;
    }
    return (
      <div style={styles.bottomNav}>
        <ul style={styles.navContentContainer}>
          <li style={styles.link}>
            <Link to={'/notes'} style={styles.navLink}>
              <span style={[styles.navLink, cPath === '/notes' && styles.navLinkActive]} key="bnnotes">
                <i className="fa fa-pencil-square-o" style={styles.navLinkBIcon}></i>
                Notes
              </span>
            </Link>
          </li>
          <li style={styles.link}>
            <Link style={styles.navLink} to={'/contacts'}>
              <span style={[styles.navLink, cPath === '/contacts' && styles.navLinkActive]} key="bncontacts">
                <i className="fa fa-address-card" style={styles.navLinkBIcon}></i>
                Contacts
              </span>
            </Link>
          </li>
          <li style={styles.link}>
            <Link style={styles.navLink} to={'/greeting'}>
              <span style={[styles.navLink, cPath === '/greeting' && styles.navLinkActive]} key="bngreeting">
                <i className="fa fa-id-card" style={styles.navLinkBIcon}></i>
                Greeting
              </span>
            </Link>
          </li>
          <li style={styles.link}>
            <Link style={styles.navLink} to={'/invitation'}>
              <span style={[styles.navLink, cPath === '/invitation' && styles.navLinkActive]} key="bninvitation">
                <i className="fa fa-users" style={styles.navLinkBIcon}></i>
                Invitation
              </span>
            </Link>
          </li>
          <li style={styles.link}>
            <Link style={styles.navLink} to={'/chats'}>
              <span style={[styles.navLink, cPath === '/chats' && styles.navLinkActive]} key="bnchats">
                <i className="fa fa-comments" style={styles.navLinkBIcon}></i>
                Chats
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radium(BottomNav);
