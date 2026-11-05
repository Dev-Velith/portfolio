export const projectsData = [
  {
    id: "velith-engine",
    title: "Velith 3D Engine",
    role: "Lead Developer",
    category: "Engine & Systems",
    tags: ["C++20", "Vulkan", "ECS", "Frame Graph"],
    summary: "Custom real-time 3D game engine built from scratch with modern C++20 and Vulkan. Features an explicit frame graph, bindless descriptor indexing, and a data-oriented ECS architecture.",
    status: "Active Development",
    github: "https://github.com/Dev-Velith"
  },
  {
    id: "gameplay-controller",
    title: "Kinematic Character & Combat Controller",
    role: "Gameplay Programmer",
    category: "Gameplay Systems",
    tags: ["C++", "State Machines", "Kinematics", "Combat"],
    summary: "Responsive player movement and melee combat controller with sub-frame input buffering, coyote time, variable jump arcs, and frame-accurate hitstop windows.",
    status: "Project Showcase",
    github: ""
  },
  {
    id: "designer-tooling",
    title: "In-Engine Designer Tooling Pipeline",
    role: "Technical Designer",
    category: "Tools & Pipelines",
    tags: ["C++", "ImGui", "Data-Driven", "Tooling"],
    summary: "Authoring tools and data-driven timelines allowing designers to tune combat frames, hitbox capsules, and character curves in real time without code recompilation.",
    status: "Project Showcase",
    github: ""
  }
];

export const focusAreas = [
  {
    title: "Engine & Low-Level Systems",
    description: "C++20 architecture, modern graphics APIs (Vulkan), memory locality, spatial partitioning, and data-oriented design."
  },
  {
    title: "Gameplay Programming",
    description: "Character controllers, kinematic movement, combat state machines, animation event timing, hitboxes, and game feel."
  },
  {
    title: "Technical Design & Tooling",
    description: "Authoring workflows, designer-facing interfaces (ImGui), hot-reloading data pipelines, and bridging engineering with design."
  }
];
