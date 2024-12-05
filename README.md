# Terminal Portfolio

A customizable, interactive terminal-style portfolio website built with Next.js, TypeScript, and TailwindCSS. This project allows developers to showcase their work through a unique terminal interface.

![Terminal Portfolio Preview](https://github.com/user-attachments/assets/17eb38b5-8a78-4f03-9a49-9b2c34ae5b53)
![Terminal Interface](https://github.com/user-attachments/assets/ebe214f9-cb3b-48de-b49f-f1ab8e68c2c5)

## Features

- 🖥️ Terminal-like interface with command history
- 🎮 Interactive number guessing game
- 🎨 Multiple built-in themes (dark, light, matrix, retro)
- ⌨️ Command history navigation with arrow keys
- 📱 Fully responsive design
- ✨ Beautiful background effects with gradient and blur
- 🚀 Built with Next.js and TypeScript
- 🎯 Easy to customize through JSON files
- 💨 TailwindCSS for styling
- 🔍 Type-safe development with TypeScript

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/anibalalpizar/terminal-portfolio-json.git
cd terminal-portfolio-json
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Available Commands

The terminal supports the following commands:

- `about` - Display information about you
- `projects` - Show your projects
- `skills` - List your technical skills
- `contact` - Display contact information
- `help` - Show available commands
- `clear` - Clear the terminal
- `theme` - Change terminal theme
- `game` - Play the number guessing game

### Playing the Game

1. Type `game` to start a new game
2. You'll get 5 attempts to guess a number between 1 and 100
3. After each guess, you'll receive hints whether the number is higher or lower
4. Try to guess the number before running out of attempts!

## Customization

### Portfolio Data

Modify `src/data/portfolio.json` to update your personal information:

```json
{
  "name": "Your Name",
  "bio": "Your bio description",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "link": "https://project-link.com"
    }
  ],
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

### Terminal Themes

Customize or add new themes in `src/data/themes.json`:

```json
{
  "themeName": {
    "name": "Theme Display Name",
    "background": "#BACKGROUND_COLOR",
    "foreground": "#TEXT_COLOR",
    "accent": "#ACCENT_COLOR",
    "selection": "rgba(COLOR, OPACITY)"
  }
}
```

### Commands

Add or modify commands in `src/data/commands.json`:

```json
{
  "commandName": "Command description"
}
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page component
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Terminal.tsx    # Main terminal component
│   ├── CommandLine.tsx # Command input component
│   └── Background.tsx  # Background effects
├── data/              # Configuration files
│   ├── portfolio.json # Portfolio content
│   ├── commands.json  # Available commands
│   └── themes.json    # Theme configurations
├── hooks/             # Custom React hooks
│   ├── useTheme.ts    # Theme management
│   └── useGame.ts     # Game logic
└── types/             # TypeScript type definitions
    └── index.ts       # Type declarations
```

## Development

### Adding New Commands

1. Add the command to `src/types/index.ts`:

```typescript
export type Command = "existing" | "commands" | "newCommand";
```

2. Add the command description to `src/data/commands.json`
3. Implement the command handler in `Terminal.tsx`

### Adding New Features

1. Create new components in `src/components/`
2. Add new hooks in `src/hooks/` for complex logic
3. Update types in `src/types/`
4. Modify the Terminal component to include new functionality

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add types for new features
- Update documentation for significant changes
- Add tests for new functionality
- Ensure responsive design
- Maintain accessibility standards

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!
