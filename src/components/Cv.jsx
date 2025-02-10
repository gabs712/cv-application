function Header({ data }) {
  return (
    <div>
      {data.generalInfo.map((obj, i) => (
        <div key={i} className="space-y-1 text-center">
          <h2 className="text-2xl font-bold">{obj.name}</h2>
          <div className="flex justify-center gap-3 text-sm">
            <p>{obj.email}</p>
            <p>{obj.phone}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Education({ data }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Education</h2>
      <hr />
      <div className="grid gap-2">
        {data.education.map((obj, i) => (
          <div className="flex gap-3" key={i}>
            <div className="mr-auto">
              <h3 className="font-bold">{obj.school}</h3>
              <p className="text-sm">{obj.formation}</p>
            </div>
            <p className="text-xs">{obj.timePeriod}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience({ data }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Experience</h2>
      <hr />
      <div className="grid gap-2">
        {data.experience.map((obj, i) => (
          <div key={i} className="space-y-2">
            <div className="flex gap-3">
              <div className="mr-auto">
                <h3 className="font-bold">{obj.company}</h3>
                <p className="text-sm">{obj.position}</p>
              </div>
              <div>
                <p className="text-right text-xs">{obj.timePeriod}</p>
                <p className="text-sm">{obj.address}</p>
              </div>
            </div>
            <div>
              <p className="my-3 text-xs max-w-[50%]">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Cv({ data }) {
  return (
    <div className="min-h-[80svh] rounded-sm bg-white mb-10 px-3 py-2 shadow">
      <Header data={data} />
      <div className="space-y-7">
        <Education data={data} />
        <Experience data={data} />
      </div>
    </div>
  )
}
