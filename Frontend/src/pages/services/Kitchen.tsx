import ServiceLayout from '../../components/ServiceLayout'
import { IMG, sortImagesByFilename } from '../../components/shared'

// Drop photos into src/assets/kitchen — they load automatically, sorted by filename number
const kitchenImageModules = import.meta.glob('../../assets/kitchen/*.{jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
const kitchenImages = sortImagesByFilename(kitchenImageModules)

export default function Kitchen() {
  return (
    <ServiceLayout
      slug="kitchen"
      label="Kitchen Remodeling"
      title="Kitchens Built Around the Way You Live"
      subtitle="Custom cabinetry, countertops, and layouts designed for real family life."
      desc="At RENOVVO Design + Shop + Build, we understand that the kitchen is more than just a place to cook—it’s the heart of your home, where functionality and aesthetics come together. Our kitchen remodeling services are designed to transform outdated, inefficient spaces into stunning, highly practical environments that suit your lifestyle. To ensure you make the right choices, we provide our clients with detailed 3D kitchen designs before any installation begins, helping you visualize your dream space and avoid costly mistakes. Additionally, we offer a wide selection of high-quality materials, including cabinetry, countertops, and flooring, so you can customize every detail to suit your taste and needs. Whether you prefer a sleek modern aesthetic, a cozy traditional feel, or a bold custom design, our expert team is dedicated to bringing your vision to life with precision and care. With a full range of home improvement solutions, we guarantee seamless integration between kitchen renovations and other areas of your home, delivering exceptional craftsmanship, innovative design, and superior service at every stage. Let RENOVVO help you create a kitchen that enhances your home and enriches your everyday experiences."
      img={kitchenImages[0] ?? IMG.kitchen1}
      heroImages={kitchenImages.length > 0 ? kitchenImages.slice(0, 4) : undefined}
      gallery={[kitchenImages[1] ?? IMG.kitchen2, kitchenImages[2] ?? IMG.kitchen3]}
      features={['Custom 3D kitchen design', 'Custom cabinetry', 'Quartz & granite countertops', 'Premium flooring', 'Island additions', 'Full home integration']}
      fullGallery={kitchenImages.length > 0 ? kitchenImages : undefined}
      cta={{
        title: 'Transform Your Kitchen Into a Space You Love',
        text: 'Where style meets functionality. Contact RENOVVO today to schedule a consultation and take the first step toward your dream kitchen!',
      }}
    />
  )
}
