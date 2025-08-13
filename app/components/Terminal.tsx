"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { commands } from "../lib/commands";

export default function Terminal() {
  const [history, setHistory] = useState<(string | JSX.Element)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!booted) {
      runCommand("neofetch");
      setBooted(true);
    }
    inputRef.current?.focus();
  }, [booted]);

  // Scroll page down when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore clicks on inputs themselves to avoid double focusing
      if (!(e.target instanceof HTMLInputElement)) {
        inputRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const runCommand = async (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    const output = commands[command]?.run?.();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    // If the command is async, await it
    const result = output instanceof Promise ? await output : output;

    setHistory((prev) => [
      ...prev,
      `shinu@sajat-pc:~$ ${command}`,
      result || `Command not found: ${command}`,
    ]);
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      await runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="terminal w-full max-w-4xl mx-auto font-mono text-xs sm:text-sm mb-2" // added responsive font sizes here
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}

      <div className="flex text-xs sm:text-sm">
        <span className="pr-2">shinu@sajat-pc:~$</span>
        <span>{input}</span>
        <span
          className="inline-block ml-1 mt-0.5 bg-green-600 animate-pulse 
             w-[0.9em] h-[0.9em] sm:w-[0.6em] sm:h-[1em] 
             "
        />
        <input
          ref={inputRef}
          className="absolute opacity-0 pointer-events-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
