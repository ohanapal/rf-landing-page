import data from '@/data/projects.json'

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { projects } = data
  const { id } = await params
  const project = projects.find((project) => project.id === parseInt(id))
  console.log(project)
  const coverImage = project?.coverImageUrl
  return (
    <div>
      <div
        className='relative w-full h-[500px] bg-cover bg-center'
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
        {/* Text Content */}
        <div className='absolute inset-0 flex flex-col justify-end p-8 text-white container'>
          <div>
            {project?.tags && (
              <div className='flex gap-2 mb-2'>
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
            <p className='text-xl'>{project?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
