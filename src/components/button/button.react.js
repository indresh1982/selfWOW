import React from 'react';
import Radium from 'radium';
import Styles from './button.style';
import Icon from '../icon/icon.react';

class Button extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      text: props.text,
      isPrimary: props.isPrimary,
      noFocus: props.noFocus,
      isInverse: props.isInverse,
      color: props.color,
      isCompact: props.isCompact,
      icon: props.icon,
      iconPosition: props.iconPosition
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    if (!this.props.isDisabled) {
      this.props.onClick(e);
    }
  }

  render() {
    const styles = [];

    if (this.state.iconPosition.toLowerCase() === 'center') {
      styles.push(Styles.iconOnlyButton);
    }

    styles.push(this.props.style);
    styles.push(this.state.noFocus ? Styles.buttonNoFocus : Styles.button);

    const text = this.props.text === null || this.props.iconPosition === 'center' ? '' : this.props.text;
    if (text !== '') {
      styles.push({ padding: '9px 21px 7px 21px' });
    }

    if (this.props.isDisabled) {
      styles.push(Styles.disabled);
    }
    if (this.state.isPrimary) {
      styles.push(this.state.noFocus ? Styles.primaryNoFocus : Styles.primary);
      if (this.props.isDisabled) {
        styles.push(Styles.primaryDisabled);
      }
    }

    // inverse now same as non-inverse
    /*
     if(this.state.isInverse) {
     styles.push(Styles.inverse);
     if(this.props.isDisabled) {styles.push(Styles.inverseDisabled);}
     }
     */


    if (this.state.isCompact) {
      styles.push(Styles.compact);
    }
    if (this.state.color === 'red') {
      styles.push(Styles.red);
      if (this.props.isDisabled) {
        styles.push(Styles.redDisabled);
      }
    }
    if (this.state.color === 'green') {
      styles.push(Styles.green);
      if (this.props.isDisabled) {
        styles.push(Styles.greenDisabled);
      }
    }

    if (this.props.isDisabled) {
      styles.push(Styles.disabled);
    }

    if (this.props.isLink) {
      styles.push(Styles.link);
      if (this.props.isDisabled) {
        styles.push(Styles.linkDisabled);
      }
    }


    let iconStyle = Styles.iconHidden;

    if (this.state.icon) {
      if (this.state.iconPosition.toLowerCase() === 'right') {
        iconStyle = Styles.iconRight;
      } else if (this.state.iconPosition.toLowerCase() === 'left') {
        iconStyle = Styles.iconLeft;
      } else if (this.state.iconPosition.toLowerCase() === 'center') {
        iconStyle = Styles.iconCenter;
      }
    }

    if (this.state.iconPosition.toLowerCase() === 'center') {
      styles.push(Styles.iconOnlyButton);
    }


    styles.push(this.props.style);

    return (
      <button
        style={styles}
        disabled={this.props.isDisabled}
        onClick={this._onClick}
        tabIndex={this.props.tabIndex}
      >
        <Icon style={iconStyle} name={this.state.icon} />
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Click Me',
  isDisabled: false,
  isPrimary: false,
  isInverse: false,
  isCompact: false,
  noFocus: false,
  icon: null,
  iconPosition: 'left',
  color: '',
  style: {},
  onClick() {
  },
  tabIndex: 0
};

Button.contextTypes = {};

Button.propTypes = {
  text: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  isPrimary: React.PropTypes.bool,
  noFocus: React.PropTypes.bool,
  isInverse: React.PropTypes.bool,
  isCompact: React.PropTypes.bool,
  isLink: React.PropTypes.bool,
  icon: React.PropTypes.string,
  iconPosition: React.PropTypes.string,
  color: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
  tabIndex: React.PropTypes.number
};

export default Radium(Button);
