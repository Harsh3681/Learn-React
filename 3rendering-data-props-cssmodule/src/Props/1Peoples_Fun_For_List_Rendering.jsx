
import React from 'react'

function Peoples({manus}) {
  return (
    <>
      <h2>
          I am {manus.name} my id is {manus.id} my Skills {manus.skill} with Salary {manus.salary}
      </h2> 
    </>
  )
}

export default Peoples;
