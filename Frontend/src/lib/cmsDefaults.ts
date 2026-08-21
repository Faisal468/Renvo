import { IMG } from '../components/shared'
import homeHero1 from '../assets/home/1.jpg'
import k1 from '../assets/service/modern-kitchen-remodeling-white-quartz-island.jpg';
import b1 from '../assets/service/luxury-bathroom-remodel-freestanding-tub-double-vanity.jpeg';
import h1 from '../assets/service/Full House Transformation & Exterior Makeover.jpeg';
import p1 from '../assets/service/Modern Poolside Patio & Deck.jpg';
import n1 from '../assets/service/The Ultimate Backyard Transformation.jpeg';
import home from '../assets/service/1.jpg';

import gold from '../assets/feat proj/golden forest.jpg';
import bayou from '../assets/feat proj/bayou bridge.jpeg';
import cand from '../assets/feat proj/candlewood.jpeg';
import holly from '../assets/feat proj/hollyspring.jpeg';
import misty from '../assets/feat proj/mistyleaf.jpeg';
import waymouth from '../assets/feat proj/weymouth dr.jpeg';



export const CMS_DEFAULT_CONTENT = {
  home: {
    hero: {
      slides: [
        {
          img: homeHero1,
          headline: 'From Vision to Reality — Every Detail Counts.',
          sub: 'Trusted by homeowners nationwide to deliver beautiful, lasting transformations.',
        },
      ],
    },
    trustBar: [
      { icon: '★', text: '4.9 / 5 Rating' },
      { icon: '✓', text: '800+ Projects Completed' },
      { icon: '⌛', text: '15+ Years Experience' },
      { icon: '🏆', text: 'Licensed & Insured' },
     
    ],
    services: [
      { title: 'Kitchen Remodeling', img: k1 },
      { title: 'Bathroom Remodeling', img: b1 },
      { title: 'Room Additions', img: n1 },
      { title: 'Patio & Outdoors', img: p1 },
      { title: 'Full Home Renovation', img: h1 },
      { title: 'New Construction', img: home },
    ],
    portfolioPreview: [
      { title: 'Golden Forest', cat: '', img: gold, tall: true },
      { title: 'Candlewood', cat: '', img: cand, tall: false },
      { title: 'Hollyspring', cat: '', img: holly, tall: false },
      { title: 'Bayou Bridge', cat: '', img: bayou, tall: true },
      { title: 'Misty Leaf', cat: '', img: misty, tall: false },
      { title: 'Waymouth Drive', cat: '', img: waymouth, tall: false },
    ],
    stats: [
      { value: '800+', label: 'Projects Completed' },
      { value: '15+', label: 'Years of Experience' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '$2M+', label: 'In Projects Delivered' },
    ],
    aboutSnippet: {
      image: IMG.team,
      title: 'Who We Are',
      description: 'Our values define who we are and how we serve. They shape our actions, guide our decisions, and ensure we remain true to our mission no matter the challenges.',
      extra: 'At RENOVVO, we believe your home should perfectly reflect your vision and lifestyle. As a leading home improvement firm, we are dedicated to delivering exceptional results and unparalleled quality craftsmanship across all phases of residential construction and remodeling.',
    },
    cta: {
      label: 'Start Your Project',
      title: 'Ready to Build Your Extraordinary Home?',
      text: 'Contact us today for a free, no-obligation consultation and estimate. We respond within 24 hours.',
      button: 'Schedule a Free Consultation',
    },
  },
  about: {
    hero: {
      image: IMG.about,
      label: 'About RENOVVO',
      title: 'Who We Are',
      subtitle: 'Client-centered craftsmanship, from the first sketch to the final walkthrough.',
    },
    values: {
      image: IMG.team,
      heading: 'Our Values',
      title: 'Who We Are',
      description: 'Our values define who we are and how we serve. They shape our actions, guide our decisions, and ensure we remain true to our mission no matter the challenges.',
      extra: 'At RENOVVO, we believe your home should perfectly reflect your vision and lifestyle. As a leading home improvement firm, we are dedicated to delivering exceptional results and unparalleled quality craftsmanship across all phases of residential construction and remodeling.',
      button: 'Start Your Project',
    },
    services: [
      { title: 'Complete Home Remodels', desc: 'Whole-house transformations expertly managed from start to finish.' },
      { title: 'New Construction & Additions', desc: 'Expanding your home’s footprint or building your dream residence from the ground up.' },
      { title: 'Specialized Renovations', desc: 'Stunning, quality-focused updates for kitchens, bathrooms, and outdoor living spaces.' },
    ],
    approach: {
      heading: 'How We Work',
      title: 'Our Client-Centered Approach',
      description: 'What truly sets RENOVVO apart is our commitment to a Client-Centered Design & Build process. We simplify the complexities of construction with expert guidance and hands-on resources.',
      sidebarTitle: 'Visit Our Showroom',
      sidebarText: 'Our state-of-the-art showroom is an invaluable resource. Here, you can easily touch, see, and choose every finish and material, ensuring your selections perfectly align with your design goals.',
      extra: 'From the initial design sketch through the final build, our team is committed to ensuring your renovation is perfectly executed, helping you create the extraordinary home you’ve always wanted.',
      button: 'Schedule a Showroom Visit',
    },
  },
  services: {
    hero: {
      image: IMG.kitchen1,
      label: 'Our Services',
      title: 'Complete Home Remodeling Solutions',
      subtitle: 'Expert craftsmanship in every category — from kitchens and bathrooms to full-home transformations.',
    },
    services: [
      {
        title: 'Kitchen Remodeling',
        desc: 'A kitchen remodel is one of the highest-return investments you can make in your home. We handle everything from layout redesign and custom cabinetry to countertop installation, appliance integration, and finishing details that turn an ordinary kitchen into the heart of your home.',
        img: IMG.kitchen1,
        gallery: [IMG.kitchen2, IMG.kitchen3],
        features: ['Custom cabinet design', 'Quartz & granite countertops', 'Island additions', 'Lighting design', 'Tile backsplash', 'Appliance installation'],
      },
      {
        title: 'Bathroom Renovation',
        desc: 'Transform your bathroom into a personal sanctuary. Our team specializes in master bath remodels, guest bath updates, and spa-inspired designs that blend luxury with function — complete with waterproofing, tile work, and premium fixtures.',
        img: IMG.bathroom1,
        gallery: [IMG.bathroom2, IMG.bathroom3],
        features: ['Walk-in shower conversions', 'Soaking tub installation', 'Heated tile floors', 'Custom vanities', 'Steam showers', 'Smart fixtures'],
      },
      {
        title: 'Home Additions',
        desc: 'Need more space without the cost of moving? Our home addition team designs and builds seamless expansions that feel like they were always part of the original structure — properly permitted and structurally engineered.',
        img: IMG.addition,
        gallery: [IMG.exterior1, IMG.living1],
        features: ['Room additions', 'Second-story additions', 'Garage conversions', 'Sunroom builds', 'ADU construction', 'Foundation work'],
      },
      {
        title: 'Flooring & Tile',
        desc: 'The right flooring sets the tone for every room. We install hardwood, luxury vinyl plank, ceramic and porcelain tile, natural stone, and carpet — with expert prep work that ensures your floors last decades.',
        img: IMG.flooring,
        gallery: [IMG.living2, IMG.kitchen1],
        features: ['Hardwood installation', 'Luxury vinyl plank', 'Porcelain & ceramic tile', 'Natural stone', 'Heated floor systems', 'Subfloor repair'],
      },
      {
        title: 'Living Space Remodeling',
        desc: 'Open up your home with thoughtful living room and common area renovations. We remove walls, update trim and millwork, install built-in shelving, and redesign flow so your home works the way you live.',
        img: IMG.living1,
        gallery: [IMG.living2, IMG.living3],
        features: ['Open-concept conversions', 'Built-in shelving & bars', 'Fireplace surround', 'Crown molding & trim', 'Painting & finishes', 'Lighting upgrades'],
      },
      {
        title: 'Exterior Upgrades',
        desc: 'Make a lasting first impression with a stunning exterior renovation. From siding replacement and window installation to full front-elevation redesigns, we boost your home’s curb appeal and protect its value.',
        img: IMG.exterior2,
        gallery: [IMG.exterior1, IMG.exterior3],
        features: ['Siding replacement', 'Window & door installation', 'Deck & patio builds', 'Front entry redesign', 'Roofing', 'Exterior painting'],
      },
    ],
    cta: {
      title: 'Ready to Get Started?',
      text: 'Contact us today for a free, no-obligation consultation and estimate. We respond within 24 hours.',
      button: 'Schedule a Free Consultation',
    },
  },
  contact: {
    hero: {
      image: IMG.exterior1,
      label: 'Contact Us',
      title: 'Let’s Talk About Your Project',
      subtitle: 'We respond to every inquiry within 24 hours. No pressure, no obligation — just a conversation.',
    },
    intro: {
      heading: 'Get In Touch',
      title: 'We Are Here to Help',
      description: 'Whether you have a clear vision or just a rough idea, our team is ready to listen, advise, and deliver. Reach out below to schedule your free in-home consultation.',
    },
    contacts: [
      { icon: '📞', label: 'Phone / Text', value: '(281) 222-9491', href: 'tel:+2812229491' },
      { icon: '✉', label: 'Email', value: 'hello@rewisebuilders.com', href: 'mailto:hello@rewisebuilders.com' },
      { icon: '📍', label: 'Service Area', value: 'All 50 US States', href: '#' },
      { icon: '⏰', label: 'Business Hours', value: 'Mon–Sat 8am–6pm EST', href: '#' },
    ],
    promise: {
      title: 'Our Response Promise',
      text: 'Every inquiry submitted before 5pm EST receives a personal response from our team within 24 hours — guaranteed.',
    },
    form: {
      serviceOptions: ['Kitchen Remodeling', 'Bathroom Renovation', 'Home Addition', 'Cabinet Installation', 'Flooring & Tile', 'Exterior Upgrade', 'Full-Home Renovation', 'Other'],
      budgetOptions: ['Under $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Not Sure Yet'],
      submitText: 'Send My Request — It’s Free',
      disclaimer: 'By submitting you agree to be contacted by ReWise Builders. We never sell your information.',
    },
    serviceArea: {
      heading: 'Service Area',
      title: 'We Come to You — Across All 50 States',
      description: 'With regional project managers and a national network of licensed craftsmen, ReWise Builders can take on projects anywhere in the continental United States.',
      locations: ['Texas', 'Florida', 'California', 'New York', 'Georgia', 'Illinois', 'Arizona', 'Colorado'],
      extra: '+ 42 more states',
    },
  },
  cabinets: {
    hero: {
      image: IMG.cabinets1,
      label: 'Cabinets',
      title: 'Custom Cabinet Solutions for Every Style',
      subtitle: 'From shaker white to modern slab, we source and install premium cabinetry that defines your kitchen.',
    },
    intro: {
      items: ['Free 3D Design', 'Lifetime Warranty on Hardware', 'Soft-Close Standard', 'In-House Installation', 'Custom Sizes Available', 'All Wood Interiors'],
      description: 'Our cabinet division partners with the top US manufacturers to deliver fully custom and semi-custom cabinetry for kitchens, bathrooms, laundry rooms, and beyond. Every cabinet system is designed in 3D before a single piece is ordered.',
    },
    styles: [
      {
        name: 'Shaker White',
        finish: 'Semi-gloss white',
        material: 'Solid maple',
        desc: 'The most versatile cabinet style in America. Clean lines and recessed panels work in traditional, transitional, and contemporary kitchens alike.',
        img: IMG.cabinets1,
      },
      {
        name: 'Modern Matte Black',
        finish: 'Flat matte',
        material: 'MDF with wood veneer',
        desc: 'Bold and dramatic. Matte black cabinetry creates stunning contrast, especially paired with light countertops and brass hardware.',
        img: IMG.kitchen2,
      },
      {
        name: 'Natural Walnut',
        finish: 'Satin oil',
        material: 'American black walnut',
        desc: 'Warm, rich grain patterns make every run of walnut cabinetry completely unique. The premium choice for luxury kitchen renovations.',
        img: IMG.cabinets2,
      },
      {
        name: 'Two-Tone Finish',
        finish: 'Custom combination',
        material: 'Solid wood + MDF',
        desc: 'Mix upper and lower cabinet colors for a modern, curated look. Navy and white, sage and cream, or any custom pairing we design together.',
        img: IMG.kitchen1,
      },
      {
        name: 'Slab Front Modern',
        finish: 'Lacquer or veneer',
        material: 'Plywood box + MDF',
        desc: 'No rails, no stiles, no visible frames. Pure flat-front doors deliver the clean, handleless aesthetic of European kitchen design.',
        img: IMG.cabinets3,
      },
      {
        name: 'Raised Panel Traditional',
        finish: 'Painted or stained',
        material: 'Solid cherry or oak',
        desc: 'Classic raised-panel construction for a timeless, formal look. Perfect for colonial, farmhouse, and traditionally styled homes.',
        img: IMG.cabinets4,
      },
    ],
    faqs: [
      { q: 'How long does a cabinet installation take?', a: 'Typical kitchen cabinet installations take 3–5 days once all materials are on-site. Larger or custom projects may run 7–10 days.' },
      { q: 'Do you offer semi-custom vs fully custom?', a: 'Yes — we offer stock, semi-custom, and fully custom cabinetry to fit every budget. We will recommend the best option after seeing your space.' },
      { q: 'Can you match existing cabinets?', a: 'In most cases yes — especially with painted finishes. We will bring samples to your home to ensure an exact match.' },
      { q: 'What is included in cabinet installation?', a: 'Everything: demo of existing cabinets, delivery coordination, installation, hardware mounting, and final alignment and adjustment.' },
    ],
    cta: {
      title: 'Ready to Design Your Dream Cabinets?',
      text: 'Book a free in-home measurement and design consultation today.',
      button: 'Book a Free Design Consult',
    },
  },
  vendors: {
    hero: {
      image: IMG.kitchen1,
      label: 'Partner Vendors',
      title: 'We Work With the Best Brands in the Industry',
      subtitle: 'Our vendor partnerships give you access to premium materials at competitive prices, backed by full manufacturer warranties.',
    },
    vendors: [
      { name: 'KraftMaid Cabinetry', category: 'Cabinetry', desc: 'America’s most trusted semi-custom cabinet brand, offering hundreds of styles, finishes, and organization solutions.', logo: 'KM' },
      { name: 'Kohler', category: 'Plumbing Fixtures', desc: 'Premium faucets, sinks, tubs, and showers engineered for performance and designed to elevate every bathroom and kitchen.', logo: 'KO' },
      { name: 'Moen', category: 'Plumbing Fixtures', desc: 'Innovative faucets and showering products backed by Moen’s lifetime limited warranty for lasting confidence.', logo: 'MN' },
      { name: 'Benjamin Moore', category: 'Paint & Finishes', desc: 'The preferred paint of professional painters, offering unmatched color accuracy and durability in every gallon.', logo: 'BM' },
      { name: 'Armstrong Flooring', category: 'Flooring', desc: 'Leading manufacturer of hardwood, luxury vinyl, and laminate flooring trusted in millions of American homes.', logo: 'AF' },
      { name: 'Dal-Tile', category: 'Tile & Stone', desc: 'The largest tile manufacturer in North America, supplying our team with premium ceramic, porcelain, and natural stone.', logo: 'DT' },
      { name: 'Andersen Windows', category: 'Windows & Doors', desc: 'Energy-efficient windows and doors built to withstand America’s harshest climates while elevating curb appeal.', logo: 'AW' },
      { name: 'James Hardie', category: 'Siding', desc: 'Fiber cement siding that resists fire, moisture, and pests — the premier choice for long-lasting exterior renovations.', logo: 'JH' },
      { name: 'Caesarstone', category: 'Countertops', desc: 'Premium quartz surfaces in hundreds of designs — engineered for beauty, strength, and hygiene in kitchens and baths.', logo: 'CS' },
      { name: 'Schluter Systems', category: 'Tile Installation', desc: 'Industry-leading tile-edge profiles, uncoupling membranes, and waterproofing systems used on every ReWise tile job.', logo: 'SC' },
      { name: 'Marvin', category: 'Windows & Doors', desc: 'Handcrafted windows and doors with precision engineering and a finish quality that sets the standard in premium remodeling.', logo: 'MV' },
      { name: 'GAF Roofing', category: 'Roofing', desc: 'North America’s largest roofing manufacturer, providing our exterior teams with shingles that carry industry-best warranties.', logo: 'GF' },
    ],
    benefits: [
      { title: 'Material Discounts', desc: 'Our vendor relationships pass direct savings to you — often 15–30% below retail pricing.' },
      { title: 'Verified Quality', desc: 'Every product we specify has been vetted by our team on real projects in real homes.' },
      { title: 'Warranty Backed', desc: 'All partner products carry manufacturer warranties. We track and honor every one.' },
      { title: 'On-Time Delivery', desc: 'Coordinated directly with our vendors so materials arrive before your project starts — no delays.' },
    ],
    partner: {
      heading: 'Supplier Relations',
      title: 'Become a ReWise Preferred Vendor',
      description: 'We are always looking to partner with best-in-class manufacturers and suppliers. If your products meet our quality standards and you are interested in becoming part of our vendor network, we would love to hear from you.',
      button: 'Submit a Vendor Inquiry',
      image: IMG.team,
    },
  },
  finances: {
    hero: {
      image: IMG.finance,
      label: 'Financing',
      title: 'Remodel Now, Pay Over Time',
      subtitle: 'Flexible financing options that make your dream remodel possible — regardless of your budget.',
    },
    plans: [
      {
        title: '12-Month No Interest',
        badge: null,
        apr: '0% APR',
        period: 'for 12 months',
        monthly: 'Deferred interest',
        minAmount: '$5,000',
        features: ['0% interest for 12 months', 'No prepayment penalty', 'Fixed monthly payments', 'Approved in minutes', 'Soft credit pull to pre-qualify'],
      },
      {
        title: 'Low Monthly Payments',
        badge: 'Most Popular',
        apr: 'From 6.99% APR',
        period: 'up to 120 months',
        monthly: 'Starting at $89/mo',
        minAmount: '$3,000',
        features: ['Terms up to 10 years', 'Low fixed monthly payments', 'No prepayment penalty', 'Covers all project costs', 'Fast decision — same day'],
      },
      {
        title: 'Same-As-Cash',
        badge: null,
        apr: '0% APR',
        period: 'for 18 months',
        monthly: 'No interest if paid in full',
        minAmount: '$7,500',
        features: ['18 months interest-free', 'No monthly payment required', 'Pay when ready', 'Best for larger projects', 'Pre-qualify with no impact'],
      },
    ],
    steps: [
      { num: '01', title: 'Pre-Qualify Online', desc: 'Fill out a 60-second form. Soft credit pull — no impact to your score.' },
      { num: '02', title: 'Get Your Offer', desc: 'See your rate, term, and monthly payment instantly. Choose what fits.' },
      { num: '03', title: 'We Start Building', desc: 'Once approved, your project starts — no upfront payment required.' },
      { num: '04', title: 'Pay Over Time', desc: 'Simple monthly payments automatically drafted. No surprises.' },
    ],
    faqs: [
      { q: 'Will applying affect my credit score?', a: 'Pre-qualification uses a soft credit inquiry that has no impact on your credit score. Only a formal application triggers a hard pull.' },
      { q: 'What credit score do I need?', a: 'We have options for a wide range of credit profiles. While better scores get lower rates, we work with scores as low as 580 in many cases.' },
      { q: 'Can I finance the full project cost?', a: 'Yes — financing covers 100% of your project cost including materials, labor, permits, and design fees.' },
      { q: 'How quickly can I be approved?', a: 'Most applicants receive a decision within minutes. In rare cases it may take up to 24 hours for manual review.' },
      { q: 'Is there a prepayment penalty?', a: 'No. You can pay off your balance at any time without any fees or penalties.' },
    ],
    calculator: {
      amount: 15000,
      term: 60,
    },
    cta: {
      title: 'Ready to Get Started?',
      text: 'Contact us today for a free, no-obligation consultation and estimate. We respond within 24 hours.',
      button: 'Get Exact Quote',
    },
  },
  portfolio: {
    hero: {
      image: IMG.portfolio_hero,
      label: 'Portfolio',
      title: 'Our Work Speaks for Itself',
      subtitle: 'Browse hundreds of completed projects across the United States — each one a story of transformation.',
    },
    stats: [
      { v: '500+', l: 'Projects' },
      { v: '12', l: 'States Served' },
      { v: '98%', l: 'Satisfaction' },
      { v: '15+', l: 'Years' },
    ],
    cta: {
      title: 'Want Results Like These?',
      text: 'Every project in this portfolio started with a single conversation. Let us make your home the next one.',
      button: 'Get Your Free Estimate',
    },
  },
}
