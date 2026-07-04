import { getAllPosts, Post } from '@/lib/markdown';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Database, 
  TrendingUp, 
  Coins, 
  BrainCircuit 
} from 'lucide-react';

export default async function HomePage() {
  const posts = await getAllPosts();

  // Skill groups definition for Segmented Core Ecosystem Matrix
  interface Skill {
    name: string;
    desc: string;
  }

  interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    colorClass: string;
    glowClass: string;
    skills: Skill[];
  }

  const skillCategories: SkillCategory[] = [
    {
      title: 'Infrastructure & Cloud Architecture',
      icon: <Server className="w-5 h-5" />,
      colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      glowClass: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.15)]',
      skills: [
        { name: 'AWS Serverless', desc: 'Lambda, API Gateway, event-driven compute at scale.' },
        { name: 'DynamoDB Single-Table', desc: 'Optimized schemas with explicit single-table index patterns.' },
        { name: 'Next.js 15 & Vercel', desc: 'React Server Components with edge-optimized routing.' },
        { name: 'Caddy Reverse Proxy', desc: 'Secure, automated SSL reverse-proxy edge setups.' },
        { name: 'Edge Routing', desc: 'Low-latency global routing architectures and caching logic.' }
      ]
    },
    {
      title: 'FinTech & Payment Orchestration',
      icon: <Coins className="w-5 h-5" />,
      colorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      glowClass: 'hover:border-indigo-500/30 hover:shadow-[0_0_20px_-3px_rgba(99,102,241,0.15)]',
      skills: [
        { name: 'Adyen & Stripe Integration', desc: 'Multi-merchant drop-ins, subscription billing, secure tokenization, and webhooks.' },
        { name: 'Bank Onboarding & Sponsor Rails', desc: 'Direct banking integrations, ACH/wire, and card network compliance.' },
        { name: 'Card Issuance Constructs', desc: 'Fulfillment workflows, ledgering, and transaction authorization.' },
        { name: 'NetSuite & Salesforce ERP', desc: 'Fault-tolerant ledgers and real-time syncing pipelines.' }
      ]
    },
    {
      title: 'AI Orchestration & Tooling',
      icon: <BrainCircuit className="w-5 h-5" />,
      colorClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      glowClass: 'hover:border-purple-500/30 hover:shadow-[0_0_20px_-3px_rgba(168,85,247,0.15)]',
      skills: [
        { name: 'Custom Reasoning Agents', desc: 'Secure agent routing networks powered by dynamic context execution.' },
        { name: 'Infer.so Model Logic', desc: 'Predictive analytics orchestration and structured model hooks.' },
        { name: 'Multi-Tenant Webhooks', desc: 'High-throughput, signature-verified webhook ingestion.' },
        { name: 'Data Ingestion Pipelines', desc: 'Constant-memory, high-volume ETL streams and data cleaning.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 1. GLOBAL NAVIGATION & NAVIGATION WAYPOINTS */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              RJH<span className="text-indigo-400">.ii</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a 
              href="https://rhegedus.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-purple-400 transition-colors"
              aria-label="Consulting Website"
            >
              <span>Consulting</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://github.com/rhegedus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/robert-hegedus-ii/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero and Content Section */}
      <main className="pb-24 space-y-20 relative overflow-hidden">
        
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* 2. THE "0-to-1 BUILDER & SYSTEMS ARCHITECT" HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for Architecture & Solutions Advisory
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                Robert <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                  Hegedus II
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide">
                0-to-1 Product Builder & Enterprise Solutions Leader
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
                Building secure distributed ecosystems, executing high-volume cloud data pipelines, and 
                architecting strategic payment/integration frameworks for hyper-growth SaaS platforms 
                and complex enterprise accounts. Highlight the unique ability to bridge deep code implementation 
                with executive vendor, bank, and client relationships.
              </p>
              <div className="pt-2">
                <a 
                  href="https://rhegedus.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200 group/btn"
                >
                  Visit Consulting Site
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Context Sidebar */}
            <div className="lg:col-span-4 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                Core Operating Principles
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Enforce strict state validation and zero-leak security boundaries.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Database className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Model scalable O(1) single-table entities and fast webhook handlers.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Layers className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Decouple heavy legacy scripts into streamlined enterprise services.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. STRATEGIC METRICS & IMPACT BANNER */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Growth</span>
              </div>
              <div className="text-3xl font-extrabold text-cyan-400 mb-2 tracking-tight">
                $1.2MM+ Revenue Growth
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                Apto Payments
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scoping, training, and scaling strategic sales/engineering alignment to unlock high-value accounts.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Velocity</span>
              </div>
              <div className="text-3xl font-extrabold text-indigo-400 mb-2 tracking-tight">
                0-to-1 SaaS Scale
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                Production Serverless Stacks
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Architecting, launches, and lifecycle management of production serverless stacks.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Integrations</span>
              </div>
              <div className="text-3xl font-extrabold text-purple-400 mb-2 tracking-tight">
                Enterprise Scale
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                Multi-Tenant Integrations
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineering fault-tolerant NetSuite, Zendesk, and payment gateway rails removing core team dependencies.
              </p>
            </div>

          </div>
        </section>

        {/* 4. THE SEGMENTED CORE ECOSYSTEM MATRIX (TECH STACK) */}
        <section className="max-w-7xl mx-auto px-6 space-y-6">
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
              Systems Engineering Ecosystem
            </h2>
            <p className="text-xl font-bold text-slate-200">
              Validated Technical Skill Matrix
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className={`bg-slate-900/20 border border-slate-800/85 rounded-2xl p-6 transition-all duration-300 ${category.glowClass}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg border ${category.colorClass}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-slate-200 text-sm tracking-wide">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:bg-slate-950/90 hover:border-slate-700/60 transition-all duration-200"
                    >
                      <div className="text-xs font-bold text-slate-200">{skill.name}</div>
                      <div className="text-2xs text-slate-400 mt-1 leading-relaxed">{skill.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ENHANCED PROJECT DISCOVERY GRID */}
        <section className="max-w-7xl mx-auto px-6 space-y-6">
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
              Selected Architectures
            </h2>
            <p className="text-xl font-bold text-slate-200">
              Active Builds & Solutions Toolkit
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="p-12 rounded-2xl border border-slate-850 bg-slate-900/10 text-center space-y-3">
              <p className="text-sm text-slate-400">
                No active projects or blueprints found.
              </p>
              <p className="text-xs text-slate-500">
                Add markdown files to the `content/` folder to populate this grid.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: Post) => {
                const isFpm = post.slug === 'family-pet-manager';
                const isToolkit = post.slug === 'solutions-engineering-toolkit';

                // Determine border hover glow dynamic classes
                let borderHoverClass = 'border-slate-800/80 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(148,163,184,0.05)]';
                let glowColor = 'bg-slate-500';

                if (isFpm) {
                  borderHoverClass = 'border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]';
                  glowColor = 'bg-cyan-500';
                } else if (isToolkit) {
                  borderHoverClass = 'border-indigo-500/20 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.12)]';
                  glowColor = 'bg-indigo-500';
                }

                // Determine post concise description
                let shortDesc = '';
                if (isFpm) {
                  shortDesc = 'A multi-tenant, AI-driven pet registry platform engineered on a serverless AWS single-table stack with Stripe & Adyen billing, TNR quota controls, and exposure risk contact tracing.';
                } else if (isToolkit) {
                  shortDesc = 'A consolidated, enterprise-grade engineering hub designed to automate high-volume user data ingestion, transactional messaging validation, support auditing, and client delivery operations.';
                } else if (post.slug === 'adyen-demo') {
                  shortDesc = 'A comprehensive demonstration environment showcasing advanced multi-merchant payment orchestration, tokenization flows, and secure webhooks utilizing Adyen\'s public core API blocks.';
                } else if (post.slug === 'caddy-proxy') {
                  shortDesc = 'A lightweight, highly resilient reverse-proxy layer configured to orchestrate incoming edge traffic, automate SSL termination, and securely forward requests to multi-tenant backends.';
                }

                return (
                  <Link
                    key={post.slug}
                    href={`/portfolio/${post.slug}`}
                    className={`block p-8 rounded-2xl border bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 group relative overflow-hidden ${borderHoverClass}`}
                  >
                    
                    {/* Ambient glow effect inside card */}
                    <div className={`absolute -right-12 -bottom-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-300 ${glowColor}`} />

                    <div className="flex flex-col h-full justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          {post.metadata.company && (
                            <span className="text-2xs font-extrabold text-slate-500 tracking-wider uppercase">
                              {post.metadata.company}
                            </span>
                          )}
                          
                          {/* Badge based on status or slug */}
                          <div>
                            {isFpm ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                Active Production / Founder
                              </span>
                            ) : isToolkit ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                Open-Source Hub
                              </span>
                            ) : (
                              post.metadata.status && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                  {post.metadata.status}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                          {post.metadata.title}
                        </h3>

                        {shortDesc && (
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                            {shortDesc}
                          </p>
                        )}
                      </div>

                      {/* Render tag matrices */}
                      {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900">
                          {post.metadata.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-3xs font-semibold rounded bg-slate-950 text-slate-400 border border-slate-800/80 group-hover:border-slate-800 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
                    </div>

                  </Link>
                );
              })}
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Robert Hegedus II. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://rhegedus.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Consulting</a>
            <a href="https://github.com/rhegedus" className="hover:text-slate-300 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/robert-hegedus-ii/" className="hover:text-slate-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
