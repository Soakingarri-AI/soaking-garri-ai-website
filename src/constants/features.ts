import {
  BookOpen,
  Image,
  MessageSquare,
  Puzzle,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type FeatureTool = {
  /** Label used on the composer quick-action pills, as it appears in the app. */
  pill: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: string;
  desc: string;
  points: string[];
};

export const FEATURE_TOOLS: FeatureTool[] = [
  {
    pill: "Factorizer",
    title: "Factorizer",
    tagline: "From raw material to running factory",
    icon: Settings,
    accent: "#F59E0B",
    desc: "Turn manufacturing dreams into reality. Factorizer helps entrepreneurs, investors, governments, and businesses understand the technical know-how to assemble the machines required to have a fully running factory for different products, from food processing to electronics to machines.",
    points: [
      "Machine lists and process flows per product line",
      "Small, medium and large-scale factory pathways",
      "Practical costing and sourcing guidance",
    ],
  },
  {
    pill: "Memer",
    title: "Meme Generator",
    tagline: "Shareable culture, in seconds",
    icon: Image,
    accent: "#EC4899",
    desc: "Create funny, shareable content based on socio-cultural context in seconds. Powered by the SoakinGarri meme engine, tuned to the humour, slang and references that actually land across the continent.",
    points: [
      "Culturally aware captions and templates",
      "Instant export for social platforms",
      "Built on the SoakinGarri meme engine",
    ],
  },
  {
    pill: "Finance",
    title: "Finance",
    tagline: "Track, budget, and grow with AI",
    icon: Wallet,
    accent: "#10B981",
    desc: "Track expenses, budgets, and business growth with AI that understands local realities — informal income, multiple currencies, and the cash-flow patterns of African small businesses.",
    points: [
      "Expense tracking and budget planning",
      "Business growth and cash-flow insight",
      "Guidance grounded in local market conditions",
    ],
  },
  {
    pill: "InfiniteParts",
    title: "InfiniteParts",
    tagline: "Design and discover machine components",
    icon: Puzzle,
    accent: "#3B82F6",
    desc: "Design and discover machine components with ease. InfiniteParts helps engineers, inventors, manufacturers, and makers generate production-ready parts, explore mechanical designs, and create components suitable for CNC machining, 3D printing, fabrication, and industrial production.",
    points: [
      "Production-ready part generation",
      "CNC, 3D printing and fabrication output",
      "Mechanical design exploration",
    ],
  },
  {
    pill: "ExamFlow",
    title: "ExamFlow",
    tagline: "The study companion for African students",
    icon: BookOpen,
    accent: "#8B5CF6",
    desc: "The intelligent study companion for African students. ExamFlow helps learners prepare for Common Entrance, Junior WAEC, Senior WAEC, NECO, JAMB, and other examinations through practice questions, personalized learning plans, adaptive testing, and performance analysis.",
    points: [
      "WAEC, NECO, JAMB and Common Entrance prep",
      "Adaptive testing and practice questions",
      "Personalized plans with performance analysis",
    ],
  },
  {
    pill: "Afrosimulator",
    title: "AfroSimulator",
    tagline: "Many African perspectives, one conversation",
    icon: Users,
    accent: "#F97316",
    desc: "Experience dynamic conversations between diverse African perspectives through a simulation of chatbots. AfroSimulator features culturally distinct AI personalities inspired by different African communities, letting you explore ideas and collaborative problem-solving through realistic AI-driven discussion.",
    points: [
      "Culturally distinct AI personalities",
      "Multi-agent debate and problem solving",
      "Explore ideas from several viewpoints at once",
    ],
  },
];

/** The always-on assistant behind the composer itself. */
export const ASK_TOOL = {
  title: "Ask SoakinGarri",
  icon: MessageSquare,
  desc: "Your everyday AI assistant with deep knowledge of Africa's history, culture, science, business, technology, and education. Ask questions, solve problems, learn new skills, conduct research, and get intelligent guidance tailored to African realities.",
};

export type DiscoveryCard = {
  tag: string;
  title: string;
  desc: string;
  kind: "research" | "creative";
};

export const DISCOVERY_CARDS: DiscoveryCard[] = [
  {
    tag: "Research",
    title: "What does it take to start a cassava processing plant?",
    desc: "Machines, capital, and the step-by-step process, costed for your region.",
    kind: "research",
  },
  {
    tag: "Creative",
    title: "Turn this week's headline into a meme",
    desc: "Give it a topic and get shareable, culturally sharp content back.",
    kind: "creative",
  },
];
