import React from 'react';
import Radium from 'radium';
import styles from './label.styles';

class Label extends React.Component {
  render() {
    return (
      <div style = {styles.labelContainer} >
        {this.props.label && <label style={[styles.label, (this.props.formatErrorText || this.props.requiredErrorText) && styles.error]}>
          {this.props.label} {this.props.formatErrorText} {this.props.requiredErrorText} {this.props.isRequired && '*'}
        </label>}
        {this.props.children}
      </div>
    );
  }
}

Label.propTypes = {
  isRequired: React.PropTypes.bool,
  label: React.PropTypes.string,
  formatErrorText: React.PropTypes.string,
  requiredErrorText: React.PropTypes.string,
  children: React.PropTypes.any
};


export default Radium(Label);
