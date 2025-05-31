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
}

export interface FetchAvailableAdsResponse {
  success: boolean;
  ads: Ad[];
}

export interface ApiResponse {
  success: boolean;
  message?: string;
}

export function fetchAvailableAds(): Promise<FetchAvailableAdsResponse>;
export function applyForAd(adId: string): Promise<ApiResponse>;
export function markAdNotInterested(adId: string): Promise<ApiResponse>;
