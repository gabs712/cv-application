import { useState } from 'react'
import initialData from '../data/initialCvInfo'
import beautifyString from '../utils/beautifyString'
import getInputType from '../utils/getInputType'
import getTitleIcon from '../utils/getTitleIcon'
import Icon from '@mdi/react'
import { mdiMenuDown, mdiMenuUp } from '@mdi/js'

export default function Form({ data, handleChange }) {
  return (
    <div>
      <form className="mx-3 my-10 grid gap-4 rounded-lg bg-white px-4 py-4 shadow">
        {Object.entries(data).map(([title, groups]) => (
          <Section
            key={title}
            title={title}
            groups={groups}
            handleChange={handleChange}
          />
        ))}
      </form>
    </div>
  )
}

function Section({ title, groups, handleChange }) {
  const [isClosed, setIsClosed] = useState(title !== 'generalInfo')

  function toggleClose() {
    setIsClosed(!isClosed)
  }

  const formatedTitle = beautifyString(title)

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between shadow px-3"
        onClick={toggleClose}
      >
        <div className="flex items-center gap-2">
          <Icon path={getTitleIcon(title)} size={0.8} />
          <h2 className="mb-1 text-lg font-semibold tracking-wide" key={title}>
            {formatedTitle}
          </h2>
        </div>
        <div>
          <Icon path={isClosed ? mdiMenuDown : mdiMenuUp} size={2} />
        </div>
      </button>

      <div className={`space-y-1 px-5 py-3 ${isClosed ? 'hidden' : ''}`}>
        {groups.map((fields, fieldIndex) => (
          <FieldGroup
            key={fieldIndex}
            {...{ fields, fieldIndex, handleChange, title }}
          />
        ))}
      </div>
    </div>
  )
}

function FieldGroup({ fields, fieldIndex, title, handleChange }) {
  return (
    <div className="space-y-1">
      {Object.entries(fields).map(([label]) => (
        <Field
          key={label}
          label={label}
          path={{ title, fieldIndex, label }}
          handleChange={handleChange}
        />
      ))}
    </div>
  )
}

function Field({ label, path, handleChange }) {
  const initial = initialData[path.title][path.fieldIndex][path.label]
  const formatedLabel = beautifyString(label)

  const inputProps = {
    className: 'w-full rounded-sm bg-slate-200 px-2 py-1.5 text-sm',
    placeholder: initial,
    onChange: (e) =>
      handleChange(e.target.value === '' ? initial : e.target.value, {
        ...path,
      }),
  }

  return (
    <div>
      <label className="space-y-1">
        <p>{formatedLabel}</p>
        {label === 'description' ? (
          <textarea
            {...inputProps}
            className={`${inputProps.className} min-h-[3.5lh]`}
          ></textarea>
        ) : (
          <input {...inputProps} type={getInputType(label)} />
        )}
      </label>
    </div>
  )
}
