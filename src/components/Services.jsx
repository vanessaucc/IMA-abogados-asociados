import React, { useState, useEffect, useRef } from 'react'
import styles from './Services.module.css'

const WHATSAPP_URL = 'https://wa.me/573150595839?text=Hola,%20tengo%20una%20consulta%20sobre%20'

const services = [
  {
    id: 'civil',
    icon: '⚖️',
    title: 'Derecho Civil',
    tagline: 'Protegemos tu patrimonio y tus contratos',
    items: ['Contratos civiles', 'Responsabilidad civil', 'Títulos valores', 'Sucesiones', 'Legalización de predios', 'Insolvencia persona natural'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
  {
    id: 'laboral',
    icon: '👔',
    title: 'Derecho Laboral y Seguridad Social',
    tagline: 'Defendemos tus derechos como trabajador',
    items: ['Contratos laborales', 'Representación en audiencias', 'Liquidaciones laborales', 'Pensiones (vejez, invalidez, sobrevivientes)', 'Asesoría en seguridad social'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
  {
    id: 'familia',
    icon: '🏛️',
    title: 'Derecho de Familia',
    tagline: 'Acompañamos en los momentos más sensibles',
    items: ['Divorcios (con y sin acuerdo)', 'Custodia y visitas', 'Patria potestad', 'Adopciones', 'Unión marital de hecho', 'Cuota alimentaria', 'Salida del país', 'Apoyo judicial'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
  {
    id: 'administrativo',
    icon: '🏛️',
    title: 'Derecho Administrativo',
    tagline: 'Tu escudo ante el Estado',
    items: ['Elaboración y revisión de derechos de petición', 'Acción de nulidad y restablecimientos de derechos', 'Reparación directa por responsabilidad del estado'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
  {
    id: 'constitucional',
    icon: '📜',
    title: 'Derecho Constitucional',
    tagline: 'Tus derechos fundamentales, nuestra misión',
    items: ['Elaboración de acciones de tutela', 'Impugnaciones e incidentes de desacato', 'Acciones Populares y de Grupo'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
  {
    id: 'notarial',
    icon: '📋',
    title: 'Trámites Notariales',
    tagline: 'Agilizamos tus gestiones legales',
    items: ['Escrituras públicas', 'Poderes notariales', 'Declaraciones extrajuicio', 'Registro y autenticaciones', 'Certificados y constancias'],
    color: '#1a2340',
    accent: '#c9a96e',
  },
]

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const whatsappMsg = encodeURIComponent(`${service.title}`)

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.cardVisible : ''} ${expanded ? styles.cardExpanded : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardNum}>0{index + 1}</div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardTagline}>{service.tagline}</p>
        </div>
        <button
          className={`${styles.cardToggle} ${expanded ? styles.cardToggleOpen : ''}`}
          onClick={() => setExpanded(!expanded)}
          aria-label="Expandir"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>

      <div className={`${styles.cardBody} ${expanded ? styles.cardBodyOpen : ''}`}>
        <div className={styles.goldLine} />
        <ul className={styles.cardList}>
          {service.items.map((item, i) => (
            <li key={i} className={styles.cardItem}>
              <span className={styles.checkIcon}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href={`${WHATSAPP_URL}${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardCta}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consultar este servicio
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div ref={headerRef} className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}>
          <span className="section-label">Lo que hacemos</span>
          <h2 className={styles.heading}>Nuestras áreas de<br /><em>práctica jurídica</em></h2>
          <div className="gold-divider" />
          <p className={styles.headingDesc}>
            Cubrimos las principales ramas del derecho colombiano con dedicación, experiencia y compromiso absoluto con cada cliente.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
