import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const { records, loading, error } = useFetchData(
   'https://student-data-api.sahadeo-shanae.workers.dev/api/v1/datasets/phlebotomy-order-of-draw/records')

  if (loading) {
    return <p>Loading…</p>
  }

  return (
    <div>
      <h1>Phlebotomy Order of Draw Guide</h1>
      <p>
        Phlebotomists need a quick way to identify blood collection tubes, their order of draw, additives, common tests
        and specimen handling requirements. My page will let users look up tube information in one place.
      </p>

      <p>{error}</p>

      <RecordCard record={records[0]} />
      <RecordCard record={records[1]} />
    </div>
  )
}

export default App