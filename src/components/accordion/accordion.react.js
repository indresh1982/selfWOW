import React from 'react';
import Radium from 'radium';
import styles from './accordion.styles';


class AccordionItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._onClick = this._onClick.bind(this);
    this.state = {
        open: false,
        style: styles.action
    }
  }

  _onClick(e) {

      if (this.state.open) {
          this.setState({
              open: false,
              style: styles.action
          });
      } else {
          this.setState({
              open: true,
              style: styles.actionOpen
          });
          console.log("handle click");
      }
  }

     
  render() {
      return (
          <li style={styles.item}>
              <span onClick={this._onClick} style={styles.itemHead} href={this.props.header} > {this.props.header}  </span>
              <span style={this.state.style}><button >Invite</button> <button >Delete</button> </span>
          </li>
      );
  }
}


export default Radium(AccordionItem);
