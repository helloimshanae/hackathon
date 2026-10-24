import { useState } from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const { records, loading, error } = useFetchData(
   'https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/phlebotomy-order-of-draw/records')

  const [query, setQuery] = useState('')

  const search = () => {
  setQuery(document.querySelector('#query').value)
}


  if (loading) {
    return <p>Loading…</p>
  }

  const shown = records.filter((record) =>
  `${record.tube_name} ${record.tube_color} ${record.common_tests} ${record.test_names}`
    .toLowerCase()
    .includes(query.toLowerCase())
  )

  return (
    <div>
      <h1>Phlebotomy Order of Draw Guide</h1>
      <p>
        Phlebotomists need a quick way to identify blood collection tubes, their order of draw, additives, common tests
        and specimen handling requirements. My page will let users look up tube information in one place.
      </p>

      <p>{error}</p>

      <input
        type="text"
        id="query"
        placeholder="Search by tube, color, or test"
      />
      <button onClick={search}>Search</button>

      {shown.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}

    </div>
  )
}

export default App