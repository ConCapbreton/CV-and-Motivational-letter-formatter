interface CvProps {
  cv: CV;
}

interface CV {
  lang: "fr" | "en";
  name: string;
  surname: string;
  nationality: string;
  profilePic: string;

  jobTitle: string;
  proSummary: string; // Recommended max 600 characters

  // Contact information
  phone: string;
  email: string;
  address: {
    apartment?: string;
    street?: string;
    postcode: string;
    city: string;
    country: string;
  }; // city, country or full street address
  linkedIn?: string; // URL
  website?: string; // personal website / portfolio
  github?: string; // GitHub / GitLab profile

  drivingLicense: boolean;

  languages?: { label: string; level: string }[];
  skills?: { name: string; type: string }[];

  experience: {
    jobTitle: string;
    company: string;
    location: string;
    startYear: string; // or number
    endYear: string; // or number
    bullets: string[]; // key responsibilities/achievements
  }[];

  education: {
    institute: string;
    city?: string;
    country: string;
    startYear: number;
    endYear: number;
    qualification: {
      name: string;
      grade?: string;
      frenchEquivalent?: string;
    }[];
  }[];

  other?: {
    title: string; // e.g. "Publication", "Conférence", "Projet personnel"
    description: string; // detailed text
    year?: number; // optional year
  }[];
}

interface MotivationalLetterProps {
  motivationalLetter: MotivationalLetter;
}

interface MotivationalLetter {
  lang: "fr" | "en";
  name: string;
  surname: string;
  jobTitle: string;
  customLetterSubject?: string;

  phone: string;
  email: string;
  address: {
    apartment?: string;
    street?: string;
    postcode: string;
    city: string;
    country: string;
  }; // city, country or full street address
  linkedIn?: string; // URL
  website?: string; // personal website / portfolio
  github?: string; // GitHub / GitLab profile

  companyAddress: {
    name: string; // Company name
    department?: string; // Optional department or team
    street?: string; // Street and number
    apartment?: string; // Optional apartment, suite, etc.
    postcode: string; // Postal code
    city: string; // City
    country?: string; // Optional country
  };

  recipient?: {
    customGreeting?: string; // overrides everything if provided
    people?: { lastName: string; gender: "male" | "female" }[]; // list of recipients
  };

  body: string;

  customSignature?: string;
}
