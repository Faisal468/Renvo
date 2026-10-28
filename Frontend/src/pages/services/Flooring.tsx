import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/flooring — they load automatically, sorted by filename number
const flooringImageModules = import.meta.glob('../../assets/flooring/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const flooringImages = sortImagesByFilename(flooringImageModules)

export default function Flooring() {
  return (
    <ServiceLayout
      slug="flooring"
      label="Flooring & Tile"
      title="Flooring That Sets the Tone for Every Room"
      subtitle="Hardwood, luxury vinyl plank, tile, and stone — installed to last decades."
      desc="The right flooring sets the tone for every room. We install hardwood, luxury vinyl plank, ceramic and porcelain tile, natural stone, and carpet — with expert prep work that ensures your floors last decades."
      img={flooringImages[0] ?? IMG.flooring}
      heroImages={flooringImages.length > 0 ? flooringImages.slice(0, 4) : undefined}
      gallery={[flooringImages[1] ?? IMG.living2, flooringImages[2] ?? IMG.kitchen1]}
      features={['Hardwood installation', 'Luxury vinyl plank', 'Porcelain & ceramic tile', 'Natural stone', 'Heated floor systems', 'Subfloor repair']}
      fullGallery={flooringImages.length > 0 ? flooringImages : undefined}
    />
  )
}
