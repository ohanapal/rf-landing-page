import data from '@/data/homepage.json'

export default function RebelAdvantage() {
  const { rebelAdvantage } = data
  return (
    <section className='pb-24 pt-16'>
      <div className='container'>
        <div className='max-2xl mx-auto text-center text-balance space-y-4 mb-16'>
          <h2 className='text-3xl font-bold'>
            {rebelAdvantage.title.map((title, i) => (
              <span key={title.content}>
                {title.type === 'text' ? title.content : <span className='text-primary'>{title.content}</span>}{' '}
                {i !== rebelAdvantage.title.length - 1 && ' '}
              </span>
            ))}
          </h2>
          <p className='text-muted-foreground text-xl'>{rebelAdvantage.description}</p>
        </div>
      </div>
    </section>
  )
}
