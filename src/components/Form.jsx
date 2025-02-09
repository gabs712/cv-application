import initialData from '../data/initialCvInfo'
import beautifyString from '../utils/beautifyString'
import getTitleIcon from '../utils/getTitleIcon'
import Icon from '@mdi/react'

export default function Form({ data, handleChange }) {
  return (
    <div>
      <form className="mx-3 my-10 grid gap-4 rounded-lg bg-white px-4 py-4 shadow">
        {Object.entries(data).map(([title, fields]) => (
          <Section
            key={title}
            title={title}
            fields={fields}
            handleChange={handleChange}
          />
        ))}
      </form>
    </div>
  )
}

function Section({ title, fields, handleChange }) {
  const formatedTitle = beautifyString(title)

  return (
    <div>
      <div className="flex gap-1 items-center">
        <Icon path={getTitleIcon(title)} size={0.8} />
        <h2 className="mb-1 text-lg font-semibold tracking-wide" key={title}>
          {formatedTitle}
        </h2>
      </div>

      <div>
        {fields.map((field, fieldIndex) => {
          return (
            <div className="space-y-1" key={fieldIndex}>
              {Object.entries(field).map(([label]) => (
                <Field
                  key={label}
                  label={label}
                  path={{ title, fieldIndex, label }}
                  handleChange={handleChange}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Field({ label, path, handleChange }) {
  const initial = initialData[path.title][path.fieldIndex][path.label]
  const formatedLabel = beautifyString(label)

  return (
    <div>
      <label className="space-y-1">
        <p>{formatedLabel}</p>
        <input
          className="w-full rounded-sm bg-slate-200 px-2 py-1.5 text-sm"
          type="text"
          placeholder={initial}
          onChange={(e) =>
            handleChange(e.target.value === '' ? initial : e.target.value, {
              ...path,
            })
          }
        />
      </label>
    </div>
  )
}
