import { useImmer } from 'use-immer'
import initialData from '../data/initialCvInfo'
import Cv from './Cv'
import Form from './Form'

export default function CvBuilder() {
  const [data, updateData] = useImmer(initialData)

  function handleChange(newValue, { title, fieldIndex, label }) {
    updateData((draft) => {
      console.log(title)
      draft[title][fieldIndex][label] = newValue
    })
  }

  return (
    <main className="grid">
      <Form {...{ data, handleChange }} />
      <Cv data={data} />
    </main>
  )
}
