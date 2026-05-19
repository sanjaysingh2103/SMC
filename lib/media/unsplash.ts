export type UnsplashImage = { src: string; alt: string };

export const UNSPLASH = {
  studentsGroup: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85&auto=format&fit=crop",
    alt: "International students studying together in Canada",
  },
  studentsCampusWalk: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85&auto=format&fit=crop",
    alt: "Students talking with an advisor on campus",
  },
  studentLaptop: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85&auto=format&fit=crop",
    alt: "Students collaborating on a laptop",
  },
  visaPassport: {
    src: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&q=85&auto=format&fit=crop",
    alt: "Passport and travel documents for visa processing",
  },
  cityStreetcar: {
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200&q=85&auto=format&fit=crop",
    alt: "Canadian city street scene",
  },
  counselling: {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=85&auto=format&fit=crop",
    alt: "Education counselling session",
  },
  counsellingDesk: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85&auto=format&fit=crop",
    alt: "Advisor meeting with a student at a desk",
  },
  libraryStudy: {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85&auto=format&fit=crop",
    alt: "Students studying in a library",
  },
  graduation: {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85&auto=format&fit=crop",
    alt: "Graduation ceremony on campus",
  },
  toronto: {
    src: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85&auto=format&fit=crop",
    alt: "Toronto skyline",
  },
  vancouver: {
    src: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1200&q=85&auto=format&fit=crop",
    alt: "Vancouver skyline and waterfront",
  },
  montreal: {
    src: "https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?w=1200&q=85&auto=format&fit=crop",
    alt: "Montreal cityscape and river",
  },
  ottawa: {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85&auto=format&fit=crop",
    alt: "Ottawa city view",
  },
  campusModern: {
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=85&auto=format&fit=crop",
    alt: "Modern university campus",
  },
  /** Same asset as campusModern, sized for institution spotlight cards */
  campusModernCard: {
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80&auto=format&fit=crop",
    alt: "University campus architecture",
  },
  /** Headshot-style crop for testimonial cards (avoid retired Unsplash photo IDs) */
  testimonialPortraitWoman: {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop&crop=face",
    alt: "Portrait of a student",
  },
  /** Budgeting, tuition wire transfers, cost-of-living discussions */
  financeDesk: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85&auto=format&fit=crop",
    alt: "Notebook and calculator for student budgeting",
  },
  /** Housing / apartment search */
  apartmentKeys: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85&auto=format&fit=crop",
    alt: "Keys and moving boxes for new rental housing",
  },
  /** Airport travel */
  airportTravel: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop",
    alt: "Airplane departure — international travel",
  },
} satisfies Record<string, UnsplashImage>;
