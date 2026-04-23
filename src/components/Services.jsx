import React, { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

const WHATSAPP_URL = 'https://wa.me/573150595839?text=Hola,%20tengo%20una%20consulta%20sobre%20'

const ScalesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M3 7h18" />
    <path d="M5 7L3 13h4L5 7z" />
    <path d="M19 7l-2 6h4l-2-6z" />
    <path d="M5 22h14" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
)

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const LandmarkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
)

const ScrollIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
)

const StampIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11V7a3 3 0 016 0v4" />
    <rect x="4" y="11" width="16" height="5" rx="1" />
    <line x1="4" y1="20" x2="20" y2="20" />
    <line x1="4" y1="23" x2="20" y2="23" />
  </svg>
)

const services = [
  {
    id: 'civil',
    icon: <ScalesIcon />,
    title: 'Derecho Civil',
    tagline: 'Protegemos tu patrimonio y tus contratos',
    items: ['Contratos civiles', 'Responsabilidad civil', 'Títulos valores', 'Sucesiones', 'Legalización de predios', 'Insolvencia persona natural'],
  },
  {
    id: 'laboral',
    icon: <BriefcaseIcon />,
    title: 'Derecho Laboral y Seguridad Social',
    tagline: 'Defendemos tus derechos como trabajador',
    items: ['Contratos laborales', 'Representación en audiencias', 'Liquidaciones laborales', 'Pensiones (vejez, invalidez, sobrevivientes)', 'Asesoría en seguridad social'],
  },
  {
    id: 'familia',
    icon: <HomeIcon />,
    title: 'Derecho de Familia',
    tagline: 'Acompañamos en los momentos más sensibles',
    items: ['Divorcios (con y sin acuerdo)', 'Custodia y visitas', 'Patria potestad', 'Adopciones', 'Unión marital de hecho', 'Cuota alimentaria', 'Salida del país', 'Apoyo judicial'],
  },
  {
    id: 'administrativo',
    icon: <LandmarkIcon />,
    title: 'Derecho Administrativo',
    tagline: 'Tu escudo ante el Estado',
    items: ['Elaboración y revisión de derechos de petición', 'Acción de nulidad y restablecimiento de derechos', 'Reparación directa por responsabilidad del Estado'],
  },
  {
    id: 'constitucional',
    icon: <ScrollIcon />,
    title: 'Derecho Constitucional',
    tagline: 'Tus derechos fundamentales, nuestra misión',
    items: ['Elaboración de acciones de tutela', 'Impugnaciones e incidentes de desacato', 'Acciones Populares y de Grupo'],
  },
  {
    id: 'notarial',
    icon: <StampIcon />,
    title: 'Trámites Notariales',
    tagline: 'Agilizamos tus gestiones legales',
    items: ['Escrituras públicas', 'Poderes notariales', 'Declaraciones extrajuicio', 'Registro y autenticaciones', 'Certificados y constancias'],
  },
]

function ServiceCard({ service, index }) {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const whatsappMsg = encodeURIComponent(service.title)

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.cardHead}>
        <div className={styles.cardIconWrap}>
          {service.icon}
        </div>
        <span className={styles.cardNum}>0{index + 1}</span>
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardTagline}>{service.tagline}</p>
      <div className={styles.goldLine} />

      <ul className={styles.cardList}>
        {service.items.map((item, i) => (
          <li key={i} className={styles.cardItem}>
            <svg className={styles.checkIcon} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
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
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Contáctanos
      </a>
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
