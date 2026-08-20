import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/new-construction — they load automatically, sorted by filename number
const newConstructionImageModules = import.meta.glob('../../assets/new-construction/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const newConstructionImages = sortImagesByFilename(newConstructionImageModules)

export default function NewConstruction() {
  return (
    <ServiceLayout
      slug="new-construction"
      label="New Construction"
      title="New Construction Built for the Long Run"
      subtitle="Ground-up builds engineered and finished to the same standard as our remodels."
      desc="From site prep and permitting to framing, finishes, and final walkthrough, we manage new-build projects with the same craftsmanship and attention to detail as our renovations — giving you a home that's built right the first time."
      img={newConstructionImages[0] ?? IMG.exterior1}
      heroImages={newConstructionImages.length > 0 ? newConstructionImages.slice(0, 4) : undefined}
      gallery={[newConstructionImages[1] ?? IMG.exterior2, newConstructionImages[2] ?? IMG.exterior3]}
      features={['Site prep & permitting', 'Structural framing', 'Foundation work', 'Full interior finish-out', 'Energy-efficient systems', 'Final walkthrough & warranty']}
      fullGallery={newConstructionImages.length > 0 ? newConstructionImages : undefined}
    />
  )
}
