// Karnataka Tourism Comprehensive Data Source
window.KARNATAKA_DATA = {
  districts: [
    "All Districts",
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayanagara",
    "Vijayapura",
    "Yadgir"
  ],

  categories: [
    { id: "all", name: "All Experiences", icon: "Compass" },
    { id: "historical", name: "Historical Places", icon: "Landmark" },
    { id: "waterfalls", name: "Waterfalls", icon: "Droplets" },
    { id: "hillstations", name: "Hill Stations", icon: "Mountain" },
    { id: "beaches", name: "Beaches & Coast", icon: "Sun" },
    { id: "temples", name: "Sacred Temples", icon: "Flame" },
    { id: "nature", name: "Nature & Wildlife", icon: "Trees" }
  ],

  destinations: [
    {
      id: "mysore-palace",
      name: "Mysore Palace",
      district: "Mysuru",
      category: "historical",
      tagline: "The Crown Jewel of the Wodeyars",
      shortDesc: "World-renowned Indo-Saracenic royal palace glowing with over 100,000 golden bulbs during celebrations.",
      longDesc: "The Mysore Palace, also known as Amba Vilas Palace, was the official residence of the Wadiyar dynasty. Designed by British architect Henry Irwin, its ornate interiors feature stained-glass ceilings, carved rosewood doors, ivory inlay work, and the opulent Golden Throne. On Sundays and during the world-famous Mysuru Dasara, the palace exterior is illuminated by nearly 100,000 light bulbs in a mesmerizing spectacle.",
      bestTime: "October to March",
      approxBudget: "₹2,500 – ₹4,000 / day",
      image: "https://images.unsplash.com/photo-1600100397608-f010f444f470?auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviewsCount: "14.2k",
      highlights: ["Illumination on Sunday evenings", "Kalyana Mantapa (Marriage Pavilion)", "Durbar Hall & Golden Throne", "Dasara Festival Grandeur"],
      timings: "10:00 AM – 5:30 PM (Daily)",
      entryFee: "₹100 (Adults), ₹50 (Children), Foreigners ₹300",
      howToReach: "Mysuru Junction Railway Station (2 km); Kempegowda Airport Bengaluru (170 km); regular high-speed Vande Bharat trains."
    },
    {
      id: "hampi",
      name: "Hampi",
      district: "Vijayanagara",
      category: "historical",
      tagline: "The Forgotten UNESCO Golden Empire",
      shortDesc: "Vast open-air museum of giant boulders, majestic ruins, and the iconic stone chariot of the Vijayanagara Empire.",
      longDesc: "Set along the banks of the Tungabhadra River, Hampi was the prosperous capital of the Vijayanagara Empire in the 14th to 16th centuries. Spread across 4,100 hectares of fantastical boulder-strewn landscapes, it showcases over 1,600 surviving monuments including the Virupaksha Temple, the Stone Chariot in the Vittala Temple, Lotus Mahal, and the royal Elephant Stables.",
      bestTime: "November to February",
      approxBudget: "₹2,000 – ₹3,500 / day",
      image: "https://images.unsplash.com/photo-1600100397937-67c87c093a74?auto=format&fit=crop&w=1000&q=80",
      rating: 4.95,
      reviewsCount: "19.8k",
      highlights: ["Iconic Stone Chariot (Vittala Temple)", "Musical Pillars & Virupaksha Shrine", "Hemakuta & Matanga Hill Sunsets", "Coracle boat rides on Tungabhadra"],
      timings: "6:00 AM – 6:00 PM",
      entryFee: "₹40 (Indians), ₹600 (Foreigners) for Vittala & Zenana enclosure",
      howToReach: "Nearest railway station is Hosapete (13 km); Jindal Vijayanagar Airport (35 km) or Hubballi Airport (145 km)."
    },
    {
      id: "coorg",
      name: "Coorg (Kodagu)",
      district: "Kodagu",
      category: "hillstations",
      tagline: "The Scotland of India",
      shortDesc: "Misty highlands covered in aromatic coffee plantations, cascading waterfalls, and rich Kodava martial culture.",
      longDesc: "Perched along the Western Ghats, Coorg is celebrated for its lush rolling hills, sprawling coffee and cardamom estates, spice gardens, and tranquil homestays. Visitors can trek through the Brahmagiri hills, taste authentic Kodava Pandi curry, visit the Tibetan Golden Temple at Bylakuppe, and listen to the thunderous roar of Abbey and Iruppu falls.",
      bestTime: "September to March",
      approxBudget: "₹3,500 – ₹6,000 / day",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      rating: 4.85,
      reviewsCount: "11.6k",
      highlights: ["Coffee plantation walking tours", "Namdroling Golden Temple Bylakuppe", "Raja's Seat sunset point", "Dubare Elephant Camp"],
      timings: "Open year-round; plantation tours 9 AM – 5 PM",
      entryFee: "Free for hills; specific sites ₹20 – ₹100",
      howToReach: "Mangaluru Airport (140 km) or Kannur Airport (90 km); well connected by scenic mountain roads from Mysuru (120 km)."
    },
    {
      id: "gokarna",
      name: "Gokarna",
      district: "Uttara Kannada",
      category: "beaches",
      tagline: "Where Serene Coastline Meets Sacred Shrines",
      shortDesc: "Idyllic coastal haven renowned for its holy Mahabaleshwar temple and unspoiled crescent-shaped Om & Kudle beaches.",
      longDesc: "Gokarna provides a refreshing blend of spiritual devotion and bohemian coastal relaxation. Framed by rugged Sahyadri cliffs diving into the Arabian Sea, its beaches—Om Beach (naturally shaped like the sacred symbol ॐ), Kudle Beach, Half Moon Beach, and Paradise Beach—are linked by picturesque cliffside hiking trails.",
      bestTime: "October to March",
      approxBudget: "₹2,000 – ₹4,000 / day",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviewsCount: "9.4k",
      highlights: ["Om Beach cliff trek", "Atmalinga at Mahabaleshwar Temple", "Bioluminescence night sightings", "Beach shacks & fresh seafood"],
      timings: "Temple: 6:00 AM – 12:30 PM & 5:00 PM – 8:00 PM; Beaches open 24/7",
      entryFee: "Free entry",
      howToReach: "Gokarna Road Railway Station (8 km); Goa Dabolim/Mopa Airport (140 km); well connected by NH66."
    },
    {
      id: "chikmagalur",
      name: "Chikmagalur",
      district: "Chikkamagaluru",
      category: "hillstations",
      tagline: "The Coffee Cradle of India",
      shortDesc: "Birthplace of Indian coffee boasting emerald hills, Mullayanagiri peak, and soothing mountain cloudscapes.",
      longDesc: "Tucked inside the Baba Budangiri hills, Chikmagalur is where Baba Budan first planted 7 coffee beans smuggled from Yemen in 1670. Today, it is an emerald paradise famous for Mullayanagiri (Karnataka's highest peak at 1,930 m), cascading waterfalls, and cozy estate homestays perfumed with the scent of blossoming Arabica and Robusta.",
      bestTime: "September to May",
      approxBudget: "₹3,000 – ₹5,500 / day",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      rating: 4.88,
      reviewsCount: "13.1k",
      highlights: ["Mullayanagiri Peak sunrise trek", "Baba Budangiri shrines & caves", "Coffee tasting & processing tours", "Hebbe & Jhari Waterfalls"],
      timings: "Hill viewpoints open sunrise to sunset",
      entryFee: "Free access; jeep rides to peaks ₹1,500 – ₹2,500",
      howToReach: "Mangaluru International Airport (150 km); Kadur Railway Station (40 km); 4.5 hours drive from Bengaluru."
    },
    {
      id: "badami",
      name: "Badami",
      district: "Bagalkot",
      category: "historical",
      tagline: "The Red Sandstone Capital of the Early Chalukyas",
      shortDesc: "Astonishing 6th-century rock-cut cave temples chiseled into rust-red cliffs surrounding the holy Agastya Lake.",
      longDesc: "Badami (formerly Vatapi) was the magnificent regal capital of the Badami Chalukyas from 540 to 757 CE. The four monolithic rock-cut cave temples carved into dramatic red sandstone cliffs feature intricate carvings of Nataraja with 81 dancing poses, Vishnu avatars, and Jain tirthankaras, all reflecting peacefully in Agastya Lake beside the Bhutanatha Temples.",
      bestTime: "October to March",
      approxBudget: "₹1,800 – ₹3,200 / day",
      image: "https://images.unsplash.com/photo-1626588137109-5c12079b3d9d?auto=format&fit=crop&w=1000&q=80",
      rating: 4.82,
      reviewsCount: "7.9k",
      highlights: ["Four rock-cut sandstone cave temples", "Bhutanatha Temple on Agastya Lake", "Badami Fort & Archaeological Museum", "Climbing the sandstone ravines"],
      timings: "9:00 AM – 5:30 PM",
      entryFee: "₹25 (Indians), ₹300 (Foreigners)",
      howToReach: "Badami Railway Station (5 km); Hubballi Airport (105 km); Belagavi Airport (150 km)."
    },
    {
      id: "udupi",
      name: "Udupi",
      district: "Udupi",
      category: "temples",
      tagline: "Spiritual Sanctum of Lord Krishna & Culinary Heritage",
      shortDesc: "Sacred temple town renowned for its Kanakana Kindi window, pristine Malpe beach, and authentic Satvik cuisine.",
      longDesc: "Founded by the 13th-century philosopher-saint Madhvacharya, Udupi revolves around the sacred Sri Krishna Matha where the Lord is worshipped through an ornate 9-holed silver window (Kanakana Kindi). Beyond divinity, Udupi has gifted the world iconic vegetarian cuisine and offers coastal treasures like Malpe Beach, St. Mary's volcanic columnar basalt islands, and Kaup lighthouse.",
      bestTime: "October to April",
      approxBudget: "₹2,200 – ₹3,800 / day",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      rating: 4.78,
      reviewsCount: "10.4k",
      highlights: ["Sri Krishna Matha & Kanakana Kindi", "St. Mary's Island basalt formations", "Kaup Lighthouse panoramic views", "Authentic Udupi vegetarian thali"],
      timings: "Temple: 5:00 AM – 9:30 PM (Daily)",
      entryFee: "Temple entry free; St. Mary's Ferry ₹300",
      howToReach: "Udupi Railway Station on Konkan Railway; Mangaluru Airport (60 km)."
    },
    {
      id: "jog-falls",
      name: "Jog Falls",
      district: "Shivamogga",
      category: "waterfalls",
      tagline: "India's Majestic Unsegmented Plunge",
      shortDesc: "The Sharavathi River plunges 830 feet down in four thunderous cascades: Raja, Roarer, Rocket, and Rani.",
      longDesc: "Dropping an astonishing 253 meters (830 feet), Jog Falls is the second-highest unsegmented plunge waterfall in India. Fed by the Sharavathi River, the cascade splits into four distinct personalities: Raja (grand, unbroken fall), Roarer (violent torrent hitting rocks), Rocket (high-speed jet), and Rani (delicate, dancing veil). A staircase of 1,400 steps leads adventurous visitors down to the misty foot of the abyss.",
      bestTime: "July to November (Peak Monsoon)",
      approxBudget: "₹1,800 – ₹3,000 / day",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      rating: 4.86,
      reviewsCount: "15.3k",
      highlights: ["View from British Bungalow & KSTDC viewpoint", "Laser light show in the evening", "Trek down the 1,400 steps to the base", "Rainbows shimmering in water spray"],
      timings: "Viewpoints open 6:00 AM – 8:00 PM",
      entryFee: "₹15 per person, Parking ₹50",
      howToReach: "Talguppa Railway Station (14 km); Shivamogga Airport (100 km) or Hubballi Airport (160 km)."
    },
    {
      id: "murudeshwar",
      name: "Murudeshwar",
      district: "Uttara Kannada",
      category: "temples",
      tagline: "The World's Second-Tallest Shiva Statue on the Sea",
      shortDesc: "Colossal 123-foot Shiva statue and 20-storey Raja Gopura towering on a peninsula bounded by the Arabian Sea.",
      longDesc: "Surrounded on three sides by the shimmering Arabian Sea, Murudeshwar is an awe-inspiring pilgrimage and coastal destination. The temple complex features a towering 123-foot statue of Lord Shiva, a 249-foot high Raja Gopura with a high-speed elevator taking visitors to the 18th floor for breathtaking 360-degree ocean views, and nearby Netrani Island, famous for scuba diving.",
      bestTime: "October to May",
      approxBudget: "₹2,500 – ₹4,500 / day",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      rating: 4.84,
      reviewsCount: "12.8k",
      highlights: ["123-foot Shiva statue overlooking ocean", "Elevator to 18th floor of Raja Gopura", "Scuba diving & snorkeling at Netrani Island", "Sunset walks along Murudeshwar Beach"],
      timings: "Temple: 3:00 AM – 1:00 PM & 3:00 PM – 8:00 PM",
      entryFee: "Temple free; Gopura elevator ₹10",
      howToReach: "Murudeshwar Railway Station (2 km); Mangaluru Airport (160 km) or Goa Airport (200 km)."
    },
    {
      id: "belur",
      name: "Belur (Chennakeshava Temple)",
      district: "Hassan",
      category: "historical",
      tagline: "The UNESCO Star of Hoysala Sculptural Brilliance",
      shortDesc: "12th-century soapstone masterpiece with impossibly intricate bracket figures (Madanikas) and celestial carvings.",
      longDesc: "Belur served as the first capital of the Hoysala dynasty. Commissioned by King Vishnuvardhana in 1117 CE to commemorate his victory over the Cholas, the Chennakeshava Temple took 103 years and three generations of master craftsmen to complete. Built from soft chloritic schist (soapstone), its walls depict over 10,000 intricately carved figures, including the celebrated Madanikas (bracket damsels).",
      bestTime: "October to March",
      approxBudget: "₹2,000 – ₹3,500 / day",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      rating: 4.91,
      reviewsCount: "8.7k",
      highlights: ["42 celebrated Madanika bracket figures", "Darpana Sundari (Lady with the Mirror)", "Gravity pillar (Deepa Stambha)", "Star-shaped platform architecture"],
      timings: "7:30 AM – 6:30 PM",
      entryFee: "Free entry; authorized guides recommended",
      howToReach: "Hassan Junction (38 km); 4 hours drive from Bengaluru (220 km) via NH75."
    },
    {
      id: "halebidu",
      name: "Halebidu (Hoysaleswara Temple)",
      district: "Hassan",
      category: "historical",
      tagline: "The Zenith of Hoysala Relic Carvings",
      shortDesc: "Twin-temple dedicated to Shiva, adorned with endless friezes of elephants, lions, swans, and epic battle scenes.",
      longDesc: "Halebidu, earlier known as Dorasamudra, was the regal seat of the Hoysala Empire. The 12th-century Hoysaleswara Temple, designated a UNESCO World Heritage Site in 2023, is celebrated for its staggering outer friezes carved with bands of 1,248 charging elephants, galloping horses, makaras, and intricate scenes from the Mahabharata and Ramayana, where no two sculptures are identical.",
      bestTime: "October to March",
      approxBudget: "₹2,000 – ₹3,500 / day",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
      rating: 4.92,
      reviewsCount: "8.1k",
      highlights: ["UNESCO World Heritage listed (2023)", "Endless narrative friezes with zero repeats", "Twin Nandi pavilions chiseled from single blocks", "Dwarapalakas (door guardians) with lace-like jewels"],
      timings: "6:30 AM – 6:30 PM",
      entryFee: "Free entry; ASI museum ₹5",
      howToReach: "16 km from Belur; Hassan Railway Station (31 km); Bengaluru Airport (225 km)."
    },
    {
      id: "bengaluru-palace",
      name: "Bengaluru Palace",
      district: "Bengaluru Urban",
      category: "historical",
      tagline: "Tudor Magnificence in the Silicon Heart",
      shortDesc: "Charming 19th-century royal palace modeled after England's Windsor Castle, featuring fortified towers and royal regalia.",
      longDesc: "Built in 1878 by Chamarajendra Wadiyar X, Bengaluru Palace stands as a rare specimen of Tudor-style architecture in South India. Featuring crenellated ramparts, floral motifs, stained glass, wood carvings, and lush gardens, it houses rare Victorian paintings by Raja Ravi Varma, hunting trophies, and royal memorabilia right in the heart of Bengaluru.",
      bestTime: "Year-round (Best Oct–Feb)",
      approxBudget: "₹2,500 – ₹5,000 / day",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
      rating: 4.65,
      reviewsCount: "16.5k",
      highlights: ["Tudor-style wooden architecture & battlements", "Raja Ravi Varma paintings collection", "Audio-guided heritage walk through royal rooms", "Sprawling Palace Grounds for premier events"],
      timings: "10:00 AM – 5:30 PM",
      entryFee: "₹240 (Indians), ₹460 (Foreigners)",
      howToReach: "Krantivira Sangolli Rayanna (Bengaluru City) Railway Station (5 km); Kempegowda Airport (30 km)."
    },
    {
      id: "bandipur-safari",
      name: "Bandipur National Park",
      district: "Chamarajanagar",
      category: "nature",
      tagline: "Prime Tiger & Elephant Habitat in the Nilgiri Biosphere",
      shortDesc: "Vast protected deciduous forest teaming with Bengal tigers, Indian leopards, wild elephants, and spotted deer.",
      longDesc: "Part of the UNESCO Nilgiri Biosphere Reserve and once the hunting ground of the Mysore Maharaja, Bandipur spans 874 square kilometers of pristine dry deciduous forest. It holds one of the highest densities of wild tigers and Asiatic elephants in Asia, offering thrilling open-top safari drives through golden teak canopies.",
      bestTime: "October to May",
      approxBudget: "₹4,000 – ₹8,000 / day",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      rating: 4.81,
      reviewsCount: "9.2k",
      highlights: ["Tiger & Leopard jungle safaris", "Gaur (Indian Bison) & wild elephants herds", "Jungle Lodges & Resorts eco-stays", "Himavad Gopalaswamy Betta hill temple"],
      timings: "Safaris: 6:15 AM – 9:00 AM & 3:15 PM – 6:00 PM",
      entryFee: "Bus Safari ₹350; Gypsy Safari ₹3,500+",
      howToReach: "Mysuru Railway Station (80 km); Coimbatore Airport (125 km) or Bengaluru Airport (250 km)."
    },
    {
      id: "dandeli",
      name: "Dandeli Wildlife & Adventure",
      district: "Uttara Kannada",
      category: "nature",
      tagline: "The White-Water Adventure Hub of South India",
      shortDesc: "Dense riverine jungle renowned for roaring Kali River rafting, Hornbill birdwatching, and black panthers.",
      longDesc: "Nestled along the Kali River in the Western Ghats, Dandeli is Karnataka's undisputed capital for adventure tourism. From adrenaline-pumping Grade 3 white-water rafting, kayaking, and natural jacuzzi baths to jungle trekking and spotting the elusive Black Panther in Anshi National Park, Dandeli is an eco-explorer's wonderland.",
      bestTime: "October to May",
      approxBudget: "₹2,500 – ₹5,000 / day",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
      rating: 4.79,
      reviewsCount: "8.3k",
      highlights: ["Kali River white-water rafting", "Syntheri Rock volcanic formation", "Hornbill bird sanctuary", "Kayaking & ziplining across canopy"],
      timings: "Rafting batches: 8:30 AM & 1:30 PM",
      entryFee: "Rafting ₹1,200 – ₹1,800 per person",
      howToReach: "Alnavar (32 km) or Londa (48 km) railway stations; Hubballi Airport (75 km)."
    }
  ],

  historicalPlaces: [
    {
      id: "hist-hampi",
      name: "Hampi Monuments",
      location: "Vijayanagara District",
      era: "14th – 16th Century CE",
      dynasty: "Vijayanagara Empire (Harihara, Bukka & Krishnadevaraya)",
      style: "Vijayanagara Imperial Architecture",
      image: "https://images.unsplash.com/photo-1600100397937-67c87c093a74?auto=format&fit=crop&w=1000&q=80",
      overview: "Declared a UNESCO World Heritage site, Hampi was once the second largest city in medieval times after Beijing, trading rubies and diamonds on its grand bazaar streets.",
      architecturalFeats: "Iconic stone-wheeled Garuda Chariot, musical granite pillars producing notes of Indian instruments, multi-tiered Gopuras, and the subterranean Shiva temple.",
      interestingFacts: [
        "Portuguese travellers described Hampi's bazaars selling diamonds, pearls, and emeralds by the kilogram.",
        "The Vittala Temple's 56 musical pillars emit distinct musical frequencies when gently tapped.",
        "Monolithic statues include the 6.7m high monolithic Lakshmi Narasimha and the gigantic Kadalekalu Ganesha."
      ]
    },
    {
      id: "hist-mysore",
      name: "Mysore Palace (Amba Vilas)",
      location: "Mysuru District",
      era: "1897 – 1912 CE",
      dynasty: "Wadiyar Dynasty",
      style: "Indo-Saracenic (Blend of Hindu, Mughal, Rajput, and Gothic)",
      image: "https://images.unsplash.com/photo-1600100397608-f010f444f470?auto=format&fit=crop&w=1000&q=80",
      overview: "One of the most visited monuments in India, this three-storied stone palace with marble domes and a 145-foot five-story tower stands as a testament to princely Karnataka.",
      architecturalFeats: "Octagonal Kalyana Mantapa with Belgian stained-glass peacock dome, teak ceilings, carved solid brass gates, and the magnificent 750-kg solid gold Howdah.",
      interestingFacts: [
        "The palace is illuminated by exactly 97,000 to 100,000 incandescent bulbs on special occasions and Sundays.",
        "It houses the legendary 200 kg Golden Throne (Chinnada Simhasana) assembled only during Dasara.",
        "Over 6 million visitors tour the palace halls annually, rivaling the Taj Mahal in visitor footfall."
      ]
    },
    {
      id: "hist-gol-gumbaz",
      name: "Gol Gumbaz",
      location: "Vijayapura (Bijapur) District",
      era: "1626 – 1656 CE",
      dynasty: "Adil Shahi Dynasty (Mohammed Adil Shah)",
      style: "Deccan Sultanate / Indo-Islamic",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      overview: "The majestic mausoleum of Mohammed Adil Shah boasts the second largest dome in the world unsupported by pillars, surpassed only by St. Peter's Basilica in Rome.",
      architecturalFeats: "A colossal semi-circular dome with an external diameter of 44 meters, supported on eight intersecting arches, featuring eight-storey octagonal minarets at the four corners.",
      interestingFacts: [
        "The Whispering Gallery echoes even the faintest whisper up to 11 times across a span of 38 meters.",
        "The dome was engineered without any central pillars or modern scaffolding using ingenious interlocking stone arches.",
        "A piece of meteorite known as 'Bijli Patthar' is hung above the main entrance as a protective talisman against lightning."
      ]
    },
    {
      id: "hist-badami",
      name: "Badami Cave Temples",
      location: "Bagalkot District",
      era: "6th – 8th Century CE",
      dynasty: "Chalukyas of Badami (Pulakeshin I & Kirtivarman I)",
      style: "Chalukyan Rock-Cut Monolithic Architecture",
      image: "https://images.unsplash.com/photo-1626588137109-5c12079b3d9d?auto=format&fit=crop&w=1000&q=80",
      overview: "A cliffside complex of four ornate rock-cut shrines carved into golden-red sandstone cliffs overlooking the sacred waters of the Agastya Lake.",
      architecturalFeats: "Intricately carved columned verandahs (mukha-mandapa), sanctums hollowed out of living rock, and magnificent bas-reliefs of Nataraja, Varaha, and Trivikrama.",
      interestingFacts: [
        "Cave 1 features the 18-armed dancing Shiva (Nataraja) demonstrating 81 unique Bharatnatyam mudras.",
        "Cave 3 is the largest and most intricately sculpted, commissioned in 578 CE by King Mangalesha.",
        "The caves transition chronologically between Vedic deities, Vishnu manifestations, and Jain Thirthankaras."
      ]
    },
    {
      id: "hist-aihole",
      name: "Aihole Temple Complex",
      location: "Bagalkot District",
      era: "5th – 8th Century CE",
      dynasty: "Early Chalukyas",
      style: "Cradle of Indian Temple Architecture (Experimental Nagara & Dravidian)",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      overview: "Known as the premier laboratory of Indian rock architecture, Aihole contains over 120 stone temples where ancient master sculptors experimented with shrine designs.",
      architecturalFeats: "The apsidal Durga Temple with its Buddhist chaitya-inspired horseshoe plan, Lad Khan Temple with sloping stone-slab roofs, and Ravana Phadi cave shrine.",
      interestingFacts: [
        "It is historically revered as the architectural workshop where both North Indian (Nagara) and South Indian (Dravidian) shikhara styles were born.",
        "The famous Aihole Inscription of 634 CE by court poet Ravikirti celebrates Pulakeshin II's military victory over Emperor Harsha.",
        "Master guilds known as the 'Ayyavole 500' governed maritime trade across Southeast Asia from here."
      ]
    },
    {
      id: "hist-pattadakal",
      name: "Pattadakal Monuments",
      location: "Bagalkot District",
      era: "7th – 8th Century CE",
      dynasty: "Chalukya Dynasty (Vikramaditya II)",
      style: "UNESCO World Heritage Fusion of Dravidian & Nagara Architecture",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      overview: "The holy ceremonial coronation site of Chalukyan kings along the sacred Malaprabha River, Pattadakal represents the high-water mark of eclectic structural temple design.",
      architecturalFeats: "The grand Virupaksha Temple, built by Queen Lokamahadevi to honor her husband's victory over the Pallavas of Kanchi, served as the blueprint for the Kailasa temple at Ellora.",
      interestingFacts: [
        "It was designated a UNESCO World Heritage site in 1987 for its harmonious synthesis of Northern and Southern temple architecture.",
        "Ten major temples stand side-by-side, showcasing nine Hindu temples and one monumental Jain sanctuary.",
        "Pattadakal literally means 'Stone of Coronation', where imperial heirs received their holy consecration."
      ]
    },
    {
      id: "hist-belur",
      name: "Belur Chennakeshava Temple",
      location: "Hassan District",
      era: "1117 CE",
      dynasty: "Hoysala Dynasty (King Vishnuvardhana)",
      style: "Hoysala Soapstone Marvel",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80",
      overview: "Built on the banks of the Yagachi River, this temple is the pinnacle of Hoysala artistic virtuosity, chiseled from fine-grained chloritic soapstone.",
      architecturalFeats: "The star-shaped stellate plinth, pierced stone jali screens that temper sunlight, lathe-turned polished stone pillars, and 42 celestial Madanika brackets.",
      interestingFacts: [
        "The bracket figures (Shilabhalikas) are carved in such relief that one can pass a silk thread behind their jewelry and curls.",
        "The temple took 103 years of continuous artistic labor across three generations of master sculptors like Dasoja and Chavana.",
        "The Gravity Pillar (Deepa Stambha) stands 42 feet high on its own weight on a stone pedestal with a visible gap underneath."
      ]
    },
    {
      id: "hist-halebidu",
      name: "Halebidu Hoysaleswara Temple",
      location: "Hassan District",
      era: "1121 – 1160 CE",
      dynasty: "Hoysala Dynasty (King Vishnuvardhana & Narasimha I)",
      style: "Dravidian Hoysala Relic Art",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
      overview: "The jewel of Hoysala capitals, this twin-shrine complex dedicated to Hoysaleswara and Shantaleswara is hailed for having the most elaborate friezes in all of Indian temple art.",
      architecturalFeats: "Dvikuta (two-temple) plan on a jagged star plinth, two colossal monolith Nandis, and eight horizontal bands depicting 1,248 distinct elephants, lions, and scrollwork.",
      interestingFacts: [
        "Historian James Fergusson remarked that the temple exterior is 'probably unequaled by anything in the world for artistic richness'.",
        "No two elephants among the 1,248 carved in the bottom frieze share the same pose or ornamentation.",
        "It was inscribed as a UNESCO World Heritage Site in September 2023 under the Sacred Ensembles of the Hoysalas."
      ]
    },
    {
      id: "hist-srirangapatna",
      name: "Srirangapatna Fort & Island",
      location: "Mandya District",
      era: "9th – 18th Century CE",
      dynasty: "Ganga, Vijayanagara & Kingdom of Mysore (Hyder Ali & Tipu Sultan)",
      style: "Fortified Island / Indo-Islamic & Hoysala",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
      overview: "Encircled by the twin branches of the sacred Kaveri River, this historic river island was the fortified de facto capital of the 'Tiger of Mysore', Tipu Sultan.",
      architecturalFeats: "Dariya Daulat Bagh (Summer Palace) made entirely of teakwood with fresco-covered walls, the formidable stone fort ramparts, and the Ranganathaswamy temple.",
      interestingFacts: [
        "Tipu Sultan launched the world's first iron-cased military rocket artillery against British forces from this island fortress.",
        "The Dariya Daulat Bagh contains no stone pillars; it is constructed purely of teakwood adorned with gold-leaf frescoes.",
        "The island houses the Gumbaz, the marble-and-hornblende mausoleum where Tipu Sultan, Hyder Ali, and Fakhr-un-Nisa rest."
      ]
    }
  ],

  waterfalls: [
    {
      id: "wf-jog",
      name: "Jog Falls (Gerosoppa)",
      river: "Sharavathi River",
      location: "Sagara, Shivamogga District",
      height: "253 meters (830 feet)",
      season: "July to November",
      accessibility: "Moderate (Viewing platform accessible; 1,400 steps to base)",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      description: "One of the highest unsegmented waterfalls in India. During monsoon, four separate streams—Raja, Roarer, Rocket, and Rani—unite into a roaring cloud of white spray that fills the entire valley.",
      features: ["Four distinct cascade personalities", "Evening laser musical show", "Dense evergreen Sahyadri surroundings", "Linganamakki Dam upstream"]
    },
    {
      id: "wf-abbey",
      name: "Abbey Falls",
      river: "Kaveri tributary",
      location: "Madikeri, Kodagu District",
      height: "21 meters (70 feet)",
      season: "July to January",
      accessibility: "Easy (Short paved 200m walkway through coffee plantations)",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      description: "Nestled within private coffee estates and spice gardens draped in wild pepper vines, Abbey Falls roars over boulders into a deep natural pool viewed from an iconic suspension bridge.",
      features: ["Hanging suspension bridge viewpoint", "Coffee & cardamom plantation aroma", "Perfect family-friendly excursion", "Photogenic jungle setting"]
    },
    {
      id: "wf-shivanasamudra",
      name: "Shivanasamudra Falls",
      river: "Kaveri River",
      location: "Mandya / Chamarajanagar District",
      height: "98 meters (320 feet)",
      season: "July to October (Monsoon torrent)",
      accessibility: "Easy to Moderate (Paved viewing plazas & watchtowers)",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      description: "Here the sacred Kaveri River branches around the island of Shivanasamudra and plunges dramatically down into twin cataracts: the deep horsetail Gaganachukki and the tiered, segmented Bharachukki.",
      features: ["Twin falls: Gaganachukki & Bharachukki", "Site of Asia's first hydroelectric power plant (1902)", "Coracle boat rides near Bharachukki base", "Ancient Ranganathaswamy temple nearby"]
    },
    {
      id: "wf-hebbe",
      name: "Hebbe Falls",
      river: "Mountain springs",
      location: "Kemmanagundi, Chikkamagaluru District",
      height: "168 meters (551 feet)",
      season: "August to February",
      accessibility: "Challenging (4x4 Jeep ride + 1 km forest jungle trek)",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      description: "Tucked inside the Bhadra Tiger Reserve, Hebbe Falls cascades in two stages: Dodda Hebbe (Big Fall) and Chikka Hebbe (Small Fall). The waters are infused with herbs known for rejuvenating properties.",
      features: ["Two-stage cascade (Dodda & Chikka Hebbe)", "Medicinal mineral-rich natural pool", "Exciting off-road jeep trail through coffee estates", "Dense biodiversity & birdwatching"]
    },
    {
      id: "wf-iruppu",
      name: "Iruppu Falls (Lakshmana Tirtha)",
      river: "Lakshmana Tirtha River",
      location: "Brahmagiri Range, Kodagu District",
      height: "52 meters (170 feet)",
      season: "August to January",
      accessibility: "Moderate (Forest trail with steps through Brahmagiri sanctuary)",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      description: "Steeped in Ramayana lore, this sacred freshwater plunge cascades through the lush Brahmagiri hills. Pilgrims visit the ancient Rameshwara Shiva temple at the base to bathe in its sanctified waters.",
      features: ["Sacred Ramayana pilgrimage legend", "Trailhead for Brahmagiri peak trek", "Abundant butterfly and orchid species", "Cool forest canopy walk"]
    },
    {
      id: "wf-unchalli",
      name: "Unchalli Falls (Lushington Falls)",
      river: "Aghanashini River",
      location: "Siddapur, Uttara Kannada District",
      height: "116 meters (380 feet)",
      season: "July to December",
      accessibility: "Moderate to Challenging (1.5 km descending jungle path)",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
      description: "First documented by British collector J.D. Lushington in 1845, Unchalli is a wild, roaring cascade where the undammed Aghanashini River hurls itself into a sheer rock chasm, creating permanent misty rainbows.",
      features: ["Wild undammed river ecosystem", "Dramatic sound audible 5 km away", "Sahyadri canopy observation platform", "Pristine, non-commercialized wilderness"]
    },
    {
      id: "wf-sathodi",
      name: "Sathodi Falls",
      river: "Tributaries into Kodasalli Dam",
      location: "Yellapur, Uttara Kannada District",
      height: "15 meters (50 feet)",
      season: "September to February",
      accessibility: "Moderate (Picturesque 1 km forest walk through rock cleft)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      description: "Referred to as the 'Mini Niagara of Uttara Kannada', multiple jungle streams converge to tumble down a box canyon over jagged black rocks into a serene, emerald natural pool.",
      features: ["Rectangular box canyon formation", "Crystal-clear emerald swimming pool", "Tranquil Kodasalli backwaters nearby", "Photographer's secluded dream"]
    }
  ],

  hillStations: [
    {
      id: "hs-coorg",
      name: "Coorg (Kodagu)",
      altitude: "1,150 m (3,770 ft)",
      district: "Kodagu",
      climate: "15°C – 24°C (Pleasant round the year)",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Misty Emerald Crown of the Western Ghats",
      description: "Coorg captivates with undulating hills draped in coffee, silver oak trees intertwined with black pepper vines, cool mountain breezes, and warm Kodava hospitality.",
      activities: ["Plantation homestays & coffee picking", "Trekking to Tadiandamol (1,748m)", "River rafting on Barapole river", "Golden Temple Tibetan Monastery visit"],
      travelTip: "Book a plantation homestay rather than a commercial hotel to experience authentic home-cooked Kodava cuisine and private estate trails."
    },
    {
      id: "hs-chikmagalur",
      name: "Chikmagalur",
      altitude: "1,090 m to 1,930 m",
      district: "Chikkamagaluru",
      climate: "14°C – 26°C (Chilly winter mornings)",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Zenith of Peaks & Artisan Brews",
      description: "Nestled in the foothills of the Chandra Drona range, Chikmagalur is a nature lover's paradise where morning mists roll across highest peaks, cascading streams, and wild orchids.",
      activities: ["Scale Mullayanagiri, Karnataka's highest peak", "Explore Baba Budangiri caves & shrine", "Mountain cycling & estate quad biking", "Specialty coffee brewing workshops"],
      travelTip: "Start your Mullayanagiri peak ascent before 6:30 AM to catch the breathtaking sea of clouds under the morning sun."
    },
    {
      id: "hs-nandi",
      name: "Nandi Hills",
      altitude: "1,478 m (4,850 ft)",
      district: "Chikkaballapur (60 km from Bengaluru)",
      climate: "17°C – 28°C (Cool breezes)",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Historic Hilltop Above the Clouds",
      description: "An ancient hill fortress that once served as Tipu Sultan's summer sanctuary, famous today as Bengaluru's favorite dawn getaway for watching clouds surge beneath the cliffs.",
      activities: ["Sunrise cloud watching from Viewpoint", "Visiting Tipu's Drop & Tipu's Summer Lodge", "Bhoga Nandeeshwara Temple heritage walk", "Tandem paragliding & cycling up the 40 hairpins"],
      travelTip: "Arrive at the base gates by 5:30 AM on weekends as vehicular entry is limited to protect hilltop tranquility."
    },
    {
      id: "hs-agumbe",
      name: "Agumbe",
      altitude: "826 m (2,710 ft)",
      district: "Shivamogga",
      climate: "16°C – 25°C (High rainfall)",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Cherrapunji of the South & Rainforest Haven",
      description: "A serene rainforest village nestled in the dense Western Ghats, renowned for receiving the highest rainfall in South India, the Agumbe Rainforest Research Station (ARRS), and Malgudi Days nostalgia.",
      activities: ["Agumbe Sunset Point over the Arabian Sea horizon", "Spotting King Cobras & bioluminescent fungi", "Barkana & Onake Abbi waterfall treks", "Visiting Doddamane (the authentic Malgudi Days house)"],
      travelTip: "Carry high-quality leech socks and waterproof camera cases if visiting during the dramatic monsoon months."
    },
    {
      id: "hs-kemmanagundi",
      name: "Kemmanagundi",
      altitude: "1,434 m (4,705 ft)",
      district: "Chikkamagaluru",
      climate: "12°C – 23°C (Pleasantly cool)",
      image: "https://images.unsplash.com/photo-1626588137109-5c12079b3d9d?auto=format&fit=crop&w=1000&q=80",
      tagline: "Royal Hill Retreat of Mysore Maharajas",
      description: "A picturesque hill station developed by Maharaja Krishnaraja Wodeyar IV as his royal summer escape. It is blessed with landscaped rose gardens, deep valleys, and breathtaking viewpoints.",
      activities: ["Trek to Z Point for 360-degree gorge views", "Relax at Krishnarajendra Rose Garden", "Hike to Kalhatti & Hebbe Falls", "Bird watching in Shola grassland forests"],
      travelTip: "The 3 km trail to Z Point along steep ridge paths offers some of the most sensational landscape photography in Karnataka."
    },
    {
      id: "hs-sakleshpur",
      name: "Sakleshpur",
      altitude: "956 m (3,136 ft)",
      district: "Hassan",
      climate: "18°C – 26°C (Balmy hill climate)",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Unspoiled Green Paradise of Sahyadri",
      description: "Framed by the Hemavathi River and carpeted with cardamom, cinnamon, and pepper estates, Sakleshpur is famous for the star-shaped Manjarabad Fort built by Tipu Sultan.",
      activities: ["Explore the eight-pointed star Manjarabad Fort", "Green Route railway track & bridge trek", "Camping along the Bisle Ghat viewpoint", "Off-road 4x4 trails to Murkannu Gudda"],
      travelTip: "Stand in the center of Manjarabad Fort at noon to witness the acoustic and symmetrical precision of 18th-century French military design."
    },
    {
      id: "hs-kudremukh",
      name: "Kudremukh",
      altitude: "1,894 m (6,214 ft)",
      district: "Chikkamagaluru",
      climate: "10°C – 22°C (Misty & crisp)",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      tagline: "The Horse-Faced Emerald Wilderness",
      description: "Named after its iconic horse-face shaped summit, Kudremukh features vast rolling green shola grasslands that resemble Irish countryside nestled under tropical skies.",
      activities: ["Trek to Kudremukh Peak with forest guide", "Witness Kadambi & Hanuman Gundi waterfalls", "Wildlife spotting in Kudremukh National Park", "Photography along the mist-draped shola ridges"],
      travelTip: "Forest department permits are strictly mandatory for the peak trek; only 50 trekkers are permitted per day to preserve fragile ecology."
    }
  ],

  foods: [
    {
      id: "food-mysore-dosa",
      name: "Mysore Masala Dosa",
      region: "Old Mysore / Mysuru & Bengaluru",
      type: "Vegetarian",
      badge: "Iconic Classic",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
      description: "Crispy on the outside, fluffy inside fermented rice-lentil crepe slathered generously with fiery red garlic-chilli chutney, dolloped with fresh benne (butter), and stuffed with mildly spiced potato palya.",
      servedWith: "Coconut chutney, tangy sambar, and fresh churned white butter.",
      whereToTry: "Mylari Hotel (Mysuru), Vidyarthi Bhavan (Bengaluru), CTR Shri Sagar (Bengaluru)."
    },
    {
      id: "food-bisi-bele-bath",
      name: "Bisi Bele Bath",
      region: "Mysore Palace Heritage / Across Karnataka",
      type: "Vegetarian",
      badge: "Comfort Dish",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      description: "Translating to 'Hot Lentil Rice', this nutritious one-pot royal dish slow-cooks rice, toor dal, tamarind pulp, and garden vegetables with a freshly stone-ground 16-spice aromatic blend roasted in pure ghee.",
      servedWith: "Crisp potato crisps (chips), boondi, and cooling onion-cucumber raita.",
      whereToTry: "MTR (Mavalli Tiffin Room), Maiyas, Traditional Mysore Palace weddings."
    },
    {
      id: "food-ragi-mudde",
      name: "Ragi Mudde with Saaru",
      region: "South Karnataka (Mandya, Hassan, Mysuru)",
      type: "Nutritional Staple",
      badge: "Superfood",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
      description: "Wholesome, steamed spheres of nutrient-dense finger millet (ragi) flour cooked with water. Swallowed rather than chewed, it is the ancestral energy staple of Karnataka's agrarian communities.",
      servedWith: "Spicy Bassaru (strained dill greens soup), Mutton Chops saaru, or Soppina Saru.",
      whereToTry: "Military hotels across Mandya, Hassan, and Bengaluru (Shivaji Military Hotel)."
    },
    {
      id: "food-mysore-pak",
      name: "Mysore Pak",
      region: "Mysuru (Originated at Amba Vilas Palace)",
      type: "Royal Dessert",
      badge: "Royal Sweet",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      description: "Invented in 1935 by palace royal chef Kakasura Madappa for Maharaja Krishnaraja Wodeyar, this legendary dessert combines roasted gram flour (besan), pure country ghee, and hot caramelized sugar syrup.",
      servedWith: "Warm filter coffee.",
      whereToTry: "Guru Sweets (run by Madappa's descendants in Devaraja Market, Mysuru), Anand Sweets."
    },
    {
      id: "food-dharwad-peda",
      name: "Dharwad Peda",
      region: "Dharwad / North Karnataka",
      type: "GI Tagged Sweet",
      badge: "GI Tag Pedigree",
      image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80",
      description: "A Geographical Indication (GI) tagged delicacy created by the Thakur family in the 19th century. Made by painstakingly caramelizing Dharwadi buffalo milk khowa over slow heat and coating in fine castor sugar.",
      servedWith: "Enjoyed as a celebratory indulgence.",
      whereToTry: "Line Bazaar Babu Singh Thakur Peda (Dharwad), Mishra Peda."
    },
    {
      id: "food-maddur-vada",
      name: "Maddur Vada",
      region: "Maddur (Mandya District)",
      type: "Snack / Tiffin",
      badge: "Crispy Delight",
      image: "https://images.unsplash.com/photo-1600100397608-f010f444f470?auto=format&fit=crop&w=800&q=80",
      description: "Crunchy fritter created accidentally in 1917 at Maddur railway station for passengers on the Bengaluru-Mysuru line. Made of coarse semolina (rava), rice flour, sliced onions, curry leaves, and fried till golden brown.",
      servedWith: "Spicy coconut chutney and piping hot tumbler of filter kaapi.",
      whereToTry: "Maddur Tiffany's on Old Bengaluru-Mysuru Highway, Maddur Railway Station platform."
    },
    {
      id: "food-neer-dosa",
      name: "Neer Dosa",
      region: "Coastal Karnataka / Tulu Nadu (Udupi & Mangaluru)",
      type: "Vegetarian / Light Tiffin",
      badge: "Coastal Classic",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      description: "Translating to 'Water Dosa', these paper-thin, feather-soft, lacy crepes are made from non-fermented ground rice and water batter. They melt effortlessly in the mouth.",
      servedWith: "Coconut chutney, jaggery mixed with grated coconut, or fiery fish/chicken curry.",
      whereToTry: "Machali (Mangaluru), Mitra Samaj (Udupi), Coastal beach shacks."
    },
    {
      id: "food-mangalorean-fish-curry",
      name: "Mangalorean Fish Curry (Meen Gassi)",
      region: "Mangaluru / Dakshina Kannada Coast",
      type: "Seafood Non-Veg",
      badge: "Coastal Specialty",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Fresh Kingfish (Surmai) or Mackerel simmered in a silken, fiery orange gravy of ground coconut, roasted Byadgi red chillies, coriander seeds, and the sour tang of local Kudampuli (kokum).",
      servedWith: "Steamed boiled rice (Kori Rotti) or warm Neer Dosa.",
      whereToTry: "Giri Manja's (Mangaluru), Machali, Hotel Narayana near Bunder port."
    },
    {
      id: "food-coorg-pandi-curry",
      name: "Coorg Pandi Curry",
      region: "Kodagu (Coorg Highlands)",
      type: "Highland Specialty Non-Veg",
      badge: "Kodava Heritage",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      description: "The crown jewel of Kodava festive feasts. Tender pork braised slowly with a dark, roasted masala of peppercorns, cumin, and the magical astringent sourness of Kachampuli (wild Garcinia cambogia vinegar).",
      servedWith: "Steamed rice noodles (Kadambuttu / rice dumplings) or Akki Rotti.",
      whereToTry: "Coorg Cuisine (Madikeri), Raintree Restaurant, authentic homestays in Virajpet."
    },
    {
      id: "food-jolada-rotti",
      name: "Jolada Rotti Oota",
      region: "North Karnataka (Dharwad, Belagavi, Vijayapura)",
      type: "Nutritious Traditional Meal",
      badge: "Northern Pride",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      description: "Thin, unleavened flatbreads made from stone-ground sorghum (jowar) flour, patted out deftly by hand and baked over high heat. Gluten-free and extraordinarily healthy.",
      servedWith: "Yennegai (stuffed baby brinjals in peanut-sesame gravy), Jhunka, Shenga (peanut) chutney pudi, and fresh churned butter.",
      whereToTry: "Kamath Rotti Mane, Basaveshwar Khanavali (Hubballi-Dharwad & Vijayapura)."
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Mysore Palace Night Illumination",
      category: "monuments",
      categoryName: "Monuments & Heritage",
      location: "Mysuru",
      image: "https://images.unsplash.com/photo-1600100397608-f010f444f470?auto=format&fit=crop&w=1200&q=80",
      description: "The magnificent facade of Mysore Palace glowing like liquid gold with nearly 100,000 light bulbs during Sunday evening celebrations."
    },
    {
      id: "gal-2",
      title: "Stone Chariot at Vittala Temple",
      category: "monuments",
      categoryName: "Monuments & Heritage",
      location: "Hampi, Vijayanagara",
      image: "https://images.unsplash.com/photo-1600100397937-67c87c093a74?auto=format&fit=crop&w=1200&q=80",
      description: "The iconic monolithic Stone Chariot dedicated to Garuda, symbolizing the timeless architectural apex of the Vijayanagara Empire."
    },
    {
      id: "gal-3",
      title: "Jog Falls in Peak Monsoon Thunder",
      category: "waterfalls",
      categoryName: "Waterfalls",
      location: "Shivamogga",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      description: "The 830-foot plunge of the Sharavathi River cascading into the deep Sahyadri gorge enveloped in misty rainbows."
    },
    {
      id: "gal-4",
      title: "Misty Rolling Hills of Coorg",
      category: "mountains",
      categoryName: "Mountains & Hills",
      location: "Kodagu",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      description: "Sunrise clouds drifting over verdant coffee plantations and shola forests in the heart of the Western Ghats."
    },
    {
      id: "gal-5",
      title: "Sunset over Om Beach Cliffs",
      category: "beaches",
      categoryName: "Beaches & Coast",
      location: "Gokarna, Uttara Kannada",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      description: "Golden hour hues reflecting across the Arabian Sea against the distinctive twin crescent curves of Om Beach."
    },
    {
      id: "gal-6",
      title: "Badami Cave Temples & Agastya Lake",
      category: "temples",
      categoryName: "Sacred Temples",
      location: "Badami, Bagalkot",
      image: "https://images.unsplash.com/photo-1626588137109-5c12079b3d9d?auto=format&fit=crop&w=1200&q=80",
      description: "Ancient 6th-century Chalukyan rock-cut sandstone sanctuaries overlooking the sacred Agastya water tank."
    },
    {
      id: "gal-7",
      title: "Mullayanagiri Clouds & Peaks",
      category: "mountains",
      categoryName: "Mountains & Hills",
      location: "Chikkamagaluru",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Karnataka's highest mountain peak standing proud above an infinite sea of floating morning clouds."
    },
    {
      id: "gal-8",
      title: "Colossal Murudeshwar Shiva Statue",
      category: "temples",
      categoryName: "Sacred Temples",
      location: "Uttara Kannada Coast",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      description: "The 123-foot tall monolithic statue of Lord Shiva towering dramatically above the Arabian Sea."
    },
    {
      id: "gal-9",
      title: "Hoysala Soapstone Intricacy",
      category: "monuments",
      categoryName: "Monuments & Heritage",
      location: "Belur & Halebidu",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      description: "Centuries-old soapstone carvings of celestial dancers and epic battles executed with jewel-like precision."
    },
    {
      id: "gal-10",
      title: "Golden Crispy Mysore Masala Dosa",
      category: "food",
      categoryName: "Festivals & Food",
      location: "Mysuru / Bengaluru",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
      description: "Traditional butter-roasted fermented crepe served with spicy red chutney, potato palya, and freshly ground coconut relish."
    },
    {
      id: "gal-11",
      title: "Bengaluru Palace Tudor Architecture",
      category: "monuments",
      categoryName: "Monuments & Heritage",
      location: "Bengaluru",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
      description: "Regal stone turrets and ivy-covered ramparts inspired by Windsor Castle right in the heart of Karnataka's capital."
    },
    {
      id: "gal-12",
      title: "St. Mary's Volcanic Basalt Columns",
      category: "beaches",
      categoryName: "Beaches & Coast",
      location: "Malpe, Udupi",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Unique hexagonal basaltic rock formations created millions of years ago when Madagascar split from the Indian peninsula."
    },
    {
      id: "gal-13",
      title: "Tiger Safari in Bandipur",
      category: "mountains",
      categoryName: "Mountains & Hills",
      location: "Chamarajanagar",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
      description: "Royal Bengal Tiger prowling through the sun-dappled teak groves of the Nilgiri Biosphere Reserve."
    },
    {
      id: "gal-14",
      title: "Abbey Falls amidst Pepper Estates",
      category: "waterfalls",
      categoryName: "Waterfalls",
      location: "Madikeri, Coorg",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      description: "Cascading river tumbling over giant boulders framed by wild coffee branches and spice blossoms."
    },
    {
      id: "gal-15",
      title: "Traditional Bisi Bele Bath Feast",
      category: "food",
      categoryName: "Festivals & Food",
      location: "Mysuru",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
      description: "Fragrant rice, lentils, and slow-cooked vegetables bathed in pure ghee and topped with roasted cashews."
    },
    {
      id: "gal-16",
      title: "Gol Gumbaz Whispering Dome",
      category: "monuments",
      categoryName: "Monuments & Heritage",
      location: "Vijayapura",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      description: "The immense circular dome rising above the dry Deccan plains, holding world-renowned acoustic wonders."
    }
  ],

  travelGuide: {
    seasons: [
      {
        title: "Winter (October to March)",
        tag: "Best Time to Visit",
        badgeColor: "bg-emerald-600 text-white",
        temp: "15°C – 28°C",
        desc: "Ideal across all regions. The weather is cool, crisp, and comfortable. Perfect for exploring Hampi's boulders, Mysore Palace Dasara celebrations, coastal beaches in Gokarna & Udupi, and wildlife safaris in Bandipur."
      },
      {
        title: "Monsoon (July to September)",
        tag: "Nature & Waterfalls Season",
        badgeColor: "bg-teal-600 text-white",
        temp: "18°C – 26°C",
        desc: "The Western Ghats transform into an emerald wonderland. Waterfalls like Jog, Abbey, and Shivanasamudra roar at their maximum volume. Lush hill stations like Coorg, Agumbe, and Chikmagalur are wrapped in romantic mists."
      },
      {
        title: "Summer (April to June)",
        tag: "Highland Retreat Season",
        badgeColor: "bg-amber-600 text-white",
        temp: "24°C – 36°C",
        desc: "Northern plains become hot, but highland hill stations like Kemmanagundi, Kudremukh, and Coorg remain refreshingly cool. Excellent for coffee plantation homestay escapes and early morning beach swims."
      }
    ],

    transportation: [
      {
        mode: "Air Travel",
        icon: "Plane",
        details: "Kempegowda International Airport (BLR, Bengaluru) is the 3rd busiest in India with global connections. Domestic airports operate at Mangaluru (IXE), Hubballi (HBX), Belagavi (IXG), Mysuru (MYQ), Shivamogga (RQY), and Bidar (IXX)."
      },
      {
        mode: "Railways",
        icon: "Train",
        details: "South Western Railway (SWR) connects every major district. High-speed Vande Bharat Express routes seamlessly connect Bengaluru with Mysuru, Hubballi-Dharwad, and Kalaburagi. Scenic Konkan Railway tracks run along the coast."
      },
      {
        mode: "Roads & Highways",
        icon: "Bus",
        details: "Karnataka State Road Transport Corporation (KSRTC) operates award-winning Airavat Club Class multi-axle Volvos. Excellent 4 to 6-lane national expressways (NH44, NH48, NH75, NH66 coastal highway) make road trips a delight."
      }
    ],

    stays: [
      {
        type: "Heritage Palaces & Mansions",
        examples: "Lalitha Mahal Palace (Mysuru), Brijrama & heritage Havelis in Badami & Dharwad.",
        idealFor: "Culture lovers & luxury travelers looking for royal hospitality."
      },
      {
        type: "Coffee Estate Homestays",
        examples: "Colonial-era bungalows and modern homestays in Chikmagalur, Coorg, and Sakleshpur.",
        idealFor: "Families and slow travelers seeking authentic Kodava/Malnad home-cooked meals."
      },
      {
        type: "Jungle Lodges & Resorts (JLR)",
        examples: "Kabini River Lodge, Bandipur Safari Lodge, Kali Wilderness Camp Dandeli.",
        idealFor: "Eco-conscious wildlife photographers, tiger safari enthusiasts, and adventurers."
      },
      {
        type: "Coastal Shacks & Cliffside Resorts",
        examples: "Beachfront villas in Gokarna (Kudle & Om Beach), Kaup & Malpe in Udupi.",
        idealFor: "Backpackers, sunset gazers, and seafood lovers."
      }
    ],

    safetyTips: [
      "Monsoon Hiking: Always wear high-grip waterproof shoes and leech-resistant socks when trekking in Malnad / Western Ghats.",
      "Temple Etiquette: Modest attire covering shoulders and knees is mandatory at active sacred temples (Sri Krishna Matha Udupi, Murudeshwar, Gokarna).",
      "Hydration in North Karnataka: Northern heritage sites like Hampi and Badami involve extensive outdoor stone climbing; carry electrolyte water and sun hats.",
      "Wildlife Zones: Strictly obey night driving curfews (9 PM – 6 AM) through Bandipur and Nagarhole Tiger Reserves to protect endangered wildlife."
    ],

    responsibleTourism: [
      "Plastic-Free Karnataka: Single-use plastics are banned in all National Parks, waterfalls, and eco-sensitive reserves. Carry reusable steel bottles.",
      "Support Local Artisan Heritage: Buy authentic Channapatna wooden toys, Ilkal and Mysore silk sarees, Bidriware metal crafts, and GI-tagged Dharwad pedas directly from local weavers and cooperatives.",
      "Respect Ancient Stones: Never deface or carve names onto centuries-old UNESCO monuments in Hampi, Belur, or Badami."
    ]
  },

  quickStats: [
    { label: "Vibrant Districts", value: "31", icon: "MapPin" },
    { label: "UNESCO World Heritage Sites", value: "3", icon: "Award" },
    { label: "Arabian Sea Coastline", value: "320+ km", icon: "Sun" },
    { label: "Majestic Waterfalls", value: "25+", icon: "Droplets" },
    { label: "Recorded History", value: "1,500+ Yrs", icon: "Landmark" }
  ]
};
