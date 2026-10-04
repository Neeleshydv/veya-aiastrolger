export type ZodiacSignName =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type ElementType = "Fire" | "Earth" | "Air" | "Water";
export type ModalityType = "Cardinal" | "Fixed" | "Mutable";
export type PolarityType = "Yang (Active)" | "Yin (Receptive)";

export interface ZodiacSignInfo {
  slug: string;
  name: ZodiacSignName;
  symbol: string;
  dateRange: string;
  element: ElementType;
  modality: ModalityType;
  polarity: PolarityType;
  rulingPlanet: string;
  rulingHouse: string;
  tarotCard: string;
  birthstones: string[];
  luckyNumbers: number[];
  color: string;
  summary: string;
  deepDescription: string;
  keyStrengths: string[];
  shadowTraits: string[];
  loveProfile: string;
  careerProfile: string;
  bestMatches: ZodiacSignName[];
  challengingMatches: ZodiacSignName[];
  mantra: string;
}

export interface PlanetaryPosition {
  planet: string;
  symbol: string;
  sign: ZodiacSignName;
  degree: number;
  house: number;
  isRetrograde: boolean;
  interpretation: string;
}

export interface HouseInfo {
  houseNumber: number;
  name: string;
  rulingSign: ZodiacSignName;
  signOnCusp: ZodiacSignName;
  domain: string;
  interpretation: string;
}

export interface BirthChartResult {
  sunSign: ZodiacSignName;
  moonSign: ZodiacSignName;
  risingSign: ZodiacSignName;
  dominantElement: ElementType;
  dominantModality: ModalityType;
  bigThreeSummary: string;
  planets: PlanetaryPosition[];
  houses: HouseInfo[];
  karmicDestiny: string;
  careerAptitude: string;
  loveGuidance: string;
}

export interface CompatibilityResult {
  sign1: ZodiacSignName;
  sign2: ZodiacSignName;
  overallScore: number;
  emotionalScore: number;
  intellectualScore: number;
  sensualScore: number;
  communicationScore: number;
  verdict: string;
  deepAnalysis: string;
  strengths: string[];
  growthAreas: string[];
  synastryAdvice: string;
}

export interface DailyTransitAspect {
  transit: string;
  planets: string;
  influence: string;
  category: "Spiritual" | "Career" | "Love" | "Mind";
  guidance: string;
}

export interface AstrologerPersona {
  id: string;
  name: string;
  title: string;
  tradition: "Modern Psychological" | "Traditional Hellenistic" | "Vedic Jyotish";
  avatar: string;
  bio: string;
  greeting: string;
  specialties: string[];
}
