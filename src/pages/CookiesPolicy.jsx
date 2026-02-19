import { Link } from 'react-router-dom'

function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-dark-500 text-white/80">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <img src="/logo.png" alt="Uni2Global" className="h-8 w-auto opacity-60" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politica de Cookies</h1>
        <p className="text-lg text-primary-400 font-semibold mb-1">UNI2GLOBAL LLC</p>
        <p className="text-sm text-white/50 mb-10">Ultima actualizacion: Febrero 2026</p>

        <Section number="1" title="Que son las Cookies">
          <p>Las cookies son pequenos archivos de texto que se almacenan en su dispositivo (ordenador, tablet o movil) cuando visita un sitio web. Son ampliamente utilizadas para hacer que los sitios web funcionen de manera mas eficiente, asi como para proporcionar informacion a los propietarios del sitio.</p>
        </Section>

        <Section number="2" title="Cookies que Utilizamos">
          <p className="mb-4">En Uni2Global utilizamos los siguientes tipos de cookies:</p>

          <div className="space-y-4">
            <CookieCategory
              title="Cookies Estrictamente Necesarias"
              description="Estas cookies son esenciales para que usted pueda navegar por el sitio web y utilizar sus funciones. Sin estas cookies, los servicios que ha solicitado no pueden ser proporcionados."
              examples={['Sesion de usuario', 'Preferencias de seguridad', 'Token de autenticacion']}
              duration="Sesion / 30 dias"
              canDisable={false}
            />
            <CookieCategory
              title="Cookies de Rendimiento"
              description="Estas cookies recogen informacion sobre como los visitantes utilizan un sitio web. Nos ayudan a entender como mejorar el sitio."
              examples={['Paginas visitadas', 'Tiempo de carga', 'Errores encontrados']}
              duration="Hasta 12 meses"
              canDisable={true}
            />
            <CookieCategory
              title="Cookies de Funcionalidad"
              description="Estas cookies permiten que el sitio web recuerde las elecciones que usted hace (como su idioma preferido) y proporcionan funciones mejoradas y mas personales."
              examples={['Idioma seleccionado', 'Region', 'Preferencias de visualizacion']}
              duration="Hasta 12 meses"
              canDisable={true}
            />
          </div>
        </Section>

        <Section number="3" title="Cookies de Terceros">
          <p className="mb-3">Algunos de nuestros servicios pueden utilizar cookies de terceros para mejorar su experiencia:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left px-4 py-3 text-white/80 font-semibold border-b border-white/10">Proveedor</th>
                  <th className="text-left px-4 py-3 text-white/80 font-semibold border-b border-white/10">Finalidad</th>
                  <th className="text-left px-4 py-3 text-white/80 font-semibold border-b border-white/10">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 text-white/80 font-medium">Servicios de analisis</td>
                  <td className="px-4 py-3 text-white/60">Analisis de uso del sitio</td>
                  <td className="px-4 py-3 text-white/60">Rendimiento</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 text-white/80 font-medium">Proveedores de infraestructura</td>
                  <td className="px-4 py-3 text-white/60">Distribucion de contenido</td>
                  <td className="px-4 py-3 text-white/60">Necesarias</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section number="4" title="Como Gestionar las Cookies">
          <p className="mb-4">Usted puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya estan en su dispositivo y puede configurar la mayoria de los navegadores para evitar que se coloquen.</p>
          <div className="space-y-3">
            <BrowserInfo name="Google Chrome" path="Configuracion > Privacidad y seguridad > Cookies" />
            <BrowserInfo name="Mozilla Firefox" path="Opciones > Privacidad & Seguridad > Cookies" />
            <BrowserInfo name="Safari" path="Preferencias > Privacidad > Cookies" />
            <BrowserInfo name="Microsoft Edge" path="Configuracion > Privacidad > Cookies" />
          </div>
          <div className="glass-card p-4 mt-6 border-l-2 border-yellow-400/60">
            <p className="text-white/70 text-sm"><strong className="text-white/90">Nota:</strong> Si deshabilita las cookies, es posible que algunas funciones del sitio no esten disponibles o no funcionen correctamente.</p>
          </div>
        </Section>

        <Section number="5" title="Base Legal">
          <p className="mb-3">El uso de cookies se basa en:</p>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <strong className="text-white/90">Cookies necesarias:</strong> Interes legitimo (Art. 6.1.f RGPD) - necesarias para el funcionamiento del servicio</li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <strong className="text-white/90">Cookies de rendimiento y funcionalidad:</strong> Consentimiento (Art. 6.1.a RGPD) - solo se activan con su autorizacion</li>
          </ul>
        </Section>

        <Section number="6" title="Actualizaciones">
          <p>Podemos actualizar esta Politica de Cookies periodicamente para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o regulatorios. Le recomendamos que visite esta pagina regularmente para estar informado sobre nuestro uso de cookies.</p>
        </Section>

        <Section number="7" title="Contacto">
          <p>Si tiene alguna pregunta sobre nuestra Politica de Cookies, puede contactarnos en:</p>
          <div className="glass-card p-4 mt-3">
            <p className="text-white/70">Uni2Global LLC</p>
            <p className="text-white/70">Email: <a href="mailto:info@uni2global.com" className="text-primary-400 hover:underline">info@uni2global.com</a></p>
            <p className="text-white/70">Web: <a href="https://uni2global.com" className="text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">uni2global.com</a></p>
          </div>
        </Section>

        {/* Footer */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/40 text-sm">&copy; 2026 Uni2Global LLC. Todos los derechos reservados.</p>
          <Link to="/" className="text-primary-400 hover:text-primary-300 text-sm mt-2 inline-block transition-colors">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}

function Section({ number, title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10">{number}. {title.toUpperCase()}</h2>
      <div className="text-white/70 leading-relaxed">{children}</div>
    </section>
  )
}

function CookieCategory({ title, description, examples, duration, canDisable }) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h4 className="font-semibold text-white/90">{title}</h4>
        <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${canDisable ? 'bg-yellow-400/10 text-yellow-400' : 'bg-green-400/10 text-green-400'}`}>
          {canDisable ? 'Opcional' : 'Necesaria'}
        </span>
      </div>
      <p className="text-white/60 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {examples.map((ex, i) => (
          <span key={i} className="text-xs bg-white/5 text-white/50 px-2 py-1 rounded">{ex}</span>
        ))}
      </div>
      <p className="text-white/40 text-xs">Duracion: {duration}</p>
    </div>
  )
}

function BrowserInfo({ name, path }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-white/80 font-medium min-w-[140px]">{name}:</span>
      <span className="text-white/50">{path}</span>
    </div>
  )
}

export default CookiesPolicy
