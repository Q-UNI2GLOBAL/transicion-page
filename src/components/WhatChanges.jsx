const STAYS = [
  'Tu cuenta y credenciales',
  'Todos tus balances',
  'Tu red de referidos',
  'Tu historial completo',
  'Tus planes activos',
  'Tu rango y progreso',
]

const IMPROVES = [
  'Nueva imagen y marca',
  'Nuevas funcionalidades',
  'Mejor rendimiento',
  'Mayor comunidad global',
  'Más opciones de crecimiento',
  'Interfaz rediseñada',
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

function WhatChanges() {
  return (
    <section className="section-padding relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-300 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              Transparencia total
            </span>
          </div>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Qué cambia y qué se mantiene?
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-lg text-white/50 max-w-2xl mx-auto">
            Tu información está segura. Solo mejoramos la experiencia.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* What stays */}
          <div className="animate-on-scroll glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Lo que se mantiene</h3>
            </div>

            <ul className="space-y-4">
              {STAYS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-white/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What improves */}
          <div className="animate-on-scroll animate-on-scroll-delay-1 glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Lo que mejora</h3>
            </div>

            <ul className="space-y-4">
              {IMPROVES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <SparkleIcon />
                  <span className="text-white/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatChanges
