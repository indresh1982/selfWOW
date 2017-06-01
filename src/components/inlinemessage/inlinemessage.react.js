import React from 'react';
import Radium from 'radium';


class InlineMessage extends React.Component {
  render() {
    return (
      <div style={{color: this.props.color, padding: '10px 0 20px', fontSize: 25}}>
        {this.props.text}
      </div>
    );
  }
}

InlineMessage.defaultProps = {
  text: '',
};

InlineMessage.propTypes = {
  text: React.PropTypes.string,
  color: React.PropTypes.string
};

export default Radium(InlineMessage);
