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
    padding: '2vw',
    margin: '0 4vw'
  },
  text: {
    margin: '0 auto',
    fontSize: '24px',
    lineHeight: '1',
    margin: '0'
  }
}