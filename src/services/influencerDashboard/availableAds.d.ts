export interface Ad {
  _id: string;
  user: string;
  campaignName: string;
  platforms: string[];
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  taskCount: number;
  barterOrPaid: 'barter' | 'paid';
  budget?: number;
  requirements?: string;
  image?: string;
  campaignDescription?: string;
  hasApplied?: boolean;
  appliedInfluencers?: string[];
}
