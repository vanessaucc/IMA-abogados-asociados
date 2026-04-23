import React, { useState, useEffect, useRef } from 'react'
import styles from './About.module.css'

const values = [
  { icon: '⚖️', title: 'Justicia', desc: 'Actuamos con integridad y ética profesional en cada caso.' },
  { icon: '🛡️', title: 'Compromiso', desc: 'Defendemos tus derechos con dedicación absoluta y personalizada.' },
  { icon: '🤝', title: 'Confianza', desc: 'Construimos relaciones sólidas basadas en la transparencia.' },
  { icon: '🎯', title: 'Resultados', desc: 'Orientados a obtener el mejor resultado posible para ti.' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className={styles.section} ref={ref}>
      <div className={`${styles.inner} container`}>
        <div className={`${styles.textCol} ${visible ? styles.visible : ''}`}>
          <span className="section-label">Sobre nosotros</span>
          <h2 className={styles.heading}>
            Una firma jurídica con<br />
            <em>calidez humana</em>
          </h2>
          <div className="gold-divider gold-divider-left" />

          <p className={styles.body}>
            En IMA Abogados & Asociados entendemos que cada situación legal es única y merece atención personalizada. Somos un equipo de profesionales del derecho comprometidos con la defensa efectiva de tus derechos e intereses.
          </p>
          <p className={styles.body}>
            Nuestra firma combina el rigor jurídico con un trato cercano y humano. Acompañamos a nuestros clientes en cada etapa del proceso, brindando claridad y seguridad en los momentos más complejos.
          </p>

          <blockquote className={styles.quote}>
            <span className={styles.quoteMarks}>"</span>
            Tu tranquilidad es nuestra prioridad
            <span className={styles.quoteMarks}>"</span>
          </blockquote>

          <div className={styles.location}>
            <div className={styles.locationIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div className={styles.locationAddress}>Calle 20 N° 26-61, Casa Pilares - Oficina 200</div>
              <div className={styles.locationCity}>Pasto, Nariño, Colombia</div>
            </div>
          </div>
        </div>

        <div className={`${styles.valuesCol} ${visible ? styles.visibleRight : ''}`}>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.bannerCard}>
            <div className={styles.bannerText}>
              <span className={styles.bannerBig}>¡Al servicio</span>
              <span className={styles.bannerItalic}>de tus derechos!</span>
            </div>
            <div className={styles.bannerDeco}>IMA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
