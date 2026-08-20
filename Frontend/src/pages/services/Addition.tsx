import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/room-addition — they load automatically, sorted by filename number
const additionImageModules = import.meta.glob('../../assets/room-addition/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const additionImages = sortImagesByFilename(additionImageModules)

export default function Addition() {
  return (
    <ServiceLayout
      slug="addition"
      label="Room Addition"
      title="Room Additions That Feel Like They Were Always There"
      subtitle="Seamless expansions that give you more space without the cost of moving."
      desc="Need more space without the cost of moving? Our home addition team designs and builds seamless expansions that feel like they were always part of the original structure — properly permitted and structurally engineered from foundation to finish."
      img={additionImages[0] ?? IMG.addition}
      heroImages={additionImages.length > 0 ? additionImages.slice(0, 4) : undefined}
      gallery={[additionImages[1] ?? IMG.living1, additionImages[2] ?? IMG.exterior1]}
      features={['Room additions', 'Second-story additions', 'Garage conversions', 'Sunroom builds', 'ADU construction', 'Foundation work']}
      fullGallery={additionImages.length > 0 ? additionImages : undefined}
    />
  )
}
