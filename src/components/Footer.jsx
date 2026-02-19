function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Uni2Global" className="h-8 w-auto opacity-60" />
            <span className="text-sm text-white/40">
              &copy; 2026 Uni2Global Ltd. Todos los derechos reservados.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://uni2global.com"
              className="text-white/40 hover:text-primary-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              uni2global.com
            </a>
            <span className="text-white/10">|</span>
            <a
              href="mailto:info@uni2global.com"
              className="text-white/40 hover:text-primary-400 transition-colors duration-300"
            >
              info@uni2global.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
