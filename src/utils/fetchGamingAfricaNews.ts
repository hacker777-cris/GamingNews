// Define the interface based on GNews API response structure
export interface NewsItem {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

// Your GNews API key - in production, use environment variables
const GNEWS_API_KEY = "f122561ee7fa390a5ab84a15bd092fdd"; // Replace with your actual key

export async function fetchGamingAfricaNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=gaming+Africa&lang=en&token=${GNEWS_API_KEY}`,
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data.articles || []; // Array of articles
  } catch (error) {
    console.error("Failed to fetch news from GNews API:", error);
    // Fall back to mock data if the API request fails
    return fetchMockGamingAfricaNews();
  }
}

// Mock data function for development/testing or when API fails
export async function fetchMockGamingAfricaNews(): Promise<NewsItem[]> {
  // This function returns mock data in the GNews API format
  return [
    {
      title: "New Gaming Hub Opens in Lagos",
      description:
        "State-of-the-art facility aims to nurture local gaming talent in Nigeria's growing gaming industry.",
      content:
        "Lagos, Nigeria - A new state-of-the-art gaming hub has opened in Lagos, aiming to nurture local gaming talent and boost Nigeria's growing gaming industry. The facility, equipped with the latest gaming technology and development tools, will serve as a center for game development, esports training, and industry events. Industry experts believe this hub will significantly contribute to Africa's emerging gaming ecosystem.",
      url: "https://example.com/news/1",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-15T12:00:00Z",
      source: {
        name: "Gaming Africa News",
        url: "https://example.com",
      },
    },
    {
      title: "South African Dev Team Launches Breakthrough Title",
      description:
        "Innovative game combines African mythology with modern gameplay mechanics, receiving international acclaim.",
      content:
        "Cape Town, South Africa - A team of developers from Cape Town has launched a groundbreaking new game that combines elements of traditional African mythology with cutting-edge gameplay mechanics. The title has already received international acclaim, with critics praising its innovative approach to storytelling and its stunning visual design inspired by African art styles. The game represents a significant milestone for the continent's growing game development industry.",
      url: "https://example.com/news/2",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-14T10:30:00Z",
      source: {
        name: "Game Developer Weekly",
        url: "https://example.com",
      },
    },
    {
      title: "Major Console Manufacturer Partners with African Developers",
      description:
        "New initiative to support game development across the continent with funding and technical resources.",
      content:
        "A leading console manufacturer has announced a new partnership program specifically designed to support game developers across Africa. The initiative will provide funding, technical resources, and mentorship to selected studios and independent developers. This move is seen as recognition of the untapped potential and growing talent pool in Africa's game development scene. The program aims to bring more diverse voices and perspectives to the global gaming industry.",
      url: "https://example.com/news/3",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-13T14:15:00Z",
      source: {
        name: "Industry Insider",
        url: "https://example.com",
      },
    },
    {
      title: "Kenyan Mobile Game Reaches Global Top Charts",
      description:
        "Local developers celebrate international success with innovative mobile title that showcases African culture.",
      content:
        "Nairobi, Kenya - A mobile game developed by a small studio in Nairobi has climbed to the top of global download charts, marking a significant achievement for Kenya's tech industry. The game, which features characters and storylines inspired by local culture and traditions, has resonated with players worldwide. Its success demonstrates the universal appeal of African-inspired content and highlights the potential of the continent's mobile gaming sector.",
      url: "https://example.com/news/4",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-12T09:45:00Z",
      source: {
        name: "Mobile Gaming Report",
        url: "https://example.com",
      },
    },
    {
      title: "African Gaming Awards Announces 2025 Nominees",
      description:
        "Annual celebration of gaming excellence features record number of entries from across the continent.",
      content:
        "The organizers of the African Gaming Awards have announced the nominees for their 2025 ceremony, featuring a record number of entries from developers across the continent. Categories include Best Mobile Game, Best Narrative, Technical Excellence, and Game of the Year. The awards, now in their fifth year, have become an important platform for recognizing and celebrating the achievements of African game developers and promoting their work to a global audience.",
      url: "https://example.com/news/5",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-11T16:20:00Z",
      source: {
        name: "Gaming Africa",
        url: "https://example.com",
      },
    },
    {
      title: "Revolutionary Gaming Technology Developed in Ghana",
      description:
        "Local tech startup unveils groundbreaking gaming peripherals designed specifically for African gamers.",
      content:
        "Accra, Ghana - A technology startup based in Accra has unveiled a new line of gaming peripherals specifically designed to address the needs and preferences of African gamers. The products, which include controllers, headsets, and other accessories, feature innovations that account for local environmental factors, connectivity challenges, and ergonomic considerations. Industry observers note that this represents an important step in developing gaming hardware that serves diverse global markets.",
      url: "https://example.com/news/6",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-10T11:10:00Z",
      source: {
        name: "Tech Innovations Africa",
        url: "https://example.com",
      },
    },
    {
      title: "Esports Tournament in Egypt Draws Record Viewership",
      description:
        "The largest gaming competition in North Africa attracts international attention and sponsorships.",
      content:
        "Cairo, Egypt - An esports tournament held in Cairo has broken viewership records for gaming events in Africa, attracting audiences from across the continent and beyond. The competition, featuring teams from multiple African countries, showcased the region's growing talent pool in competitive gaming. Major sponsors and streaming platforms have taken notice, with several announcing plans to increase their investment in African esports in the coming year.",
      url: "https://example.com/news/7",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-09T13:40:00Z",
      source: {
        name: "Esports Today",
        url: "https://example.com",
      },
    },
    {
      title: "Rwandan Game Studio Secures Major Investment",
      description:
        "International venture capital firm invests in promising Kigali-based game development studio.",
      content:
        "Kigali, Rwanda - A game development studio based in Kigali has secured significant funding from an international venture capital firm, marking one of the largest investments in Rwanda's growing tech sector. The studio, known for its innovative mobile games that blend entertainment with educational content, plans to use the funding to expand its team and develop more ambitious projects. This investment highlights the increasing global interest in Africa's creative tech industries.",
      url: "https://example.com/news/8",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-08T08:55:00Z",
      source: {
        name: "Venture Beat Africa",
        url: "https://example.com",
      },
    },
    {
      title: "New Gaming Curriculum Introduced in South African Schools",
      description:
        "Educational initiative aims to teach coding and game design to prepare students for careers in the gaming industry.",
      content:
        "Johannesburg, South Africa - A new curriculum focused on game development and design has been introduced in selected South African schools, aiming to prepare students for careers in the rapidly growing gaming industry. The program teaches coding, digital art, storytelling, and project management through the lens of game creation. Education experts believe this approach not only develops technical skills but also encourages creativity and problem-solving abilities that are valuable across many industries.",
      url: "https://example.com/news/9",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      publishedAt: "2025-03-07T15:30:00Z",
      source: {
        name: "Education Technology",
        url: "https://example.com",
      },
    },
  ];
}
