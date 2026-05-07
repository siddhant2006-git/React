import React from 'react'
import { useParams } from 'react-router-dom'
// useParams - React Router hook to read dynamic route parameters from the URL.

function User() {
  const { userid } = useParams()

  return (
    <div>
      user id: {userid}
    </div>
  )
}

export default User