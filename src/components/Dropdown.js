import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

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
