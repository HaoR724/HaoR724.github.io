// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Selected research and engineering projects in LLM evaluation, UAV imagery, and autonomous driving.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Selected academic updates, scholarships, and competition awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic resume, research profile, honors, and technical background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-gray-box-data-leakage-detection-in-llm-benchmarks",
          title: 'Gray-box Data Leakage Detection in LLM Benchmarks',
          description: "Detecting benchmark contamination with option restructuring, log-probability analysis, and Isolation Forest.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_llm_leakage/";
            },},{id: "projects-autonomous-driving-u-turn-decision-and-path-optimization",
          title: 'Autonomous Driving U-turn Decision and Path Optimization',
          description: "Integrated prediction, planning, and control for safe urban U-turn execution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_autonomous_driving/";
            },},{id: "projects-sr-tod-for-micro-object-detection-in-uav-imagery",
          title: 'SR-TOD for Micro-Object Detection in UAV Imagery',
          description: "SR-TOD framework and DGFE module for complex sea surface environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_uav_vision/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
