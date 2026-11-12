import ShopLevels from '../../components/ShopLevels'

export default function ShopCountertops() {
  return (
    <ShopLevels
      slug="countertops"
      label="Shop"
      title="Countertops"
      subtitle="Granite, marble, quartz and quartzite surfaces in three levels to fit your style and budget."
      tileAspect="5/4"
      containerWidth="max-w-[1850px]"
      levelCount={3}
    />
  )
}
