import { Property, MarketStats } from './types';
 
export const CITIES = ['Mumbai', 'Bangalore', 'Chennai', 'Delhi NCR', 'Hyderabad', 'Pune'];
 
export const CITY_SUB_LOCATIONS = {
  'Chennai': ['Adyar', 'OMR', 'Anna Nagar', 'Velachery', 'T Nagar'],
  'Mumbai': ['Lower Parel', 'Bandra', 'Andheri'],
  // ... other cities
};
 
export const MOCK_PROPERTIES: Property[] = [
  { id: 'c1', address: 'Appaswamy Trellis', city: 'Chennai', neighborhood: 'Adyar', price: 28000000, sqft: 1600, bedrooms: 3, bathrooms: 2, yearBuilt: 2021, type: 'Apartment', coordinates: { lat: 13.006, lng: 80.257 } },
  // ... more properties
];
 
