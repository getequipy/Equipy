export interface Lead {
  id?: string;
  name: string;
  email: string;
  businessName: string;
  phone: string;
  message: string;
  selectedAsset?: string;
  selectedVertical?: string;
  createdAt: any; // Firestore Timestamp or Date ISO string
}

export interface Asset {
  id: string;
  name: string;
  description: string;
  cost: number; // CapEx purchase cost
  monthlyMaint: number; // monthly maintenance cost under purchase
  avgChargePerUse: number; // how much the customer charges their user/patient
  defaultUsesPerMonth: number; // default sessions/month
  metricUnit: string; // e.g., "sesiones", "horas", "tazas"
  haasMonthlyRent?: number; // subscription renting fee
  hasSplitModel: boolean; // whether 70/30 split is available
}

export interface BusinessVertical {
  id: string;
  name: string;
  description: string;
  iconName: string; // lucide icon identifier
  assets: Asset[];
}

export interface TelemetryLog {
  id: string;
  timestamp: string;
  assetName: string;
  status: 'active' | 'idle' | 'warning' | 'completed';
  message: string;
  metricValue: string;
  splitEarnings?: number;
}
