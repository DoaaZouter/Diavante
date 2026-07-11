export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string; // Lucide icon name or custom element
}

export interface Achievement {
  id: number;
  title: string;
  value: number;
  suffix: string;
  subtext: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl?: string;
  logoText: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}
