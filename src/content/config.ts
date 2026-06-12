import { defineCollection, z } from 'astro:content';

const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.object({
      name: z.string(),
      legalForm: z.string().optional(),
      owner: z.string(),
      street: z.string(),
      zip: z.string(),
      city: z.string(),
      country: z.string(),
      phoneDisplay: z.string(),
      phoneRaw: z.string(),
      phoneIntl: z.string(),
      whatsapp: z.string(),
      email: z.string(),
      web: z.string(),
      vatId: z.string(),
      registration: z.string(),
      registryCourt: z.string(),
      dsb: z.string().optional(),
      dsbEmail: z.string().optional(),
    }),
    navigation: z.array(z.object({
      label: z.string(),
      href: z.string(),
      ariaLabel: z.string(),
    })),
    footer: z.object({
      claim: z.string(),
      disclaimer: z.string(),
      serviceLinks: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
      companyLinks: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
    }),
    cookieBanner: z.object({
      title: z.string(),
      description: z.string(),
      linkText: z.string(),
      acceptLabel: z.string(),
      declineLabel: z.string(),
      essentialLabel: z.string(),
    }),
    seo: z.object({
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      ogImage: z.string().optional(),
      siteUrl: z.string(),
    }),
  }),
});

const homepageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      tagline: z.string(),
      claim: z.string(),
      title: z.string(),
      subtitle: z.string(),
      usp1: z.string(),
      usp2: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      badge1Text: z.string(),
      badge1Label: z.string(),
      badge2Text: z.string(),
      badge2Label: z.string(),
      ctaPrimary: z.object({
        text: z.string(),
        url: z.string(),
        ariaLabel: z.string(),
      }),
      ctaSecondary: z.object({
        text: z.string(),
        url: z.string(),
        ariaLabel: z.string(),
      }),
    }),
    problemSolution: z.object({
      problemLabel: z.string(),
      problemTitle: z.string(),
      problemText1: z.string(),
      problemText2: z.string(),
      solutionLabel: z.string(),
      solutionTitle: z.string(),
      solutionText: z.string(),
      benefits: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
    }),
    process: z.object({
      label: z.string(),
      title: z.string(),
      subtitle: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
    }),
    services: z.object({
      label: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaText: z.string(),
      ctaUrl: z.string(),
      ctaAriaLabel: z.string(),
      items: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        icon: z.string(),
      })),
    }),
    whyMetra: z.object({
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({
        text: z.string(),
      })),
    }),
  }),
});

const leistungenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    image: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
  }),
});

const leistungenPageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      label: z.string(),
      title: z.string(),
      text: z.string(),
    }),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })),
    cta: z.object({
      title: z.string(),
      text: z.string(),
      buttonText: z.string(),
      buttonUrl: z.string(),
    }),
  }),
});

const kontaktCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      label: z.string(),
      title: z.string(),
      text: z.string(),
    }),
    sidebar: z.object({
      title: z.string(),
      addressTitle: z.string(),
      phoneTitle: z.string(),
      phoneHint: z.string(),
      emailTitle: z.string(),
      whatsappTitle: z.string(),
      whatsappHint: z.string(),
      whatsappButton: z.string(),
      quickResponseTitle: z.string(),
      quickResponseText: z.string(),
    }),
    form: z.object({
      title: z.string(),
      subtitle: z.string(),
      nameLabel: z.string(),
      namePlaceholder: z.string(),
      emailLabel: z.string(),
      emailPlaceholder: z.string(),
      phoneLabel: z.string(),
      phonePlaceholder: z.string(),
      messageLabel: z.string(),
      messagePlaceholder: z.string(),
      privacyText: z.string(),
      submitButton: z.string(),
      submitLoading: z.string(),
      successTitle: z.string(),
      successText: z.string(),
      errorTitle: z.string(),
      errorText: z.string(),
      errorTimeoutText: z.string(),
    }),
  }),
});

const impressumCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroLabel: z.string(),
    heroTitle: z.string(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })),
  }),
});

const datenschutzCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroLabel: z.string(),
    heroTitle: z.string(),
    sections: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })),
  }),
});

const seitenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    text: z.string().optional(),
  }),
});

export const collections = {
  settings: settingsCollection,
  homepage: homepageCollection,
  leistungen: leistungenCollection,
  leistungenPage: leistungenPageCollection,
  kontakt: kontaktCollection,
  impressum: impressumCollection,
  datenschutz: datenschutzCollection,
  seiten: seitenCollection,
};
