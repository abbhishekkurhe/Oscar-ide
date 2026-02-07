export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Oscar
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              A modern online code editor for developers.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Oscar IDE. Built for developers.
        </div>
      </div>
    </footer>
  );
}
