import {
  Gift,
  Heart,
  Shield,
  Truck,
  Star,
  Clock,
  Award,
  Globe,
  Sparkles,
  Package,
  Gem,
  Coffee,
  Briefcase,
  PartyPopper,
  Calendar,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface GiftCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustIndicator {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Occasion {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Why Us", href: "#why-us" },
  { label: "Categories", href: "#categories" },
  { label: "Occasions", href: "#occasions" },
  { label: "Contact", href: "#contact" },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1400&q=80";

export const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "Bespoke Curation",
    description:
      "Every gift is hand-selected and tailored to your brand identity and recipient preferences.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "We source only premium products from trusted suppliers with rigorous quality checks.",
  },
  {
    icon: Truck,
    title: "Seamless Delivery",
    description:
      "End-to-end logistics across the UAE and GCC with real-time tracking and on-time guarantees.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "Custom branding, handwritten notes, and bespoke packaging that makes every gift memorable.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "From concept to delivery in as few as 48 hours for urgent corporate gifting needs.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Ship corporate gifts worldwide with our international logistics network and customs expertise.",
  },
];

export const GIFT_CATEGORIES: GiftCategory[] = [
  {
    icon: Gem,
    title: "Luxury Executive Gifts",
    description:
      "Premium leather goods, designer accessories, and high-end tech for C-suite recipients.",
    tags: ["Leather", "Tech", "Designer"],
    image: "/img/luxuryexecutivegifts.png",
  },
  {
    icon: Package,
    title: "Branded Gift Boxes",
    description:
      "Custom-curated gift boxes with your company branding, perfect for client appreciation.",
    tags: ["Custom", "Branded", "Curated"],
    image: "/img/Branded_Gift_Boxes.png",
  },
  {
    icon: Coffee,
    title: "Gourmet & Wellness",
    description:
      "Artisan chocolates, premium teas, organic hampers, and wellness-focused gift sets.",
    tags: ["Food", "Wellness", "Organic"],
    image: "/img/Gourmet_Wellness.png",
  },
  {
    icon: Briefcase,
    title: "Employee Welcome Kits",
    description:
      "Onboarding gift sets that make new hires feel valued from day one.",
    tags: ["Onboarding", "Team", "Culture"],
    image: "/img/Employee_Welcome_Kits.png",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    description:
      "Trophies, plaques, and milestone gifts to celebrate employee achievements.",
    tags: ["Awards", "Milestones", "Custom"],
    image: "/img/Awards_Recognition.png",
  },
  {
    icon: Gift,
    title: "Seasonal Collections",
    description:
      "Eid, Diwali, Christmas, and National Day themed gift collections for every celebration.",
    tags: ["Seasonal", "Cultural", "Festive"],
    image: "/img/Seasonal_Collections.png",
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Corporate Clients" },
  { value: 50000, suffix: "+", label: "Gifts Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    icon: Shield,
    title: "Dedicated Account Team",
    description:
      "A personal gifting consultant handles your brief from concept to doorstep.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description:
      "Consistently rated 5 stars by corporate clients across the region.",
  },
  {
    icon: Globe,
    title: "UAE & GCC Coverage",
    description:
      "Serving businesses across Dubai, Abu Dhabi, and the wider Gulf region.",
  },
];

export const OCCASIONS: Occasion[] = [
  {
    icon: Building2,
    title: "Client Appreciation",
    description: "Strengthen business relationships with thoughtful gestures.",
    image: "/img/Client Appreciation.png",
  },
  {
    icon: PartyPopper,
    title: "Festive Celebrations",
    description: "Eid, Diwali, Christmas, and National Day gift programs.",
    image: "/img/Festive_Celebrations.png",
  },
  {
    icon: Award,
    title: "Employee Milestones",
    description:
      "Work anniversaries, promotions, and outstanding achievements.",
    image: "/img/Employee Recognition.png",
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description: "Conferences, trade shows, and product launch giveaways.",
    image: "/img/Corporate_Events.png",
  },
];

export const CTA_IMAGE = "/img/Background_image.jpg";

export const COMPANY = {
  name: "RIS Services DMCC",
  shortName: "Corporate Gifts",
  email: "gifts@risservices.ae",
  phone: "+971 4 xxx xxxx",
  location: "Dubai, UAE",
  tagline: "Premium Corporate Gifting",
} as const;
