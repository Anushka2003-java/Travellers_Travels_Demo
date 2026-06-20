export interface Destination {
  id: string;
  name: string;
  heroImage: string;
  tagline: string;
  overview: string;
  highlights: string[];
  bestSeason: string;
  duration: string;
  popularActivities: string[];
  category: string;
}

export interface TourPackage {
  id: string;
  destinationId: string;
  destinationName: string;
  title: string;
  duration: string;
  startingPrice: string;
  image: string;
  inclusions: string[];
  highlights: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  tripTaken: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  category: 'Goa' | 'Kashmir' | 'Kerala' | 'Dubai' | 'Thailand' | 'Bali';
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  departDate: string;
  durationDays: number;
  travelersCount: number;
  specialRequests: string;
}
