const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '&__content': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 28,
      },
      '&__calendar': {
        display: 'flex',
        margin: '0 auto',
      },
    },
    button: {
      background: '#57B1E5',
      boxShadow: 'rgba(149, 157, 165, 0.7) 4px 8px 24px',
      '&:hover': {
        color: '#000',
        opacity: 0.8,
      },
    },
    events: {
      paddingLeft: 4,
      listStyle: 'none',
    },
    badge: {
      backgroundColor: '#27E1C1',
      color: '#FFF',
      borderRadius: 5,
      padding: '1px 5px',
    },
  };
  
  export default styles;
  