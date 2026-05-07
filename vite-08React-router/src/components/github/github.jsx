import React, { useState } from 'react'

function github() {
  const [data, setdata] = useState([])
  
  fetch("https://api.github.com/users/siddhant2006-git")
    .then(res => (res.json))
    .then(data => {
    
      console.log(data)
      setdata(data)
    })

}
return (
  <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    github follower:{data.followers}
  </div>
)
export default github