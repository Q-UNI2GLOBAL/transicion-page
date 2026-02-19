function CallToAction() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-accent-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="animate-on-scroll glass-card p-10 md:p-16 text-center relative overflow-hidden">
          {/* Top accent border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />

          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tu nueva experiencia
              <span className="gradient-text"> te espera</span>
            </h2>
          </div>

          <p className="animate-on-scroll animate-on-scroll-delay-1 text-lg text-white/50 max-w-2xl mx-auto mb-10">
            Accede a Uni2Global y descubre todo lo que hemos preparado para ti.
            El futuro de tu experiencia comienza ahora.
          </p>

          {/* Buttons */}
          <div className="animate-on-scroll animate-on-scroll-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://uni2global.com"
              className="btn-primary group w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Uni2Global
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="https://app.uni2global.com/login"
              className="btn-secondary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Acceder a mi cuenta
            </a>
          </div>

          {/* Note */}
          <div className="animate-on-scroll animate-on-scroll-delay-3">
            <div className="inline-flex items-start gap-3 px-5 py-3 bg-primary-500/10 border border-primary-500/20 rounded-xl text-left">
              <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-sm text-white/60">
                <span className="text-white/80 font-medium">Nota importante:</span>{' '}
                Tus credenciales de Uni2Matrix funcionan en Uni2Global.
                No necesitas crear una cuenta nueva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
