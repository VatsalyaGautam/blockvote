"use client";
import Link from "next/link";
import { useEthers } from "@/lib/EthersProvider";

export function Navigation() {
  const { account, connect } = useEthers();

  return (
    <header className="sticky flex justify-center px-10 top-0 z-50 w-full border-b border-blue-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BlockVote
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50"
              href="/create"
            >
              Create Election
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            {account ? (
              <span className="text-sm text-blue-300 bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-800/30 shadow-inner">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
            ) : (
              <button
                onClick={connect}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
