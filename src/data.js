export const company = {
  name: "Wiener Salon",
  owner: "Jasmina",
  tagline: "...aus schiach macht fesch.",
  taglineNote: "Viennese for: we turn plain into fabulous.",
  addressLine1: "Mölker Bastei 3 / Top 1-2",
  addressLine2: "Linke Stiege, 1010 Wien, Austria",
  phone: "+43 650 8408117",
  phoneTel: "+436508408117",
  mapsUrl:
    "https://www.google.com/maps/place/Wiener+Salon/@48.2129329,16.3624085,17z/data=!3m1!1e3!4m6!3m5!1s0x476d07bdbd5bffff:0xf52cc597a45f743f!8m2!3d48.2129329!4d16.3624085!16s%2Fg%2F11f5dfwrw8",
  lat: 48.2129329,
  lng: 16.3624085,
  facebookUrl: "https://www.facebook.com/stylingbyjasmina/",
  messengerUrl: "https://m.me/stylingbyjasmina",
  googleRating: "4.9",
  googleReviewCount: 238,
  fbFollowers: "3.5K",
  fbRecommendPercent: 100,
  fbReviewCount: 107,
};

export const smsLink = (message) =>
  `sms:${company.phoneTel}?&body=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
  { href: "#book", label: "Book Now" },
];

export const stats = [
  { value: "4.9★", label: "Google Rating" },
  { value: "238", label: "Google Reviews" },
  { value: "100%", label: "Recommend Us" },
  { value: "1010", label: "Vienna Centre" },
];

export const services = [
  {
    key: "cut",
    title: "Cut & Styling",
    desc: "Precision cuts tailored to your face and lifestyle, finished with a polished blow-dry.",
    featured: true,
  },
  {
    key: "color",
    title: "Coloring & Dyeing",
    desc: "Full color, root touch-ups and creative dyeing — our most-loved service.",
  },
  {
    key: "balayage",
    title: "Highlights & Balayage",
    desc: "Hand-painted highlights and balayage for natural, sun-kissed dimension.",
  },
  {
    key: "scalp",
    title: "Scalp & Head Massage",
    desc: "A deeply relaxing scalp treatment our guests keep coming back for.",
  },
  {
    key: "blowout",
    title: "Blowout & Occasion Styling",
    desc: "Event-ready styling for weddings, nights out and everything in between.",
  },
  {
    key: "consult",
    title: "Consultation",
    desc: "A friendly, multilingual chat about the look you want before we touch a single strand.",
  },
];

export const reviews = [
  {
    name: "Marina Bolisacova",
    source: "Google review",
    timeAgo: "3 months ago",
    text: "Wonderful experience, a homey international safe heaven in Vienna center! I feel and look beautiful, and will be back! Thank you, Jasmina and the Crew.",
  },
  {
    name: "Huda Zerti",
    source: "Google review",
    timeAgo: "5 months ago",
    text: "Great service. I did not wait at all. Very clean.",
  },
  {
    name: "Amira Subki",
    source: "Google review",
    timeAgo: "a year ago",
    text: "I come here everytime I need my hair retouched. I like their homey service! I love their cut because it's so neat and according to my style. Their head massage as well, makes me very relaxed.",
  },
];
