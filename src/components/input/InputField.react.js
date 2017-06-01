import React from 'react';
import Label from './../label/Label.react';
import styles from './inputField.styles';
import IconConstant from './../../styles/iconconstant';

class InputField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    if (this.props.onValueChange) {
      this.props.onValueChange(e.target.value, e.target.name);
    }
  }

  getTextBox() {
    let icon;
    let inputErrorStyle = {};
    if (this.state.requiredError || this.state.formatError) {
      inputErrorStyle = { border: '1px solid #ff0000' };
    }
    if (this.props.icon) {
      icon = (<span style={styles.faIconInput} dangerouslySetInnerHTML = {{ __html: IconConstant[this.props.icon] }} ></span>);
    }

    const inputTextBox = (
      <input
        id={this.props.name}
        ref={this.props.name}
        style={styles.inputText}
        name={this.props.name}
        maxLength={this.props.maxlength}
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder ? this.props.placeholder : ''}
        onChange={this._onChange}
      />
    );
    return (
      <Label
        label={this.props.label}
        isRequired={this.props.isRequired}
        requiredError={this.state.requiredError}
        formatError={this.state.formatError}
        requiredErrorText={this.props.requiredErrorText}
        formatErrorText={this.props.formatErrorText}
        labelClass={this.props.labelClass}
      >
        {inputTextBox}
        {icon}
      </Label>
    );
  }



  render() {
    if (this.props.type === 'text' || this.props.type === 'password') {
      return this.getTextBox();
    }
    return null;
  }
}

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  maxlength: 0,
  isRequired: false
};

export default InputField;
