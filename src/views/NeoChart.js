import React, { useState, useEffect} from 'react'
import Chart from "react-google-charts";
import fetchNeoData from '../utils/APIsCalls/fetchNeoData'
import configChartData from '../utils/helperFunctions/configChartData'

const NeoChart = () => {
  const [NEOdata, setNEOdata] = useState([])
  const [isLoaded, setisLoaded] = useState(false)
  const [error, seterror] = useState(null)

  useEffect(() => {
    /** get the fetched data using "fetchNeoData", filter and sort for the chart and set it in the state */ 
    fetchNeoData()
      .then(res => {
        const chartData = configChartData(res)
        setNEOdata(chartData)
        setisLoaded(true)
      })
      .catch((error) => seterror(error.message))
  }, [])  

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
    <Chart
      style={{margin: 'auto'}}
      width={"1100px"}
      height={"550px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
    />
  )
}

export default NeoChart
