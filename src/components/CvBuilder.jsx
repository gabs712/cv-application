import { useImmer } from 'use-immer'
import initialData from '../data/initialCvInfo'
import Cv from './Cv'
import Form from './Form'

export default function CvBuilder() {
  const [data, updateData] = useImmer(initialData)

  return (
    <main className="grid">
      <Form {...{ data, updateData, initialData }} />
      <Cv data={data} />
    </main>
  )
}
