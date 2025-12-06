import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDir, setCurrentDir] = useState('~');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const terminalRef = useRef(null);

  // ASCII Art
  const asciiArt = `
  ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
  ██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
  ██████╔╝██████╔╝███████║██║   ██║█████╗  █████╗  ██╔██╗ ██║
  ██╔═══╝ ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║╚██╗██║
  ██║     ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗██║ ╚████║
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═══╝
`;

  // File system simulation
  const fileSystem = {
    '~': {
      type: 'dir',
      children: ['projects', 'about.txt', 'skills.txt', 'contact.txt', 'resume.pdf']
    },
    '~/projects': {
      type: 'dir',
      children: ['devtinder', 'foodapp', 'wetube', 'README.md']
    },
    '~/projects/devtinder': {
      type: 'dir',
      children: ['src', 'package.json', 'README.md']
    },
    '~/projects/foodapp': {
      type: 'dir',
      children: ['src', 'package.json', 'README.md']
    },
    '~/projects/wetube': {
      type: 'dir',
      children: ['src', 'package.json', 'README.md']
    }
  };

  const fileContents = {
    '~/about.txt': `
╔══════════════════════════════════════════════════════════════╗
║                        ABOUT ME                               ║
╠══════════════════════════════════════════════════════════════╣
║  Name: Praveen                                                ║
║  Role: Full Stack Developer                                   ║
║  Location: India                                              ║
║                                                               ║
║  I'm a passionate developer who loves building things for    ║
║  the web. Currently exploring the depths of React, Node.js,  ║
║  and cloud technologies.                                      ║
║                                                               ║
║  "Code is poetry written in logic."                           ║
╚══════════════════════════════════════════════════════════════╝
`,
    '~/skills.txt': `
┌─────────────────────────────────────────────────────────────┐
│                      TECHNICAL SKILLS                        │
├─────────────────────────────────────────────────────────────┤
│  FRONTEND          │ React, Next.js, Tailwind, Redux        │
│  BACKEND           │ Node.js, Express, MongoDB, PostgreSQL  │
│  DEVOPS            │ Docker, AWS, GitHub Actions, Vercel    │
│  LANGUAGES         │ JavaScript, TypeScript, Python, Java   │
│  TOOLS             │ Git, VS Code, Figma, Postman          │
└─────────────────────────────────────────────────────────────┘
`,
    '~/contact.txt': `
┌─────────────────────────────────────────────────────────────┐
│                       CONTACT INFO                           │
├─────────────────────────────────────────────────────────────┤
│  📧 Email     │ praveen@example.com                         │
│  🐙 GitHub    │ github.com/praveen                          │
│  💼 LinkedIn  │ linkedin.com/in/praveen                     │
│  🐦 Twitter   │ @praveen_dev                                │
│  🌐 Website   │ praveen.dev                                 │
└─────────────────────────────────────────────────────────────┘
`,
    '~/resume.pdf': '[ Binary file - use "open resume.pdf" to view ]',
    '~/projects/README.md': `# My Projects\n\nRun \`ls\` to see all projects.`,
    '~/projects/devtinder/README.md': `# DevTinder 💻❤️\nTinder for Developers\nStatus: 🟢 Active`,
    '~/projects/foodapp/README.md': `# FoodApp 🍔\nFood Delivery Platform\nStatus: 🟢 Active`,
    '~/projects/wetube/README.md': `# WeTube 📺\nVideo Streaming Platform\nStatus: 🟡 In Development`
  };

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => `
╔════════════════════════════════════════════════════════════════╗
║                      AVAILABLE COMMANDS                         ║
╠════════════════════════════════════════════════════════════════╣
║  PORTFOLIO                                                      ║
║    about         Learn about me                                 ║
║    projects      View my projects                               ║
║    skills        See my technical skills                        ║
║    contact       Get my contact information                     ║
╠════════════════════════════════════════════════════════════════╣
║  FILE SYSTEM                                                    ║
║    ls            List directory contents                        ║
║    cd <dir>      Change directory                               ║
║    cat <file>    Display file contents                          ║
║    pwd           Print working directory                        ║
║    tree          Show directory structure                       ║
╠════════════════════════════════════════════════════════════════╣
║  SYSTEM                                                         ║
║    whoami        Display current user                           ║
║    date          Show current date and time                     ║
║    clear         Clear the terminal screen                      ║
║    neofetch      Display system information                     ║
║    history       Show command history                           ║
╠════════════════════════════════════════════════════════════════╣
║  FUN                                                            ║
║    matrix        Enter the matrix                               ║
║    sudo <cmd>    Run as superuser (easter egg)                  ║
║    vim           The legendary editor                           ║
╚════════════════════════════════════════════════════════════════╝
`
    },
    // Portfolio Commands
    about: {
      description: 'About me',
      action: () => `
╔══════════════════════════════════════════════════════════════╗
║                         ABOUT ME                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  👋 Hey! I'm Praveen                                          ║
║                                                               ║
║  🎯 Role: Full Stack Developer                                ║
║  📍 Location: India                                           ║
║  💼 Experience: 2+ years                                      ║
║                                                               ║
║  I'm a passionate developer who loves building things for    ║
║  the web. I specialize in React, Node.js, and modern web     ║
║  technologies. Currently exploring cloud technologies and    ║
║  system design.                                               ║
║                                                               ║
║  "Code is poetry written in logic."                           ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
`
    },
    projects: {
      description: 'My projects',
      action: () => `
╔══════════════════════════════════════════════════════════════╗
║                        MY PROJECTS                            ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🔥 DevTinder                                                 ║
║     Tinder for Developers - Match based on tech stack         ║
║     Tech: React, Node.js, MongoDB, Socket.io                  ║
║     Status: 🟢 Live                                           ║
║                                                               ║
║  🍔 FoodApp                                                   ║
║     Modern Food Delivery Platform                             ║
║     Tech: React, Redux, Node.js, PostgreSQL                   ║
║     Status: 🟢 Live                                           ║
║                                                               ║
║  📺 WeTube                                                    ║
║     Video Streaming & Sharing Platform                        ║
║     Tech: React, Node.js, AWS S3, FFmpeg                      ║
║     Status: 🟡 In Development                                 ║
║                                                               ║
║  💼 Portfolio (this!)                                         ║
║     macOS-style Portfolio Website                             ║
║     Tech: React, Tailwind, Framer Motion                      ║
║     Status: 🟢 Live                                           ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝

Run 'cd projects' and 'ls' to explore project files!
`
    },
    skills: {
      description: 'My skills',
      action: () => `
╔══════════════════════════════════════════════════════════════╗
║                      TECHNICAL SKILLS                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ⚛️  FRONTEND                                                 ║
║      React, Next.js, Redux, Tailwind CSS, TypeScript          ║
║      Framer Motion, HTML5, CSS3, JavaScript                   ║
║                                                               ║
║  🖥️  BACKEND                                                  ║
║      Node.js, Express.js, REST APIs, GraphQL                  ║
║      MongoDB, PostgreSQL, Redis, Prisma                       ║
║                                                               ║
║  ☁️  DEVOPS & CLOUD                                           ║
║      Docker, AWS (EC2, S3, Lambda), Vercel, Netlify           ║
║      GitHub Actions, CI/CD, Nginx                             ║
║                                                               ║
║  🛠️  TOOLS & OTHERS                                           ║
║      Git, VS Code, Postman, Figma, Linux                      ║
║      Jest, Socket.io, WebRTC                                  ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
`
    },
    contact: {
      description: 'Contact info',
      action: () => `
╔══════════════════════════════════════════════════════════════╗
║                        CONTACT ME                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📧  Email      praveen@example.com                           ║
║                                                               ║
║  🐙  GitHub     github.com/praveen                            ║
║                                                               ║
║  💼  LinkedIn   linkedin.com/in/praveen                       ║
║                                                               ║
║  🐦  Twitter    @praveen_dev                                  ║
║                                                               ║
║  🌐  Website    praveen.dev                                   ║
║                                                               ║
╠══════════════════════════════════════════════════════════════╣
║  💬  Open to opportunities and collaborations!                ║
║      Feel free to reach out anytime.                          ║
╚══════════════════════════════════════════════════════════════╝
`
    },
    // File System Commands
    ls: {
      description: 'List directory contents',
      action: (args) => {
        const targetDir = args[0] ? resolvePath(args[0]) : currentDir;
        const dir = fileSystem[targetDir];
        if (!dir) return `ls: cannot access '${args[0] || currentDir}': No such file or directory`;
        if (dir.type !== 'dir') return `ls: ${args[0]}: Not a directory`;

        return dir.children.map(item => {
          const fullPath = `${targetDir}/${item}`;
          const isDir = fileSystem[fullPath]?.type === 'dir';
          return isDir ? `\x1b[34m${item}/\x1b[0m` : item;
        }).join('  ');
      }
    },
    cd: {
      description: 'Change directory',
      action: (args) => {
        if (!args[0] || args[0] === '~') {
          setCurrentDir('~');
          return null;
        }
        if (args[0] === '..') {
          if (currentDir === '~') return null;
          const parts = currentDir.split('/');
          parts.pop();
          setCurrentDir(parts.join('/') || '~');
          return null;
        }
        const newPath = resolvePath(args[0]);
        if (fileSystem[newPath]?.type === 'dir') {
          setCurrentDir(newPath);
          return null;
        }
        return `cd: ${args[0]}: No such file or directory`;
      }
    },
    cat: {
      description: 'Display file contents',
      action: (args) => {
        if (!args[0]) return 'cat: missing file operand';
        const filePath = resolvePath(args[0]);
        if (fileContents[filePath]) {
          return fileContents[filePath];
        }
        return `cat: ${args[0]}: No such file or directory`;
      }
    },
    pwd: {
      description: 'Print working directory',
      action: () => currentDir.replace('~', '/home/guest')
    },
    tree: {
      description: 'Directory tree',
      action: () => `
.
├── about.txt
├── contact.txt
├── projects/
│   ├── devtinder/
│   ├── foodapp/
│   ├── wetube/
│   └── README.md
├── resume.pdf
└── skills.txt

4 directories, 5 files
`
    },
    // System Commands
    whoami: {
      description: 'Display current user',
      action: () => 'guest'
    },
    date: {
      description: 'Show current date',
      action: () => new Date().toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      })
    },
    clear: {
      description: 'Clear terminal',
      action: () => {
        setHistory([]);
        return null;
      }
    },
    neofetch: {
      description: 'System info',
      action: () => `
${asciiArt}
  \x1b[34mOS:\x1b[0m        Portfolio OS 1.0
  \x1b[34mHost:\x1b[0m      Browser Runtime
  \x1b[34mKernel:\x1b[0m    React 18.3.1
  \x1b[34mUptime:\x1b[0m    ${Math.floor((Date.now() % 86400000) / 3600000)} hours, ${Math.floor((Date.now() % 3600000) / 60000)} mins
  \x1b[34mShell:\x1b[0m     portfolio-sh 1.0
  \x1b[34mTerminal:\x1b[0m  Web Terminal
  \x1b[34mCPU:\x1b[0m       JavaScript V8 Engine
  \x1b[34mMemory:\x1b[0m    Unlimited (Browser)
`
    },
    echo: {
      description: 'Print text',
      action: (args) => args.join(' ')
    },
    history: {
      description: 'Show command history',
      action: () => commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n') || 'No commands in history'
    },
    // Fun Commands
    matrix: {
      description: 'Matrix mode',
      action: () => `
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Knock, knock, Neo.

(Just kidding, this is a portfolio terminal 😄)
`
    },
    sudo: {
      description: 'Superuser',
      action: (args) => {
        if (args.join(' ').includes('rm -rf')) {
          return '🚫 Nice try! This portfolio is protected.';
        }
        return '⚠️  guest is not in the sudoers file. This incident will be reported.';
      }
    },
    vim: {
      description: 'Text editor',
      action: () => "Pro tip: To exit vim, just close the browser tab. 😉"
    },
    exit: {
      description: 'Exit terminal',
      action: () => "You can check out any time you like, but you can never leave! 🎸"
    },
    git: {
      description: 'Git commands',
      action: (args) => {
        if (args[0] === 'status') return 'On branch main\nnothing to commit, working tree clean';
        if (args[0] === 'log') return `commit abc1234\nAuthor: Praveen\nDate: ${new Date().toDateString()}\n\n    Updated portfolio`;
        return `git: '${args[0] || ''}' is not a git command.`;
      }
    },
    npm: {
      description: 'Package manager',
      action: (args) => {
        if (args[0] === 'run' && args[1] === 'dev') {
          return '> portfolio@1.0.0 dev\n> vite\n\n  VITE v5.0.0  ready in 500 ms\n\n  ➜  Local:   http://localhost:5173/';
        }
        return 'Usage: npm <command>\n\nCommands: install, run, test, build';
      }
    }
  };

  const resolvePath = (path) => {
    if (path.startsWith('~/')) return path;
    if (path.startsWith('/')) return '~' + path;
    if (path === '~') return '~';
    return currentDir === '~' ? `~/${path}` : `${currentDir}/${path}`;
  };

  // Welcome message on mount
  useEffect(() => {
    const welcomeMessages = [
      { type: 'output', content: asciiArt, isAscii: true },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '  Welcome to my Portfolio Terminal! Type "help" for commands.' },
      { type: 'output', content: '  Try "about", "projects", "skills", or "contact" to learn more.' },
      { type: 'output', content: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
      { type: 'output', content: '' },
    ];
    setHistory(welcomeMessages);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const [command, ...args] = trimmedCmd.split(' ');
    const lowerCommand = command.toLowerCase();

    const newHistory = [...history, {
      type: 'input',
      content: trimmedCmd,
      dir: currentDir
    }];

    if (commands[lowerCommand]) {
      const output = commands[lowerCommand].action(args);
      if (output) {
        newHistory.push({ type: 'output', content: output });
      } else if (lowerCommand === 'clear') {
        return;
      }
    } else {
      newHistory.push({
        type: 'error',
        content: `zsh: command not found: ${command}`
      });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(commandHistory[commandHistory.length - historyIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmdNames = Object.keys(commands);
      const match = cmdNames.find(cmd => cmd.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      let processedLine = line
        .replace(/\x1b\[34m/g, '<span class="text-blue-400">')
        .replace(/\x1b\[0m/g, '</span>');

      return <div key={i} dangerouslySetInnerHTML={{ __html: processedLine }} />;
    });
  };

  return (
    <div
      ref={terminalRef}
      className="h-full w-full bg-[#0d1117] text-[#c9d1d9] font-mono text-sm overflow-y-auto overflow-x-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="p-4">
        {history.map((item, index) => (
          <div key={index} className={`mb-1 ${item.type === 'error' ? 'text-red-400' : ''}`}>
            {item.type === 'input' ? (
              <div className="flex items-center flex-wrap">
                <span className="text-[#7ee787] mr-1">➜</span>
                <span className="text-[#79c0ff] mr-1">{item.dir || '~'}</span>
                <span className="text-[#a5d6ff] mr-2">$</span>
                <span className="text-[#c9d1d9]">{item.content}</span>
              </div>
            ) : (
              <div className={`whitespace-pre-wrap ${item.isAscii ? 'text-[#58a6ff] text-xs leading-none' : 'text-[#8b949e]'}`}>
                {renderContent(item.content)}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-[#7ee787] mr-1">➜</span>
          <span className="text-[#79c0ff] mr-1">{currentDir}</span>
          <span className="text-[#a5d6ff] mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-[#c9d1d9] caret-[#58a6ff]"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
          <span className="w-2 h-5 bg-[#58a6ff] animate-pulse" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}