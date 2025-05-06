import data from '@/data/homepage.json'
import TeamMember from './TeamMember'

export default function Team() {
  const { team } = data
  return (
    <section className='py-24 bg-secondary-background'>
      <div className='container'>
        <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            {team.title.text} <span className='text-primary'>{team.title.span}</span>
          </h2>
          <p className='text-muted-foreground text-xl'>{team.description}</p>
        </div>
        <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {team.members.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
