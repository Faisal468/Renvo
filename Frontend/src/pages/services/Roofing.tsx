import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/roofing — they load automatically, sorted by filename number
const roofingImageModules = import.meta.glob('../../assets/roofing/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const roofingImages = sortImagesByFilename(roofingImageModules)

export default function Roofing() {
  return (
    <ServiceLayout
      slug="roofing"
      label="Roofing"
      title="Roofing That Protects What Matters Most"
      subtitle="Durable, weather-ready roofing built to protect your home for decades."
      desc="Your roof is your home's first line of defense. We handle full roof replacements, repairs, and inspections using durable materials and precise installation — protecting your home from the elements while boosting curb appeal and long-term value."
      img={roofingImages[0] ?? IMG.exterior1}
      heroImages={roofingImages.length > 0 ? roofingImages.slice(0, 4) : undefined}
      gallery={[roofingImages[1] ?? IMG.exterior2, roofingImages[2] ?? IMG.exterior3]}
      features={['Full roof replacement', 'Shingle & metal roofing', 'Leak repair & inspection', 'Gutter & flashing work', 'Ventilation upgrades', 'Storm damage restoration']}
      fullGallery={roofingImages.length > 0 ? roofingImages : undefined}
    />
  )
}
