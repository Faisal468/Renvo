import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'
import useCMSContent from '../../hooks/useCMSContent'

// Drop photos into src/assets/flooring — they load automatically, sorted by filename number
const flooringImageModules = import.meta.glob('../../assets/flooring/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const flooringImages = sortImagesByFilename(flooringImageModules)

export const FLOORING_CMS_DEFAULTS = {
  img: flooringImages[0] ?? IMG.flooring,
  heroImages: flooringImages.length > 0 ? flooringImages.slice(0, 4) : [],
  gallery: [flooringImages[1] ?? IMG.living2, flooringImages[2] ?? IMG.kitchen1],
  fullGallery: flooringImages.length > 0 ? flooringImages : [],
}

export default function Flooring() {
  const { content } = useCMSContent('service-flooring', FLOORING_CMS_DEFAULTS)
  return (
    <ServiceLayout
      slug="flooring"
      label="Flooring & Tile"
      title="Flooring That Sets the Tone for Every Room"
      subtitle="Hardwood, luxury vinyl plank, tile, and stone — installed to last decades."
      desc="The right flooring sets the tone for every room. We install hardwood, luxury vinyl plank, ceramic and porcelain tile, natural stone, and carpet — with expert prep work that ensures your floors last decades."
      img={content.img}
      heroImages={content.heroImages.length > 0 ? content.heroImages : undefined}
      gallery={content.gallery}
      features={['Hardwood installation', 'Luxury vinyl plank', 'Porcelain & ceramic tile', 'Natural stone', 'Heated floor systems', 'Subfloor repair']}
      fullGallery={content.fullGallery.length > 0 ? content.fullGallery : undefined}
    />
  )
}
