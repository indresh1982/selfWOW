import React from 'react';
import Radium from 'radium';
import IconConstant from './../../styles/iconconstant';
import IconStyle from './../../styles/iconstyle';

class Icon extends React.Component {

  render() {
    const styles = [IconStyle.faIcon, this.props.style];
    if (this.props.name && this.props.name.indexOf('icon-') === 0) {
      styles.push(IconStyle.fontAdpFont);
    }

    return (
      <span style = { styles } dangerouslySetInnerHTML = {{ __html: IconConstant[this.props.name] }} />
    );
  }
}


Icon.defaultProps = {
  style: {},
  name: ''
};

Icon.propTypes = {
  style: React.PropTypes.object,
  name: React.PropTypes.string
};

export default Radium(Icon);
