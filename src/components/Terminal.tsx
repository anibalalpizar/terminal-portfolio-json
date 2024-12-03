"use client";

import { useState, useEffect, useRef } from "react";
import { Command, commands, portfolioData } from "@/lib/data";
import { TitleBar } from "./TitleBar";
import { CommandLine } from "./CommandLine";
import { TerminalOutput } from "./TerminalOutput";

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    'Welcome to my portfolio! Type "help" to see available commands.',
    "Current directory: ~/portfolio",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
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
    const trimmedCmd = cmd.trim().toLowerCase() as Command;
    let output: string[] = [];

    switch (trimmedCmd) {
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
      case "help":
        output = [
          "Available commands:",
          ...Object.entries(commands).map(([cmd, desc]) => `→ ${cmd}: ${desc}`),
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
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg shadow-2xl">
      <TitleBar />
      <div
        ref={terminalRef}
        className="h-[80vh] overflow-y-auto bg-[#1E1E1E] p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        onClick={() => inputRef.current?.focus()}
      >
        <TerminalOutput history={history} />
        <CommandLine
          input={input}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}
