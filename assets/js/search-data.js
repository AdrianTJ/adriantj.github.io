// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A running collection of the things I am building and tinkering with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-academic",
          title: "academic",
          description: "Coursework, notes, and past academic projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-mollify-agents-and-integration",
        
          title: "Mollify, Agents, and Integration",
        
        description: "why codebase intelligence for Python wants to be one integrated tool, and what changes now that the reader is a machine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mollify/";
          
        },
      },{id: "post-three-ways-to-run-sql-locally",
        
          title: "three ways to run SQL locally",
        
        description: "a small guide I wish I had when learning data science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/local_sql/";
          
        },
      },{id: "books-1q84",
          title: '1Q84',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1q84/";
            },},{id: "books-a-hunger-artist",
          title: 'A Hunger Artist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_hunger_artist/";
            },},{id: "books-homesick-for-another-world",
          title: 'Homesick for Another World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/homesick_for_another_world/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_stranger/";
            },},{id: "books-vermis-i-lost-dungeons-and-forbidden-woods",
          title: 'Vermis I: Lost Dungeons and Forbidden Woods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/vermis/";
            },},{id: "news-search-algorithm-simulations-talk-in-guadalajara-mexico",
          title: 'Search algorithm simulations talk in Guadalajara, Mexico',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-22_gdl_conference/";
            },},{id: "news-starting-migration-to-new-personal-website",
          title: 'Starting migration to new personal website',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-02_new_site/";
            },},{id: "projects-agentic-engineering",
          title: 'Agentic Engineering',
          description: "Agents and skills for agentic engineering workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentic_engineering/";
            },},{id: "projects-bayesian-optimization-with-bass",
          title: 'Bayesian Optimization with BASS',
          description: "My MSc thesis — Bayesian Adaptive Spline Surfaces as a surrogate model for Bayesian optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bayesian_optim_bass/";
            },},{id: "projects-gospeedtests",
          title: 'GoSpeedTests',
          description: "A high-performance, open-source page speed analysis toolkit written in Go for measuring and tracking web performance metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gospeedtests/";
            },},{id: "projects-mollify",
          title: 'Mollify',
          description: "A Rust-native static analysis engine that delivers deterministic codebase intelligence for Python.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mollify/";
            },},{id: "projects-rust-learning",
          title: 'Rust Learning',
          description: "Notes and code as I learn Rust.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rust_learning/";
            },},{id: "projects-template-ai-engineering",
          title: 'template-ai-engineering',
          description: "A template for bootstrapping the AI agent journey — skills, agents, and connections that project into any harness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_ai_engineering/";
            },},{id: "projects-trading-strategies",
          title: 'Trading Strategies',
          description: "A site to track how trading strategies perform over time.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trading_strategies/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%64%72%69%61%6E.%74%61%6D%65.%6A%61%63%6F%62%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AdrianTJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adrian-tj", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
