import React from 'react'
import './../App.css'

export default function Blurb() {
  return (
    <div className="container">
      <h1>Hero's Path</h1>
      <p>As someone with short-term memory loss, I often have trouble remembering my days. I forget where I went, what I experienced, and it's hard to form new memories. It's been hard to cope with it, but this has taught me to live in the moment.</p>
      <p>This app allows users to visualize their location history, thereby letting them relive the journey. It includes a map that has all the places the user has visited in a given time period. Those places are connected based on what route the user took. Those pins on the map also have a pop-up that gives more information of that past. </p>
      <p>My hope is that folks can make use of this product and cope with lost memories.</p>
    </div>
  )
}
