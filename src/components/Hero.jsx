import React, { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const WHATSAPP_URL = 'https://wa.me/573150595839?text=Hola,%20me%20gustar%C3%ADa%20obtener%20asesor%C3%ADa%20legal.'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX / innerWidth - 0.5) * 20
      const yPct = (clientY / innerHeight - 0.5) * 20
      heroRef.current.style.setProperty('--mx', `${xPct}px`)
      heroRef.current.style.setProperty('--my', `${yPct}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="inicio" className={styles.hero} ref={heroRef}>
      <div className={styles.bgOverlay} />
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }} />
        ))}
      </div>

      <div className={`${styles.content} container`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Firma Jurídica en Pasto, Colombia
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>Defendemos</span>
          <span className={styles.titleLineGold}>tus derechos</span>
          <span className={styles.titleLine}>con firmeza</span>
        </h1>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond}>◆</span>
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.subtitle}>
          Somos una firma jurídica sólida, con calidez humana al servicio<br />
          de la defensa de tus derechos e intereses.
        </p>

        <div className={styles.actions}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consulta gratuita
          </a>
          <button className={styles.btnSecondary} onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l10-10M17 7H7v10"/>
            </svg>
          </button>
        </div>

        <div className={styles.stats}>
          {[
            { num: '6+', label: 'Áreas de práctica' },
            { num: '100%', label: 'Compromiso' },
            { num: '24/7', label: 'Disponibilidad' },
          ].map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Explorar</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
