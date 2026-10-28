export type ProjectCategory =
  | "UI/UX Design"
  | "UI/UX Design and System Design"
  | "Web Application / System Design"
  | "System Architecture & Interface Design"
  | "Mobile Systems Design";

export type KeyScreen = {
  title: string;
  description?: string;
  image: string;
};

export type QuizResult = {
  title: string;
  summary: string;
  image: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  shortDescription: string;
  technologies: string[];
  thumbnail?: string;
  cardImage?: string;
  screenshots?: string[];
  overview: string;
  problemStatement: string;
  objectives: string[];
  roleResponsibilities: string[];
  targetUsers: string[];
  researchPlanning?: string;
  approach: string;
  toolsTechnologies: string[];
  challengesSolutions?: { challenge: string; solution: string }[];
  outcomeLearnings?: string;
  designApproachHeading?: string;
  learningExperienceHeading?: string;
  keyScreens?: KeyScreen[];
  quizResults?: QuizResult;
  productManagement?: { title: string; description: string };
  inventoryManagement?: { title: string; description: string };
  status?: string;
  isPlaceholder?: boolean;
  statusLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "load-it-bulk-logistics-delivery-application",
    name: "Load It — Bulk Logistics & Delivery Application",
    category: "UI/UX Design and System Design",
    shortDescription:
      "A mobile application designed to help customers place and track bulk delivery orders for large quantities of goods. The application focuses on simplifying bulk ordering, order verification, and delivery tracking.",
    technologies: ["Figma"],
    thumbnail: "/images/load-it/message.png",
    cardImage: "/images/load-it/main%20home.jpeg",
    screenshots: [],
    overview:
      "Load It is a mobile application designed to help customers place and track bulk delivery orders for large quantities of goods. The application focuses on simplifying bulk ordering, order verification, and delivery tracking.",
    problemStatement:
      "Customers needed a simpler way to place and track bulk delivery orders for large quantities of goods, with clear order verification and delivery tracking.",
    objectives: [
      "Simplify bulk order placement",
      "Support order verification",
      "Enable order tracking",
      "Support delivery management for large orders",
    ],
    roleResponsibilities: [
      "Designed user flows and interface for bulk ordering",
      "Structured workflows for order verification and delivery tracking",
    ],
    targetUsers: ["Customers placing bulk orders", "Delivery/logistics users"],
    researchPlanning: undefined,
    approach:
      "Focused on mobile UX and system workflows for bulk ordering, verification, and delivery tracking to keep the process clear and manageable for large orders.",
    toolsTechnologies: ["Figma"],
    challengesSolutions: undefined,
    outcomeLearnings:
      "Defined clear flows for bulk order placement, verification, tracking, and delivery management.",
    keyScreens: [
      {
        title: "Product Browsing & Ordering",
        description:
          "The product browsing and ordering screen used to review products within the bulk delivery ordering workflow.",
        image: "/images/load-it/product%20page.png",
      },
      {
        title: "Messaging & Communication",
        description:
          "The messaging screen used for communication within the bulk delivery ordering workflow.",
        image: "/images/load-it/message.png",
      },
    ],
    status: undefined,
    isPlaceholder: false,
  },
  {
    slug: "temari-bet-educational-information-platform",
    name: "Temari-Bet – Educational Information Platform",
    category: "UI/UX Design",
    shortDescription:
      "An educational platform for high school students and parents, featuring multiple courses, study notes, video tutorials, mock exams, student rankings, and school event updates to support learning and parent-school communication.",
    technologies: ["Figma"],
    thumbnail: "/images/temari-bet/Behance%20Mockup%20Shot%20%E2%80%94%20Cover.png",
    cardImage: "/images/temari-bet/temarinet2.png",
    screenshots: [],
    overview:
      "Temari-Bet is an educational platform for high school students and parents, featuring multiple courses, study notes, video tutorials, mock exams, student rankings, and school event updates to support learning and parent-school communication.",
    problemStatement:
      "Schools needed a structured way to present digital exam records, learning tutorials, and automated parent communication updates in a clear, accessible interface.",
    objectives: [
      "Design user navigation and interaction workflows for the platform",
      "Structure data views for digital exam records and learning tutorials",
      "Structure views for automated parent communication updates",
    ],
    roleResponsibilities: [
      "Designed user navigation and interaction workflows",
      "Structured data views for exam records, tutorials, and parent updates",
    ],
    targetUsers: ["Schools", "Students", "Parents"],
    researchPlanning: undefined,
    approach:
      "Focused on information architecture and interaction workflows. Produced interface structures and design decisions to make key educational information easy to access across user roles.",
    toolsTechnologies: ["Figma"],
    challengesSolutions: undefined,
    outcomeLearnings:
      "Delivered structured navigation and data-view designs to improve clarity of educational information across roles.",
    designApproachHeading: "My Design Approach",
    learningExperienceHeading: "Learning Experience",
    keyScreens: [
      {
        title: "Mobile Learning Screen",
        description:
          "Mobile interface for learning content such as study notes and video tutorials.",
        image: "/images/temari-bet/tematiner4.png",
      },
    ],
    quizResults: {
      title: "Quiz Results",
      summary:
        "Quiz results and feedback screens for the platform's mock exams to support learning assessment.",
      image: "/images/temari-bet/quiz-results.png",
    },
    status: undefined,
    isPlaceholder: false,
  },
  {
    slug: "pharmaceutical-management-system",
    name: "Pharmaceutical Management System",
    category: "Web Application / System Design",
    shortDescription:
      "A system to help a pharmacy manage medicine inventory, product registration, staff, suppliers, sales, purchases, expiry dates, and daily operations with Admin and Staff dashboards.",
    technologies: ["System Design"],
    thumbnail: undefined,
    screenshots: [],
    overview:
      "The Pharmaceutical Management System helps a pharmacy manage medicine inventory, product registration, staff, suppliers, sales, purchases, expiry dates, and daily operations. It has two main areas: an Admin Dashboard for managing the pharmacy and staff, and a Staff Dashboard for daily pharmacy tasks.",
    problemStatement:
      "A pharmacy needed a structured system to manage inventory, product registration, staff, suppliers, sales, purchases, expiry dates, and daily operations.",
    objectives: [
      "Support medicine inventory management and product registration",
      "Manage staff and suppliers",
      "Track sales, purchases, and expiry dates",
      "Provide Admin Dashboard for managing the pharmacy and staff",
      "Provide Staff Dashboard for daily pharmacy tasks",
    ],
    roleResponsibilities: [
      "Designed system structure and workflows for pharmacy operations",
    ],
    targetUsers: ["Pharmacy Admin", "Pharmacy Staff"],
    researchPlanning: undefined,
    approach:
      "Modeled business workflows for inventory, sales/purchases, suppliers, staff, and expiry tracking, with separate dashboards for Admin and Staff. No implementation/deployment status claimed.",
    toolsTechnologies: ["System Design"],
    challengesSolutions: undefined,
    outcomeLearnings:
      "Defined clear operational workflows and dashboard separation for managing pharmacy operations.",
    status: "Design/System Design (status not confirmed as completed/deployed)",
    isPlaceholder: false,
    statusLabel: "Not Finished",
  },
  {
    slug: "shelf-sales-inventory-management-platform",
    name: "SHELF – Sales & Inventory Management Platform",
    category: "Mobile Systems Design",
    shortDescription:
      "SHELF is a sales and inventory management platform that helps shop owners, staff, and salespeople monitor product availability, track stock levels, and manage daily shop operations.",
    technologies: ["Figma"],
    thumbnail: "/images/shelf/iPhone%2016.png",
    cardImage: undefined,
    screenshots: [],
    overview:
      "SHELF is designed to simplify product and inventory management for shop owners and their teams. The platform helps shop owners, staff, and salespeople check product information, monitor inventory, and manage stock more efficiently through an organized interface.",
    problemStatement:
      "Complex business operational requirements needed to be translated into intuitive, reliable mobile interfaces for field sales and inventory tracking.",
    objectives: [
      "Structure information architecture and end-to-end user workflows",
      "Design modules for rapid stock-level tracking",
      "Design modules for field order logging",
      "Design modules for transaction history updates",
    ],
    roleResponsibilities: [
      "Structured information architecture and end-to-end workflows",
      "Designed modules for stock tracking, field orders, and transaction history",
      "Translated business requirements into mobile interfaces",
    ],
    targetUsers: ["Field sales representatives", "Inventory/operations staff"],
    researchPlanning: undefined,
    approach:
      "Focused on mobile information architecture and workflows, designing clear modules to support rapid stock tracking, order logging, and transaction history in the field.",
    toolsTechnologies: ["Figma"],
    challengesSolutions: undefined,
    outcomeLearnings:
      "Delivered structured mobile workflows designed to make field sales and inventory tracking more intuitive and reliable.",
    designApproachHeading: "My Design Approach",
    learningExperienceHeading: "Learning Experience",
    keyScreens: [
      {
        title: "Product Management",
        description:
          "The product interface used to view or manage product information within the sales and inventory workflow.",
        image: "/images/shelf/shelf%20product.png",
      },
      {
        title: "Inventory Management",
        description:
          "The inventory interface used to check or monitor stock levels within the sales and inventory workflow.",
        image: "/images/shelf/shelf%20Inventory.png",
      },
    ],
    productManagement: {
      title: "Product Management",
      description:
        "The product interface presents the product information used to manage daily shop operations, allowing shop owners, staff, and salespeople to view or manage product details within the sales and inventory workflow.",
    },
    inventoryManagement: {
      title: "Inventory Management",
      description:
        "The inventory interface presents stock and availability information, allowing shop owners, staff, and salespeople to check or monitor inventory levels within the sales and inventory workflow.",
    },
    status: undefined,
    isPlaceholder: false,
  },
];

export const categories: (ProjectCategory | "All Projects")[] = [
  "All Projects",
  "UI/UX Design",
  "UI/UX Design and System Design",
  "Web Application / System Design",
  "System Architecture & Interface Design",
  "Mobile Systems Design",
];
