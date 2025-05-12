export default function Stripes() {
  return (
    <div
      className='absolute inset-0 flex -rotate-45 isolate h-full w-full scale-200 translate-x-40 opacity-30'
      style={{
        WebkitMaskImage: 'linear-gradient(135deg, transparent 0%, black 30%, black 100%)',
        maskImage: 'linear-gradient(135deg, transparent 0%, black 30%, black 100%)',
      }}
    >
      <div className='w-1/10 bg-slate-800 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-slate-800 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-slate-800 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-gradient-to-b from-slate-900 to-slate-400 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-slate-900 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-slate-800 h-full'></div>
      <div className='w-[3%] bg-slate-900 h-full border-r border-l border-slate-400 border-dashed'></div>
      <div className='w-1/10 bg-slate-800 h-full'></div>
    </div>
  )
}
