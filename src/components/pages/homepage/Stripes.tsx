export default function Stripes() {
  return (
    <div
      className='absolute inset-0 flex -rotate-45 isolate h-full w-full scale-200 translate-x-40 opacity-25'
      style={{
        WebkitMaskImage: 'linear-gradient(135deg, transparent 0%, black 30%, black 100%)',
        maskImage: 'linear-gradient(135deg, transparent 0%, black 30%, black 100%)',
      }}
    >
      <div className='w-1/10 bg-neutral-700 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-neutral-700 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-neutral-700 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-gradient-to-b from-neutral-800 to-neutral-400 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-neutral-800 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-neutral-700 h-full'></div>
      <div className='w-[3%] bg-neutral-800 h-full border-r border-l border-neutral-400 border-dashed'></div>
      <div className='w-1/10 bg-neutral-700 h-full'></div>
    </div>
  )
}
