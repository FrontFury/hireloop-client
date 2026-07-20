import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mx-auto my-6 w-full max-w-[1320px] rounded-[2rem] bg-slate-950/95 px-6 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl ring-1 ring-slate-800">
      <div className="flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src="/logo.png" alt="HireLoop logo" className="h-11 w-11 rounded-full bg-white/10 p-1 shadow-sm shadow-slate-900/50" />
          <span className="text-lg font-semibold tracking-tight text-white">hireloop</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <Link to="/" className="transition hover:text-white">Browse Jobs</Link>
          <Link to="/about" className="transition hover:text-white">Company</Link>
          <Link to="/contact" className="transition hover:text-white">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden h-6 w-px bg-slate-700 md:inline-flex" />
          <Link to="/sign-in" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Sign In
          </Link>
          <Link
            to="/get-started"
            className="rounded-[1rem] bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-blue-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
