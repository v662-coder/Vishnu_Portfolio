export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="aurora-blob w-[560px] h-[560px] bg-accent-purple/40 -top-40 -left-40"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="aurora-blob w-[500px] h-[500px] bg-accent-blue/30 top-1/3 -right-32"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="aurora-blob w-[480px] h-[480px] bg-accent-cyan/25 bottom-0 left-1/4"
        style={{ animationDelay: '6s' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
    </div>
  )
}
