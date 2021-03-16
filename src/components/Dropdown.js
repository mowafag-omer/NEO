import React from 'react'

const Dropdown = ({list, hangleOrbitingBody, orbitingBody}) => {
  return (
    <div style={{width: '50%', marginLeft: 'auto'}}>
      <select style={{width: '50%'}} onChange={hangleOrbitingBody}>
        {list.map(item => <option key={item} value={orbitingBody}>{item}</option>)}
      </select>
    </div>
   
  )
}

export default Dropdown
