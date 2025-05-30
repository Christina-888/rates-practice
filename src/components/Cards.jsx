import styles from './cards.module.css'

const Cards = ({ title, subtitle, speed, condition, titleColor, subtitleColor }) => {
  return (
    <div className={styles.card}>
      <h1 className={`${styles.card__title} ${styles[titleColor]}`}>{title}</h1>
      <h2 className={`${styles.card__subtitle} ${styles[subtitleColor]}`}>{subtitle}</h2>
      <p className={styles.card__paragraph}>{speed}</p>
      <p className={`${styles.card__paragraph} ${styles.card__paragraph_second}`}>{condition}</p>
    </div>
  )
}

const CardItems = () => {
  const items = [
    {
      "title": "Безлимитный 300",
      "subtitle": (
        <>
          <sup>руб.</sup><span className={styles.subtitleNumber}>300</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 10 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "colorDarkblue",
      "subtitleColor": "colorBlue",
    },
    {
      "title": "Безлимитный 450",
      "subtitle": (
        <>
          <sup>руб.</sup><span className={styles.subtitleNumber}>450</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 50 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "colorDarkgreen",
      "subtitleColor": "colorGreen",
    },
    {
      "title": "Безлимитный 550",
      "subtitle": (
        <>
          <sup>руб.</sup><span className={styles.subtitleNumber}>550</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 100 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "colorDarkred",
      "subtitleColor": "colorRed",
    },
    {
      "title": "Безлимитный 1000",
      "subtitle": (
        <>
          <sup>руб.</sup><span className={styles.subtitleNumber}>1000</span><sub>/мес.</sub>
        </>
      ),
      "speed": "до 200 Мбит/сек.",
      "condition": (
        <span>Объём включённого <br></br> трафика не ограничен</span>
      ),
      "titleColor": "colorBlack",
      "subtitleColor": "colorLightblack",
    }
  ]

  return (
    <div className={styles.container}>
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