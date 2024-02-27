import Card from "../Card"

function Result({ preview }) {
  return (
    <Card title={'Result Image'}>
        {/* result */}
        <section id="preview">
          <img src={preview}/>
        </section>
    </Card>
  )
}

export default Result