export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

/** Resource cards. These are previews, not published articles. */
export const BLOG_POSTS: BlogPost[] = [
  {
    title: "What documents help a California lemon law claim?",
    category: "Lemon Law",
    excerpt:
      "Repair orders are the backbone of a buyback review. A preview of the paperwork to gather before the manufacturer writes the story for you.",
    date: "Jan 15, 2024",
  },
  {
    title: "What to do after a car accident in California",
    category: "Personal Injury",
    excerpt:
      "A short sequence for protecting your health and your claim in the hours after a collision: safety, medical care, and photos.",
    date: "Jan 10, 2024",
  },
  {
    title: "Is my used car covered by the lemon law?",
    category: "Lemon Law",
    excerpt: "Used vehicles may qualify, case by case.",
    date: "Dec 28, 2023",
  },
  {
    title: "How liability works in a rideshare crash",
    category: "Auto Accidents",
    excerpt:
      "Uber and Lyft claims turn on the driver’s app status at impact. That status can change which policy is even in play.",
    date: "Dec 15, 2023",
  },
  {
    title: "Understanding maximum medical improvement",
    category: "Personal Injury",
    excerpt:
      "Settling before doctors say you have reached maximum medical improvement can leave future care out of the claim.",
    date: "Dec 02, 2023",
  },
];
