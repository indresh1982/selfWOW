import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Radium from 'radium';
import styles from './appNav.styles';
import Store from '../../stores/AppNav.store';
import Actions from '../../actions/AppNav.actions';
import BottomNav from './BottomNav';
import LeftNav from './LeftNav';

class AppNave extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    isOpen: React.PropTypes.bool,
    title: React.PropTypes.any
  };

  static getStores() {
    return [Store];
  }

  static getPropsFromStores() {
    return Store.getState();
  }

  openNav = () => {
    Actions.updateStore({ isOpen: !this.props.isOpen });
  };

  render() {
    return (
      <div>
        <div style={styles.container}>

          <div style={[styles.leftNav, this.props.isOpen && styles.leftNavOpen]}>
            <LeftNav />
          </div>
          <div style={[styles.contents, this.props.isOpen && styles.closeContents]} onClick={this.props.isOpen && this.openNav}>
            <div style={styles.title}>
              <span style={styles.faIcon} onClick={!this.props.isOpen && this.openNav}><i className="fa fa-bars"></i></span>

              <h1 style={styles.titleText}>{this.props.title}</h1>
            </div>
            <div style={styles.contentsBody}>{this.props.children}</div>
          </div>
        </div>
        <div style={styles.navContainer}>
          <BottomNav />
        </div>
      </div>
    );
  }
}

export default connectToStores(Radium(AppNave));
