export const portfolioData = {
  profile: {
    name: "Luke Carter",
    role: "Unreal Developer · Computer Software · C++",
    headline: "Computer Science student at the University of Central Arkansas who builds gameplay systems in Unreal Engine 5 — and the networked software underneath them.",
    email: "lukejcarter15@gmail.com",
    contactEmail: "lukejcarter15@gmail.com",
    about: [
      "As a Computer Science student at the University of Central Arkansas, I'm working toward a Bachelor of Science degree, expected in May 2026. My coursework has given me a solid foundation in programming and problem-solving, which I now apply to my passion for game development and design.",
      "At Akiyam Solutions I collaborate with gameplay programmers and designers in an agile environment — implementing modular weapon systems, building scalable gameplay features in Blueprints and C++, and enhancing user interfaces in Unreal Engine 5. My experience at Sports Media Inc. includes crafting Game Design Documents, designing gameplay flowcharts and contributing to interface prototypes.",
      "My goal is to keep building innovative, engaging gaming experiences — work where the systems underneath are as considered as the moment-to-moment play."
    ],
    location: "Little Rock, Arkansas",
    availability: "Open to gameplay programming roles — graduating May 2026",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/luke-jordan-carter/"
      },
      {
        label: "GitHub",
        url: "https://github.com/Dev-Velith"
      }
    ]
  },

  projects: [
    {
      id: "sovereign",
      slug: "sovereign",
      title: "Sovereign",
      tagline: "A custom Unreal Engine 5 editor plugin that puts a private, offline LLM inside the editor — reading Blueprint graphs back to you as documentation, navigation and audits.",
      role: "Plugin & Tooling Development",
      year: "2026",
      featured: true,
      tech: [
        "Unreal Engine 5",
        "C++",
        "Ollama",
        "Local LLM",
        "Editor Tooling",
        "Blueprint"
      ],
      video_url: "https://app.base44.com/api/apps/6aeb94e2c50f087c98c0e67c/files/mp/public/6aeb94e2c50f087c98c0e67c/bd66bc1c5_sovereign-demo.mp4",
      secondary_video_url: "https://app.base44.com/api/apps/6aeb94e2c50f087c98c0e67c/files/mp/public/6aeb94e2c50f087c98c0e67c/7d885bd0a_blueprint-insight-demo.mp4",
      summary: "Local AI analysis and auditing for Unreal Engine 5. Sovereign embeds offline LLM inference directly in the editor via Ollama, turning raw Blueprint graphs into technical documentation, interactive navigation and automated performance audits — with zero telemetry.",
      highlights: [
        "Embeds local Ollama inference (gemma3:4b) in the Unreal editor — no telemetry, no external requests",
        "Serializes Blueprint graph metadata into shaped prompts for sub-second to low-second analysis",
        "Renders results as clickable node tags that pan and focus the EventGraph on the exact node",
        "Static audits flag uncategorized variables and heavy Construction Script work that causes editor hitching",
        "Hard reference diagram isolates memory bottlenecks and guides migration to soft object references"
      ],
      sections: [
        {
          heading: "The Project",
          body: "Blueprint graphs get dense, and the knowledge of how they work lives in the head of whoever built them. Sovereign is a custom Unreal Engine 5 editor plugin that answers questions about the graph without ever sending the graph anywhere."
        },
        {
          heading: "Offline Inference",
          body: "Sovereign runs a local Ollama model — gemma3:4b at 127.0.0.1:11434 — inside the editor. It combines a custom system prompt with serialized graph metadata: nodes, pins, connections and defaults, so the model reasons about the actual asset rather than a description of it. Nothing leaves the machine, which keeps unreleased production work private, and responses stay in the sub-second to low-second range so the tool remains inside the edit loop."
        },
        {
          heading: "Navigation, Not Just Text",
          body: "Each analysis returns an architectural summary paired with a structured JSON entity block. Every entity in that block renders as a clickable tag — events, functions, variables — and clicking one pans and focuses the Blueprint EventGraph on that exact node. Reading the explanation and arriving at the code are the same gesture."
        },
        {
          heading: "Evaluated on Real Production Assets",
          body: "Sovereign was tested against production-scale LyraStarterGame Blueprints rather than toy examples: B_Hero_Default, with its input handling, Gameplay Ability System delegate bindings and death montages, and B_TeleportToUserFacingUExperience, with its asynchronous world travel routines. Both are graphs a single person can only hold part of at a time."
        },
        {
          heading: "Static Performance & Memory Audits",
          body: "Beyond summarising, Sovereign audits. It flags uncategorized variables that slip past project conventions, and detects heavy Construction Script operations that introduce editor hitching — the kind of cost you feel as a stall without knowing where it came from."
        },
        {
          heading: "Hard Reference Visualizer",
          body: "A dependency visualizer draws the asset's hard references as an interactive node diagram, so memory bottlenecks become visible instead of inferred — and a migration toward soft object references has a map to follow."
        },
        {
          heading: "Blueprint Insight — Runtime Telemetry & Project Auditing",
          body: "The static audits end where a session begins. Blueprint Insight adds project-wide governance on top of the analysis, then a rolling runtime telemetry recorder that captures live multiplayer gameplay and reconstructs 3D visual frames synchronized to the state logs.",
          bullets: [
            "Project-wide health dashboard — scans 246 project assets in seconds, generates a project health score and flags critical issues such as assets exceeding the hard-reference memory threshold (ContextEffectsLibrary, GA_Grenade, B_WeaponInstance_Pistol).",
            "Customizable governance and capture rules — configurable hard-reference and Construction Script limits, custom banned node rules, and adjustable runtime ring-buffer settings such as a 30-second trace buffer at 30 FPS.",
            "Live multiplayer and AI target switching — hooks into an active Play-In-Editor session to track runtime telemetry across spawned actors, switching between [PLAYER] and [AI] combat agents mid-match.",
            "3D frame reconstruction and trajectory scrubbing — rebuilds a 3D viewport inside the debugger after gameplay ends, rendering the tracked character's exact skeletal pose, aim orientation and a 3D movement trajectory path across an interactive timeline.",
            "Synchronized state log filtering — captures timestamped telemetry across movement, variables, animation and networking; filtering by [Anim] isolates state machine transitions (Idle to Run, Falling to Walking) and montages, and clicking any log entry snaps the reconstructed frame to that exact millisecond.",
            "Asset auditing, export history and documentation — detects empty Tick node overhead (B_Manny), validates graph accessibility, manages exported audit snapshots and provides built-in documentation for offline Ollama workflows."
          ]
        },
        {
          heading: "Key Takeaways",
          body: "Running locally means the model is small, so the plugin's real work is feeding it well-shaped context: deciding what a graph needs to say about itself, and in what order. Runtime telemetry made the same point from the other side — the expensive problems were the ones nobody had named yet, so the tool's job was to make them visible."
        }
      ]
    },
    {
      id: "shogi-capstone",
      slug: "shogi-capstone",
      title: "Shogi — Multiplayer Capstone",
      tagline: "A full remake of Japanese shogi in Java, with lobby management connected to a SQL backend across a client/server architecture.",
      role: "Lobby, Backend & Networking",
      year: "2025",
      featured: false,
      tech: [
        "Java",
        "SQL",
        "Client/Server",
        "Lobby Management"
      ],
      video_url: "https://app.base44.com/api/apps/6aeb94e2c50f087c98c0e67c/files/mp/public/6aeb94e2c50f087c98c0e67c/ddb92e6d5_shogi-capstone-demo.mp4",
      summary: "A team capstone rebuilding shogi as a networked desktop game in Java. I owned the lobby layer and its path through the SQL backend, and built the client/server communication players use to find and start a match.",
      highlights: [
        "Built lobby management: game creation, open match listing, joining a seat and match-start coordination",
        "Connected lobby state to a SQL backend so accounts and match records persist",
        "Implemented the client/server message flow for the full lobby journey",
        "Worked inside a shared Java codebase alongside the team's rules and board systems"
      ],
      sections: [
        {
          heading: "The Project",
          body: "A capstone remake of shogi — Japanese chess — built from scratch in Java as a networked client/server game. Players sign in, meet in a lobby and start a match that runs over the network."
        },
        {
          heading: "What I Owned",
          body: "I built the lobby management system: creating games, listing open matches, joining a seat and coordinating the handoff into an active match. Lobby state is backed by SQL, so accounts and match records persist instead of living only in memory.",
          bullets: [
            "Creating games, listing open matches, joining a seat and coordinating a match start",
            "Linking the lobby to a SQL data layer that keeps queries out of the UI code",
            "Implementing the client/server message flow for the lobby: the client asks for available games, the server validates and responds, and a match begins only once both seats are confirmed"
          ]
        },
        {
          heading: "Working in a Team",
          body: "The rules, board state and move validation were shared code across the team, so the lobby had to fit an interface other people depended on. Keeping clear boundaries between the lobby, the database and the network layer stopped those changes from rippling outward."
        },
        {
          heading: "Key Takeaways",
          body: "Server-authoritative state is worth the upfront cost. Nearly every lobby bug we hit came from trusting something the client said without checking it on the server — validating server-side fixed whole categories of problems at once."
        }
      ]
    }
  ],

  work: [
    {
      company: "Akiyam Solutions",
      role: "Unreal Engine Developer",
      start_year: "",
      end_year: "Present",
      location: "",
      description: "Work in an agile team of gameplay programmers and designers, building gameplay features and interfaces in Unreal Engine 5.",
      highlights: [
        "Implement modular weapon systems that designers can assemble and tune",
        "Create scalable gameplay features using Blueprints and C++",
        "Enhance user interfaces in Unreal Engine 5 across gameplay screens",
        "Collaborate in an agile environment with gameplay programmers and designers"
      ]
    },
    {
      company: "Sports Media Inc.",
      role: "Game Design",
      start_year: "",
      end_year: "",
      location: "",
      description: "Game design work spanning documentation, systems flow and interface prototyping.",
      highlights: [
        "Crafted Game Design Documents defining mechanics, scope and player flow",
        "Designed gameplay flowcharts to communicate systems between design and engineering",
        "Contributed to interactive interface prototypes"
      ]
    }
  ],

  education: [
    {
      school: "University of Central Arkansas",
      degree: "Bachelor of Science",
      field: "Computer Science",
      start_year: "",
      end_year: "May 2026",
      location: "Conway, Arkansas",
      details: "Expected graduation May 2026. Coursework emphasis on programming, problem-solving and the systems thinking applied to game development."
    }
  ]
};
