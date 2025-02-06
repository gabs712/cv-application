export default function Container({ children }) {
  return (
    <div className="relative min-h-svh bg-slate-100">
      <div className="absolute top-0 min-h-[68svh] w-full bg-sky-500 shadow-sm"></div>
      <div className="relative mx-auto max-w-7xl w-full">{children}</div>
    </div>
  )
}
