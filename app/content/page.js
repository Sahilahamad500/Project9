'use client';

import { ArrowRight, Star, Code, Zap, Globe } from '@deemlol/next-icons';

export default function HomePage() {
  return (
    <div className="min-h-screen">


      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <span className="text-black border border-blue-600/30 px-6 py-4 rounded-full text-sm font-bold">
              Welcome to the future
            </span>
          </div>

          <h1 className="text-5xl  font-bold text-blue-600">
            Build Amazing Things
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              With Modern Tools
            </span>
          </h1>

          <p className="text-xl text-black max-w-2xl mx-auto">
            Everything you need to create stunning web applications. Fast, powerful, and developer-friendly.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105">
              Start Building <ArrowRight size={20} />
            </button>
            <button className="border border-slate-600 hover:border-slate-400 text-black px-8 py-3 rounded-lg font-semibold transition">
              View Docs
            </button>
          </div>
        </div>

      </section>


      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Powerful Features</h2>
          <p className="text-blue-600 text-lg">Everything you need in one platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500/30 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-blue-600 transform cursor-pointer transition duration-300 hover:rotate-350 hover:scale-105 " size={24} />
            </div>
            <h3 className="text-xl font-bold text-green-500 mb-2">Lightning Fast</h3>
            <p className="text-white">Optimized for performance with zero compromises</p>
          </div>


          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border-slate-800 rounded-xl p-8 hover:border-purple-500/30 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ">
              <Code className="text-purple-400 transform cursor-pointer transition duration-300 hover:rotate-300 hover:scale-105 " size={24} />
            </div>
            <h3 className="text-xl font-bold text-green-500 mb-2">Developer First</h3>
            <p className="text-white">Intuitive APIs and comprehensive documentation</p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-cyan-400 transform cursor-pointer transition duration-300 hover:rotate-300 hover:scale-105 " size={24} />
            </div>
            <h3 className="text-xl font-bold text-green-500 mb-2">Global Scale</h3>
            <p className="text-white">Deploy anywhere, serve everyone instantly</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-y border-slate-800">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <p className="text-slate-600">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
            <p className="text-slate-600">Uptime</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-500 mb-2">200ms</div>
            <p className="text-slate-600">Avg Response</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600 mb-2">5★</div>
            <p className="text-slate-600">User Rating</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-black text-center mb-16">What Users Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border border-slate-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />)}
            </div>
            <p className="text-slate-300 mb-4">
              "This platform completely transformed how we build. Highly recommended for any team!"
            </p>
            <p className="text-slate-400 font-semibold">Alex Johnson</p>
            <p className="text-slate-500 text-sm">CEO at TechCorp</p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border border-slate-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer p-8">
            <div className="flex gap-1  mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />)}
            </div>
            <p className="text-slate-300 mb-4">
              "Best decision we made. The support team is incredible and always helpful."
            </p>
            <p className="text-slate-400 font-semibold">Sarah Chen</p>
            <p className="text-slate-500 text-sm">Lead Developer at StartupXYZ</p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">Join thousands of developers building the future</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
