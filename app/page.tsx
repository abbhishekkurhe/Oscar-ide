"use client";

import { useState } from "react";

export default function OscarIDE() {
  const [code, setCode] = useState<string>(
`// Welcome to Oscar IDE 🚀
function hello() {
  console.log("Hello, Oscar!");
}

hello();`
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      
      {/* Header */}
      <header className="h-14 px-6 flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-lg font-semibold text-emerald-400">
          Oscar IDE
        </h1>
        <span className="text-sm text-zinc-400">
          TypeScript Playground
        </span>
      </header>

      {/* Editor + Output */}
      <main className="flex flex-1">
        
        {/* Code Editor */}
        <section className="w-1/2 p-4 border-r border-zinc-800">
          <h2 className="mb-2 text-sm text-zinc-400">Editor</h2>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-full resize-none rounded-lg bg-zinc-900 p-4 font-mono text-sm text-emerald-300 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </section>

        {/* Output Panel */}
        <section className="w-1/2 p-4">
          <h2 className="mb-2 text-sm text-zinc-400">Output</h2>
          <div className="h-full rounded-lg bg-zinc-900 p-4 font-mono text-sm text-zinc-200">
            <p className="text-zinc-500">
              ▶ Output will appear here
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="h-10 flex items-center justify-center border-t border-zinc-800 text-xs text-zinc-500">
        Oscar IDE © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
