import ShopLevels from '../../components/ShopLevels'

export default function ShopCarpets() {
  return (
    <ShopLevels
      slug="carpets"
      label="Shop"
      title="Carpets"
      subtitle="Soft, durable carpet options in two levels for every room in your home."
      tileAspect="1/1"
      levelCount={2}
      levelFolders={{ 1: 'Mohawk', 2: 'Tarkett' }}
    />
  )
}
