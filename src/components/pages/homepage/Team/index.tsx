import data from '@/data/homepage.json'
import Heading, { HeadingTitle } from '../common/Heading'
import TeamMember from './TeamMember'

export default function Team() {
  const { team } = data
  return (
    <section id='team' className='py-16 md:py-20 lg:py-24 bg-secondary-background'>
      <div className='container'>
        <Heading title={team.title as HeadingTitle[]} description={team.description} />
        <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {team.members.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
