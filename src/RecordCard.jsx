
function RecordCard({ record }) {
  return (
    <article>
      <h2>{record.tube_name}</h2>
      <p>Tube color: {record.tube_color}</p>
      <p>Additive: {record.additive}</p>
    </article>
  )
}

export default RecordCard