var styles = {
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  flexElement: {
    textAlign: 'center',
    flexBasis: '20%',
    border: '1px solid red',
    margin: '20px'
  },
  weatherIcon: {
    fontSize: '50px',
    color: 'grey'
  },
  flexParent: {
    backgroundColor: 'rgba(119, 68, 18, 0.3)',
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
    margin: '0 auto'
  }
};

module.exports = styles;
