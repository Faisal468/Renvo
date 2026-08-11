import { useState, useEffect } from 'react'

interface PageHeroProps {
  image: string | string[]
  label: string
  title: string
  subtitle?: string
  overlay?: string
}

const DEFAULT_OVERLAY = 'linear-gradient(to right, rgba(7,24,48,0.88) 0%, rgba(7,24,48,0.55) 60%, rgba(7,24,48,0.2) 100%)'

export default function PageHero({ image, label, title, subtitle, overlay = DEFAULT_OVERLAY }: PageHeroProps) {
  const images = Array.isArray(image) ? image : [image]
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => setSlide(s => (s + 1) % images.length), 5000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="relative overflow-hidden" style={{ height: 460, marginTop: 0 }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: slide === i ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: overlay }} />
      {/* Top padding for navbar */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="section-label mb-4">{label}</div>
        <h1
          className="font-display text-white mb-4"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, lineHeight: 1.1 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white max-w-xl" style={{ opacity: 0.8, fontSize: '1.0625rem', lineHeight: 1.7 }}>
            {subtitle}
          </p>
        )}
        {/* Gold underline */}
        <div className="gold-line mt-6" />
      </div>

      {/* Slide dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-8 lg:right-20 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Show image ${i + 1}`}
              style={{
                width: slide === i ? 24 : 7,
                height: 3,
                borderRadius: 2,
                background: slide === i ? '#c9a84c' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
