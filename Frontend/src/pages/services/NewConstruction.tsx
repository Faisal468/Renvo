import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'
import useCMSContent from '../../hooks/useCMSContent'

// Drop photos into src/assets/new-construction — they load automatically, sorted by filename number
const newConstructionImageModules = import.meta.glob('../../assets/new-construction/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const newConstructionImages = sortImagesByFilename(newConstructionImageModules)

export const NEW_CONSTRUCTION_CMS_DEFAULTS = {
  img: newConstructionImages[0] ?? IMG.exterior1,
  heroImages: newConstructionImages.length > 0 ? newConstructionImages.slice(0, 4) : [],
  gallery: [newConstructionImages[1] ?? IMG.exterior2, newConstructionImages[2] ?? IMG.exterior3],
  fullGallery: newConstructionImages.length > 0 ? newConstructionImages : [],
}

export default function NewConstruction() {
  const { content } = useCMSContent('service-new-construction', NEW_CONSTRUCTION_CMS_DEFAULTS)
  return (
    <ServiceLayout
      slug="new-construction"
      label="New Construction"
      title="New Construction Built for the Long Run"
      subtitle="Ground-up builds engineered and finished to the same standard as our remodels."
      desc="From site prep and permitting to framing, finishes, and final walkthrough, we manage new-build projects with the same craftsmanship and attention to detail as our renovations — giving you a home that's built right the first time."
      img={content.img}
      heroImages={content.heroImages.length > 0 ? content.heroImages : undefined}
      gallery={content.gallery}
      features={['Site prep & permitting', 'Structural framing', 'Foundation work', 'Full interior finish-out', 'Energy-efficient systems', 'Final walkthrough & warranty']}
      fullGallery={content.fullGallery.length > 0 ? content.fullGallery : undefined}
    />
  )
}
