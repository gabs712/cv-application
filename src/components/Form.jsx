function Input({ label, initial, handleChange }) {
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

export default function Form({ data, updateData, initialData }) {
  return (
    <form>
      {Object.entries(data).map(([title, sections]) => (
        <div key={title}>
          <h2 className="font-bold" key={title}>
            {title}
          </h2>

          {sections.map((section, sectionIndex) =>
            Object.entries(section)
              .filter(([label]) => label !== 'id')
              .map(([label, input]) => {
                function handleChange(newValue) {
                  updateData((draft) => {
                    draft[title][sectionIndex][label] = newValue
                  })
                }

                return (
                  <Input
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
      ))}
    </form>
  )
}
