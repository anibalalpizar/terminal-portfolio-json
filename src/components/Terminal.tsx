"use client";

import { useState, useEffect, useRef } from "react";
import { Command } from "@/types";
import { TitleBar } from "./TitleBar";
import { CommandLine } from "./CommandLine";
import { TerminalOutput } from "./TerminalOutput";
import { useTheme } from "@/hooks/useTheme";
import { useGame } from "@/hooks/useGame";
import portfolioData from "@/data/portfolio.json";
import commands from "@/data/commands.json";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    'Welcome to my portfolio! Type "help" to see available commands.',
    "Current directory: ~/portfolio",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { theme, handleThemeChange } = useTheme();
  const { startGame, makeGuess, isValidGuess } = useGame();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(" ");
    let output: string[] = [];

    if (isValidGuess(command)) {
      const [guessOutput] = makeGuess(Number(command));
      output = guessOutput;
    } else {
      switch (command as Command) {
        case "about":
          output = [portfolioData.bio];
          break;
        case "projects":
          output = portfolioData.projects.map(
            (project) =>
              `→ ${project.name}\n  ${project.description}\n  Link: ${project.link}`
          );
          break;
        case "skills":
          output = [
            "Technical Skills:",
            ...portfolioData.skills.map((skill) => `→ ${skill}`),
          ];
          break;
        case "contact":
          output = [
            "Contact Information:",
            `→ GitHub: ${portfolioData.socialLinks.github}`,
            `→ LinkedIn: ${portfolioData.socialLinks.linkedin}`,
          ];
          break;
        case "theme":
          const [themeOutput] = handleThemeChange(args[0]);
          output = themeOutput;
          break;
        case "game":
          output = startGame();
          break;
        case "help":
          output = [
            "Available commands:",
            ...Object.entries(commands).map(
              ([cmd, desc]) => `→ ${cmd}: ${desc}`
            ),
          ];
          break;
        case "clear":
          setHistory([]);
          return;
        default:
          output = [
            `Command not found: ${cmd}. Type "help" for available commands.`,
          ];
      }
    }

    setHistory((prev) => [...prev, `$ ${cmd}`, ...output]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg shadow-2xl bg-opacity-80 backdrop-blur-sm">
      <TitleBar />
      <div
        ref={terminalRef}
        style={{
          background: `${theme.background}CC`,
          color: theme.foreground,
        }}
        className="h-[80vh] overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        onClick={() => inputRef.current?.focus()}
      >
        <TerminalOutput history={history} theme={theme} />
        <CommandLine
          input={input}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
          theme={theme}
        />
      </div>
    </div>
  );
}
