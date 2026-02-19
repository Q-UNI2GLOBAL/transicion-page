import { Link } from 'react-router-dom'

function PrivacyPolicy() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politica de Privacidad Completa</h1>
        <p className="text-lg text-primary-400 font-semibold mb-1">UNI2GLOBAL LLC</p>
        <p className="text-sm text-white/50 mb-2">Version 3.0 - Wyoming LLC</p>
        <p className="text-sm text-white/50 mb-10">Fecha de entrada en vigor: Por determinar</p>

        {/* Resumen */}
        <div className="glass-card p-6 mb-12">
          <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">Resumen en Lenguaje Sencillo</h3>
          <p className="text-white/70 mb-4">Esta politica explica como Uni2Global maneja sus datos personales:</p>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">Recopilamos</strong> solo los datos necesarios para operar la plataforma</span></li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">Usamos</strong> sus datos para prestar el servicio y cumplir la ley</span></li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">Protegemos</strong> sus datos con medidas de seguridad apropiadas</span></li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">No vendemos</strong> sus datos a terceros</span></li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">Respetamos</strong> sus derechos segun su pais de residencia</span></li>
            <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> <span><strong className="text-white/90">Le informamos</strong> si hay cambios importantes</span></li>
          </ul>
          <p className="text-white/50 text-sm mt-4">Si tiene preguntas, puede contactarnos en: <a href="mailto:info@uni2global.com" className="text-primary-400 hover:underline">info@uni2global.com</a></p>
        </div>

        {/* 1. Introduccion */}
        <Section number="1" title="Introduccion">
          <SubSection title="1.1 Compromiso con la Privacidad">
            <p>Uni2Global LLC ("Uni2Global", "nosotros", "la Plataforma") se compromete a proteger la privacidad de los usuarios de su ecosistema blockchain. Esta Politica de Privacidad describe como recopilamos, usamos, almacenamos, compartimos y protegemos su informacion personal.</p>
          </SubSection>
          <SubSection title="1.2 Alcance">
            <p className="mb-3">Esta politica aplica a:</p>
            <ul className="list-disc list-inside space-y-1 text-white/70">
              <li>El sitio web de Uni2Global</li>
              <li>La plataforma y ecosistema Uni2Global</li>
              <li>Aplicaciones moviles relacionadas</li>
              <li>Comunicaciones por correo electronico</li>
              <li>Cualquier servicio que referencie esta politica</li>
            </ul>
          </SubSection>
          <SubSection title="1.3 Aceptacion">
            <p>Al utilizar nuestros servicios, usted acepta las practicas descritas en esta politica. Si no esta de acuerdo, por favor no utilice la plataforma.</p>
          </SubSection>
        </Section>

        {/* 2. Responsable del Tratamiento */}
        <Section number="2" title="Responsable del Tratamiento">
          <SubSection title="2.1 Identificacion">
            <Table headers={['Campo', 'Informacion']} rows={[
              ['Responsable del tratamiento', 'Uni2Global LLC'],
              ['Tipo de entidad', 'Limited Liability Company'],
              ['Jurisdiccion', 'Wyoming, Estados Unidos'],
              ['Correo de privacidad', 'info@uni2global.com'],
            ]} />
          </SubSection>
          <SubSection title="2.2 Delegado de Proteccion de Datos (DPO)">
            <p className="mb-3">Para usuarios en la Union Europea, conforme al RGPD:</p>
            <Table headers={['Campo', 'Informacion']} rows={[
              ['DPO designado', 'No requerido por volumen de datos'],
              ['Contacto DPO', 'info@uni2global.com'],
            ]} />
          </SubSection>
        </Section>

        {/* 3. Marco Legal */}
        <Section number="3" title="Marco Legal Aplicable">
          <SubSection title="3.1 Normativa Principal">
            <p className="mb-4">Esta politica se rige por las siguientes normativas segun la ubicacion del usuario:</p>

            <h4 className="text-white/90 font-semibold mb-2">Para Todos los Usuarios</h4>
            <Table headers={['Normativa', 'Aplicacion']} rows={[
              ['Leyes de Wyoming, EE.UU.', 'Marco general como jurisdiccion de la empresa'],
              ['Constitucion de EE.UU.', 'Protecciones federales de privacidad'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">Para Usuarios en Estados Unidos</h4>
            <Table headers={['Normativa', 'Aplicacion']} rows={[
              ['Federal Trade Commission Act', 'Practicas comerciales justas'],
              ['Electronic Communications Privacy Act', 'Comunicaciones electronicas'],
              ['California Consumer Privacy Act (CCPA)', 'Usuarios de California'],
              ['Leyes estatales aplicables', 'Segun residencia del usuario'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">Para Usuarios en la Union Europea</h4>
            <Table headers={['Normativa', 'Aplicacion']} rows={[
              ['RGPD (Reglamento 2016/679)', 'Proteccion de datos personales'],
              ['Directiva ePrivacy (2002/58/CE)', 'Comunicaciones electronicas y cookies'],
              ['Leyes nacionales de transposicion', 'Complementarias al RGPD'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">Para Usuarios en Colombia</h4>
            <Table headers={['Normativa', 'Aplicacion']} rows={[
              ['Ley 1581 de 2012', 'Proteccion de datos personales'],
              ['Decreto 1377 de 2013', 'Desarrollo reglamentario'],
              ['Circular Externa 005 de 2017', 'Instrucciones de la SIC'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">Para Usuarios en Emiratos Arabes Unidos</h4>
            <Table headers={['Normativa', 'Aplicacion']} rows={[
              ['Federal Decree-Law No. 45/2021', 'Proteccion de datos personales'],
              ['Regulaciones DIFC/ADGM', 'Zonas financieras especiales'],
              ['Regulaciones VARA', 'Activos virtuales'],
            ]} />
          </SubSection>
        </Section>

        {/* 4. Datos que Recopilamos */}
        <Section number="4" title="Datos que Recopilamos">
          <SubSection title="4.1 Categorias de Datos">
            <h4 className="text-white/90 font-semibold mb-2">A. Datos de Registro e Identificacion</h4>
            <Table headers={['Dato', 'Obligatorio', 'Finalidad']} rows={[
              ['Nombre completo', 'Si', 'Identificacion del usuario'],
              ['Correo electronico', 'Si', 'Comunicaciones y acceso'],
              ['Pais de residencia', 'Si', 'Cumplimiento normativo'],
              ['Fecha de nacimiento', 'Si', 'Verificacion de mayoria de edad'],
              ['Documento de identidad', 'Cuando requiera KYC', 'Verificacion de identidad'],
              ['Selfie con documento', 'Cuando requiera KYC', 'Verificacion biometrica'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">B. Datos Tecnicos y de Acceso</h4>
            <Table headers={['Dato', 'Metodo de Recopilacion', 'Finalidad']} rows={[
              ['Direccion IP', 'Automatico', 'Seguridad y geolocalizacion'],
              ['Identificador de wallet', 'Proporcionado por usuario', 'Vinculacion de activos'],
              ['Tipo de dispositivo', 'Automatico', 'Compatibilidad tecnica'],
              ['Sistema operativo', 'Automatico', 'Soporte tecnico'],
              ['Navegador', 'Automatico', 'Optimizacion'],
              ['Logs de acceso', 'Automatico', 'Seguridad y auditoria'],
              ['Fecha/hora de conexiones', 'Automatico', 'Registros de actividad'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">C. Datos de Interaccion con la Plataforma</h4>
            <Table headers={['Dato', 'Descripcion', 'Finalidad']} rows={[
              ['Historial de transacciones', 'Operaciones en el ecosistema', 'Funcionamiento del servicio'],
              ['Opcion de participacion elegida', 'Continuidad, NFT o liquidacion', 'Ejecucion contractual'],
              ['Preferencias de configuracion', 'Idioma, notificaciones, etc.', 'Personalizacion'],
              ['Comunicaciones con soporte', 'Tickets y consultas', 'Atencion al cliente'],
              ['Interacciones con smart contracts', 'Transacciones blockchain', 'Operativa tecnica'],
            ]} />

            <h4 className="text-white/90 font-semibold mt-6 mb-2">D. Datos de Verificacion KYC/AML (cuando aplique)</h4>
            <Table headers={['Dato', 'Cuando se Requiere', 'Proveedor']} rows={[
              ['Documento de identidad', 'Operaciones sobre umbral', 'Proveedor verificado'],
              ['Comprobante de domicilio', 'Verificacion avanzada', 'Proveedor verificado'],
              ['Fuente de fondos', 'Cumplimiento AML', 'Proveedor verificado'],
              ['Verificacion biometrica', 'Cuando sea necesario', 'Proveedor verificado'],
            ]} />
          </SubSection>

          <SubSection title="4.2 Datos que NO Recopilamos">
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Datos de salud (salvo requerimiento legal)</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Orientacion sexual</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Afiliacion politica</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Creencias religiosas</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Origen etnico</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> Datos geneticos o biometricos (salvo KYC)</li>
            </ul>
          </SubSection>
        </Section>

        {/* 5. Finalidades y Base Legal */}
        <Section number="5" title="Finalidades y Base Legal">
          <SubSection title="5.1 Tabla de Finalidades">
            <Table headers={['Finalidad', 'Base Legal (RGPD)', 'Base Legal (Colombia)', 'Datos Utilizados']} rows={[
              ['Prestacion del servicio', 'Art. 6.1.b - Ejecucion contractual', 'Autorizacion previa', 'Registro, tecnicos, interaccion'],
              ['Creacion de cuenta', 'Art. 6.1.b - Ejecucion contractual', 'Autorizacion previa', 'Identificacion'],
              ['Verificacion de identidad', 'Art. 6.1.c - Obligacion legal', 'Obligacion legal', 'KYC'],
              ['Prevencion de fraude', 'Art. 6.1.f - Interes legitimo', 'Interes legitimo', 'Tecnicos, comportamiento'],
              ['Seguridad de la plataforma', 'Art. 6.1.f - Interes legitimo', 'Interes legitimo', 'Tecnicos, logs'],
              ['Comunicaciones transaccionales', 'Art. 6.1.b - Ejecucion contractual', 'Autorizacion previa', 'Contacto'],
              ['Comunicaciones de marketing', 'Art. 6.1.a - Consentimiento', 'Autorizacion expresa', 'Contacto'],
              ['Cumplimiento normativo', 'Art. 6.1.c - Obligacion legal', 'Obligacion legal', 'Segun requerimiento'],
              ['Mejora del servicio', 'Art. 6.1.f - Interes legitimo', 'Interes legitimo', 'Interaccion, tecnicos'],
              ['Analisis estadistico', 'Art. 6.1.f - Interes legitimo', 'Interes legitimo', 'Datos anonimizados'],
              ['Defensa legal', 'Art. 6.1.f - Interes legitimo', 'Interes legitimo', 'Todos los necesarios'],
            ]} />
          </SubSection>
          <SubSection title="5.2 Detalle del Interes Legitimo">
            <p className="mb-3">Cuando basamos el tratamiento en interes legitimo, hemos realizado la ponderacion correspondiente:</p>
            <Table headers={['Interes Legitimo', 'Nuestra Necesidad', 'Impacto en Usuario', 'Salvaguardas']} rows={[
              ['Seguridad', 'Proteger plataforma de ataques', 'Minimo - beneficia al usuario', 'Logs limitados, acceso restringido'],
              ['Prevencion fraude', 'Evitar perdidas y abusos', 'Bajo - protege su cuenta', 'Alertas, no decisiones automatizadas'],
              ['Mejora del servicio', 'Optimizar experiencia', 'Minimo - mejora el servicio', 'Datos agregados, no individuales'],
            ]} />
          </SubSection>
        </Section>

        {/* 6. Uso y Tratamiento de Datos */}
        <Section number="6" title="Uso y Tratamiento de Datos">
          <SubSection title="6.1 Procesamiento de Datos">
            <h4 className="text-white/90 font-semibold mb-3">Como Usamos sus Datos</h4>

            <div className="space-y-4 text-white/70">
              <div>
                <p className="font-semibold text-white/90 mb-1">1. Operativa de la plataforma</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Procesar sus transacciones</li>
                  <li>Ejecutar smart contracts</li>
                  <li>Gestionar su cuenta y wallet vinculada</li>
                  <li>Aplicar la opcion de participacion elegida</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white/90 mb-1">2. Comunicaciones</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Enviar confirmaciones de transacciones</li>
                  <li>Notificar cambios importantes</li>
                  <li>Responder a sus consultas</li>
                  <li>Alertas de seguridad</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white/90 mb-1">3. Seguridad</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Detectar actividad sospechosa</li>
                  <li>Prevenir acceso no autorizado</li>
                  <li>Investigar posibles fraudes</li>
                  <li>Cumplir obligaciones AML/KYC</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white/90 mb-1">4. Cumplimiento legal</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Responder a requerimientos de autoridades</li>
                  <li>Cumplir obligaciones fiscales</li>
                  <li>Cooperar con investigaciones legales</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection title="6.2 Decisiones Automatizadas">
            <Table headers={['Proceso', 'Automatizado?', 'Intervencion Humana', 'Su Derecho']} rows={[
              ['Verificacion KYC', 'Parcialmente', 'Revision manual de casos complejos', 'Solicitar revision'],
              ['Deteccion de fraude', 'Si, con alertas', 'Revision humana antes de accion', 'Impugnar decision'],
              ['Calculo de valor reconocido', 'Si, segun formula', 'Revision disponible si hay discrepancia', 'Solicitar revision'],
              ['Aplicacion de sanciones', 'No', 'Siempre revision humana', 'Audiencia previa'],
            ]} />
            <div className="glass-card p-4 mt-4 border-l-2 border-primary-400">
              <p className="text-white/70 text-sm"><strong className="text-white/90">Su Derecho RGPD:</strong> Conforme al art. 22 RGPD, usted tiene derecho a no ser objeto de decisiones basadas unicamente en tratamiento automatizado que produzcan efectos juridicos significativos. Puede solicitar intervencion humana.</p>
            </div>
          </SubSection>
        </Section>

        {/* 7. Comparticion con Terceros */}
        <Section number="7" title="Comparticion con Terceros">
          <SubSection title="7.1 Categorias de Destinatarios">
            <Table headers={['Categoria', 'Ejemplos', 'Finalidad', 'Base Legal']} rows={[
              ['Proveedores tecnologicos', 'Hosting, cloud', 'Infraestructura', 'Contrato'],
              ['Servicios KYC/AML', 'Proveedores verificados', 'Verificacion identidad', 'Obligacion legal'],
              ['Procesadores de pago', 'Proveedores verificados', 'Procesamiento transacciones', 'Contrato'],
              ['Asesores legales', 'Bufetes', 'Defensa juridica', 'Interes legitimo'],
              ['Auditores', 'Proveedores verificados', 'Auditoria financiera', 'Obligacion legal'],
              ['Autoridades', 'Reguladores, tribunales', 'Cumplimiento legal', 'Obligacion legal'],
              ['Socios blockchain', 'Redes, bridges', 'Operativa tecnica', 'Contrato'],
            ]} />
          </SubSection>

          <SubSection title="7.2 Garantias con Terceros">
            <p className="mb-3">Todos los terceros que procesan datos en nuestro nombre:</p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Firman <strong className="text-white/90">acuerdos de procesamiento</strong> (DPA)</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Implementan <strong className="text-white/90">medidas de seguridad</strong> equivalentes</li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Solo procesan segun <strong className="text-white/90">nuestras instrucciones</strong></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Estan sujetos a <strong className="text-white/90">confidencialidad</strong></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">&#10003;</span> Son evaluados periodicamente</li>
            </ul>
          </SubSection>

          <SubSection title="7.3 Lo que NUNCA Hacemos">
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> <strong className="text-white/90">No vendemos</strong> sus datos personales</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> <strong className="text-white/90">No compartimos</strong> para marketing de terceros sin consentimiento</li>
              <li className="flex items-start gap-2"><span className="text-red-400">&#10007;</span> <strong className="text-white/90">No cedemos</strong> a brokers de datos</li>
            </ul>
          </SubSection>
        </Section>

        {/* 8. Transferencias Internacionales */}
        <Section number="8" title="Transferencias Internacionales">
          <SubSection title="8.1 Naturaleza Global del Servicio">
            <p className="mb-3">Dado el caracter global de blockchain, sus datos pueden procesarse en diferentes jurisdicciones:</p>
            <Table headers={['Ubicacion', 'Tipo de Datos', 'Mecanismo de Proteccion']} rows={[
              ['Estados Unidos (Wyoming)', 'Todos', 'Sede de la empresa'],
              ['Union Europea', 'Usuarios UE', 'Clausulas Contractuales Tipo (SCCs)'],
              ['Otros paises', 'Segun proveedores', 'SCCs o decisiones de adecuacion'],
            ]} />
          </SubSection>
          <SubSection title="8.2 Mecanismos de Transferencia (para datos UE)">
            <p>Conforme al RGPD, utilizamos los siguientes mecanismos para transferencias fuera del EEE: Clausulas Contractuales Tipo (SCCs) aprobadas por la Comision Europea, decisiones de adecuacion cuando esten disponibles, y salvaguardas adicionales segun sea necesario.</p>
          </SubSection>
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
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">{number}. {title.toUpperCase()}</h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white/90 mb-3">{title}</h3>
      <div className="text-white/70 leading-relaxed">{children}</div>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white/80 font-semibold border-b border-white/10">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-white/60 ${j === 0 ? 'font-medium text-white/80' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PrivacyPolicy
