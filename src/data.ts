import { Destination, TourPackage, Testimonial, GalleryItem } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Sun-Drenched Shorelines & Portuguese Heritage',
    overview: 'Goa represents the perfect alchemy of relaxed coastal bliss and vibrant cultural depth. Blessed with more than 100 kilometers of stunning coastline, this iconic destination transitions seamlessly from peaceful, secluded private bays in the south to legendary architectural marvels and heritage estates, offering a uniquely relaxed luxury lifestyle designed to rejuvenate.',
    highlights: [
      'Private beach enclave retreats away from the crowds',
      'Exclusive boutique spice planation tour with a chef-hosted lunch',
      'Curated walks of Fontainhas, the historic Latin Quarter of Panaji',
      'Private sunset catamaran charting along the Mandovi River'
    ],
    bestSeason: 'November to February',
    duration: '4 Nights / 5 Days',
    popularActivities: ['Premium Catamaran Chartering', 'Architectural Walking Tours', 'Private Scuba Adventures', 'Sunset Beach Dinners'],
    category: 'Beaches'
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    heroImage: 'https://images.unsplash.com/photo-1588096383098-2335ac1dc556?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Timeless Valleys & Majesty of the Snow-Capped Peaks',
    overview: 'Rightly described as heaven on earth, Kashmir offers a quiet sanctuary of majestic snow-capped peaks, mirrored alpine lakes, and sprawling valleys. From the quiet rhythmic rowing of your private shikara on Dal Lake to the exhilarating altitude of Gulmarg’s pine peaks, Kashmir offers an emotional visual tapestry that stays in your memories forever.',
    highlights: [
      'Luxury stays in meticulously carved cedarwood houseboats',
      'VIP reservation for Gulmarg’s legendary two-stage Gondola lift',
      'Quiet guided tours of the ancient Mughal garden architecture',
      'Helicopter charters over Pahalgam’s cinematic valley trails'
    ],
    bestSeason: 'March to October (Greenery) & Dec to Feb (Snowfall)',
    duration: '6 Nights / 7 Days',
    popularActivities: ['Shikara Boat Cruising', 'Mountain Valley Skiing', 'Saffron Farm Sampling', 'Pony Trekking through Pine Forests'],
    category: 'Snow mountains'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Eco-Luxury Backwaters & Ancient Rejuvenation',
    overview: 'Kerala, known as God’s Own Country, presents an immersive wellness journey. Slow down time in the tranquil labyrinth of emerald backwaters where historical houseboats cruise under arches of swaying coconut palms. Complemented by the mist-shrouded green tea plantations of Munnar and ancient Ayurvedic spas, Kerala offers perfect harmony for mind, body, and soul.',
    highlights: [
      'Fully-staffed custom ultra-luxury backwater houseboats',
      'Private sunrise tea terrace tours in Munnar led by estate selectors',
      'Daily curated, expert-led Ayurvedic diagnostics and therapies',
      'Private performance of traditional Kathakali dramatic arts'
    ],
    bestSeason: 'September to March',
    duration: '5 Nights / 6 Days',
    popularActivities: ['Backwater Houseboat Safaris', 'Tea Plantation Escapes', 'Ayurvedic Healing Coverages', 'Wildlife Watching in Periyar Lake'],
    category: 'Backwaters'
  },
  {
    id: 'bali',
    name: 'Bali',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Spiritual Tropical Sanctuaries & Cliffside Wonders',
    overview: 'Bali is an island of rich spiritual depth, framed by dramatic volcanic topography, emerald rice terraces, and coral-ringed coastlines. Whether immersing yourself in Ubud’s artistic, serene jungles or watching the sunset over majestic Indian Ocean cliffs at Uluwatu, our curated Bali journeys strike a masterful balance between wellness, adventure, and high-end coastal luxury.',
    highlights: [
      'Private infinity-pool villas nestled along the Ubud river valleys',
      'Privileged early access hikes to Mt. Batur with premium volcanic-side breakfast',
      'VIP club passes and dining overlooking Seminyak’s legendary sunsets',
      'Private marine excursions to Nusa Penida to swim with gentle manta rays'
    ],
    bestSeason: 'April to October',
    duration: '6 Nights / 7 Days',
    popularActivities: ['Volcanic Sunrise Trekking', 'Manta Ray Marine Snorkeling', 'Lush Forest swing experiences', 'Balinese Spa Rejuvenation sessions'],
    category: 'Tropical scenery'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    heroImage: 'https://images.unsplash.com/photo-1528181304800-2f1908572274?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Teal Lagoons, Pristine Islands & Regal Traditions',
    overview: 'Thailand surprises at every turn with its unique character, blending the energetic, cultural gilded temples of Bangkok with the calm, crystal-teal waters of the southern islands. Explore isolated limestone caverns in Krabi, dynamic water sports in Phuket, or unmatched oceanside luxury properties in Koh Samui with our carefully crafted premium packages.',
    highlights: [
      'Chartered private speedboats around the majestic Phi Phi archipelago',
      'Behind-the-scenes ethical interactions at handpicked Elephant Sanctuaries',
      'Inspirational dinner cruises past Bangkok’s illuminated historic temples',
      'Wellness retreats positioned on secluded, quiet cliffs of Koh Samui'
    ],
    bestSeason: 'November to April',
    duration: '7 Nights / 8 Days',
    popularActivities: ['Private speedboat island hopping', 'Thai Haute-Cuisine Cooking classes', 'Cave Canoeing & Explorations', 'Temple Architecture walks'],
    category: 'Islands'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    tagline: 'Ultra-Modern Architectural Marvels & Golden Dune Safaris',
    overview: 'A futuristic oasis of record-breaking ambition rising out of the Arabian sands, Dubai matches modern, sky-high architecture with warm-desert heritage. Experience private yacht cruises past spectacular waterfront developments, thrill in the high desert dunes in bespoke luxury vehicles, and unwind at some of the world’s most refined resorts.',
    highlights: [
      'Fast-track VIP lounge reservations on level 148 of Burj Khalifa',
      'Bespoke private desert expeditions in luxury vehicles followed by gourmet dinners',
      'Private afternoon yacht charters departing from the sleek Dubai Marina',
      'Behind-the-scenes museum access and customized personal shopping guides'
    ],
    bestSeason: 'November to March',
    duration: '5 Nights / 6 Days',
    popularActivities: ['Premium Desert Safaris', 'Luxury Yacht Sailing', 'High-end Dining', 'Helicopter City Skyline Flights'],
    category: 'Skyline'
  }
];

export const PACKAGES: TourPackage[] = [
  {
    id: 'pkg-goa-beach',
    destinationId: 'goa',
    destinationName: 'Goa',
    title: 'The Ultimate Goan Coastline Escape',
    duration: '4 Nights / 5 Days',
    startingPrice: '₹28,500',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
    inclusions: ['Luxury Boutique Resort Stay', 'Daily Gourmet Breakfast', 'Airport Luxury Transfers', 'Private Mandovi Sunset Yacht Cruise', 'Fontainhas Architectural Walking Tour'],
    highlights: ['Stay in boutique cottages with private beach access', 'Candlelit beach dining with fresh premium sea fare', 'Sip-to-sip tour of artisanal local distilleries'],
    isPopular: true
  },
  {
    id: 'pkg-kashmir-royal',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    title: 'Kashmir Meadows & Whispering Valleys',
    duration: '6 Nights / 7 Days',
    startingPrice: '₹48,000',
    image: 'https://images.unsplash.com/photo-1595815771614-124436277904?auto=format&fit=crop&q=80&w=600',
    inclusions: ['Premium Houseboat stays', 'Luxury hotels in Gulmarg & Pahalgam', 'All private luxury transfers', 'Dal Lake Shikara Tour', 'Full day Gondola Tickets', 'Private Driver-Guide'],
    highlights: ['Awaken on Dal lake inside an elegant heritage houseboat', 'Strap on skis in winter on Gulmarg’s premium slopes', 'Indulge in private saffron farm tasting sessions'],
    isPopular: true
  },
  {
    id: 'pkg-kerala-soul',
    destinationId: 'kerala',
    destinationName: 'Kerala',
    title: 'Kerala Backwater Serenity & Wellness',
    duration: '5 Nights / 6 Days',
    startingPrice: '₹39,500',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=600',
    inclusions: ['Private Alleppey Houseboat (All meals)', 'Boutique stay in Munnar Hills', 'Ayurvedic Treatment Pack', 'Wildlife Sanctuary cruise', 'Premium Private SUV Transfers'],
    highlights: ['Watch rural palm-fringed channels float by from your deck', 'Hike fragrant Munnar green hills at first light', 'Enjoy a traditional Kathakali dance interpretation'],
    isPopular: false
  },
  {
    id: 'pkg-bali-luxury',
    destinationId: 'bali',
    destinationName: 'Bali',
    title: 'Bali Tropical Luxury & Volcano Expedition',
    duration: '6 Nights / 7 Days',
    startingPrice: '₹68,000',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600',
    inclusions: ['Private Ubud Pool Villa', 'Seminyak Beach Resort Stay', 'Batur Sunrise Jeep Trek', 'Manta Ray Boat Snorkeling', 'All Transfers & VIP passes'],
    highlights: ['Dip into your private pool overlooking tropical river cliffs', 'Explore historical temples towering directly on ocean rock cliffs', 'Indulge in deep tissue Balinese wellness treatments'],
    isPopular: true
  },
  {
    id: 'pkg-thailand-islands',
    destinationId: 'thailand',
    destinationName: 'Thailand',
    title: 'Teal Thailand & Island Paradise Journey',
    duration: '7 Nights / 8 Days',
    startingPrice: '₹62,000',
    image: 'https://images.unsplash.com/photo-1552081373-ee2cd1b9bb7c?auto=format&fit=crop&q=80&w=600',
    inclusions: ['Phuket beachfront luxury resort', 'Krabi private villa stay', 'Speedboat tours of Phi Phi Islands', 'Private Airport Transfers', 'Daily Breakfast buffet'],
    highlights: ['Swim in sparkling waters tucked inside majestic limestone walls', 'Paddle modern kayaks into secret marine caves', 'Savor world-famous cuisine in private dinners'],
    isPopular: false
  },
  {
    id: 'pkg-dubai-opulence',
    destinationId: 'dubai',
    destinationName: 'Dubai',
    title: 'Dubai Skyline Splendour & Desert Safaris',
    duration: '5 Nights / 6 Days',
    startingPrice: '₹84,500',
    image: 'https://images.unsplash.com/photo-1489493887462-402b72644d5c?auto=format&fit=crop&q=80&w=600',
    inclusions: ['5-Star Luxury Downtown Hotel Stay', 'VIP Access to Burj Khalifa 148', 'Premium Desert Camp Safari (Jeep transfer)', 'Dubai Marina Private Yacht Cruise', 'Airport Limousine Transfer'],
    highlights: ['Admire panoramic views from the world’s loftiest observation lounge', 'Race across soaring golden sand dunes at sun-down in premium ride', 'Dine on fine authentic cuisines under starlight in the deep desert'],
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aniket Deshmukh',
    location: 'Nagpur, Maharashtra',
    text: 'Our family trip to Kashmir arranged by Travellers Travels Nagpur was absolutely flawless. From the VIP Gondola access to the mesmerizing luxury houseboat stay on Dal Lake, every single detail was carefully managed. They understand luxury and deliver absolute peace of mind during transit.',
    rating: 5,
    tripTaken: 'Kashmir Meadows & Whispering Valleys',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't-2',
    name: 'Dr. Shruti Sharma',
    location: 'Ramdaspeth, Nagpur',
    text: 'For our anniversary honeymoons, we wanted an authentic yet highly luxurious touch in Bali. Travellers Travels Nagpur surpassed our high standards. The private pool valley villa in Ubud, swimming with the majestic manta rays, and the private candlelit dining overlooking volcanic slopes were simply unforgettable experiences.',
    rating: 5,
    tripTaken: 'Bali Tropical Luxury & Volcano Expedition',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't-3',
    name: 'Rajesh & Meera Nair',
    location: 'Civil Lines, Nagpur',
    text: 'We booked the Kerala houseboat package. The entire vacation was slow, therapeutic, and deeply enriching. To float along Alleppey backwaters in a pristine catamaran houseboat with a dedicated private chef was actual heaven. Highly recommend booking with their bespoke team!',
    rating: 5,
    tripTaken: 'Kerala Backwater Serenity & Wellness',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g-goa-1',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    title: 'Pristine South Goa Bays',
    location: 'Palolem Beach, Goa',
    category: 'Goa'
  },
  {
    id: 'g-goa-2',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200',
    title: 'Golden Sunset Tide',
    location: 'Morjim, Goa',
    category: 'Goa'
  },
  {
    id: 'g-kashmir-1',
    imageUrl: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=1200',
    title: 'Majestic Peaks of Gulmarg',
    location: 'Gulmarg, Kashmir',
    category: 'Kashmir'
  },
  {
    id: 'g-kashmir-2',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-124436277904?auto=format&fit=crop&q=80&w=1200',
    title: 'Serene Dal Lake Shikhara',
    location: 'Srinagar, Kashmir',
    category: 'Kashmir'
  },
  {
    id: 'g-kerala-1',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
    title: 'Eco-Luxury Alleppey Houseboat',
    location: 'Alleppey, Kerala',
    category: 'Kerala'
  },
  {
    id: 'g-kerala-2',
    imageUrl: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=1200',
    title: 'Emerald Green Tea Terraces',
    location: 'Munnar, Kerala',
    category: 'Kerala'
  },
  {
    id: 'g-dubai-1',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    title: 'Glowing Downtown Skyline',
    location: 'Downtown, Dubai',
    category: 'Dubai'
  },
  {
    id: 'g-dubai-2',
    imageUrl: 'https://images.unsplash.com/photo-1489493887462-402b72644d5c?auto=format&fit=crop&q=80&w=1200',
    title: 'Golden Safaris Dunes',
    location: 'Arabian Desert, Dubai',
    category: 'Dubai'
  },
  {
    id: 'g-thailand-1',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-2f1908572274?auto=format&fit=crop&q=80&w=1200',
    title: 'Limestone Cliffs & Longtail Boats',
    location: 'Phi Phi Islands, Thailand',
    category: 'Thailand'
  },
  {
    id: 'g-thailand-2',
    imageUrl: 'https://images.unsplash.com/photo-1552081373-ee2cd1b9bb7c?auto=format&fit=crop&q=80&w=1200',
    title: 'Crystalline Secret Lagoons',
    location: 'Maya Bay, Thailand',
    category: 'Thailand'
  },
  {
    id: 'g-bali-1',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    title: 'Verdant Ubud Valleys',
    location: 'Ubud, Bali',
    category: 'Bali'
  },
  {
    id: 'g-bali-2',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1200',
    title: 'Mystical Lake Temple',
    location: 'Ulun Danu Bratan, Bali',
    category: 'Bali'
  }
];
