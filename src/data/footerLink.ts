export interface footerType {
  defaultMessage: string;
  id: string;
  href: string;
}

export const footerLinks: footerType[][] = [
  [
    {
      defaultMessage: "Company",
      id: "company",
      href: "/company",
    },
    {
      defaultMessage: "News",
      id: "news",
      href: "/news",
    },
    {
      defaultMessage: "Pricing",
      id: "pricing",
      href: "/pricing",
    },
    {
      defaultMessage: "Contact",
      id: "contact",
      href: "/contact",
    },
    {
      defaultMessage: "FAQ’s",
      id: "faqs",
      href: "/faqs",
    },
  ],
  [
    {
      defaultMessage: "Terms of Use  |",
      id: "termsOfUse",
      href: "/terms-of-use",
    },
    {
      defaultMessage: "Privacy Policy  |",
      id: "PrivacyPolicy",
      href: "/privacy-policy",
    },
    {
      defaultMessage: "Cookies Policy  |",
      id: "cookiesPolicy",
      href: "/cookies-policy",
    },
    {
      defaultMessage: "Do Not Sell My  Personal Information",
      id: "doNotSellMyPersonalInformation",
      href: "/do-not-sell-my-personal-information",
    },
  ],
];
