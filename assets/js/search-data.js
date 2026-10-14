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
  },{id: "nav-writing",
          title: "writing",
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
        },{id: "nav-experience",
          title: "experience",
          description: "Applied ML, experimentation, research, and data-science leadership.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-what-i-learned-rebuilding-pi-audit-loop",
        
          title: 'What I learned rebuilding Pi Audit Loop <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A review and simplification loop found real bugs, but it also confused findings with repairs. I rebuilt it around one change, a checked revision and a final diff review.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/essays/pi-audit-loop/", "_blank");
          
        },
      },{id: "post-benchmarks-are-living-things",
        
          title: 'Benchmarks are living things <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A benchmark can keep returning scores long after it stops telling us much. I&#39;ve been thinking about how to recognize that point, and what to do when the question we need it to answer changes.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/benchmarks-are-living-things/", "_blank");
          
        },
      },{id: "post-jev-three-use-cases-a-ton-of-learnings",
        
          title: 'jev: three use cases, a ton of learnings <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We spent a week pointing Jev at a Doom deathmatch, 370 enterprise documents, five text adventures and a laptop reimplementation.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/model-that-only-chooses/", "_blank");
          
        },
      },{id: "post-a-model-that-answers-in-probabilities",
        
          title: 'A model that answers in probabilities <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "TypeSafe&#39;s Jev returns typed, calibrated judgments instead of generating text. We ran its separately audited v2 runtime on AdventureBench: incredibly accurate, fast, and revealing on terse commands.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/jev-decisions/", "_blank");
          
        },
      },{id: "post-the-harness-is-the-signal",
        
          title: 'The harness is the signal <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "As models improve, some of today&#39;s agent machinery will disappear. The parts that govern permissions, execution, recovery and accountability probably will not.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/essays/harness-is-signal/", "_blank");
          
        },
      },{id: "post-what-agent-skills-are-actually-made-of",
        
          title: 'What agent skills are actually made of <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "1.9 million agent skills on GitHub. Only 12 in 100 come with any code attached, and when they do it is usually Python, whatever the skill is about.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/agent-skill-programming-languages/", "_blank");
          
        },
      },{id: "post-a-safety-filter-moved-our-benchmark-by-seven-places",
        
          title: 'A safety filter moved our benchmark by seven places <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A provider content filter silently deleted 29.3% of one model&#39;s answers on our regex benchmark, and the blanked calls were not missing at random. Depending on how a harness handles them, the same model finishes 3rd, 10th or 4th out of 11. Running k=3 rather than a single sample is what caught it.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/refused-at-random/", "_blank");
          
        },
      },{id: "post-what-language-are-agent-skills-written-in",
        
          title: 'What language are agent skills written in? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "3.8 million AI agent instruction files on GitHub, read by a model that speaks every language. So why are 85.3% of them in English, and what is changing?",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/agent-skill-languages/", "_blank");
          
        },
      },{id: "post-a-regex-can-pass-its-tests-and-still-fail-in-use",
        
          title: 'a regex can pass its tests and still fail in use <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A study of generated regular expressions, benchmark answer keys, and vulnerability screening across corpora. Passing tests is a limited guarantee; corpus differences do not establish what caused them.",
        section: "Posts",
        handler: () => {
          
            window.open("https://plicara.ai/research/whether-anyone-ever-ran-it/", "_blank");
          
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
            },},{id: "books-a-moveable-feast",
          title: 'A Moveable Feast',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_moveable_feast/";
            },},{id: "books-homesick-for-another-world",
          title: 'Homesick for Another World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/homesick_for_another_world/";
            },},{id: "books-house-of-leaves",
          title: 'House of Leaves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/house_of_leaves/";
            },},{id: "books-the-algebraist",
          title: 'The Algebraist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_algebraist/";
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
            },},{id: "projects-bayesian-optimization-with-bass",
          title: 'Bayesian Optimization with BASS',
          description: "Thesis research on spline surrogates and how experimental machinery affects Bayesian-optimization comparisons.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bayesian_optim_bass/";
            },},{id: "projects-labloop",
          title: 'labloop',
          description: "An agent-driven experiment loop that measures proposed changes and records every trial, including failures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/labloop/";
            },},{id: "projects-mollify",
          title: 'Mollify',
          description: "A collaborative Rust project that gives coding agents reproducible, inspectable findings about Python codebases.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mollify/";
            },},{id: "projects-plicara-labs",
          title: 'Plicara Labs',
          description: "My independent research practice: studies of AI evaluation, regex correctness, safety, and benchmark answer keys.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plicara_labs/";
            },},{id: "projects-rust-learning",
          title: 'Rust Learning',
          description: "Notes and code as I learn Rust.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rust_learning/";
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
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Adrian_TameJ", "_blank");
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
