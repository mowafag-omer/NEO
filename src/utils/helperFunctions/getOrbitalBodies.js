/* this function receive the fetched data, 
and get the orbital bodies **/

const getOrbitalBodies = (data) =>{
  const OrbitalBodies = data.near_earth_objects.map(obj => obj.close_approach_data[0].orbiting_body)
  return [...new Set(OrbitalBodies)]
}

export default getOrbitalBodies