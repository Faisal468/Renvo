import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/patio — they load automatically, sorted by filename number
const patioImageModules = import.meta.glob('../../assets/patio/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const patioImages = sortImagesByFilename(patioImageModules)

export default function Patio() {
  return (
    <ServiceLayout
      slug="patio"
      label="Patio & Outdoor Living"
      title="Outdoor Spaces Made for Living"
      subtitle="Patios, decks, and outdoor living areas built for how you entertain."
      desc="Extend your living space outdoors with a custom patio built for entertaining and everyday relaxation. From paver patios and covered decks to outdoor kitchens and fire features, we design and build outdoor spaces that feel like a natural extension of your home."
      img={patioImages[0] ?? IMG.living1}
      heroImages={patioImages.length > 0 ? patioImages.slice(0, 4) : undefined}
      gallery={[patioImages[1] ?? IMG.living2, patioImages[2] ?? IMG.exterior3]}
      features={['Paver & stone patios', 'Covered decks & pergolas', 'Outdoor kitchens', 'Fire pits & fireplaces', 'Outdoor lighting', 'Landscape integration']}
      fullGallery={patioImages.length > 0 ? patioImages : undefined}
    />
  )
}
