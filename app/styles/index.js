var styles = {
  flexContainer: {
    height: '50vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  flexElement: {
    hight: '30%',
    textAlign: 'center',
    flexBasis: '20%',
    margin: '20px',
    textDecoration: 'none',
    transition: 'all 0.7s'
  },
  weatherIcon: {
    fontSize: '13rem',
    color: 'silver',
    transition: 'all 0.7s'
  },
  flexParent: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center'
  },
  headerMotto: {
    color: '#fff'
  },
  video: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '120%',
    width: 'auto',
    height: 'auto',
    zIndex: '-100'
  },
  alwaysOnTop: {
    zIndex: '2'
  },
  center: {
    width: '50%',
    margin: '0px auto',
    height: '50vh',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    justifyContent: 'center'
  },
  input: {
    height: '100px',
    fontSize: '50px',
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    outline: 'none'
  },
  button : {
    height: '100px',
    fontSize: '50px',
    background: 'rgba(132, 76, 20, 0.2)',
    border: 0,
    transition: 'all 0.7s'
  },
  temperature: {
    fontSize: '6rem'
  },
  date: {
    fontSize: '2rem'
  }
};

module.exports = styles;
