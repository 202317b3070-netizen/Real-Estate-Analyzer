export interface Property {
  id: string;
  address: string;
  city: string;
  neighborhood: string;
  price: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  type: string;
  coordinates: { lat: number; lng: number };
}
 
export interface MarketStats {
  city: string;
  neighborhood: string;
  avgPricePerSqFt: number;
  medianPrice: number;
  inventoryCount: number;
}
 
