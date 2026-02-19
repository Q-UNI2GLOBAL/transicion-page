function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 md:pt-32 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow behind the logo transition */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-500/15 via-primary-500/5 to-transparent rounded-full blur-2xl" />

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Logo */}
        <div className="animate-on-scroll mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl scale-150 animate-pulse-slow" />
            <img
              src="/logo.png"
              alt="Uni2Global Logo"
              className="relative h-24 md:h-32 w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Logo text transition */}
        <div className="animate-on-scroll animate-on-scroll-delay-1 mb-6 flex items-center justify-center gap-3 md:gap-5 flex-wrap">
          <span className="text-xl md:text-2xl font-light text-accent-400/60 line-through decoration-accent-400/30">
            Uni2Matrix
          </span>
          <div className="flex items-center gap-1 text-white/50">
            <svg className="w-6 h-6 md:w-8 md:h-8 animate-morph-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
            Uni2Global
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-on-scroll animate-on-scroll-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-balance">
          <span className="text-accent-400">Uni2Matrix </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-400">evoluciona</span>
          <br />
          <span className="text-white">a </span>
          <span className="text-primary-400">Uni2Global</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll animate-on-scroll-delay-2 text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          Todo lo que conoces, mejorado. Una plataforma más completa,
          más potente y con mayor crecimiento.
        </p>

        {/* CTA */}
        <div className="animate-on-scroll animate-on-scroll-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://uni2global.com"
            className="btn-primary group"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descubrir Uni2Global
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-on-scroll animate-on-scroll-delay-4 mt-16 md:mt-24 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
