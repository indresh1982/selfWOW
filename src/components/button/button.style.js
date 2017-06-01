export default {

  button: {
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    // textTransform: 'uppercase',
    textalign: 'center',
    boxSizing: 'border-box',
    minWidth: '130px',
    minHeight: '40px',
    lineHeight: '20px',
    height: 'auto',
    width: 'auto',
    overflow: 'visible',
    whiteSpace: 'nowrap',
    borderRadius: '40px',
    borderWidth: '2px',
    borderColor: '#8cbfcc',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    color: '#1A8099',
    transition: 'all 0.2s ease 0s',
    display: 'inline-block',
    ':hover': {
      backgroundColor: '#1A8099',
      borderColor: '#1A8099',
      color: '#ffffff',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    ':active': {
      backgroundColor: '#1A8099',
      color: '#ffffff'
    },
    ':focus': {
      outline: 'none',
      backgroundColor: '#1A8099',
      borderColor: '#1A8099',
      color: '#ffffff'
    }
  },

  buttonNoFocus: {
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    // textTransform: 'uppercase',
    textalign: 'center',
    boxSizing: 'border-box',
    minWidth: '130px',
    minHeight: '40px',
    lineHeight: '20px',
    height: 'auto',
    width: 'auto',
    overflow: 'visible',
    whiteSpace: 'nowrap',
    borderRadius: '40px',
    borderWidth: '2px',
    borderColor: '#8cbfcc',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    color: '#1A8099',
    transition: 'all 0.2s ease 0s',
    display: 'inline-block',
    ':hover': {
      backgroundColor: '#1A8099',
      borderColor: '#1A8099',
      color: '#ffffff',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    ':active': {
      backgroundColor: '#1A8099',
      color: '#ffffff'
    }
  },

  disabled: {
    backgroundColor: '#bbbbbb',
    color: '#ffffff',
    cursor: 'no-drop',
    borderColor: '#bbbbbb',
    ':hover': {
      backgroundColor: '#bbbbbb',
      color: '#ffffff',
      cursor: 'no-drop'
    },
    ':active': {
      backgroundColor: '#bbbbbb',
      color: '#ffffff',
      cursor: 'no-drop'
    }
  },
  primary: {
    backgroundColor: '#1a8099',
    borderColor: '#1a8099',
    color: '#fff',
    ':hover': {
      backgroundColor: '#086274',
      borderColor: '#086274',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#0E5061',
      borderColor: '#0E5061',
      color: '#fff'
    },
    ':focus': {
      outline: 'none',
      backgroundColor: '#89e3f9',
      borderColor: '#fff',
      boxShadow: '0 0 12px #3ebede'
    }
  },

  primaryNoFocus: {
    backgroundColor: '#1a8099',
    borderColor: '#1a8099',
    color: '#fff',
    ':hover': {
      backgroundColor: '#086274',
      borderColor: '#086274',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#0E5061',
      borderColor: '#0E5061',
      color: '#fff'
    }
  },

  primaryDisabled: {
    backgroundColor: '#bbbbbb',
    color: '#ebebeb',
    borderColor: '#fff',
    ':hover': {
      backgroundColor: '#bbbbbb',
      color: '#ebebeb',
      borderColor: '#fff'
    },
    ':active': {
      backgroundColor: '#bbbbbb',
      color: '#000000',
      borderColor: '#fff'
    }
  },
  link: {
    borderWidth: '0px',
    color: '#1b8099',
    textTransform: 'none',
    backgroundColor: 'transparent',
    padding: '8px 12px',
    ':hover': {
      color: '#0f596b',
      backgroundColor: 'transparent'
    },
    ':active': {
      backgroundColor: 'transparent',
      color: '#0f596b'
    },
    ':focus': {
      color: '#0f596b',
      outline: 'none',
      backgroundColor: 'transparent'
    }
  },
  linkDisabled: {
    borderWidth: '0px',
    color: '#bbbbbb',
    textTransform: 'none',
    backgroundColor: 'transparent',
    padding: '8px 12px',
    ':hover': {
      color: '#bbbbbb',
      backgroundColor: 'transparent'
    },
    ':active': {
      backgroundColor: 'transparent',
      color: '#bbbbbb'
    },
    ':focus': {
      color: '#bbbbbb',
      outline: 'none',
      backgroundColor: 'transparent'
    }
  },
  red: {
    backgroundColor: '#d40f0f',
    borderColor: '#d40f0f',
    color: '#fff',
    ':hover': {
      backgroundColor: '#ff2c2c',
      borderColor: '#ff2c2c',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#870505',
      borderColor: '#870505',
      color: '#fff'
    },
    ':focus': {
      outline: 'none',
      borderColor: '#fff',
      boxShadow: '0 0 12px #3ebede'
    }
  },
  redDisabled: {
    backgroundColor: '#bbbbbb',
    color: '#ebebeb',
    borderColor: '#bbbbbb',
    ':hover': {
      backgroundColor: '#bbbbbb',
      borderColor: '#bbbbbb',
      color: '#ebebeb'

    },
    ':active': {
      backgroundColor: '#bbbbbb',
      borderColor: '#bbbbbb',
      color: '#000000'
    }
  },
  green: {
    backgroundColor: '#22b322',
    borderColor: '#22b322',
    color: '#fff',
    ':hover': {
      backgroundColor: '#51dc51',
      borderColor: '#51dc51',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#188018',
      borderColor: '#188018',
      color: '#fff'

    },
    ':focus': {
      outline: 'none',
      borderColor: '#fff',
      boxShadow: '0 0 12px #3ebede'
    }
  },
  greenDisabled: {
    backgroundColor: '#bbbbbb',
    borderColor: '#bbbbbb',
    color: '#ebebeb',
    ':hover': {
      backgroundColor: '#bbbbbb',
      borderColor: '#bbbbbb',
      color: '#ebebeb'
    },
    ':active': {
      backgroundColor: '#bbbbbb',
      borderColor: '#bbbbbb',
      color: '#000000'
    }
  },
  /* currently no inverse
   inverse: {
   borderColor: '#1A8099',
   color: '#1A8099',
   ':hover': {
   borderColor: '#22b322'
   },
   ':active': {
   borderColor: '#188018'
   }
   },
   inverseDisabled: {
   borderColor: '#bbb',
   ':hover': {
   borderColor: '#bbb'
   }
   },
   */
  compact: {
    padding: '5px 12px 5px 12px'
  },
  iconLeft: {
    fontSize: '16px',
    paddingRight: '6px',
    float: 'left',
    height: '20px',
    width: '20px'
  },
  iconRight: {
    fontSize: '16px',
    paddingLeft: '6px',
    float: 'right',
    height: '20px',
    width: '20px'
  },
  iconCenter: {
    fontSize: '24px',
    textAlign: 'center',
    height: '20px',
    width: '20px',
    display: 'inline-block'
  },
  iconOnlyButton: {
    height: '30px',
    width: '30px',
    minHeight: '30px',
    minWidth: '30px',
    borderRadius: '20px',
    padding: '2px'
  },
  iconHidden: {
    display: 'none'
  }
};
