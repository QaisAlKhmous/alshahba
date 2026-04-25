import { HomeContent } from './home-content.model';

export const HOME_CONTENT: HomeContent = {
  slider: {
    slides: [
      {
        backgroundUrl: '/antra/assets/images/IMG_2827.jpeg',
        subHeading: 'MODERN HOMES. TRUSTED QUALITY',
        titleHtml: 'Welcome to alshahba housing, <br> Modern Living Starts Here',
        descriptionHtml:
          'From elegant finishes to prime locations, <br> we create luxury living spaces designed for comfort, privacy, <br> and a refined lifestyle.',
        cta: { text: 'Take counsel', href: '/contact' },
        stats: {
          value: 'Premium',
          labelHtml: 'Quality standard <br> in every detail',
          items: ['Luxury finishes', 'Modern layouts', 'After-sales support'],
        },
        thumbUrl: '/antra/assets/images/IMG_1000.png',
        thumbAlt: 'slider',
      },
      {
        backgroundUrl: '/antra/assets/images/IMG_2829.jpeg',
        subHeading: 'QUALITY LIVING, BUILT TO LAST',
        titleHtml: 'Welcome to alshahba housing, <br> Modern Living Starts Here',
        descriptionHtml:
          'Modern design, strong construction, and prime locations— <br> we’re dedicated to building homes that fit your lifestyle <br> today and for years to come.',
        cta: { text: 'Take counsel', href: '/contact' },
        stats: {
          value: 'Premium',
          labelHtml: 'Quality standard <br> in every detail',
          items: ['Luxury finishes', 'Modern layouts', 'After-sales support'],
        },
        thumbUrl: '/antra/assets/images/IMG_1229.jpeg',
        thumbAlt: 'slider',
      },
    ],
  },
  whoWeAre: {
    backgroundShapeUrl: '/antra/assets/img/shapes/service-bg-shape-1.png',
    headingShapeUrl: '/antra/assets/img/shapes/section-heading.png',

    subHeading: 'WHO WE ARE',
    titleHtml: 'Luxury Residences <span>Designed to Impress</span>',
    descriptionHtml:
      'We develop premium residences that combine modern architecture, refined interiors, <br> and carefully selected locations. Every detail is crafted to deliver comfort, privacy, <br> and a lifestyle that feels truly elevated.',

    cards: [
      {
        titleHtml: 'Premium Construction <br> & Materials',
        iconUrl: '/antra/assets/img/icon/service-icon-1.png',
        description:
          'Built with high-grade materials and expert workmanship to deliver lasting quality and a refined exterior.',
      },
      {
        titleHtml: 'Luxury Interiors <br> & Finishes',
        iconUrl: '/antra/assets/img/icon/service-icon-2.png',
        description:
          'Modern layouts, elegant lighting, and carefully selected finishes that elevate everyday living.',
      },
      {
        titleHtml: 'Prime Location <br> & Accessibility',
        iconUrl: '/antra/assets/img/icon/service-icon-3.png',
        description:
          'A prestigious address with easy access to key services—designed for comfort, privacy, and convenience.',
      },
      {
        titleHtml: 'Professional Service <br> & After-Sales Support',
        iconUrl: '/antra/assets/img/icon/service-icon-4.png',
        description:
          'Clear communication, trusted delivery, and reliable after-sales support—because luxury includes peace of mind.',
      },
    ],
  },

  about: {
    backgroundUrl: '/antra/assets/images/IMG_2825.jpeg',
    watermarkText: 'alshahba', // replace with your brand name

    subHeading: 'Luxury Residences', // change if not true
    titleHtml: 'Designed for Comfort <br> Finished with <span>Luxury <br> Details</span>',

    bullets: [
      { iconUrl: '/antra/assets/img/icon/about-1.png', text: 'Modern layouts & natural light' },
      { iconUrl: '/antra/assets/img/icon/about-1.png', text: 'Premium tiles, doors & cabinetry' },
      { iconUrl: '/antra/assets/img/icon/about-1.png', text: 'Elegant lighting & ceiling details' },
      { iconUrl: '/antra/assets/img/icon/about-1.png', text: 'Quality construction & smooth handover' },
    ],

    description:
      'We design elegant interiors that reflect your lifestyle and elevate everyday living. From concept to final styling, our team combines creativity, precision, and high-quality craftsmanship to deliver spaces that feel timeless, functional, and uniquely yours.',

    cta: { text: 'More About Us', href: '/aboutus' }, // or '/about' depending on your routes

    imageUrl: '/antra/assets/images/IMG_2839.jpeg',
    imageAlt: 'about',
  },

  projects: {
    backgroundShapeUrl: '/antra/assets/img/shapes/project-shape-1.png',
    watermarkText: 'Projects',

    subHeading: 'Our Projects',
    titleHtml: 'Explore Our <span>Luxury Residences</span>',
    descriptionHtml:
      'Two premium developments—one completed and one under construction—crafted with quality, comfort, and timeless design.',

    items: [
      {
        imageUrl: '/antra/assets/images/IMG_2829.jpeg',
        imageAlt: 'alshahba 1',
        tags: ['Residential', 'Luxury'],
        title: 'alshahba 1',
        locationHtml: 'Your City <br> 2025',
        status: 'completed',
        statusLabel: 'Completed',
        href: '/contact',
      },
      {
        imageUrl: '/antra/assets/images/IMG_1001.jpeg',
        imageAlt: 'alshahba 2',
        tags: ['Residential', 'New'],
        title: 'alshahba 2',
        locationHtml: 'Your City <br> 2026',
        status: 'under_construction',
        statusLabel: 'Under Construction',
        href: '/contact',
      },
    ],
  },
};
