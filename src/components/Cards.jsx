import './cards.css'

const Cards = ({ title, subtitle, speed, condition, titleColor, subtitleColor }) => {
  return (
    <div className='card'>
      <h1 className={`card__title ${titleColor}`}>{title}</h1>
      <h2 className={`card__subtitle ${subtitleColor}`}>{subtitle}</h2>
      <p className='card__paragraph'>{speed}</p>
      <p className='card__paragraph card__paragraph_second'>{condition}</p>
    </div>
  )
}

const CardItems = () => {
  const items = [
    {
      "title": "Безлимитный 300",
      "subtitle": (
        <>
          <sup>руб.</sup><span className="subtitle-number">300</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 10 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "color-darkblue",
      "subtitleColor": "color-blue",
    },
    {
      "title": "Безлимитный 450",
      "subtitle": (
        <>
          <sup>руб.</sup><span className="subtitle-number">450</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 50 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "color-darkgreen",
      "subtitleColor": "color-green",
    },
    {
      "title": "Безлимитный 550",
      "subtitle": (
        <>
          <sup>руб.</sup><span className="subtitle-number">550</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 100 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "color-darkred",
      "subtitleColor": "color-red",
    },
    {
      "title": "Безлимитный 1000",
      "subtitle": (
        <>
          <sup>руб.</sup><span className="subtitle-number">1000</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 200 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "color-black",
      "subtitleColor": "color-lightblack",
    }
  ]

  return (
    <div className='container'>
      {items.map((item) => (
        <Cards
        title={item.title}
        subtitle={item.subtitle}
        speed={item.speed}
        condition={item.condition}
        titleColor={item.titleColor}
        subtitleColor={item.subtitleColor} />
      ))}
    </div>
  )
}


export default CardItems;