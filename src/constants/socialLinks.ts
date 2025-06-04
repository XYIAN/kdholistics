export interface SocialLink {
  title: string;
  icon: string;
  description: string;
  link: string;
  color: string;
  bgColor?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "LinkedIn",
    icon: "pi pi-linkedin",
    description:
      "Connect with Kas professionally and follow her career journey",
    link: "https://linkedin.com/in/kasdilbeck",
    color: "#0A66C2",
    bgColor: "#E8F0FE",
  },
  {
    title: "Instagram",
    icon: "pi pi-instagram",
    description: "Follow Kas for daily wellness tips and updates",
    link: "https://instagram.com/holistickas",
    color: "#E1306C",
    bgColor: "#FFEEF6",
  },
  {
    title: "Etsy Shop",
    icon: "pi pi-shopping-bag",
    description: "Browse Kas's collection of holistic wellness products",
    link: "https://etsy.com/shop/holistickas",
    color: "#F56400",
    bgColor: "#FFF5E6",
  },
  {
    title: "YouTube",
    icon: "pi pi-youtube",
    description: "Watch Kas's wellness and meditation videos",
    link: "https://youtube.com/@holistickas",
    color: "#FF0000",
    bgColor: "#FEE6E6",
  },
  {
    title: "Facebook",
    icon: "pi pi-facebook",
    description: "Join Kas's wellness community",
    link: "https://facebook.com/holistickas",
    color: "#1877F2",
    bgColor: "#E8F0FE",
  },
  {
    title: "Spotify",
    icon: "pi pi-spotify",
    description: "Listen to Kas's wellness playlists and podcasts",
    link: "https://open.spotify.com/user/holistickas",
    color: "#1DB954",
    bgColor: "#E6F6EB",
  },
];
