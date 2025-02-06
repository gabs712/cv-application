import { useImmer } from 'use-immer'
import initialData from '../data/initialCvInfo'
import Cv from './Cv'
import Form from './Form'

export default function CvBuilder() {
  const [data, updateData] = useImmer(initialData)

  const handleChange = (cb) => () => {
    updateData(cb)
  }

  return (
    <main className="grid">
      <Form {...{ data, handleChange, initialData }} />
      <Cv data={data} />
    </main>
  )
}
