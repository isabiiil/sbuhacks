import React from 'react';

const styles = {
  container: {
    width: '200px',
    height: '200px',
    backgroundColor: 'yellow',
  },
  text: {
    margin: '0 auto',
  }
}

export default function InfoWindow(props) {
  return (
    <div style={styles.container}>
      <div>{props.children}</div>
    </div>
  )
}
