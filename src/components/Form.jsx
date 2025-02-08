function renameLater({ label, initial, handleChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          placeholder={initial}
          onChange={(e) =>
            handleChange(e.target.value === '' ? initial : e.target.value)
          }
        />
      </label>
    </div>
  )
}

function Field() {
  //
}

function Section({ title, fields }) {
  return (
    <div>
      <h2 className="font-bold" key={title}>
        {title}
      </h2>

      {fields.map((section, sectionIndex) =>
        Object.entries(section)
          .filter(([label]) => label !== 'id')
          .map(([label, input]) => {
            function handleChange(newValue) {
              updateData((draft) => {
                draft[title][sectionIndex][label] = newValue
              })
            }

            return (
              <Field
                key={label}
                label={label}
                handleChange={handleChange}
                initial={initialData[title][sectionIndex][label]}
                input={input}
              />
            )
          }),
      )}
    </div>
  )
}

export default function Form({ data, updateData, initialData }) {
  return (
    <form>
      {Object.entries(data).map(([title, fields]) => (
        <Section key={title} title={title} fields={fields} />
      ))}
    </form>
  )
}
