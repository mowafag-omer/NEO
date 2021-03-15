const configChartData = (data) =>{
  const chartData = data.near_earth_objects.map(obj => [
    obj.name,
    obj.estimated_diameter.kilometers.estimated_diameter_min,
    obj.estimated_diameter.kilometers.estimated_diameter_max
  ])

  chartData.sort((a,b) => ((b[1] + b[2]) / 2) - ((a[1] + a[2]) / 2))

  return chartData
}

export default configChartData