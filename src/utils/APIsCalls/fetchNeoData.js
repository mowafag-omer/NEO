/** fetch the data from NASA’s NeoWs and parse the fetched data. 
 this function return itself, so a promise is returned and the "then" method can be used to get the parsed data directly*/  
const fetchNeoData = () => {
  return fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
    .then((res) => res.json())
}

export default fetchNeoData