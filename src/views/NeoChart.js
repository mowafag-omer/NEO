import React, { useState, useEffect} from 'react'
import fetchNeoData from '../utils/APIsCalls/fetchNeoData'

const NeoChart = () => {

  useEffect(() => {
    fetchNeoData()
      .then(res => console.log(res))
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default NeoChart
