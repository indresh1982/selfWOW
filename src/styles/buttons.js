import colors from './colors.js';

const borderWidth = 2;

const buttonStyles = {
  base: {
    height: '40px',
    lineHeight: '40px',
    borderRadius: '40px',
    fontSize: '1rem',
    display: 'inline-block',
    transition: 'background-color .12s ease, color .12s ease, box-shadow .12s ease',
    fontWeight: 400,
    padding: '0 1.2rem',
    minWidth: '130px',
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none'
  },
  baseDisabled: {
    color: colors.med_gray,
    cursor: 'not-allowed'
  },
  backIcon: {
    fontSize: '0.6rem',
    fontWeight: 100,
    marginRight: '0.5rem',
    verticalAlign: 'middle'
  },
  icon: {
    marginRight: '0.5rem',
    verticalAlign: 'middle'
  },
  secondary: {
    color: colors.cyan,
    backgroundColor: colors.white,
    boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.cyan50}`,
    ':hover': {
      backgroundColor: colors.cyan,
      boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.cyan}`,
      color: colors.white
    },
    ':active': {
      backgroundColor: colors.dark_cyan,
      boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.dark_cyan}`
    }
  },
  secondaryDisabled: {
    color: colors.med_gray,
    cursor: 'not-allowed',
    boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.med_gray}`,
    ':hover': {
      color: colors.med_gray,
      boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.med_gray}`,
      backgroundColor: colors.white
    },
    ':active': {
      boxShadow: `inset 0 0 0 ${borderWidth}px ${colors.med_gray}`,
      backgroundColor: colors.white
    }
  },
  primary: {
    backgroundColor: colors.cyan,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.dark_cyan
    },
    ':focus': {
      backgroundColor: colors.dark_cyan
    },
    ':active': {
      backgroundColor: colors.very_dark_cyan
    }
  },
  primaryDisabled: {
    backgroundColor: colors.med_gray,
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: colors.med_gray
    },
    ':active': {
      backgroundColor: colors.med_gray
    }
  },
  circular: {
    borderRadius: '100%',
    width: 26,
    height: 26,
    minWidth: 26,
    padding: 0,
    fontSize: '1.5rem',
    lineHeight: 1
  }
};

export default buttonStyles;
