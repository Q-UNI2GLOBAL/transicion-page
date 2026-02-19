const STEPS = [
  {
    date: 'Febrero 2026',
    title: 'Anuncio del cambio',
    description: 'Comunicamos oficialmente la evolución de Uni2Matrix a Uni2Global.',
    status: 'completed',
  },
  {
    date: 'Ya disponible',
    title: 'Nueva plataforma activa',
    description: 'Uni2Global está operativa y lista para todos los usuarios.',
    status: 'completed',
  },
  {
    date: 'En curso',
    title: 'Migración completa',
    description: 'Proceso de transición de todos los servicios y funcionalidades.',
    status: 'current',
  },
  {
    date: 'Próximamente',
    title: 'Nuevas funcionalidades',
    description: 'Lanzamiento de herramientas y servicios exclusivos del nuevo ecosistema.',
    status: 'upcoming',
  },
]

function Timeline() {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-300 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              Hoja de ruta
            </span>
          </div>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Línea de tiempo
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-lg text-white/50 max-w-2xl mx-auto">
            Un proceso transparente y ordenado para la transición.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.title}
                  className={`animate-on-scroll animate-on-scroll-delay-${index + 1} relative flex items-start gap-6 md:gap-0`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        step.status === 'completed'
                          ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                          : step.status === 'current'
                          ? 'bg-accent-500/20 border-accent-500 text-accent-400 animate-pulse-slow'
                          : 'bg-white/5 border-white/20 text-white/40'
                      }`}
                    >
                      {step.status === 'completed' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : step.status === 'current' ? (
                        <div className="w-3 h-3 bg-accent-400 rounded-full" />
                      ) : (
                        <div className="w-3 h-3 bg-white/30 rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-start">
                    {/* Left content */}
                    <div className={`${isLeft ? '' : 'order-3'} ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`glass-card p-6 inline-block ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                        <span
                          className={`text-sm font-semibold ${
                            step.status === 'completed'
                              ? 'text-primary-400'
                              : step.status === 'current'
                              ? 'text-accent-400'
                              : 'text-white/40'
                          }`}
                        >
                          {step.date}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                        <p className="text-white/50">{step.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 order-2">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                          step.status === 'completed'
                            ? 'bg-primary-500/20 border-primary-500 text-primary-400'
                            : step.status === 'current'
                            ? 'bg-accent-500/20 border-accent-500 text-accent-400 animate-pulse-slow'
                            : 'bg-dark-500 border-white/20 text-white/40'
                        }`}
                      >
                        {step.status === 'completed' ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : step.status === 'current' ? (
                          <div className="w-3 h-3 bg-accent-400 rounded-full" />
                        ) : (
                          <div className="w-3 h-3 bg-white/30 rounded-full" />
                        )}
                      </div>
                    </div>

                    {/* Right empty / content */}
                    <div className={`${isLeft ? 'order-3' : ''}`} />
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden flex-1">
                    <span
                      className={`text-sm font-semibold ${
                        step.status === 'completed'
                          ? 'text-primary-400'
                          : step.status === 'current'
                          ? 'text-accent-400'
                          : 'text-white/40'
                      }`}
                    >
                      {step.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-white/50">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
