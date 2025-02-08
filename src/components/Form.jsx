import initialData from '../data/initialCvInfo'

export default function Form({ data, handleChange }) {
  return (
    <form>
      {Object.entries(data).map(([title, fields]) => (
        <Section
          key={title}
          title={title}
          fields={fields}
          handleChange={handleChange}
        />
      ))}
    </form>
  )
}

function Section({ title, fields, handleChange }) {
  return (
    <div>
      <h2 className="font-bold" key={title}>
        {title}
      </h2>

      <div>
        {fields.map((field, fieldIndex) => {
          return Object.entries(field).map(([label]) => (
            <Field
              key={label}
              label={label}
              path={{ title, fieldIndex, label }}
              handleChange={handleChange}
            />
          ))
        })}
      </div>
    </div>
  )
}

function Field({ label, path, handleChange }) {
  const initial = initialData[path.title][path.fieldIndex][path.label]

  return (
    <div>
      <label>
        {label}
        <input
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
