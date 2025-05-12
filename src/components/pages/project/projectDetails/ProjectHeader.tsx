import { IProject } from '@/app/projects/[id]/page'

export default function ProjectHeader({ project }: { project: IProject }) {
  return (
    <div
      className='relative w-full h-[500px] bg-cover bg-center'
      style={{
        backgroundImage: `url(${project?.coverImageUrl})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
      {/* Text Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-8 text-white container'>
        <div>
          {project?.tags && (
            <div className='flex flex-wrap gap-2 mb-2'>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-2 rounded-full py-1 text-primary text-xs font-semibold bg-[#334158] bg-opacity-20'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-3'>{project?.title}</h1>
          <p className='text-sm md:text-base lg:text-xl'>{project?.description}</p>
        </div>
      </div>
    </div>
  )
}
