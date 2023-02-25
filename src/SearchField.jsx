import React from 'react'

function SearchField(props) {

  return (
    <>
      <div className="input-group mt-3">
        <input type="search" className="form-control rounded" placeholder="Search by Player Name Or Team Name" onChange={props.user_Input} />
      </div>
    </>
  )
}

export default SearchField
