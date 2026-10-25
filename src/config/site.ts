/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the only file you need to edit to change content.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  How placeholders work
 *  ---------------------
 *  Any link set to `null` is treated as "not configured yet":
 *    • In production (`npm run build`), it is simply not rendered — no dead
 *      buttons, no fake links.
 *    • In development (`npm run dev`), a dashed "placeholder" chip appears in
 *      its place so you can see what still needs filling in.
 *
 *  Search this file for `TODO` to find everything that still needs input.
 *
 *  Resume
 *  ------
 *  Copy your PDF to `public/resume/Tamal_Sen_Resume.pdf`. Every "Download
 *  Resume" button appears automatically once the file exists at build time.
 *
 *  Accuracy
 *  --------
 *  Everything below is shown publicly to recruiters. Lines marked `VERIFY`
 *  are worth a second look — keep only what your work actually supports.
 */

/** A URL, or `null` when it hasn't been provided yet. */
export type OptionalLink = string | null;

/**
 * "professional" = used in paid work. "project" = used in personal projects.
 * "learning" = currently learning.
 */
export type SkillStatus = "professional" | "project" | "learning";

export interface Skill {
  name: string;
  status: SkillStatus;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "databases" | "tools";
  title: string;
  description: string;
  skills: Skill[];
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface Endpoint {
  method: HttpMethod;
  path: string;
  /** Short description of what the endpoint does. */
  note: string;
  /** Requires an access token. */
  auth?: boolean;
  /** Restricted to a role, e.g. "admin". */
  role?: string;
}

/**
 * Which built-in illustration to show for a project. Illustrations are drawn
 * in CSS and captioned as illustrations — they are never passed off as
 * screenshots.
 */
export type PreviewKind = "cms" | "lease" | "api" | "dashboard";

export type ProjectCategory = "professional" | "personal";

/** A block in the expandable case-study panel. */
export interface ProjectNote {
  title: string;
  /** A paragraph, or a list of points. */
  body: string | string[];
}

export interface Project {
  /** Unique, URL-safe id. Used for anchors. */
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  /** Employer or context, e.g. "BlueHorse Software Solutions". */
  organization?: string;
  summary: string;
  /** Heading for the bullet list on the card, e.g. "My contributions". */
  highlightsTitle: string;
  highlights: string[];
  /** Blocks shown in the expandable case-study / engineering-notes panel. */
  notes: ProjectNote[];
  stack: string[];
  links: {
    github: OptionalLink;
    demo: OptionalLink;
  };
  /** Shown instead of links when the code cannot be shared (company work). */
  privateNote?: string;
  preview: PreviewKind;
  /** Endpoints shown in the API illustration (preview: "api" only). */
  endpoints?: Endpoint[];
  /** Request pipeline shown in the API illustration (preview: "api" only). */
  pipeline?: string[];
  /**
   * Optional real screenshot that replaces the CSS illustration.
   * Place the image in `public/projects/` and reference it as
   * `/projects/your-image.png`. Use only screenshots you're allowed to publish.
   */
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ExperienceProject {
  name: string;
  stack: string[];
  items: string[];
}

export interface Experience {
  organization: string;
  /** Your official job title. */
  role: string | null;
  /** One-line description of the work. */
  focus: string;
  start: string;
  /** Use "Present" for a current position. */
  end: string;
  location: string | null;
  /** Work grouped by project, so responsibilities stay clearly separated. */
  projects: ExperienceProject[];
}

export interface Education {
  degree: string;
  short: string;
  institution: string;
  year: string;
  result: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Identity & links
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  forWhom: string[];
  capabilities: string[];
  problemsSolved: string[];
  technologies: string[];
  caseStudySlug?: string;
}

export interface ClientProcessStep {
  step: string;
  title: string;
  description: string;
}

export const site = {
  /** Canonical URL. Override with NEXT_PUBLIC_SITE_URL if needed. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tamalslab.in",

  brandName: "Tamal's Lab",
  name: "Tamal Sen",
  role: "Software Developer",
  location: "West Bengal, India",

  homeHeadline: "Building practical software solutions.",
  homeIntro:
    "Tamal's Lab is my space for exploring web technologies, developing software projects, and turning technical ideas into practical applications.",

  headline: "Building practical web applications and reliable backend systems.",
  intro:
    "I develop web applications and backend systems using React, Node.js, Laravel, and modern database technologies, with a focus on useful functionality, maintainable code, and reliable software.",

  /** Small label in the hero. Set to `null` to hide it. */
  availability: "Open to relevant opportunities & projects" as string | null,

  /** Used for <meta name="description"> and social cards. */
  seoDescription:
    "Tamal's Lab — Software developer building web applications, backend APIs, and reliable database systems with React, Node.js, Laravel, PostgreSQL, and MongoDB.",

  links: {
    email: "hello@tamalslab.in" as OptionalLink,
    personalEmail: "stamal2001@gmail.com" as OptionalLink,
    github: "https://github.com/sTamal2001" as OptionalLink,
    linkedin: "https://www.linkedin.com/in/stamal2001/" as OptionalLink,
  },

  resume: {
    /** Path inside `public/`. The buttons only appear when this file exists. */
    path: "/resume/Tamal_Sen_Resume.pdf",
    /** File name suggested to the browser when downloading. */
    downloadName: "Tamal_Sen_Resume.pdf",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
//  About
// ─────────────────────────────────────────────────────────────────────────────

export const about = {
  paragraphs: [
    "I'm a software developer at BlueHorse Software Solutions, based in West Bengal, India. I work on business web applications across the stack — React interfaces, Node.js backends, REST APIs, and the PostgreSQL and MongoDB databases behind them.",
    "On AuditFlow, a lease-accounting application, I've worked directly with the client to understand requirements, clarify how features should behave, and turn them into implementation work — then tested, debugged, and refined features based on feedback. On a SaaS CMS management platform, I've built admin interfaces, backend functionality, and the APIs that connected websites use for their content.",
    "My background also includes Laravel and PHP — MVC, Eloquent ORM, and Blade — along with WordPress development tasks. Outside work, I build personal projects such as Ledgerly and an Employee Management REST API to practise backend design: authentication, authorization, caching, and clear API structure.",
    "I care about software that is genuinely useful, and code that the next developer can read and maintain.",
  ],
  focus: [
    {
      title: "Business applications",
      description: "Software built around real workflows and the people who use it.",
    },
    {
      title: "Requirements to code",
      description: "Clarifying expected behaviour before turning it into tasks.",
    },
    {
      title: "Backend APIs",
      description: "REST endpoints with authentication, authorization, and validation.",
    },
    {
      title: "Data",
      description: "PostgreSQL and MongoDB, modelled around how the data is used.",
    },
    {
      title: "Testing & maintainability",
      description: "Debugging carefully and keeping code readable for the next change.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
//  Skills
// ─────────────────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces and client-side application logic.",
    skills: [
      { name: "React", status: "professional" },
      { name: "JavaScript", status: "professional" },
      { name: "HTML5", status: "professional" },
      { name: "CSS3", status: "professional" },
      { name: "Next.js", status: "project" },
      { name: "TypeScript", status: "project" }, // VERIFY
      { name: "Tailwind CSS", status: "project" },
      { name: "Bootstrap", status: "project" }, // VERIFY
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, server-side logic, and authentication.",
    skills: [
      { name: "Node.js", status: "professional" },
      { name: "REST APIs", status: "professional" },
      { name: "PHP", status: "professional" },
      { name: "Laravel", status: "professional" },
      { name: "Express.js", status: "project" }, // VERIFY: "professional" if used at work
      { name: "JWT authentication", status: "project" },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    description: "Relational and document data modelling.",
    skills: [
      { name: "PostgreSQL", status: "professional" },
      { name: "MongoDB", status: "professional" },
      { name: "SQL", status: "professional" },
      { name: "Prisma ORM", status: "project" },
    ],
  },
  {
    id: "tools",
    title: "Tools & deployment",
    description: "Version control, servers, and hosting.",
    skills: [
      { name: "Git", status: "professional" }, // VERIFY
      { name: "GitHub", status: "project" },
      { name: "Linux", status: "project" },
      { name: "Nginx", status: "project" },
      { name: "PM2", status: "project" },
      { name: "Vercel", status: "project" },
      { name: "Netlify", status: "project" }, // VERIFY
      { name: "Docker", status: "learning" },
      { name: "GitHub Actions", status: "learning" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Projects — the single source of truth for every project on the page.
// ─────────────────────────────────────────────────────────────────────────────

const bluehorse = "BlueHorse Software Solutions";
const confidential = "Confidential client work — shown as an anonymised case study.";

export const projects: Project[] = [
  {
    slug: "saas-cms-platform",
    name: "SaaS CMS Management Platform",
    tagline: "Admin platform and content API for CMS-powered websites",
    category: "professional",
    organization: bluehorse,
    summary:
      "A SaaS administrative platform and backend used to manage dynamic CMS-powered websites. The platform exposes APIs that connected websites consume to retrieve and manage their dynamic content.",
    highlightsTitle: "My contributions",
    highlights: [
      "Developed React-based administrative interfaces.",
      "Implemented Node.js backend functionality.",
      "Developed and integrated REST APIs for dynamic website content.",
      "Worked with PostgreSQL for data storage and retrieval.",
      "Contributed to the functionality connecting the platform with its CMS-powered websites.",
    ],
    notes: [
      {
        title: "Overview",
        body: "Content for several websites is managed from one administrative platform. Each connected website retrieves its dynamic content from the platform through REST APIs instead of storing it separately.",
      },
      {
        title: "My role",
        body: "Developer on the team, working across the React admin interface, the Node.js backend, and the content APIs.",
      },
      {
        title: "Technical implementation",
        body: [
          "React admin screens for managing website content.",
          "Node.js backend exposing REST endpoints to connected websites.",
          "PostgreSQL for storing and retrieving content data.",
        ],
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    links: { github: null, demo: null },
    privateNote: confidential,
    preview: "cms",
  },
  {
    slug: "auditflow",
    name: "AuditFlow",
    tagline: "Lease-accounting application",
    category: "professional",
    organization: bluehorse,
    summary:
      "AuditFlow is a lease-accounting application supporting business accounting workflows and lease-related functionality. I worked with the client directly, from understanding requirements through implementation and refinement.",
    highlightsTitle: "My contributions",
    // VERIFY: confirm each point reflects your work on AuditFlow.
    highlights: [
      "Communicated directly with the client to understand business requirements.",
      "Clarified functional requirements and expected application behaviour.",
      "Translated requirements into technical tasks and implementation work.",
      "Developed frontend functionality using React.",
      "Implemented backend functionality using Node.js.",
      "Worked with MongoDB for application data.",
      "Tested features, debugged issues, and refined implementations based on feedback.",
    ],
    notes: [
      {
        title: "Business problem",
        body: "Lease accounting depends on structured, rule-driven workflows around lease data. The business needed an application that supports those workflows in the way its accounting team actually works.",
      },
      {
        title: "My role",
        body: "Developer working directly with the client — gathering and clarifying requirements, then building, testing, and refining features across the React frontend and Node.js backend.",
      },
      {
        title: "Requirements & communication",
        body: [
          "Discussed business requirements directly with the client.",
          "Clarified expected behaviour before implementation.",
          "Broke requirements down into technical tasks.",
          "Refined features based on client feedback.",
        ],
      },
      {
        title: "Technical implementation",
        body: [
          "React frontend for the application's workflows.",
          "Node.js backend for application logic and APIs.",
          "MongoDB for application data.",
        ],
      },
    ],
    stack: ["React", "Node.js", "MongoDB"],
    links: { github: null, demo: null },
    privateNote: confidential,
    preview: "lease",
  },
  {
    slug: "employee-api",
    name: "Employee Management REST API",
    tagline: "Node.js API with authentication, roles, caching, and audit logs",
    category: "personal",
    summary:
      "A REST API for employee data management, focused on authentication, access control, and a clean backend structure — routes, middleware, controllers, and utilities kept separate.",
    highlightsTitle: "Key features",
    // Verified against the source code in the public repository.
    highlights: [
      "CRUD endpoints for employee records.",
      "Paginated list endpoint with name search.",
      "JWT access tokens plus refresh tokens stored server-side and revoked on logout.",
      "Role-based authorization middleware for admin-only operations.",
      "Zod-based request validation middleware.",
      "Redis caching for list queries, cleared on writes, with a database fallback.",
      "Audit log of create, update, and delete actions.",
    ],
    notes: [
      {
        title: "Problem",
        body: "An API that manages people data needs more than CRUD: list endpoints should stay responsive as records grow, only the right users should change data, and changes should be traceable.",
      },
      {
        title: "Implementation",
        body: [
          "Express 5 app with versioned routes under /api/v1.",
          "PostgreSQL via node-postgres with parameterised queries.",
          "Passwords hashed with bcrypt; registration wrapped in a transaction.",
          "Helmet security headers, rate limiting, and a central error handler.",
        ],
      },
      {
        title: "Key decisions",
        body: [
          "Role checks live in reusable middleware rather than in each handler.",
          "Refresh tokens are stored per user, so logout can revoke them.",
          "Cache failures fall back to the database instead of failing the request.",
        ],
      },
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Zod", "Redis"],
    links: {
      github: "https://github.com/sTamal2001/employee-api",
      demo: null, // Not publicly hosted — add a URL only if you deploy a public demo.
    },
    preview: "api",
    pipeline: ["Request", "Rate limit", "Authenticate", "Authorize", "Controller", "PostgreSQL"],
    // Selected routes from the repository. TODO: add PUT /employees/:id once
    // its auth + admin middleware are re-enabled in employee.routes.js.
    endpoints: [
      { method: "POST", path: "/api/v1/auth/login", note: "Issue access + refresh tokens" },
      { method: "POST", path: "/api/v1/auth/refresh", note: "New access token" },
      { method: "POST", path: "/api/v1/auth/logout", note: "Revoke refresh token" },
      { method: "GET", path: "/api/v1/employees?page=&search=", note: "Paginated, cached search" },
      { method: "GET", path: "/api/v1/employees/:id", note: "Single record", auth: true },
      { method: "POST", path: "/api/v1/employees", note: "Create record", auth: true, role: "admin" },
      { method: "DELETE", path: "/api/v1/employees/:id", note: "Delete record", auth: true, role: "admin" },
      { method: "GET", path: "/api/v1/audit-logs", note: "Change history", auth: true, role: "admin" },
    ],
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    tagline: "Personal finance dashboard",
    category: "personal",
    summary:
      "A personal finance dashboard for organising financial records and presenting them through a web interface. The React frontend and the Express API are deployed separately and communicate over REST.",
    highlightsTitle: "Key features",
    // Verified from the deployed application's routes and API calls.
    highlights: [
      "Account sign-up and sign-in.",
      "Dashboard overview of financial records.",
      "Transactions that can be added, edited, and deleted.",
      "Budgets and goals views.",
      "Recurring payments and subscriptions, with suggested recurring transactions.",
      "User-defined rules for organising transactions, and document uploads.",
    ],
    notes: [
      {
        title: "Problem",
        body: "Financial records spread across bank apps, notes, and spreadsheets are hard to review together. Ledgerly keeps them in one place and organises them so spending is easier to understand.",
      },
      {
        title: "Implementation",
        body: [
          "React single-page app built with Vite and Tailwind CSS, hosted on Vercel.",
          "Node.js and Express REST API, deployed as a separate service.",
          "Prisma schema and migrations over a PostgreSQL database.",
        ],
      },
      {
        title: "Key decisions",
        body: [
          "Frontend and API are separate deployments, so each can be released independently.",
          "Prisma keeps the schema, migrations, and query types in one place.",
        ],
      },
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    links: {
      github: null, // TODO: add if you make the repository public.
      demo: "https://ledgerly-lyart-xi.vercel.app/",
    },
    preview: "dashboard",
  },
];

/** Labels and descriptions for the two project groups. */
export const projectGroups: Record<ProjectCategory, { title: string; description: string }> = {
  professional: {
    title: "Professional work",
    description:
      "Built as part of my role at BlueHorse Software Solutions. Code and client details are confidential, so these are anonymised case studies.",
  },
  personal: {
    title: "Personal projects",
    description: "Independent projects, with source code and live demos where available.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  Experience
// ─────────────────────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    organization: "BlueHorse Software Solutions Pvt Ltd",
    role: "Software Developer",
    focus: "Full-stack development of business web applications.",
    start: "February 2025",
    end: "Present",
    location: "Midnapore",
    projects: [
      {
        name: "SaaS CMS Management Platform",
        stack: ["React", "Node.js", "PostgreSQL", "REST APIs"],
        items: [
          "Developed React administrative interfaces for managing website content.",
          "Implemented Node.js backend functionality and REST APIs consumed by connected websites.",
          "Worked with PostgreSQL for storing and retrieving content data.",
        ],
      },
      {
        name: "AuditFlow — Lease Accounting",
        stack: ["React", "Node.js", "MongoDB"],
        items: [
          "Communicated directly with the client to gather and clarify requirements.",
          "Translated requirements into technical tasks and implemented them in React and Node.js.",
          "Worked with MongoDB for application data.",
          "Tested features, debugged issues, and refined implementations based on feedback.",
        ],
      },
      {
        name: "Laravel & WordPress",
        stack: ["PHP", "Laravel", "WordPress"],
        items: [
          "Laravel and PHP development training covering MVC, Eloquent ORM, and Blade templates.",
          "Contributed to migrating an existing website to Laravel.",
          "WordPress development tasks.",
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Education
// ─────────────────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "MAKAUT / Dr. B. C. Roy Engineering College, Durgapur",
    year: "2024",
    result: "CGPA 7.47 / 10",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "ICIS College, Bankura",
    year: "2021",
    result: "71.76%",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Development workflow
// ─────────────────────────────────────────────────────────────────────────────

export const workflow: WorkflowStep[] = [
  {
    title: "Understand requirements",
    description: "Learn what the feature is for, who uses it, and what done looks like.",
  },
  {
    title: "Clarify behaviour",
    description: "Confirm expected behaviour, edge cases, and technical constraints.",
  },
  {
    title: "Plan the tasks",
    description: "Break the work into small, reviewable implementation tasks.",
  },
  {
    title: "Build",
    description: "Develop the frontend, backend, and database changes.",
  },
  {
    title: "Integrate",
    description: "Connect APIs and components, handling loading and error states.",
  },
  {
    title: "Test and refine",
    description: "Test the flows, debug issues, and refine based on feedback.",
  },
  {
    title: "Prepare for delivery",
    description: "Tidy up, verify the build, and hand over a working feature.",
  },
];

/** Shown alongside the workflow so it isn't read as a claim about every project. */
export const workflowNote =
  "Direct client communication and requirement gathering were part of my AuditFlow work. On other projects I've contributed to specific parts of this process as a member of the team.";

// ─────────────────────────────────────────────────────────────────────────────
//  Client Services
// ─────────────────────────────────────────────────────────────────────────────

export const services: ServiceItem[] = [
  {
    id: "web-apps",
    title: "Web Application Development",
    subtitle: "Custom business systems, interactive web applications, and robust backends",
    description:
      "Developing scalable, maintainable web applications using React, Node.js, and Laravel. From interactive user interfaces to robust database schemas and backend logic, applications are built around real workflows and operational requirements.",
    forWhom: [
      "Small businesses replacing manual spreadsheets or fragmented tools with a custom web system",
      "Startups building a dependable MVP ready for real user testing and validation",
      "Teams needing internal dashboards, administrative consoles, and operational portals",
    ],
    capabilities: [
      "Full-stack React (Next.js / Vite) and Node.js / Express architectures",
      "Laravel applications using MVC, Eloquent ORM, Blade templates, and REST APIs",
      "Relational and document database design (PostgreSQL, MongoDB)",
      "Role-based access control, secure authentication, and session handling",
      "Clean, responsive styling with accessible keyboard navigation and fast load times",
    ],
    problemsSolved: [
      "Rigid off-the-shelf software that doesn't fit your operational workflows",
      "Disorganized data scattered across bank apps, spreadsheets, and emails",
      "Fragile custom scripts needing consolidation into a reliable web system",
    ],
    technologies: ["React", "Node.js", "Laravel", "PHP", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    caseStudySlug: "ledgerly",
  },
  {
    id: "apis-integrations",
    title: "API Development & Integration",
    subtitle: "RESTful endpoints, secure authentication, and system connections",
    description:
      "Architecting clean, versioned REST APIs and connecting web applications to external services, webhooks, and third-party platforms with structured validation, authorization, and error handling.",
    forWhom: [
      "Applications requiring custom backend logic and secure data endpoints",
      "Businesses needing integrations between internal systems, CMS, and third-party platforms",
      "Frontend teams needing reliable, predictable, and well-structured API endpoints",
    ],
    capabilities: [
      "RESTful API design with clean separation: routes, middleware, controllers, and queries",
      "JWT access tokens, refresh token rotation, and role-based authorization",
      "High-speed caching with Redis and graceful database fallbacks",
      "Schema-based request validation (Zod / Request validation) and audit logging",
      "Connecting web applications with external REST APIs and CMS content pipelines",
    ],
    problemsSolved: [
      "Unreliable or slow API endpoints with inconsistent responses",
      "Lack of role authorization leading to insecure data modifications",
      "Data synchronization issues between disconnected software platforms",
    ],
    technologies: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "Redis", "JWT", "REST APIs"],
    caseStudySlug: "employee-api",
  },
  {
    id: "wordpress",
    title: "WordPress Development & Modernization",
    subtitle: "Custom functionality, improvements, and headless / modern migrations",
    description:
      "Maintaining and improving WordPress websites, implementing custom functionality, optimizing page performance, and assisting with phased migrations to modern frameworks such as Laravel or React.",
    forWhom: [
      "Website owners needing reliable maintenance, bug fixes, or functionality enhancements",
      "Businesses outgrowing generic plugins and needing custom PHP/WordPress logic",
      "Organizations planning a phased transition from legacy WordPress to modern web frameworks",
    ],
    capabilities: [
      "Custom WordPress development and template improvements",
      "Content structure and database optimization",
      "API integrations for CMS-powered multi-site management platforms",
      "Migration planning and execution from WordPress to Laravel / React architectures",
      "Troubleshooting plugin conflicts, performance issues, and styling bugs",
    ],
    problemsSolved: [
      "Overloaded plugin stacks causing performance bottlenecks and conflicts",
      "Broken layouts or functionality following core or plugin updates",
      "Difficulty managing dynamic content across multiple connected web properties",
    ],
    technologies: ["WordPress", "PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
    caseStudySlug: "saas-cms-platform",
  },
  {
    id: "maintenance-support",
    title: "Technical Support & Deployment",
    subtitle: "Bug triage, performance tuning, and server configuration",
    description:
      "Hands-on engineering support for live web applications. Assisting with Linux server configurations, Nginx reverse proxies, PM2 process management, Vercel deployments, debugging production issues, and keeping codebases healthy.",
    forWhom: [
      "Business owners who need dependable technical help for their web systems",
      "Developers needing assistance with Linux server deployment and hosting",
      "Teams with unresolved performance bottlenecks or intermittent production bugs",
    ],
    capabilities: [
      "Linux server deployment and environment configuration",
      "Nginx reverse proxy setup, SSL certificates, and PM2 process monitoring",
      "Vercel and cloud hosting configuration with direct routing support",
      "Performance optimization (bundle reduction, query tuning, caching)",
      "Systematic debugging, error handling, and clean code refactoring",
    ],
    problemsSolved: [
      "Deployment downtime, 502 Bad Gateway errors, or server crashes",
      "Slow database queries or unoptimized frontend bundles",
      "Lack of technical documentation for maintaining running servers",
    ],
    technologies: ["Linux", "Nginx", "PM2", "Vercel", "Git", "Node.js", "PostgreSQL"],
    caseStudySlug: "auditflow",
  },
];

export const clientProcess: ClientProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description:
      "We discuss your specific business goals, understand how users will interact with the system, clarify edge cases, and define clear acceptance criteria.",
  },
  {
    step: "02",
    title: "Technical Plan & Scope",
    description:
      "I outline the architecture, data model, technology choices, and break down the project into transparent milestones with clear deliverables.",
  },
  {
    step: "03",
    title: "Iterative Development",
    description:
      "Working code is built in structured increments. You receive regular progress updates and testable previews so feedback is integrated early.",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    description:
      "End-to-end flows, error states, and responsive layouts are verified across devices to ensure reliability and performance before launch.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    description:
      "The application is deployed to your production environment (Vercel, Linux/Nginx, or your cloud host) with clean documentation and handover support.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Navigation Sets
// ─────────────────────────────────────────────────────────────────────────────

/** Homepage navigation: intentionally minimal, no prominent resume or services links */
export const homeNavigation = [
  { label: "Work", href: "/work" },
  { label: "Developer Profile", href: "/developer" },
  { label: "Contact", href: "/contact" },
] as const;

/** Internal pages navigation */
export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Developer", href: "/developer" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer navigation: complete directory across the domain */
export const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Developer Profile", href: "/developer" },
  { label: "Services", href: "/services" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

/** Legacy navigation fallback for existing anchors if needed */
export const navigation = siteNavigation;
