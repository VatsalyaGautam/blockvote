import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vote, Shield, Users, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-blue-950/20 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 ring-blue-800/30 hover:ring-blue-700/50 bg-blue-950/20">
              Decentralized voting on the popular Sepholia Testnet{" "}
              <a href="#" className="font-semibold text-blue-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Secure, Transparent
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Blockchain Voting
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-200">
            Create and participate in decentralized elections with complete
            transparency, immutable records, and cryptographic security. Built
            on Conflux eSpace for fast, low-cost transactions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/elections">
              <Button
                size="lg"
                className="px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-lg shadow-blue-500/20"
              >
                <Vote className="mr-2 h-4 w-4" />
                Start Voting
              </Button>
            </Link>
            <Link href="/create">
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-blue-700 text-blue-600 hover:bg-blue-900/30 hover:text-blue-200"
              >
                Create Election
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-blue-900/30 p-3 border border-blue-800/20">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-blue-200">
                Secure
              </h3>
              <p className="mt-1 text-xs text-blue-300/70 text-center">
                Blockchain-secured voting
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-cyan-900/30 p-3 border border-cyan-800/20">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-cyan-200">
                Democratic
              </h3>
              <p className="mt-1 text-xs text-cyan-300/70 text-center">
                One person, one vote
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-indigo-900/30 p-3 border border-indigo-800/20">
                <BarChart3 className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-indigo-200">
                Transparent
              </h3>
              <p className="mt-1 text-xs text-indigo-300/70 text-center">
                Real-time results
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-slate-800/30 p-3 border border-slate-700/20">
                <Vote className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-200">
                Immutable
              </h3>
              <p className="mt-1 text-xs text-slate-300/70 text-center">
                Permanent record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
