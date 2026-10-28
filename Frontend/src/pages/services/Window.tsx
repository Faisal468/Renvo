import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/windows — they load automatically, sorted by filename number
const windowImageModules = import.meta.glob('../../assets/windows/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const windowImages = sortImagesByFilename(windowImageModules)

export default function Window() {
  return (
    <ServiceLayout
      slug="windows"
      label="Window Replacement"
      title="Windows That Improve Comfort, Efficiency, and Style"
      subtitle="Premium window installations crafted for performance, beauty, and low maintenance."
      desc="Upgrade your home with the energy efficiency and sophisticated style of RENOVVO’s premium windows and patio doors. We specialize in both the sale and expert installation of durable windows in high-performance vinyl and aluminum frames, ensuring excellent thermal insulation and a significant reduction in energy costs. Complementing our windows, our wide selection of patio doors—available in robust vinyl, aluminum, and metal constructions—offers flexible functionality, featuring both smooth gliding sliding models and classic swing-open & folding designs. Whether you prioritize a sleek, contemporary look or maximum weather resistance, our quality products are designed to enhance your home’s security, curb appeal, and overall comfort."
      img={windowImages[0] ?? IMG.exterior1}
      heroImages={windowImages.length > 0 ? windowImages.slice(0, 4) : undefined}
      gallery={[windowImages[1] ?? IMG.exterior2, windowImages[2] ?? IMG.exterior3]}
      features={['Energy-efficient replacement', 'Custom frame colors', 'Noise reduction glass', 'Low-maintenance materials', 'Expert installation', 'Beautiful curb appeal']}
      fullGallery={windowImages.length > 0 ? windowImages : undefined}
      cta={{
        title: 'Upgrade Your Home With Better Windows',
        text: 'Schedule a consultation with RENOVVO and discover how new windows can improve comfort, efficiency, and style throughout your home.',
      }}
    />
  )
}
