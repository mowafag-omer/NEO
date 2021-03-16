import React, { useState, useEffect} from 'react'
import Chart from "react-google-charts";
import fetchNeoData from '../utils/APIsCalls/fetchNeoData'
import configChartData from '../utils/helperFunctions/configChartData'
import getOrbitalBodies from '../utils/helperFunctions/getOrbitalBodies'
import filterNeoData from '../utils/helperFunctions/filterNeoData'
import Dropdown from '../components/Dropdown'

const NeoChart = () => {
  const [NEOdata, setNEOdata] = useState([])
  const [OrbitalBodiesList, setOrbitalBodiesList] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [error, seterror] = useState(null)

  useEffect(() => {
    /** get the fetched data using "fetchNeoData", filter by Earth and sort for the chart and set it in the state */ 
    fetchNeoData()
      .then(res => {
        const filteredData = filterNeoData(res, 'Earth')
        setNEOdata(configChartData(filteredData))
        setOrbitalBodiesList(getOrbitalBodies(res))
        setisLoaded(true)
      })
      .catch((error) => seterror(error))
    }, [])  

    const hangleOrbitingBody = (event) =>{
      console.log(event.target.value)
    }
    
  // chart data
  const data = [
    ["NEO Name", "Min Estimated Diameter", "Max Estimated diameter"],
    ...NEOdata,
  ]

  //chart options
  const options = {
    chartArea: { width: "50%" },
    hAxis: {
      title: "Min Estimated Diameter (km)",
    },
    vAxis: {
      title: "NEO name",
    },
  }

  return error ? (
    <div>{error}</div>
  ) : !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <Dropdown list={OrbitalBodiesList} hangleOrbitingBody={hangleOrbitingBody} />
      <Chart
        style={{margin: 'auto'}}
        width={"1100px"}
        height={"550px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </div>
  )
}

export default NeoChart
