import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/bathroom — they load automatically, sorted by filename number
const bathroomImageModules = import.meta.glob('../../assets/bathroom/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const bathroomImages = sortImagesByFilename(bathroomImageModules)

export default function Bathroom() {
  return (
    <ServiceLayout
      slug="bathroom"
      label="Bathroom Renovation"
      title="A Personal Sanctuary, Reimagined"
      subtitle="Spa-inspired bathroom remodels that blend luxury with everyday function."
      desc="Transform your bathroom into a personal sanctuary. Our team specializes in master bath remodels, guest bath updates, and spa-inspired designs that blend luxury with function — complete with waterproofing, tile work, and premium fixtures."
      img={bathroomImages[0] ?? IMG.bathroom1}
      heroImages={bathroomImages.length > 0 ? bathroomImages.slice(0, 4) : undefined}
      gallery={[bathroomImages[1] ?? IMG.bathroom2, bathroomImages[2] ?? IMG.bathroom3]}
      features={['Walk-in shower conversions', 'Soaking tub installation', 'Heated tile floors', 'Custom vanities', 'Steam showers', 'Smart fixtures']}
      fullGallery={bathroomImages.length > 0 ? bathroomImages : undefined}
    />
  )
}
