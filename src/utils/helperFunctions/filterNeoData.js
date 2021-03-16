/* this function receive the fetched data and the orbital body, 
and filter is by orbital body **/

const filterNeoData = (data, orbitalBody) =>{
  const filteredData = data.near_earth_objects.filter(obj => obj.close_approach_data[0].orbiting_body === orbitalBody)
  return filteredData
} 

export default filterNeoData