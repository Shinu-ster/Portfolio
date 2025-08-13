import { JSX } from "react";
type Command = {
  description: string;
  run: () => string | JSX.Element | null | Promise<string | JSX.Element | null>;
};

export const commands: Record<string, Command> = {
  help: {
    description: "List all available commands",
    run: () => (
      <div className="font-mono text-sm whitespace-pre-line max-w-full">
        <div className="mb-2 font-bold text-green-400 text-xs sm:text-sm">
          NAME
        </div>
        <div className="mb-4 text-xs sm:text-sm">
          help - list all available commands
        </div>

        <div className="mb-2 font-bold text-green-400 text-xs sm:text-sm">
          SYNOPSIS
        </div>
        <div className="mb-4">
          <code>help</code>
        </div>

        <div className="mb-2 font-bold text-green-400 text-xs sm:text-sm">
          DESCRIPTION
        </div>
        <div className="mb-4">
          Displays the list of commands you can run in this terminal.
        </div>

        <div className="mb-2 font-bold text-green-400 text-xs sm:text-sm">
          COMMANDS
        </div>
        <div className="pl-4 space-y-1 text-xs sm:text-sm">
          <div>
            <span className="text-white">neofetch</span> - show user info
          </div>
          <div>
            <span className="text-white">aboutme</span> - brief personal intro
          </div>
          <div>
            <span className="text-white">experience</span> - show work
            experience
          </div>
          <div>
            <span className="text-white">projects</span> - list projects
          </div>
          <div>
            <span className="text-white">contact</span> - how to contact
          </div>
          <div>
            <span className="text-white">downloadcv</span> - Download my CV
          </div>
          <div>
            <span className="text-white">clear</span> - clear the terminal
            screen
          </div>
        </div>
      </div>
    ),
  },

  neofetch: {
    description: "Shows user info like neofetch",
    run: () => (
      <div className="flex flex-col lg:flex-row gap-4 font-mono text-xs sm:text-sm">
        {" "}
        {/* smaller font on mobile */}
        {/* ASCII Art - scrollable on mobile */}
        <pre className="leading-none hidden sm:block mb-2 text-sm">
          {`
+=------++*********##***+++=---:::::::--==++++**+*
++------++*##**####**++===---------===***+***#####
-------=++++********+++====+*+++++====*#**##%%%###
-------=+++++++++++*++======+********+*#***#######
------==++++++++++++++++===-=+*****+==++++***#####
++==++++*+++++++*%@@@%@%%%#+==+**++======++++++++=
---============#%@@@@@%#*++#=======+++===++++++===
++++*+++*++++=#%%%@%%%**++==-=-------=-==++======-
+++**********+%%%%@%%#*#*++=+*******#*-=*+===*+==+
===+++********%%###%%****=**==++++****+***++**++++
----=====***++*%**#+*++*+=+*+===+++++*+***+++**+++
--===-===+**++%@@%***++*++++=#@%*++++*+***********
-=-======*****#@@@*++++++++++%@%*++++***#**######*
=========**++++#@@@****#***+*%@%#**+****#**#######
=========+*++++#@@@%#**+*#@@@%%%%%#*****#**#######
=========+*+**%#%%@@%#*#%@@@@@@%%%%##******#####**
=========*%@@@@%#%#@@@@@@@@@@@%%%%##%%*+*+++=+***+
========#%@@@@@@@%#%@@@@@@@@@%%#%%%#*%@*==++=+**++
======+%@%@@@@@@@@%%@@@@@@@@%#@-*%##*#@%+=++=+**++
=====+%@@%%@@@@%%@@@@@@@@@@@%*@+:=##**@@#==+++**++
==--=%@@@@%%%%****#@@@@@@@@@%#%*==###*%@@#=+++=--=
::::+@@@@@%%%#**+**%@@@@@@@@%%%%###%##%@@@*-----::
---=#@@@@@%%%%##*+*@@@%@@@%%@%%%*#####*@@@%-::::::
===+%@@@@@%%%@@%%%@@@@@@@@%%@@%%#*####*@@@@*:::::.
:::-%@@@@@@%%%%%%@@@%%%@@@@@@@%%#####**@@@@%-:::::
---+@@@@@@@%#%@%%%@@%%%%%@@@@@@%%%#####@@@@%::....
...*%%@@@@@%##%#%%%%%%%#%%@%%%%%%%##***%%%##:.....
`}
        </pre>
        {/* Right column */}
        <div className="ml-4 mt-2 lg:ml-0 flex flex-col gap-2">
          <pre className="whitespace-pre ml-6 text-white">{`shinu@sajat-pc`}</pre>
          {`-------------------------`}
          <pre className="whitespace-pre-wrap break-words">
            {`Name:     Sajat Bajracharya
Location: Lalitpur, Nepal
Stack:    `}
            <span className="whitespace-pre-wrap break-words">
              Next.js, React, Typescript, Python
            </span>
            {`
Mail:     `}
            <a
              href="mailto:sajatbazz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-blue-300 hover:underline "
            >
              sajatbazz@gmail.com
            </a>
            {`
Github:   `}
            <a
              href="https://github.com/Shinu-ster"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-blue-300 hover:underline "
            >
              Shinu-ster
            </a>
            {`
Linkedin: `}
            <a
              href="https://www.linkedin.com/in/sajat-bajracharya"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-blue-300 hover:underline "
            >
              sajat-bajracharya
            </a>
            {`
Studying: `}
            <span className="whitespace-nowrap sm:whitespace-pre-wrap">
              Bachelor of Computer Application (D.A.V. College)
            </span>

            {`

-------------------------
`}
          </pre>

          <p className="font-mono text-xs sm:text-sm mt-1 mb-2">
            Type <span className="text-white">help</span> to see more commands
          </p>
        </div>
      </div>
    ),
  },
  aboutme: {
    description: "Brief personal intro",
    run: () => (
      <p className="sm:text-sm">
        I’m a{" "}
        <span className="text-yellow-400 font-semibold">
          passionate full stack developer
        </span>{" "}
        who loves building{" "}
        <span className="text-green-400 font-semibold">dynamic</span> and{" "}
        <span className="text-green-400 font-semibold">user-friendly</span> web
        applications. I recently completed my{" "}
        <span className="text-blue-400 font-semibold">first internship</span>,
        where I gained hands-on experience in both{" "}
        <span className="text-purple-400 font-semibold">front-end</span> and{" "}
        <span className="text-purple-400 font-semibold">back-end</span>{" "}
        development. I’m always{" "}
        <span className="text-pink-400 font-semibold">curious</span>,{" "}
        <span className="text-pink-400 font-semibold">eager to learn</span> new
        technologies, and driven to turn ideas into real projects that make a
        difference.
      </p>
    ),
  },
  experience: {
    description: "Shows my work experience",
    run: () => (
      <div className="font-mono text-sm">
        <span className="text-green-400">January - April 2024</span> —&gt;{" "}
        <span className="">Full Stack Developer Intern</span> (
        <span className="text-yellow-400">MERN</span>) at{" "}
        <a
          href="https://www.linkedin.com/company/samparkacloudloyalty"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:text-blue-300 hover:underline"
        >
          Samparka Cloud Loyalty
        </a>.
        <br />
        Worked on building and enhancing a{" "}
        <span className="text-yellow-400">Progressive Web App (PWA)</span> using
        the <span className="">MERN stack</span>, implementing{" "}
        <span className="">responsive UI</span>, optimizing performance, and
        adding offline capabilities.
      </div>
    ),
  },
  contact: {
    description: "How to contact you",
    run: () => (
      <div className="sm:text-sm">
        <span className="text-yellow-400 font-bold">Email:</span>{" "}
        <a
          href="mailto:sajatbazz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:text-blue-300 hover:underline"
        >
          sajatbazz@gmail.com
        </a>
        <br />
        <span className="text-yellow-400 font-bold">LinkedIn:</span>{" "}
        <a
          href="https://linkedin.com/in/sajat-bajracharya"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:text-blue-300 hover:underline"
        >
          sajat-bajracharya
        </a>
      </div>
    ),
  },
  clear: {
    description: "Clears the screen",
    run: () => null,
  },
  projects: {
    description: "List GitHub repositories",
    run: async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Shinu-ster/repos"
        );
        const repos = await response.json();

        if (!Array.isArray(repos)) return "Error fetching repos";

        const highlightKeywords = (text: string) => {
          if (!text) return "";

          const keywords = [
            "PHP",
            "MySQL",
            "PHPMailer",
            "OTP",
            "PHPOffice",
            "Alpha-Beta pruning",
            "Stripe",
            "webhook",
            "Kinde authentication",
            "Sentry error tracking",
          ];

          // Sort keywords by length descending
          keywords.sort((a, b) => b.length - a.length);

          let highlighted = text;
          keywords.forEach((word) => {
            const regex = new RegExp(`(${word})`, "gi");
            highlighted = highlighted.replace(
              regex,
              `<span class="text-yellow-400 font-semibold">$1</span>`
            );
          });

          return highlighted;
        };

        const pinnedRepoNames = [
          "Academia-Reads",
          "Tech-Repair-Shop",
          "Bagchal-Duel",
          "Ctrl-Alt-Buy",
        ];
        const filteredRepos = repos.filter((repo) =>
          pinnedRepoNames.includes(repo.name)
        );

        if (filteredRepos.length === 0) return "No repos found";

        return (
          <div className="font-mono text-sm space-y-2  sm:text-sm">
            <div className="font-bold text-green-400 text-xs sm:text-sm">
              GitHub Repositories
            </div>
            {filteredRepos.map((repo) => (
              <div key={repo.id}>
                <span className="text-white">{repo.name}</span> -{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(
                      repo.description || "No description"
                    ),
                  }}
                />
                <br />
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  View on GitHub
                </a>
                <br />
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    Demo
                  </a>
                )}
              </div>
            ))}
          </div>
        );
      } catch (error) {
        return `Error fetching repos ${error}`;
      }
    },
  },
  downloadcv: {
    description: "Download my CV",
    run: () => {
      // URL of your CV (you can host it in /public folder of Next.js)
      const cvUrl = "/Sajat-Bajracharya-CV.pdf";

      // Create a temporary link to download the file
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Sajat-Bajracharya-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return "Downloading CV...";
    },
  },
};
