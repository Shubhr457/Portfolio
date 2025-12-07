"use client";

import { useState, useEffect } from "react";

// Icons as components
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

// Data
const skills = {
  blockchain: [
    "Solidity",
    "Rust",
    "Anchor Framework",
    "OpenZeppelin",
    "Hardhat",
    "Foundry",
    "Ethers.js",
    "Solana Web3",
    "Smart Contracts",
    "ERC-20",
    "ERC-1155",
    "Tokenomics",
  ],
  backend: [
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Diesel ORM",
    "Socket.io",
    "REST APIs",
    "System Design",
  ],
  tools: [
    "Git",
    "Docker",
    "Chai",
    "Mocha",
    "Postman",
    "VS Code",
  ],
};

const experiences = [
  {
    title: "Blockchain & Backend Developer",
    company: "SoluLab",
    period: "February 2025 - Present",
    duration: "11 months",
    description: [
      "Built upgradeable smart contracts for ICO, Crowdfunding, Vesting, Staking, Token Sales using Solidity & OpenZeppelin Upgradeable",
      "Developed Solana programs using Rust + Anchor for DEX logic, marketplace operations, and liquidity flows",
      "Created 100+ automated tests with Hardhat, Chai, and Ethers.js to ensure contract reliability",
      "Designed tokenomics features: vesting schedules, rewards, multi-stage fundraising, staking logic",
      "Built production-grade backends using Node.js, Express, TypeScript with modular & scalable API structures",
      "Implemented Socket.io for real-time communication and activity tracking",
    ],
    type: "full-time",
  },
  {
    title: "Blockchain Internship",
    company: "SoluLab",
    period: "June 2024 - January 2025",
    duration: "8 months",
    description: [
      "Developed Lydia Coin: comprehensive ERC-20 ecosystem with multi-sig vaults, burning, pausing, and minting",
      "Built Founoun NFT Marketplace: ERC-1155 with lazy minting, multi-recipient royalty distribution, and emergency controls",
      "Awarded Intern of the Month for outstanding performance and dedication",
    ],
    type: "internship",
    highlight: "🏆 Intern of the Month",
  },
  {
    title: "Data Science Fellow",
    company: "DataPlay",
    period: "March 2024 - June 2024",
    duration: "4 months",
    description: [
      "Gained foundational experience in data science and analytics",
      "Applied machine learning concepts to real-world datasets",
    ],
    type: "fellowship",
  },
];

const projects = [
  {
    title: "Real Estate Marketplace",
    description: "A comprehensive marketplace built on Solana featuring ownership transfers, bidding system, marketplace governance, and full backend integration.",
    tech: ["Solana", "Rust", "Anchor", "TypeScript", "PostgreSQL"],
    category: "Blockchain",
  },
  {
    title: "Crowdfunding + Vesting + Staking Suite",
    description: "Upgradeable smart contract ecosystem with cap management, vesting schedules, token claim logic, and multi-stage fundraising capabilities.",
    tech: ["Solidity", "OpenZeppelin", "Hardhat", "Ethers.js"],
    category: "DeFi",
  },
  {
    title: "Solana DEX Components",
    description: "Core DEX functionality including liquidity provisioning, token minting, LP burning, and swap execution mechanisms.",
    tech: ["Rust", "Anchor", "Solana Web3", "TypeScript"],
    category: "DeFi",
  },
  {
    title: "Lydia Coin",
    description: "Complete ERC-20 token ecosystem featuring multi-sig vaults, burning mechanisms, pausing functionality, and dynamic supply tokenomics.",
    tech: ["Solidity", "OpenZeppelin", "Hardhat", "Chai"],
    category: "Token",
  },
  {
    title: "Founoun NFT Marketplace",
    description: "ERC-1155 marketplace with lazy minting, multi-recipient royalty distribution, emergency controls, and comprehensive backend integration.",
    tech: ["Solidity", "ERC-1155", "Node.js", "MongoDB"],
    category: "NFT",
  },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid-bg">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-[#1f1f2e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold gradient-text">
              SR
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-sm"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#71717a] hover:text-[#00ff88] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#1f1f2e] pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="stagger-children">
            <div className="inline-block mb-6">
              <span className="section-heading">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text glow-text">Shubh Rathore</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#71717a] mb-4 font-mono">
              <span className="text-[#00ff88]">&lt;</span>
              Blockchain & Backend Developer
              <span className="text-[#00ff88]">/&gt;</span>
            </p>
            
            <p className="text-lg text-[#71717a] max-w-2xl mx-auto mb-8">
              Building secure, scalable smart contracts and backend systems for the decentralized future.
              Specializing in <span className="text-[#00d4ff]">Solidity</span>,{" "}
              <span className="text-[#00d4ff]">Rust (Anchor)</span>, and{" "}
              <span className="text-[#00d4ff]">Node.js</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <a
                href="https://linkedin.com/in/shubh-rathore-845577214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71717a] hover:text-[#00ff88] transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Shubhr457"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71717a] hover:text-[#00ff88] transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:shubhr457@gmail.com"
                className="text-[#71717a] hover:text-[#00ff88] transition-colors"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float">
          <div className="w-6 h-10 border-2 border-[#00ff88] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#00ff88] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-heading">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting the{" "}
                <span className="gradient-text">Future of Web3</span>
              </h2>
              <div className="space-y-4 text-[#a1a1aa]">
                <p>
                  I&apos;m a passionate Blockchain & Backend Developer with expertise in building 
                  secure, scalable, and upgradeable smart-contract systems paired with robust 
                  backend architectures.
                </p>
                <p>
                  With over 1.5 years of experience at SoluLab, I&apos;ve worked on high-impact 
                  projects spanning DeFi, NFT marketplaces, tokenomics, and real-time backend 
                  systems. I thrive on solving complex engineering problems and delivering 
                  production-ready solutions.
                </p>
                <p>
                  My recent work includes upgradeable smart contracts for ICO, Crowdfunding, 
                  Vesting, and Staking systems, as well as Solana programs for DEX and 
                  liquidity flows.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="card p-6 flex-1 min-w-[140px]">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-[#71717a]">Automated Tests Written</div>
                </div>
                <div className="card p-6 flex-1 min-w-[140px]">
                  <div className="text-3xl font-bold gradient-text-alt mb-2">1.5+</div>
                  <div className="text-sm text-[#71717a]">Years Experience</div>
                </div>
                <div className="card p-6 flex-1 min-w-[140px]">
                  <div className="text-3xl font-bold gradient-text mb-2">45+</div>
                  <div className="text-sm text-[#71717a]">GitHub Repositories</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="gradient-border p-8">
                <div className="font-mono text-sm">
                  <div className="text-[#71717a] mb-2">// shubh.config.ts</div>
                  <div>
                    <span className="text-[#ff79c6]">const</span>{" "}
                    <span className="text-[#00ff88]">developer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">name</span>:{" "}
                    <span className="text-[#f1fa8c]">&quot;Shubh Rathore&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">location</span>:{" "}
                    <span className="text-[#f1fa8c]">&quot;Rajasthan, India&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">role</span>:{" "}
                    <span className="text-[#f1fa8c]">&quot;Blockchain & Backend Dev&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">blockchain</span>: [
                    <span className="text-[#f1fa8c]">&quot;Ethereum&quot;</span>,{" "}
                    <span className="text-[#f1fa8c]">&quot;Solana&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">languages</span>: [
                    <span className="text-[#f1fa8c]">&quot;Solidity&quot;</span>,{" "}
                    <span className="text-[#f1fa8c]">&quot;Rust&quot;</span>,{" "}
                    <span className="text-[#f1fa8c]">&quot;TypeScript&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">passion</span>:{" "}
                    <span className="text-[#f1fa8c]">&quot;Building Web3&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00d4ff]">available</span>:{" "}
                    <span className="text-[#50fa7b]">true</span>,
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-heading">Technical Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blockchain Skills */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">⛓️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Blockchain</h3>
              <div className="flex flex-wrap gap-2">
                {skills.blockchain.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#ff00ff]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff00ff]/20 to-[#00ff88]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tools & Testing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-heading">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline line for mobile */}
            <div className="md:hidden timeline-line" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start"
                >
                  {/* Left side - for even items on desktop */}
                  <div className={`hidden md:block ${index % 2 === 0 ? "text-right" : ""}`}>
                    {index % 2 === 0 && (
                      <div className="card p-6">
                        <div className="flex items-center gap-2 justify-end mb-2">
                          {exp.highlight && (
                            <span className="text-sm bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full">
                              {exp.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-[#00ff88]">{exp.title}</h3>
                        <p className="text-lg text-[#00d4ff] mb-1">{exp.company}</p>
                        <p className="text-sm text-[#71717a] mb-4">
                          {exp.period} · {exp.duration}
                        </p>
                        <ul className="space-y-2 text-sm text-[#a1a1aa]">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 justify-end">
                              <span>{item}</span>
                              <span className="text-[#00ff88] mt-1">◆</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot - desktop */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#00ff88] pulse-glow" />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full min-h-[200px] bg-gradient-to-b from-[#00ff88] to-[#00d4ff]" />
                    )}
                  </div>

                  {/* Timeline dot - mobile */}
                  <div className="md:hidden timeline-dot" />

                  {/* Right side - for odd items on desktop, all items on mobile */}
                  <div className={`${index % 2 === 1 ? "" : "hidden md:hidden"} md:block`}>
                    {(index % 2 === 1 || true) && (
                      <div className="card p-6 md:hidden block">
                        <div className="flex items-center gap-2 mb-2">
                          {exp.highlight && (
                            <span className="text-sm bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full">
                              {exp.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-[#00ff88]">{exp.title}</h3>
                        <p className="text-lg text-[#00d4ff] mb-1">{exp.company}</p>
                        <p className="text-sm text-[#71717a] mb-4">
                          {exp.period} · {exp.duration}
                        </p>
                        <ul className="space-y-2 text-sm text-[#a1a1aa]">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#00ff88] mt-1">◆</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {index % 2 === 1 && (
                      <div className="card p-6 hidden md:block">
                        <div className="flex items-center gap-2 mb-2">
                          {exp.highlight && (
                            <span className="text-sm bg-[#00ff88]/20 text-[#00ff88] px-3 py-1 rounded-full">
                              {exp.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-[#00ff88]">{exp.title}</h3>
                        <p className="text-lg text-[#00d4ff] mb-1">{exp.company}</p>
                        <p className="text-sm text-[#71717a] mb-4">
                          {exp.period} · {exp.duration}
                        </p>
                        <ul className="space-y-2 text-sm text-[#a1a1aa]">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#00ff88] mt-1">◆</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-heading">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card p-6 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88]">
                    {project.category}
                  </span>
                  <ExternalLinkIcon />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-[#1f1f2e] text-[#71717a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-heading">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Technology (BTech)</h3>
              <p className="text-[#00d4ff] mb-1">Computer Science Engineering</p>
              <p className="text-[#71717a]">JECRC University</p>
              <p className="text-sm text-[#71717a]">2020 - 2024</p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#ff00ff]/20 flex items-center justify-center mb-6">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing Fundamentals</h3>
              <p className="text-[#00d4ff] mb-1">Google Digital Garage</p>
              <p className="text-[#71717a]">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-heading">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-[#71717a] mt-4 max-w-xl mx-auto">
              Interested in working together or have a project in mind? 
              I&apos;d love to hear from you. Let&apos;s build something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:shubhr457@gmail.com"
                className="card p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-sm text-[#71717a]">Email</p>
                  <p className="font-medium group-hover:text-[#00ff88] transition-colors">
                    shubhr457@gmail.com
                  </p>
                </div>
              </a>

              <div className="card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff00ff]/20 to-[#00ff88]/20 flex items-center justify-center text-[#ff00ff]">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-sm text-[#71717a]">Location</p>
                  <p className="font-medium">Baran, Rajasthan, India</p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/shubh-rathore-845577214"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform">
                  <LinkedInIcon />
                </div>
                <div>
                  <p className="text-sm text-[#71717a]">LinkedIn</p>
                  <p className="font-medium group-hover:text-[#00ff88] transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>

            {/* CTA Card */}
            <div className="gradient-border p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center mb-6 pulse-glow">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-[#a1a1aa] mb-6">
                Whether it&apos;s smart contracts, DeFi protocols, or backend systems, 
                I&apos;m here to bring your vision to life.
              </p>
              <a
                href="mailto:shubhr457@gmail.com"
                className="btn-primary"
              >
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1f1f2e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/shubh-rathore-845577214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00ff88] transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Shubhr457"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#00ff88] transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:shubhr457@gmail.com"
              className="text-[#71717a] hover:text-[#00ff88] transition-colors"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
