import { CMS_DEFAULT_CONTENT } from './cmsDefaults'
import { SERVICES_CMS_DEFAULTS } from '../pages/Services'
import { VENDORS_CMS_DEFAULTS } from '../pages/Vendors'
import { FINANCES_CMS_DEFAULTS } from '../pages/Finances'
import { PORTFOLIO_CMS_DEFAULTS } from '../pages/Portfolio'
import { SHOP_CMS_DEFAULTS } from '../pages/Shop'
import { SUPPORT_CMS_DEFAULTS } from '../pages/Support'
import { GET_SUPPORT_CMS_DEFAULTS } from '../pages/support/GetSupport'
import { OUR_PROCESS_CMS_DEFAULTS } from '../pages/support/OurProcess'
import { OUR_VALUE_CMS_DEFAULTS } from '../pages/support/OurValue'
import { FULL_HOUSE_CMS_DEFAULTS } from '../pages/services/FullHouseRenovation'
import { KITCHEN_CMS_DEFAULTS } from '../pages/services/Kitchen'
import { BATHROOM_CMS_DEFAULTS } from '../pages/services/Bathroom'
import { FLOORING_CMS_DEFAULTS } from '../pages/services/Flooring'
import { ADDITION_CMS_DEFAULTS } from '../pages/services/Addition'
import { NEW_CONSTRUCTION_CMS_DEFAULTS } from '../pages/services/NewConstruction'
import { PATIO_CMS_DEFAULTS } from '../pages/services/Patio'
import { ROOFING_CMS_DEFAULTS } from '../pages/services/Roofing'
import { WINDOW_CMS_DEFAULTS } from '../pages/services/Window'

export interface CMSPageEntry {
  key: string
  label: string
  group: string
  defaults: Record<string, any>
}

export const CMS_PAGES: CMSPageEntry[] = [
  { key: 'home', label: 'Home', group: 'Main Pages', defaults: CMS_DEFAULT_CONTENT.home },
  { key: 'about', label: 'About', group: 'Main Pages', defaults: CMS_DEFAULT_CONTENT.about },
  { key: 'services', label: 'Services (Overview)', group: 'Main Pages', defaults: SERVICES_CMS_DEFAULTS },
  { key: 'contact', label: 'Contact', group: 'Main Pages', defaults: CMS_DEFAULT_CONTENT.contact },
  { key: 'cabinets', label: 'Cabinets', group: 'Main Pages', defaults: CMS_DEFAULT_CONTENT.cabinets },
  { key: 'vendors', label: 'Vendors', group: 'Main Pages', defaults: VENDORS_CMS_DEFAULTS },
  { key: 'finances', label: 'Financing', group: 'Main Pages', defaults: FINANCES_CMS_DEFAULTS },
  { key: 'portfolio', label: 'Portfolio', group: 'Main Pages', defaults: PORTFOLIO_CMS_DEFAULTS },
  { key: 'shop', label: 'Shop', group: 'Main Pages', defaults: SHOP_CMS_DEFAULTS },
  { key: 'support', label: 'Support', group: 'Main Pages', defaults: SUPPORT_CMS_DEFAULTS },

  { key: 'service-kitchen', label: 'Kitchen Remodeling', group: 'Service Detail Pages', defaults: KITCHEN_CMS_DEFAULTS },
  { key: 'service-bathroom', label: 'Bathroom Renovation', group: 'Service Detail Pages', defaults: BATHROOM_CMS_DEFAULTS },
  { key: 'service-flooring', label: 'Flooring & Tile', group: 'Service Detail Pages', defaults: FLOORING_CMS_DEFAULTS },
  { key: 'service-addition', label: 'Room Additions', group: 'Service Detail Pages', defaults: ADDITION_CMS_DEFAULTS },
  { key: 'service-new-construction', label: 'New Construction', group: 'Service Detail Pages', defaults: NEW_CONSTRUCTION_CMS_DEFAULTS },
  { key: 'service-patio', label: 'Patio & Outdoor', group: 'Service Detail Pages', defaults: PATIO_CMS_DEFAULTS },
  { key: 'service-roofing', label: 'Roofing', group: 'Service Detail Pages', defaults: ROOFING_CMS_DEFAULTS },
  { key: 'service-windows', label: 'Windows', group: 'Service Detail Pages', defaults: WINDOW_CMS_DEFAULTS },
  { key: 'service-full-house-renovation', label: 'Full Home Renovation', group: 'Service Detail Pages', defaults: FULL_HOUSE_CMS_DEFAULTS },

  { key: 'support-get-support', label: 'Get Support', group: 'Support Pages', defaults: GET_SUPPORT_CMS_DEFAULTS },
  { key: 'support-our-process', label: 'Our Process', group: 'Support Pages', defaults: OUR_PROCESS_CMS_DEFAULTS },
  { key: 'support-our-value', label: 'Our Values', group: 'Support Pages', defaults: OUR_VALUE_CMS_DEFAULTS },
]
