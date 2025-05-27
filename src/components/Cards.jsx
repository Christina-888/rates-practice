import './cards.css'

const Cards = ({ title, subtitle, speed, condition }) => {
  return (
    <div className='card'>
      <h1 className='card__title'>{title}</h1>
      <h2 className='card__subtitle'>{subtitle}</h2>
      <p className='card__paragraph'>{speed}</p>
      <p className='card__paragraph card__paragraph_second'>{condition}</p>
    </div>
  )
}

const CardItems = () => {
  const items = [
    {
      "title": "Безлимитный 300",
      "subtitle": "руб. 300 /мес.",
      "speed": "до 10 Мбит/сек.",
      "condition": "Объём включённого трафика не ограничен"
    },
    {
      "title": "Безлимитный 450",
      "subtitle": "руб. 450 /мес.",
      "speed": "до 50 Мбит/сек.",
      "condition": "Объём включённого трафика не ограничен"
    },
    {
      "title": "Безлимитный 550",
      "subtitle": "руб. 550 /мес.",
      "speed": "до 100 Мбит/сек.",
      "condition": "Объём включённого трафика не ограничен"
    },
    {
      "title": "Безлимитный 1000",
      "subtitle": "руб. 1000 /мес.",
      "speed": "до 200 Мбит/сек.",
      "condition": "Объём включённого трафика не ограничен"
    }
  ]

  return (
    <div className='container'>
      {items.map((item) => (
        <Cards
        title={item.title}
        subtitle={item.subtitle}
        speed={item.speed}
        condition={item.condition} />
      ))}
    </div>
  )
}


export default CardItems;