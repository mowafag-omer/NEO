import React, { useState, useEffect} from 'react'
import Chart from "react-google-charts";
import fetchNeoData from '../utils/APIsCalls/fetchNeoData'
import configChartData from '../utils/helperFunctions/configChartData'
import getOrbitalBodies from '../utils/helperFunctions/getOrbitalBodies'
import filterNeoData from '../utils/helperFunctions/filterNeoData'
import Dropdown from '../components/Dropdown'

const NeoChart = () => {
  const [NEOdata, setNEOdata] = useState([])
  const [filteredData, setfilteredData] = useState([]) // filtered data
  const [OrbitalBodiesList, setOrbitalBodiesList] = useState([]) // orbital bodies list
  const [isLoaded, setisLoaded] = useState(false)
  const [error, seterror] = useState(null)

  useEffect(() => {
    /** get the fetched data using "fetchNeoData", 
     filter by Earth and sort for the chart and set it in the state */ 
    fetchNeoData()
      .then(res => {
        setNEOdata(res)
        const filteredNeoData = filterNeoData(res, 'Earth')
        setfilteredData(configChartData(filteredNeoData))
        setOrbitalBodiesList(getOrbitalBodies(res))
        setisLoaded(true)
      })
      .catch((error) => seterror(error))
    }, [])  

    /**  get the value form the list in (Dropdown) component, 
      filter the the data by user choise and update the filteredData state which is displayed the chart */
    const hangleOrbitingBody = (event) =>{
      const filteredData = filterNeoData(NEOdata, event.target.value)
      setfilteredData(configChartData(filteredData))
    }
    
  // chart data
  const data = [
    ["NEO Name", "Min Estimated Diameter", "Max Estimated diameter"],
    ...filteredData,
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
