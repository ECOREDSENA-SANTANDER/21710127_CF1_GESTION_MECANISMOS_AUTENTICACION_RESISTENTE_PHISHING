export default {
  global: {
    Name: 'Mecanismos y riesgos de autenticación en servicios digitales',
    Description: 'Desarrolla capacidades para identificar amenazas, analizar factores de riesgo y comprender el funcionamiento de los mecanismos de autenticación en diferentes servicios digitales. Promueve la comparación de autenticadores, la determinación de niveles de aseguramiento y la selección de mecanismos resistentes al phishing, de acuerdo con las características del entorno tecnológico y los requerimientos de seguridad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Identidad y acceso digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requisitos de autenticación en servicios digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Amenazas y factores de riesgo asociados a la autenticación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Autenticación multifactor y tipos de autenticadores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Resistencia al phishing',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Niveles de aseguramiento de la autenticación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Técnicas de definición de problemas en el entorno laboral',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Documentación de requisitos y arquitectura básica',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Autenticación',
      significado: 'Proceso mediante el cual un sistema comprueba que una persona o entidad controla uno o más autenticadores vinculados con una cuenta.',
    },
    {
      termino: 'Autenticador',
      significado: 'Medio utilizado para demostrar el control de uno o más factores de autenticación.',
    },
    {
      termino: 'Autenticación multifactor (MFA)',
      significado: 'Proceso que combina factores de categorías diferentes, como conocimiento y posesión.',
    },
    {
      termino: 'Autorización',
      significado: 'Proceso que determina las acciones y recursos disponibles para una identidad autenticada.',
    },
    {
      termino: 'Credential stuffing',
      significado: 'Ataque automatizado que prueba credenciales previamente obtenidas en otros servicios.',
    },
    {
      termino: 'Credencial',
      significado: 'Información o estructura que vincula una cuenta con el mecanismo utilizado para demostrar control.',
    },
    {
      termino: 'Factor de autenticación',
      significado: 'Categoría de prueba utilizada para verificar la identidad de un usuario. Se clasifican en 3 tipos: conocimiento, posesión o inherencia.',
    },
    {
      termino: 'Identidad digital',
      significado: 'Representación de una persona o entidad mediante atributos e identificadores en un entorno digital.',
    },
    {
      termino: 'Intención de autenticación',
      significado: 'Propiedad que requiere participación explícita del usuario ante una solicitud de autenticación.',
    },
    {
      termino: 'Nivel de aseguramiento (AAL)',
      significado: 'Nivel de robustez requerido para el proceso de autenticación según NIST.',
    },
    {
      termino: 'OTP (on-time password)',
      significado: 'Código de un solo uso que puede aportar resistencia a repetición, pero no necesariamente resistencia al phishing.',
    },
    {
      termino: 'Parte confiable (relying party)',
      significado: 'Entidad que confía en el resultado de la autenticación para conceder acceso.',
    },
    {
      termino: 'Passkey',
      significado: 'Credencial FIDO basada en criptografía de clave pública para autenticación resistente al phishing.',
    },
    {
      termino: 'Phishing',
      significado: 'Técnica de engaño destinada a inducir al usuario a entregar credenciales o aprobar acciones fraudulentas.',
    },
    {
      termino: 'Resistencia a repetición',
      significado: 'Propiedad que impide reutilizar pruebas capturadas en autenticaciones anteriores.',
    },
    {
      termino: 'Resistencia al phishing',
      significado: 'Propiedad que evita que una prueba válida sea útil para un verificador impostor.',
    },
    {
      termino: 'Sesión',
      significado: 'Estado temporal establecido después de una autenticación exitosa.',
    },
    {
      termino: 'Verificador',
      significado: 'Entidad que comprueba las pruebas presentadas durante la autenticación.',
    },
    {
      termino: 'Vinculación al nombre del verificador',
      significado: 'Relación criptográfica entre la prueba de autenticación y el identificador del servicio legítimo.',
    },
    {
      termino: 'WebAuthn',
      significado: 'Estándar W3C para crear y utilizar credenciales de clave pública asociadas con una parte confiable.',
    },
  ],
  referencias: [
    {
      referencia: 'Bradley, J., Jones, M. B., Kumar, A., Lindemann, R., Verrept, J., & Waite, D. (Eds.). (14 de julio de 2025). Client to Authenticator Protocol (CTAP) 2.2 [Estándar propuesto]. FIDO Alliance.',
      link: '',
    },
    {
      referencia: 'FIDO Alliance. (s. f.). User Authentication Specifications Overview.',
      link: '',
    },
    {
      referencia: 'Temoshok, D., Fenton, J., Choong, Y.-Y., Lefkovitz, N., Regenscheid, A., Galluzzo, R., & Richer, J. (2025). Digital Identity Guidelines: Authentication and Authenticator Management (NIST Special Publication 800-63B-4). National Institute of Standards and Technology.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
