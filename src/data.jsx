export const DATA = {
  brand: {
    first: "Nancy",
    last: "Yadav",
    portfolioYear: "2025",
    initials: "N·Y",
  },

  hero: {
    greetingDevanagari: "",
    greetingSmall: "I'm Nancy",
    role: "Python developer · AI agents, RAG & real-time pipelines",
    blurb:
      "AI Engineer, ex-Siemens R&D intern, IEEE author and hackathon winner. I like turning ideas into reliable, production-ready systems, from multi-agent workflows to sub-3-second voice AI.",
  },

  navLinks: [
    { href: "#about",        label: "About" },
    { href: "#education",    label: "Education" },
    { href: "#experience",   label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects",     label: "Projects" },
    { href: "#skills",       label: "Skills" },
    { href: "#contact",      label: "Contact" },
  ],

  stats: [
    { num: "8.05", unit: "/10",  label: "B.Tech CPI · IIIT-DWD" },
    { num: "5",    unit: "+",    label: "Client deployments" },
    { num: "2",    unit: "",     label: "PyPI packages shipped" },
    { num: "<3",   unit: "s",    label: "Voice pipeline latency" },
  ],

  education: [{
    when: "Dec 2021 — Jul 2025",
    where: "Dharwad, Karnataka",
    school: "Indian Institute of Information Technology, Dharwad",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    cpi: "CPI 8.05 / 10",
  },
  {
    when: "Apr 2020 — Jul 2021",
    where: "Ajmer, Rajasthan",
    school: "Sophia Senior Secondary School, Ajmer",
    degree: "PCMC",
    cpi: "Percentage: 87%",
  }
],

  experience: [
    {
      role: "AI Engineer · Founding Team",
      company: "Vocab.ai",
      when: "Aug 2025 — May 2026",
      location: "Remote",
      bullets: [
        ["Designed and deployed a ", { b: "RAG-based text analytics platform" }, " used by 5+ client accounts for automated quality evaluation."],
        ["Implemented document chunking, embedding generation, vector indexing, and semantic retrieval using ", { b: "ChromaDB" }, " and ", { b: "Qdrant" }, "."],
        ["Engineered context-aware prompt pipelines and caching mechanisms, reducing token usage and improving response consistency."],
        ["Architected a complete ", { b: "real-time AI pipeline" }, " integrating ASR, LLM, and TTS components with end-to-end latency under 3 seconds."],
        ["Built async Python services and WebSocket-based streaming pipelines for real-time audio processing."],
        ["Designed scalable PostgreSQL schemas, role-based REST APIs, and Docker-containerized deployments."],
      ],
    },
    {
      role: "R&D Intern · AI/ML & Full-Stack Developer",
      company: "Siemens Technology and Services Pvt. Ltd.",
      when: "Jan 2025 — Jul 2025",
      location: "Bengaluru",
      bullets: [
        ["Built and validated ", { b: "3+ multi-agent systems" }, " with LangGraph and Azure OpenAI; published ", { b: "2 packages to PyPI" }, " via GitLab CI/CD."],
        ["Created a localization platform with ", { b: "React, FastAPI, Docker, Tailwind" }, " — reducing translation time for 2+ internal teams."],
        ["Designed, monitored and optimized 3+ agent workflows using LangGraph and LangFuse."],
        ["Developed full-stack AI applications integrating Python inference backends with React frontends."],
      ],
    },
  ],

  achievements: [
    {
      sym: "❀",
      tag: "IEEE Conference '24",
      title: "Published Paper",
      body: '"FGRU-Based Intrusion Detection in SCADA Systems" — co-authored and presented at the IEEE Conference 2024.',
      link: { label: "View paper", href: "#" },
    },
    {
      sym: "✦",
      tag: "Hack2Future · 5th Place",
      title: "DarkFlow MLOps",
      body: "Built a complete MLOps pipeline in just 22 hours — secured 5th place out of a large field of teams.",
      link: { label: "See project", href: "#projects" },
    },
    {
      sym: "❖",
      tag: "Peerlist × Replit '23",
      title: "Top 10 — All India",
      body: "Shortlisted in the Top 10 teams nationally for an LLM-powered submission to the Peerlist × Replit Hackathon.",
    },
  ],

  projects: [
    {
      title: "Tvara",
      badge: "SDK",
      when: "Nov 2025 - Present",
      blurb: [
        "Tvara is a lightweight Python SDK for building intelligent multi-agent AI workflows with minimal boilerplate. With native Composio integration and access to ", { b: "10,000+ tools" }, " and services, it lets you focus on agent behavior instead of infrastructure and wiring.",
      ],
      stack: ["Python", "FastAPI", "Compose IO", "Pydantic", "ReactJS"],
      github: "https://github.com/tvarahq/tvara",
    },
    {
      title: "FlowBot",
      badge: "Real-time Voice AI",
      when: "Jan 2026 - Mar 2026",
      blurb: [
        "A voice AI receptionist for a dental clinic. Patients call in (or open the web app), speak naturally, and the bot handles appointment booking, clinic FAQs, and escalation to human staff, all through a real-time voice conversation.",
      ],
      stack: ["LiveKit", "FastAPI", "SQLAlchemy", "Websockets", "ASR, TTS, VAD"],
      github: "https://github.com/Nancy-30/dental_bot",
    },
    {
      title: "Scheduling Agent",
      badge: "AMD · IISc",
      when: "24-hour hackathon · Jul 2025",
      blurb: [
        "Multi-agent agentic system using ",
        { b: "LLaMA 7B" },
        " to scan calendars, resolve scheduling conflicts and propose optimal meeting times — average response under 5 seconds. Auto-generates polite replies and reschedules across time zones.",
      ],
      stack: ["PydanticAI", "LangGraph", "LLaMA", "Google Calendar API", "Jupyter"],
      github: "https://github.com/Nancy-30/AI_Scheduling_Agent",
    },
    {
      title: "DarkFlow",
      badge: "5th place",
      when: "Hack2Future · Oct 2024",
      blurb:
        "Self-service ML training platform supporting 4 model types with configurable dataset uploads. Visual plots, regression/classification training, pre-processing and benchmarking — all in one streamlined UI.",
      stack: ["Python", "React", "Flask", "Tailwind", "AWS", "MongoDB"],
      github: "https://github.com/Nancy-30/darkflow",
    },
  ],

  githubProfile: "https://github.com/Nancy-30",

  skills: [
    {
      title: "Languages",
      items: [
        { label: "Python", hot: true },
        { label: "C++" }, { label: "Java" }, { label: "JavaScript" },
      ],
    },
    {
      title: "AI / ML Frameworks",
      items: [
        { label: "LangChain", hot: true },
        { label: "LangGraph", hot: true },
        { label: "LlamaIndex" }, { label: "HuggingFace" },
        { label: "LangFuse" }, { label: "Gemini Orchestration" },
      ],
    },
    {
      title: "Web & Backend",
      items: [
        { label: "FastAPI", hot: true },
        { label: "React.js" }, { label: "Tailwind CSS" },
        { label: "Node.js" }, { label: "Express.js" },
        { label: "Flask" }, { label: "Streamlit" },
      ],
    },
    {
      title: "Tools & DevOps",
      items: [
        { label: "GitHub" }, { label: "Docker", hot: true },
        { label: "GitLab CI/CD" }, { label: "PyPI" },
        { label: "Framer Motion" }, { label: "Postman" },
        { label: "MCP" }, { label: "N8N" }, { label: "Linux" }, { label: "Livekit" },
      ],
    },
    {
      title: "Databases",
      items: [
        { label: "MongoDB" }, { label: "MySQL" },
        { label: "PostgreSQL", hot: true },
        { label: "Neo4j" },
        { label: "ChromaDB", hot: true },
        { label: "Qdrant", hot: true },
        { label: "Pinecone" }, { label: "Redis" },
      ],
    },
    {
      title: "Speech & Real-time AI",
      items: [
        { label: "Whisper" }, { label: "Deepgram" },
        { label: "WebRTC VAD" }, { label: "Silero" }, { label: "Chatterbox" },
      ],
    },
    {
      title: "Concepts",
      span: true,
      items: [
        { label: "RAG", hot: true },
        { label: "Multi-Agent Systems", hot: true },
        { label: "MLOps" }, { label: "System Design" }, { label: "REST APIs" },
      ],
    },
  ],

  contact: {
    email: "ynancy030@gmail.com",
    phone: "https://leetcode.com/u/Nancy_30/",
    phoneHref: "https://leetcode.com/u/Nancy_30/",
    github: "github.com/Nancy-30",
    githubHref: "https://github.com/Nancy-30",
    linkedin: "linkedin.com/in/nancyadav30",
    linkedinHref: "https://linkedin.com/in/nancyadav30",
  },
};
