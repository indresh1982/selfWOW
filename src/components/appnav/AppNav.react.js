import React from 'react';
import { Link } from 'react-router-dom';
import styles from './appNav.styles';

class AppNave extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    return (
      <div>
        <div style={styles.container}>{this.props.children}</div>
        <div style={styles.navContainer}>
          <div style={{ textAlign: 'center', borderRadius: 5 }}>
            <ul style={{ display: 'inline-block', margin: 0, padding: 0 }}>
              <li style={styles.link}><Link to={'/message'}>Message</Link></li>
              <li style={styles.link}><Link to={'/notes'}>Notes</Link></li>
              <li style={styles.link}><Link to={'/'}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppNave;
