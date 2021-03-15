const fetchNeoData = () => {
  return fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
    .then((res) => res.json())
}

export default fetchNeoData