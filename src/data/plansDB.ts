export type Plan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };

  content: string;
  devices: string;
  freeTrial: string;
  cancelAnytime: boolean;
  hdr: boolean;
  dolbyAtmos: boolean;
  adFree: boolean;
  offlineViewing: string;
  familySharing: string;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: {
      monthly: "$9.99",
      yearly: "$99.99",
    },
    content:
      "Access to a wide selection of movies and shows, including some new releases",
    devices: "Watch on one device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: false,
    dolbyAtmos: false,
    adFree: false,
    offlineViewing: "No",
    familySharing: "No",
  },
  {
    id: "standard",
    name: "Standard",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: {
      monthly: "$12.99",
      yearly: "$129.99",
    },
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    devices: "Watch on Two devices simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: true,
    adFree: true,
    offlineViewing: "Yes, for select titles",
    familySharing: "Yes, up to 5 family members",
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "Access to widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: {
      monthly: "$14.99",
      yearly: "$149.99",
    },

    content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    devices: "Watch on Four devices simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: true,
    adFree: true,
    offlineViewing: "Yes, for all titles",
    familySharing: "Yes, up to 6 family members",
  },
];
