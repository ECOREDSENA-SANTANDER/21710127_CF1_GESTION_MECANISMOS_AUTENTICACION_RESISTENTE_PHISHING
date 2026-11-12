<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mecanismos y riesgos de autenticación en servicios digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos de identidad y acceso digital, las amenazas a la autenticación, la autenticación multifactor, la resistencia al <em>phishing</em>, los niveles de aseguramiento y los criterios para seleccionar mecanismos de autenticación seguros.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué diferencia existe entre identificación y autenticación en un servicio digital?',
          imagen: '@/assets/actividad/imagen1.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La identificación asigna permisos y la autenticación crea la cuenta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La identificación declara una identidad y la autenticación comprueba el control de los autenticadores asociados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La identificación establece la sesión y la autenticación elimina los permisos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La identificación y la autenticación corresponden exactamente al mismo proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple la autorización después de una autenticación exitosa?',
          imagen: '@/assets/actividad/imagen2.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear automáticamente una nueva identidad digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar una contraseña diferente para cada acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar los recursos, funciones y operaciones permitidas al usuario autenticado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Verificar exclusivamente la identidad civil de la persona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 3,
          texto:
            '¿Qué propósito cumple una sesión después de la autenticación?',
          imagen: '@/assets/actividad/imagen3.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el estado de autenticación del usuario para permitir el acceso a los recursos y servicios autorizados sin solicitar una nueva autenticación en cada interacción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir permanentemente todos los autenticadores del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los permisos asociados con la cuenta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir una contraseña en un factor biométrico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 4,
          texto:
            '¿Qué aspectos deben analizarse al reconocer los requisitos de autenticación de un servicio digital?',
          imagen: '@/assets/actividad/imagen4.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el diseño gráfico y el nombre del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de contraseñas utilizadas por los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el fabricante de los dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usuarios, recursos protegidos, operaciones, entorno tecnológico, impacto y nivel de protección.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumple la parte confiable o <em>relying party</em> en un proceso de autenticación?',
          imagen: '@/assets/actividad/imagen5.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar todas las contraseñas de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confiar en el resultado de la autenticación para permitir una transacción o conceder acceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar físicamente el dispositivo del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enviar automáticamente códigos OTP a cualquier sitio web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 6,
          texto:
            '¿Qué caracteriza principalmente un ataque de <em>phishing</em> contra un proceso de autenticación?',
          imagen: '@/assets/actividad/imagen6.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Engañar al usuario para que entregue credenciales o interactúe con un servicio que aparenta ser legítimo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar automáticamente la longitud de las contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar los certificados digitales del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear copias de seguridad de las credenciales del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 7,
          texto:
            '¿En qué consiste el <em>credential stuffing</em>?',
          imagen: '@/assets/actividad/imagen7.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En generar claves criptográficas nuevas para cada servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En solicitar al usuario que cambie periódicamente su contraseña.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En probar automáticamente credenciales obtenidas previamente para acceder a otros servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En bloquear una cuenta después de una autenticación exitosa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza un ataque de retransmisión durante la autenticación?',
          imagen: '@/assets/actividad/imagen8.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El atacante cambia permanentemente el identificador del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El sistema reutiliza automáticamente una contraseña antigua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El usuario crea varias cuentas en un mismo servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El atacante captura una prueba válida y la transmite en tiempo real al servicio legítimo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 9,
          texto:
            '¿Qué situación caracteriza la fatiga de autenticación?',
          imagen: '@/assets/actividad/imagen9.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El usuario utiliza una contraseña excesivamente larga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El usuario recibe solicitudes repetidas de aprobación y termina aceptando una por confusión o cansancio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El sistema elimina automáticamente los factores de autenticación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El autenticador cambia su clave pública después de cada acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 10,
          texto:
            '¿Cuándo se considera que un proceso utiliza autenticación multifactor?',
          imagen: '@/assets/actividad/imagen10.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando solicita dos contraseñas distintas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando utiliza dos datos que el usuario debe memorizar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando combina factores pertenecientes a categorías diferentes, como conocimiento y posesión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuando utiliza la misma contraseña en dos aplicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 11,
          texto:
            '¿Por qué un código OTP introducido manualmente no se considera por sí mismo resistente al <em>phishing</em>?',
          imagen: '@/assets/actividad/imagen1.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque puede entregarse a un sitio fraudulento y retransmitirse mientras permanece vigente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque nunca cambia después de ser generado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque únicamente funciona como factor biométrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque no puede utilizarse junto con una contraseña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 12,
          texto:
            '¿Qué caracteriza a los mecanismos de autenticación fuera de banda?',
          imagen: '@/assets/actividad/imagen2.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizan únicamente una contraseña almacenada en el navegador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminan completamente el riesgo de <em>phishing</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo pueden funcionar mediante dispositivos criptográficos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizan un canal o dispositivo adicional para completar la autenticación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 13,
          texto:
            '¿Cómo funciona un autenticador criptográfico basado en clave pública?',
          imagen: '@/assets/actividad/imagen3.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Envía permanentemente la clave privada al servicio para comprobarla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protege una clave privada y genera respuestas criptográficas que el servicio verifica mediante información pública.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utiliza únicamente preguntas personales como mecanismo de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparte una misma contraseña entre todos los servicios digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 14,
          texto:
            '¿Qué caracteriza principalmente a una <em>passkey</em>?',
          imagen: '@/assets/actividad/imagen4.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una contraseña de texto que debe reutilizarse en varios servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un código OTP enviado exclusivamente mediante SMS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es una credencial FIDO basada en criptografía de clave pública que puede proporcionar autenticación resistente al <em>phishing</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es una pregunta secreta utilizada para recuperar una cuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 15,
          texto:
            '¿Qué significa la vinculación al nombre del verificador?',
          imagen: '@/assets/actividad/imagen5.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la prueba de autenticación queda criptográficamente relacionada con el identificador del servicio legítimo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que todos los servicios utilizan una misma credencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el usuario debe memorizar el nombre completo del servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que una contraseña puede utilizarse libremente en cualquier dominio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 16,
          texto:
            '¿Qué expresa la intención de autenticación?',
          imagen: '@/assets/actividad/imagen6.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el servidor decide automáticamente por el usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que una sesión permanece abierta indefinidamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el usuario puede compartir libremente su credencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el usuario participa conscientemente mediante una acción explícita en la solicitud de autenticación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 17,
          texto:
            '¿En qué tipo de escenario puede resultar apropiado el nivel de aseguramiento AAL1?',
          imagen: '@/assets/actividad/imagen7.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En accesos críticos que exigen obligatoriamente una clave privada no exportable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En servicios donde las consecuencias de una autenticación fraudulenta son limitadas y fácilmente reversibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente en sistemas que utilizan autenticadores de <em>hardware</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente en sistemas administrativos de privilegios elevados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica corresponde al nivel de aseguramiento AAL2?',
          imagen: '@/assets/actividad/imagen8.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No requiere ningún mecanismo de autenticación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exige siempre una clave privada no exportable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requiere dos factores distintos o un autenticador multifactor adecuado y debe ofrecer una opción resistente al <em>phishing</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo puede implementarse mediante contraseñas de un único factor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 19,
          texto:
            '¿Qué característica distingue especialmente al nivel AAL3?',
          imagen: '@/assets/actividad/imagen9.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exige autenticación basada en criptografía de clave pública con una clave privada no exportable y resistencia al <em>phishing</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Permite utilizar únicamente una contraseña simple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de evaluar el impacto del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere que todas las credenciales se sincronicen entre dispositivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
        {
          id: 20,
          texto:
            '¿Qué criterios deben considerarse al seleccionar y documentar un mecanismo de autenticación?',
          imagen: '@/assets/actividad/imagen10.jpg',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el nombre comercial del mecanismo y su apariencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de usuarios registrados en el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el dispositivo utilizado por el administrador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgos, impacto, AAL, resistencia al <em>phishing</em>, compatibilidad, recuperación y arquitectura del mecanismo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con Mecanismos y riesgos de autenticación en servicios digitales.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente los contenidos del componente formativo Mecanismos y riesgos de autenticación en servicios digitales.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre Mecanismos y riesgos de autenticación en servicios digitales.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>