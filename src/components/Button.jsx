import React from 'react'

export default function Button(props) {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{props.children}</p>
    </div>
  )
}

const styles = {
  container: {
    width: '200px',
    height: '50px',
    backgroundColor: 'aqua',
    padding: '12px',
    margin: '0 auto',
    cursor: 'pointer',
  },
  text: {
    margin: '0 auto',
    fontSize: '24px',
    lineHeight: '1',
    margin: '0',
    textAlign: 'center'
  }
}