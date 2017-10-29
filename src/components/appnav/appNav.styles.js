export default {
  container: {
    backgroundColor: '#fff',
    maxWidth: '800px',
    margin: '30px auto 72px',
    borderRadius: 5,
    overflow: 'hidden'
  },
  navContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: 55,
    width: '100%',
    background: '#fff',
    border: '2px solid #e4e4e4',
    borderRadius: 5,
    boxSizing: 'border-box'
  },
  link: {
    float: 'left',
    padding: '5px 12px',
    listStyleType: 'none'
  },
  leftLink: {
    padding: '15px 10px',
    listStyleType: 'none'
  },
  faIcon: {
    fontFamily: 'FontAwesome',
    display: 'inline-block',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    padding: 5,
    cursor: 'pointer',
    float: 'left'
  },
  leftNav: {
    width: '0%',
    overflow: 'hidden',
    float: 'left',
    transition: 'width 0.5s',
    backgroundColor: '#086274',
    color: '#ffffff'
  },
  leftNavOpen: {
    width: '120px'
  },
  bottomNav: {
    textAlign: 'center',
    borderRadius: 5
  },
  navContentContainer: {
    display: 'inline-block',
    margin: 0,
    padding: 0
  },
  contents: {
    width: '100%',
    float: 'left',
    transition: 'width 0.5s'
  },
  contentsBody: {
    padding: 10
  },
  closeContents: {
    width: 'calc(100% - 120px)'
  },
  title: {
    backgroundColor: '#777777',
    color: '#ffffff',
    fontSize: 25,
    padding: 7,
    overflow: 'hidden'
  },
  titleText: {
    margin: '0 15px',
    fontSize: 20,
    float: 'left',
    lineHeight: '35px'
  },
  navLink: {
    textDecoration: 'none',
    outline: 'none',
    fontSize: 12,
    color: '#737373',
    ':hover': {
      color: '#DD4B39'
    }
  },
  navLinkActive: {
    color: '#2077B6',
    ':hover': {
      color: '#2077B6'
    }
  },
  navLinkBIcon: {
    fontSize: 22,
    display: 'block',
    clear: 'both'
  }
};
