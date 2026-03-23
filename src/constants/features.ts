import type { Plan } from "../data/plansDB";

type Feature = {
  label: string;
  getValue: (plan: Plan) => string;
};

export const features: Feature[] = [
  {
    label: "Price",
    getValue: (plan) => `${plan.price.monthly} / Month`,
  },
  {
    label: "Content",
    getValue: (plan) => plan.content,
  },
  {
    label: "Devices",
    getValue: (plan) => plan.devices,
  },
  {
    label: "Free Trial",
    getValue: (plan) => plan.freeTrial,
  },
  {
    label: "Cancel Anytime",
    getValue: (plan) => (plan.cancelAnytime ? "Yes" : "No"),
  },
  {
    label: "HDR",
    getValue: (plan) => (plan.hdr ? "Yes" : "No"),
  },
  {
    label: "Dolby Atmos",
    getValue: (plan) => (plan.dolbyAtmos ? "Yes" : "No"),
  },
  {
    label: "Ad-Free",
    getValue: (plan) => (plan.adFree ? "Yes" : "No"),
  },
  {
    label: "Offline Viewing",
    getValue: (plan) => plan.offlineViewing,
  },
  {
    label: "Family Sharing",
    getValue: (plan) => plan.familySharing,
  },
];

export const featuresCard: Feature[] = [
  {
    label: "Price",
    getValue: (plan) => `${plan.price.monthly} / Month`,
  },
  {
    label: "Free Trial",
    getValue: (plan) => plan.freeTrial,
  },
  {
    label: "Content",
    getValue: (plan) => plan.content,
  },
  {
    label: "Devices",
    getValue: (plan) => plan.devices,
  },

  {
    label: "Cancel Anytime",
    getValue: (plan) => (plan.cancelAnytime ? "Yes" : "No"),
  },
  {
    label: "HDR",
    getValue: (plan) => (plan.hdr ? "Yes" : "No"),
  },
  {
    label: "Dolby Atmos",
    getValue: (plan) => (plan.dolbyAtmos ? "Yes" : "No"),
  },
  {
    label: "Ad-Free",
    getValue: (plan) => (plan.adFree ? "Yes" : "No"),
  },
  {
    label: "Offline Viewing",
    getValue: (plan) => plan.offlineViewing,
  },
  {
    label: "Family Sharing",
    getValue: (plan) => plan.familySharing,
  },
];