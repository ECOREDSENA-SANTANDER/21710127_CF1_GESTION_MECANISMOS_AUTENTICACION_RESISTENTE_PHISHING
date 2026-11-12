<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identidad y acceso digital
    
    .bloque-texto-g.bloque-texto-g--inverso.br-bloque2.bg-color-6.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La protección de un servicio digital comienza por establecer quién puede acceder, qué identidad declara y qué acciones podrá realizar después de autenticarse. Para ello es necesario diferenciar identidad, identificación, autenticación y autorización, conceptos que suelen utilizarse de manera indistinta, pero que representan etapas diferentes dentro del control de acceso. Comprender estas diferencias permite analizar con mayor precisión los riesgos y reconocer en qué punto de la arquitectura puede presentarse una falla.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Identidad, identificación, autenticación y autorización
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.svg', alt='')
          .col-lg-10
            p.mb-0 La identidad digital corresponde al conjunto de atributos, identificadores y relaciones mediante los cuales una persona, organización, dispositivo u otra entidad es representada dentro de un entorno digital. No necesariamente equivale a la identidad civil completa. En una plataforma de formación, por ejemplo, un aprendiz puede estar representado por un identificador interno, un nombre de usuario, un correo electrónico y atributos asociados con su matrícula y rol.
        p La identificación ocurre cuando una entidad declara quién es o qué identidad pretende utilizar. Introducir un nombre de usuario o seleccionar una cuenta indica al sistema qué identidad se desea usar, pero todavía no demuestra que la persona sea su titular. La autenticación, en cambio, es el proceso mediante el cual se comprueba que quien solicita acceso controla uno o más autenticadores vinculados con esa cuenta. La autorización se aplica después y determina los recursos, funciones y operaciones permitidas a la identidad autenticada.
    
    p.mb-5 Un ejemplo permite observar la secuencia. Una persona ingresa su correo institucional en una plataforma: se identifica. El sistema solicita una prueba asociada con la cuenta y valida el autenticador: se autentica. Posteriormente, la plataforma reconoce que la persona tiene rol de aprendiz y permite consultar contenidos, pero no modificar la configuración del curso: se autoriza el acceso correspondiente. Esta secuencia demuestra que un atacante que logra superar la autenticación puede recibir correctamente las autorizaciones de la cuenta comprometida, aun cuando no sea su titular real.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Cuenta, credencial, autenticador, sesión y factor de autenticación

    p Una cuenta es la representación utilizada por un servicio para administrar la relación con un usuario. Puede contener identificadores, permisos, configuraciones y referencias a los autenticadores vinculados. Una credencial es la información o estructura que relaciona la cuenta con el medio utilizado para autenticarla. En mecanismos criptográficos, por ejemplo, el servicio conserva información pública que permite verificar las respuestas generadas por una clave privada controlada mediante un autenticador.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.svg', alt='')
            .col-lg-7           
              p.text-white.p-4.mb-0 El autenticador es el medio que permite demostrar el control de un factor de autenticación. Puede ser una contraseña memorizada, una aplicación que genera códigos, una llave de seguridad o un mecanismo criptográfico integrado en un dispositivo. El factor representa la categoría de evidencia utilizada: algo que la persona sabe, algo que posee o algo que es. Después de una autenticación exitosa, normalmente se establece una sesión para mantener temporalmente el estado de acceso sin exigir una nueva autenticación en cada interacción.
        p La distinción es importante porque la seguridad no depende únicamente de la credencial inicial. Una sesión mal protegida puede ser robada después de una autenticación correcta. Del mismo modo, una característica biométrica utilizada localmente para activar un autenticador no implica que la huella o el rostro se envíen al servicio. En tecnologías modernas de autenticación, la biometría puede utilizarse en el dispositivo para liberar una clave criptográfica, mientras el servidor recibe únicamente una prueba verificable.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Relación entre identidad, credenciales y control de acceso
    
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t1/6.png', alt='')

    p Los elementos anteriores forman una arquitectura lógica. La cuenta representa al usuario dentro del servicio; uno o más autenticadores se vinculan con esa cuenta; la autenticación comprueba el control de esos autenticadores; y posteriormente el servicio crea una sesión desde la cual se aplican las autorizaciones. Analizar esta relación permite formular preguntas relevantes: ¿qué ocurre si la credencial es robada?, ¿puede reutilizarse desde otro dispositivo?, ¿el usuario puede entregarla accidentalmente a un sitio falso?, ¿una respuesta capturada puede repetirse?, ¿el autenticador distingue el servicio legítimo de un impostor?
    p Estas preguntas permiten pasar de una visión centrada en la existencia de una contraseña o de un segundo factor a un análisis de propiedades de seguridad. Una contraseña puede ser extensa y aun así ser entregada mediante #[em phishing.] Una contraseña de un solo uso (#[em one-time password], OTP) puede tener pocos segundos de vigencia y ser retransmitida mientras permanece activa. Un autenticador criptográfico, en cambio, puede vincular la operación con el servicio legítimo y evitar que una credencial creada para una parte confiable sea utilizada en otra.


    Separador
    #t_1_1.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.1  Requisitos de autenticación en servicios digitales
    
    p.mb-5 Seleccionar un mecanismo antes de comprender las características del servicio suele producir decisiones desproporcionadas o insuficientes. Un portal público de bajo impacto no requiere necesariamente los mismos controles que un sistema de administración, una aplicación financiera o una plataforma que procesa información sensible. Por ello, el primer paso consiste en reconocer los requisitos de autenticación y relacionarlos con los riesgos del entorno.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Reconocimiento de las características del servicio digital
    
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.svg', alt='')
          .col-lg-10
            p.mb-0 El análisis comienza por identificar el propósito del servicio, los perfiles que requieren acceso, los recursos protegidos y las operaciones disponibles después de la autenticación. También debe revisarse si los usuarios acceden desde equipos administrados por la organización, dispositivos personales o diferentes plataformas; si el servicio está expuesto a Internet; si el acceso es ocasional o frecuente; y qué restricciones de compatibilidad, soporte, accesibilidad y recuperación existen.
        p Un mecanismo adecuado debe equilibrar seguridad, usabilidad, accesibilidad y viabilidad técnica. La solución más compleja no es automáticamente la más pertinente. Si el mecanismo dificulta excesivamente el acceso puede aumentar las solicitudes de soporte o impulsar prácticas inseguras. Por el contrario, priorizar comodidad sin valorar el impacto puede dejar funciones críticas expuestas a mecanismos transferibles o susceptibles al #[em phishing.]
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/7.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Nivel de protección requerido y consecuencias de una autenticación fallida
    
    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El nivel de protección requerido se determina analizando qué ocurriría si un atacante logra autenticarse como un usuario legítimo. Entre las consecuencias se encuentran la exposición de datos personales, pérdida económica, modificación de información, interrupción del servicio, daño reputacional, incumplimiento normativo o utilización de la cuenta como punto de entrada para ataques posteriores. Una cuenta de correo corporativo, por ejemplo, puede parecer ordinaria, pero su compromiso puede facilitar recuperación de otras cuentas, suplantación interna y acceso a información confidencial.
    
    p.mb-5 El análisis debe considerar tanto el impacto directo como la propagación del riesgo. Cuanto mayor sean las consecuencias potenciales, mayor será la robustez esperada del proceso de autenticación. La pregunta orientadora es: si un atacante obtuviera acceso con la cuenta de un usuario legítimo, ¿qué podría realizar y qué tan grave sería el efecto para la persona, la organización o terceros?
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Arquitectura básica: origen, verificador, parte confiable y credencial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/10.png', alt='')
      .col-lg-9(data-aos="fade-left")        
        .bg-color-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/11.svg', alt='')
            .col-lg-7           
              p.text-white.p-4.mb-0 Para estudiar mecanismos resistentes al #[em phishing] se requiere comprender cuatro elementos. El origen identifica el contexto web desde el cual se ejecuta una operación. El verificador comprueba las pruebas presentadas durante la autenticación. La parte confiable, o #[em relying party] (RP), es la entidad que confía en el resultado de la autenticación para permitir una transacción o conceder acceso. La credencial vincula al usuario con el mecanismo utilizado para demostrar control de la cuenta.
        p.mb-0 En WebAuthn (Web Authentication API), una credencial de clave pública se crea para una parte confiable determinada. Durante el registro, el autenticador genera un par de claves; la clave privada permanece protegida y el servicio conserva la información pública necesaria para verificar firmas posteriores. En la autenticación, el servidor genera un desafío, el autenticador produce una respuesta criptográfica asociada con ese desafío y el contexto de la parte confiable, y el servidor verifica la respuesta antes de establecer la sesión.
    
    p Este modelo evita depender de un secreto que el usuario deba escribir y que pueda ser capturado por un sitio falso. La relación entre origen, RP ID, credencial y desafío es uno de los fundamentos que explican la resistencia al #[em phishing] de WebAuthn.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-10" data-aos="fade")
      .row.justify-content-center.align-items-center(titulo="Reconocimiento de las características del servicio digital")
        .col-lg-6.col-11
          p Una entidad pública dispone de dos servicios digitales: un portal de consulta de información institucional y una plataforma interna para administrar datos personales de los ciudadanos. Aunque ambos servicios están disponibles a través de Internet, sus necesidades de autenticación son diferentes.
          p En el portal de consulta, el acceso a la información pública puede realizarse sin autenticación. En cambio, la plataforma administrativa requiere verificar la identidad de los funcionarios autorizados, debido a que permite consultar, modificar y gestionar información confidencial. Por esta razón, la entidad debe evaluar los mecanismos de autenticación según las funciones del servicio, los perfiles de usuario y las consecuencias de un acceso no autorizado.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Nivel de protección requerido y consecuencias de una autenticación fallida")
        .col-11
          p Una empresa utiliza el correo electrónico corporativo para intercambiar documentos, recibir solicitudes de clientes y restablecer las contraseñas de otros servicios institucionales.
          p Si un atacante obtiene las credenciales de un empleado mediante una página falsa de inicio de sesión, podría acceder a información confidencial, enviar mensajes fraudulentos en nombre de la empresa e intentar recuperar el acceso a otras cuentas. Aunque el correo electrónico no administra directamente los recursos financieros, su compromiso puede convertirse en un punto de entrada para otros ataques.
          p.mb-4 En consecuencia, la empresa debe considerar el impacto de la suplantación de identidad y seleccionar mecanismos de autenticación que reduzcan la probabilidad de acceso no autorizado, como las credenciales criptográficas resistentes al #[em phishing.]
          .bg-color-3.mb-4
            img(src='@/assets/curso/temas/t1/13.png', alt='')
            .bg-color-1.p-4
              .tarjeta.bg-white.p-4
                TarjetaAudio.color-acento-botones.mb-3(
                texto="<b>Pódcast:</b> Ejemplo 2. Nivel de protección requerido y consecuencias de una autenticación fallida"
                :audio="require_src('@/assets/actividad/audio/success.mp3')")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.mb-0 ¡Explore el pódcast #[b Ejemplo 2. Nivel de protección requerido y consecuencias de una autenticación fallida] y descubra cómo evaluar los riesgos asociados con el acceso no autorizado y determinar los mecanismos de autenticación más adecuados para proteger la información y los servicios digitales!
      .row.justify-content-center.align-items-center(titulo="Arquitectura básica: origen, verificador, parte confiable y credencial")
        .col-11
          p Una funcionaria necesita ingresar a una plataforma institucional que utiliza WebAuthn (#[em Web Authentication API]) para verificar su identidad mediante una clave de acceso (#[em passkey]).
          .row.mb-3
            .col-sm-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta--boton.bg-color-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5.col-md-6.col-lg-7
                    img(src='@/assets/curso/temas/t1/14.svg', alt='')
                h4.text-center Origen
                p.mb-0 La página web desde la cual la funcionaria inicia la autenticación, por ejemplo, https://acceso.entidad.gov.co.
            .col-sm-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta--boton.bg-color-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5.col-md-6.col-lg-7
                    img(src='@/assets/curso/temas/t1/15.svg', alt='')
                h4.text-center Verificador
                p.mb-0 El servidor que comprueba la respuesta criptográfica y valida que corresponda al desafío generado para la autenticación.
            .col-sm-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta--boton.bg-color-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5.col-md-6.col-lg-7
                    img(src='@/assets/curso/temas/t1/16.svg', alt='')
                h4.text-center Parte confiable (#[em relying party])
                p.mb-0 La entidad o el servicio que solicita la autenticación y utiliza su resultado para conceder acceso. En WebAuthn, se identifica mediante un RP ID asociado al dominio autorizado.
            .col-sm-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta--boton.bg-color-4.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-5.col-md-6.col-lg-7
                    img(src='@/assets/curso/temas/t1/17.svg', alt='')
                h4.text-center Credencial
                p.mb-0 La clave de acceso registrada para la cuenta. La clave privada se utiliza para producir la respuesta criptográfica y el servidor conserva la clave pública para verificarla.
          .cajon.color-acento-contenido.bg-color-5.p-4
            p Durante el proceso, el servidor genera un desafío único y lo envía al autenticador. Este utiliza la clave privada para firmar los datos de autenticación correspondientes. El servidor verifica la firma y los parámetros del contexto, incluido el RP ID. Si las comprobaciones son satisfactorias, la plataforma puede permitir el acceso.
            p.mb-0 Si la funcionaria recibe un enlace a una página fraudulenta que imita la apariencia del portal institucional, la clave de acceso no se utiliza automáticamente para autenticarla ante el dominio impostor. Esta vinculación criptográfica con la parte confiable es una de las características que hacen que WebAuthn sea resistente al #[em phishing.]      
      .row.justify-content-center.align-items-center(titulo="Comparación de mecanismos de autenticación")
        .col-11
          p Este ejemplo adicional permite relacionar los conceptos anteriores con la selección de mecanismos de autenticación.
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Selección de mecanismos
          .tabla-a.t1.t1--1.color-primario.mb-3
            table
              thead
                tr
                  th.w-25 Mecanismo
                  th Situación de uso
                  th Consideración de seguridad
              tbody
                tr
                  td #[b Contraseña]
                  td Acceso a un portal institucional.
                  td Puede ser capturada mediante páginas falsas o reutilizada si se compromete.
                tr
                  td #[b Contraseña y código de un solo uso (OTP)]
                  td Acceso a una plataforma que solicita un código adicional.
                  td Ofrece una capa adicional de protección, pero algunos códigos pueden ser capturados mediante phishing en tiempo real.
                tr
                  td #[b Clave de acceso (#[em passkey]) con WebAuthn]
                  td Ingreso a una plataforma que admite autenticación mediante claves públicas.
                  td Vincula criptográficamente la autenticación con la parte confiable y dificulta la suplantación mediante sitios falsos.
          .cajon.color-acento-contenido.bg-color-5.p-4
            p.mb-0 La selección final debe considerar el riesgo, el tipo de información protegida, las necesidades de los usuarios y los requisitos técnicos del servicio. No todos los mecanismos que incorporan un segundo factor ofrecen el mismo nivel de resistencia al #[b phishing.]
      

    Separador
    #t_1_2.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.2  Amenazas y factores de riesgo asociados a la autenticación
    
    p.mb-5 La evaluación de un mecanismo debe realizarse frente a las amenazas que pretende mitigar. No basta con determinar si utiliza uno o varios factores. También es necesario analizar si un atacante puede engañar al usuario, capturar información, reutilizar credenciales, retransmitir códigos o inducir aprobaciones. Entre las amenazas abordadas en este componente se encuentran el phishing, la suplantación del verificador, el robo y uso indebido de credenciales, los ataques de relleno de credenciales (#[em credential stuffing]), la retransmisión, los ataques de repetición y la fatiga de autenticación.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Phishing y suplantación del verificador
    
    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/18.png', alt='')

    p El #[em phishing] utiliza engaño para inducir a una persona a interactuar con una entidad fraudulenta que aparenta ser legítima. El ataque puede comenzar mediante correo, mensajería, redes sociales, anuncios o cualquier otro medio que dirija a la víctima hacia un sitio controlado por el atacante. El problema crítico ocurre cuando la persona cree proporcionar su credencial al servicio legítimo, pero la entrega a un verificador impostor.
    p.mb-5 La autenticación multifactor (MFA) no elimina automáticamente este riesgo. Un sitio fraudulento puede capturar una contraseña, solicitar un código OTP y retransmitir ambos valores al servicio real mientras el código permanece vigente. Este escenario evidencia que MFA y resistencia al #[em phishing] son propiedades distintas. Un mecanismo resistente al #[em phishing] debe impedir que una prueba válida sea utilizada por el impostor sin depender únicamente de que el usuario reconozca visualmente el fraude.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Robo, reutilización y credencial #[em stuffing]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/19.svg', alt='')
          .col-lg-10
            p El robo de credenciales puede producirse mediante phishing, malware, fugas de datos, ingeniería social o exposición accidental. Una vez obtenidas, las credenciales pueden utilizarse directamente o incorporarse a colecciones masivas. La reutilización incrementa el riesgo cuando la misma contraseña se emplea en varios servicios, porque una filtración en un sistema puede habilitar intentos de acceso en otros.
        p El #[em credential stuffing] consiste en probar de forma automatizada pares de usuario y contraseña obtenidos previamente. A diferencia de un ataque de fuerza bruta, el atacante parte de credenciales reales y busca dónde han sido reutilizadas. La complejidad de la contraseña no resuelve este problema si el secreto ya fue expuesto. Los mecanismos basados en claves públicas reducen esta dependencia porque crean credenciales específicas para cada parte confiable y no requieren un secreto compartido reutilizable.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/20.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Retransmisión y repetición

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/21.png', alt='')
      .col-lg-9
        .bg-color-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/22.svg', alt='')
            .col-lg-7   
              p.text-white.p-4.mb-0 La retransmisión ocurre cuando un atacante recibe una prueba válida del usuario y la transmite en tiempo real al servicio legítimo. Los códigos OTP introducidos manualmente son un ejemplo: aunque cambien periódicamente, el atacante puede utilizarlos mientras sean válidos. La repetición consiste en capturar una prueba y reutilizarla posteriormente. Son amenazas relacionadas, pero no equivalentes.
        p Los desafíos aleatorios o nonces (#[em number used once]) permiten establecer la frescura de una transacción y dificultan que una respuesta anterior sea aceptada nuevamente. Un protocolo resistente a repetición puede rechazar una prueba ya usada. Sin embargo, un mecanismo puede ser resistente a repetición y no resistente al phishing. Un OTP bien implementado ilustra esta diferencia: un código usado una vez deja de ser válido, pero puede ser robado y retransmitido antes de su primer uso.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Fatiga de autenticación
    
    p La fatiga de autenticación aparece cuando un atacante genera repetidamente solicitudes de aprobación hacia el dispositivo del usuario. Si la persona recibe múltiples notificaciones, puede aprobar una de ellas por confusión, cansancio o deseo de detener las alertas. Este ataque explota el comportamiento humano y afecta principalmente mecanismos #[em push] que presentan solicitudes de aprobación con poco contexto.
    p.mb-5 Las medidas de mitigación incluyen limitar solicitudes, proporcionar información contextual, utilizar coincidencia numérica y exigir interacción explícita. Estas medidas reducen el riesgo, pero no deben confundirse con resistencia criptográfica al #[em phishing.] La evaluación debe centrarse en cómo el mecanismo vincula la prueba con la sesión y con el verificador legítimo.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Matriz básica de amenazas
    
    p.mb-4 La matriz permite identificar y organizar las principales amenazas y factores de riesgo asociados a los procesos de autenticación, relacionándolos con las técnicas de #[em phishing] y sus posibles efectos sobre la seguridad de los servicios digitales. Su propósito es facilitar el análisis de los riesgos y apoyar la selección de mecanismos de autenticación con mayor resistencia al #[em phishing.]

    .mb-0(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Matriz básica de amenazas
      .tabla-a.color-primario.t1
        table
          thead
            tr
              th #[b Amenaza]
              th Condición que la favorece
              th Consecuencia
              th Mecanismo especialmente expuesto
          tbody
            tr
              td #[b Phishing (suplantación de identidad)]
              td El usuario introduce sus credenciales en una página fraudulenta que imita un servicio legítimo.
              td Robo de credenciales y acceso no autorizado a la cuenta.
              td Contraseñas y códigos de un solo uso (OTP).
            tr
              td #[b Credential stuffing (uso automatizado de credenciales robadas)]
              td Reutilización de contraseñas filtradas en diferentes servicios digitales.
              td Acceso automatizado a cuentas que utilizan credenciales comprometidas.
              td Contraseñas reutilizadas.
            tr
              td #[b Retransmisión de credenciales]
              td Un atacante captura y transmite en tiempo real las pruebas de autenticación obtenidas de la víctima.
              td Inicio de sesión fraudulento y posible secuestro de la sesión.
              td Contraseñas, OTP y algunos mecanismos de autenticación fuera de banda (OOB).
            tr
              td #[b Ataque de repetición (#[em replay attack])]
              td El protocolo acepta mensajes de autenticación previamente capturados sin comprobar adecuadamente su vigencia o unicidad.
              td Reutilización de pruebas válidas para intentar suplantar al usuario.
              td Protocolos que no utilizan desafíos nuevos o no validan correctamente la frescura de los mensajes.
            tr
              td #[b Fatiga de notificaciones (#[em MFA fatigue])]
              td El atacante genera numerosas solicitudes de aprobación mediante notificaciones push.
              td Aprobación accidental o intencional de un intento de acceso fraudulento.
              td Autenticación multifactor basada en notificaciones push sin controles adicionales.
            tr
              td #[b Suplantación del verificador]
              td El usuario confía en una página o aplicación fraudulenta que aparenta pertenecer al servicio legítimo.
              td Entrega de credenciales, códigos o información de autenticación al atacante.
              td Mecanismos que no vinculan criptográficamente la autenticación con el verificador legítimo.
            tr
              td #[b Robo de credenciales almacenadas]
              td Exposición de contraseñas en bases de datos, dispositivos comprometidos o repositorios inseguros.
              td Suplantación de identidad y acceso a información protegida.
              td Contraseñas almacenadas o gestionadas de forma insegura.
            tr
              td #[b Interceptación de comunicaciones]
              td Transmisión de información de autenticación a través de canales inseguros o dispositivos comprometidos.
              td Captura de credenciales o alteración de la comunicación entre el usuario y el servicio.
              td Mecanismos que no cuentan con canales protegidos y validación adecuada del servidor.
            tr
              td #[b Ingeniería social]
              td Manipulación psicológica para que el usuario revele información o autorice operaciones no solicitadas.
              td Divulgación de información confidencial o aprobación de accesos fraudulentos.
              td Contraseñas, OTP, notificaciones push y otros mecanismos que dependen de decisiones del usuario.
            tr
              td #[b Compromiso del dispositivo autenticador]
              td Pérdida, robo o infección del dispositivo utilizado para demostrar la identidad.
              td Uso indebido de credenciales, acceso a cuentas o autorización de operaciones fraudulentas, según las protecciones disponibles.
              td Aplicaciones de autenticación, dispositivos móviles, llaves de seguridad y claves de acceso, dependiendo de su configuración y protección.


    Separador
    #t_1_3.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.3  Autenticación multifactor y tipos de autenticadores

    p.mb-5 La autenticación multifactor busca aumentar la confianza combinando evidencias pertenecientes a categorías independientes. La calidad de una implementación depende tanto del número de factores como de la resistencia específica de los autenticadores. Por ello, comparar autenticadores exige analizar su funcionamiento, amenazas cubiertas, capacidad de recuperación, compatibilidad y nivel de aseguramiento posible.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Factores de conocimiento, posesión e inherencia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/23.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/24.svg', alt='')
            .col-lg-7           
              p.text-white.p-4.mb-0 El factor de conocimiento corresponde a algo que la persona sabe, como una contraseña o PIN. Sus debilidades incluyen olvido, reutilización, observación, #[em malware] y #[em phishing.] El factor de posesión se basa en algo que la persona controla, como un teléfono, token o llave de seguridad. Su fortaleza depende de cómo se demuestra esa posesión. El factor de inherencia corresponde a características de la persona, normalmente biométricas, y suele emplearse como mecanismo local para activar un autenticador.
        p.mb-0 La autenticación multifactor exige factores de categorías distintas. Dos contraseñas no constituyen MFA. De igual forma, solicitar dos datos memorizados sigue utilizando el factor de conocimiento. La independencia entre factores busca que el compromiso de uno no implique automáticamente el compromiso del otro.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Contraseñas de un solo uso - OTP
    
    p.mb-5 Las contraseñas de un solo uso (OTP) son códigos de autenticación diseñados para utilizarse una sola vez. Pueden generarse a partir del tiempo, de eventos o de mecanismos de desafío-respuesta. Un código TOTP (#[em time-based one-time password]) cambia periódicamente y reduce la utilidad de un valor capturado después de su vencimiento. No obstante, cuando el usuario introduce manualmente el código, este puede entregarse a un sitio fraudulento y retransmitirse al servicio legítimo. Por esa razón, un OTP puede aportar MFA y resistencia a repetición, pero no se considera por sí mismo resistente al #[em phishing.]
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Mecanismos fuera de banda
    
    p.mb-5 Los mecanismos fuera de banda utilizan un canal o dispositivo adicional para completar la autenticación. Una notificación recibida en un teléfono después de iniciar sesión desde un computador es un ejemplo común. La separación puede mejorar la protección, pero existen riesgos relacionados con secuestro de comunicaciones, duplicación de SIM, #[em malware], recuperación débil y fatiga de autenticación. Si el mecanismo depende de copiar o introducir manualmente un valor, la prueba sigue siendo transferible.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Autenticadores criptográficos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/25.svg', alt='')
          .col-lg-10
            p.mb-0 Los autenticadores criptográficos demuestran el control de una clave mediante operaciones criptográficas. En un esquema de clave pública, el autenticador protege una clave privada y el servicio conserva una clave pública. Ante una solicitud, el servidor genera un desafío y el autenticador produce una respuesta firmada. La clave privada no necesita transmitirse y la información almacenada por el servicio no permite, por sí sola, autenticarse como el usuario.
        p.mb-0 La criptografía de clave pública es especialmente útil para la resistencia al #[em phishing] cuando la respuesta queda vinculada con el verificador o la parte confiable. FIDO2 (#[em Fast Identity Online 2]) y WebAuthn aplican este enfoque en servicios web y permiten utilizar autenticadores integrados en dispositivos o externos.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/26.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Autenticadores sincronizables y passkeys
    
    .bloque-texto-g.bg-color-6.br-bloque.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las #[em passkeys] son credenciales FIDO basadas en criptografía de clave pública que permiten autenticación sin contraseña compartida. Pueden permanecer ligadas a un dispositivo o sincronizarse de forma protegida dentro de un ecosistema. La verificación local del usuario puede realizarse mediante PIN o biometría, mientras la parte confiable recibe una prueba criptográfica.
        br
        br
        | La sincronización mejora disponibilidad y recuperación, pero debe analizarse frente al nivel de aseguramiento requerido. En AAL3 (#[em Authenticator Assurance Level 3]), NIST exige claves privadas no exportables, por lo que un autenticador sincronizable no satisface esa condición. Esto demuestra que resistencia al phishing y nivel máximo de aseguramiento no son equivalentes.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Comparación de mecanismos
    
    p La siguiente tabla permite comparar los principales mecanismos de autenticación según los factores utilizados, el nivel de aseguramiento, las características de protección y su grado de resistencia frente al #[em phishing.] Su propósito es facilitar la selección del mecanismo más adecuado de acuerdo con los riesgos identificados y los requerimientos de seguridad del servicio digital.

    .mb-0(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Comparación de mecanismos de autenticación y resistencia al phishing
      .tabla-a.color-primario.tabla-a.t1
        table
          thead
            tr
              th Mecanismo
              th MFA
              th Resistencia a repetición
              th Resistencia al phishing
              th Observación
          tbody
            tr
              td Contraseña
              td No por sí sola
              td No
              td No
              td Se reutiliza y puede entregarse a un sitio falso.
            tr
              td Contraseña + SMS OTP
              td Sí
              td Sí, si se invalida tras el uso
              td No
              td El código puede ser retransmitido.
            tr
              td Contraseña + TOTP
              td Sí
              td Sí
              td No
              td Sigue expuesto a phishing en tiempo real.
            tr
              td Aprobación push
              td Sí
              td Depende
              td No necesariamente
              td Puede existir fatiga de autenticación.
            tr
              td WebAuthn
              td Sí, según configuración
              td Sí
              td Sí
              td Vincula la credencial con la parte confiable.
            tr
              td Passkey sincronizable
              td Puede operar como multifactor
              td Sí
              td Sí
              td Adecuada para muchos escenarios AAL2.
            tr
              td Clave no exportable
              td Sí
              td Sí
              td Sí
              td Puede satisfacer requisitos de AAL3.
    

    Separador
    #t_1_4.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.4  Resistencia al phishing
    
    p La resistencia al #[em phishing] debe entenderse como una propiedad del protocolo y no como una habilidad del usuario. El objetivo es que una prueba válida no pueda ser utilizada por un verificador impostor, aunque la persona sea inducida a interactuar con un sitio fraudulento. Esta aproximación reduce la dependencia de la vigilancia humana y desplaza parte de la protección hacia propiedades técnicas verificables.

    .tarjeta.bgdegr.p-4.p-lg-5.pb-lg-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11
            h4 Vinculación al nombre del verificador
            p La vinculación al nombre del verificador significa que la salida del autenticador queda relacionada criptográficamente con un identificador autenticado del servicio. En WebAuthn, la credencial se registra para una parte confiable y su uso queda limitado al ámbito correspondiente. Un atacante puede copiar la apariencia del portal legítimo, pero no puede cambiar el dominio y obtener una autenticación válida utilizando la misma credencial.
            p La pregunta práctica para clasificar un mecanismo es: ¿el autenticador conoce el servicio ante el cual está autenticando o simplemente entrega un valor que puede copiarse? Si la prueba puede transferirse libremente, la resistencia al phishing es limitada. 
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/28.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11
            h4 Vinculación de canal
            p La vinculación de canal relaciona la salida de autenticación con propiedades del canal protegido establecido con el verificador. De forma conceptual, no basta con dirigir la respuesta al destinatario correcto; la prueba queda asociada con la comunicación segura concreta. Esto dificulta que un intermediario capture una respuesta generada en un canal y la utilice exitosamente en otro.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/29.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11
            h4 Resistencia a repetición
            p La resistencia a repetición evita que una prueba capturada pueda reutilizarse posteriormente. Los desafíos aleatorios permiten generar respuestas diferentes para cada transacción. Cuando el servidor solicita un nuevo desafío, una respuesta anterior deja de ser válida. La propiedad debe evaluarse de forma separada de la resistencia al #[em phishing], porque un código puede no ser reutilizable y aun así ser robado y usado en tiempo real.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/30.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11
            h4 Intención de autenticación
            p La intención de autenticación busca evidenciar que la persona participa conscientemente en cada solicitud. Tocar una llave de seguridad, introducir un PIN local o realizar otra acción deliberada permite demostrar interacción. Esta propiedad ayuda a reducir el uso silencioso de un autenticador por #[em malware] o solicitudes automatizadas. La biometría puede formar parte de la verificación local, pero su sola presencia no debe interpretarse automáticamente como demostración de intención en cualquier arquitectura.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/31.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11
            h4 Clasificación por resistencia al #[em phishing]
            p Los mecanismos pueden agruparse en tres categorías. Los no resistentes incluyen contraseñas, OTP introducidos manualmente y diversos mecanismos fuera de banda. Otros mecanismos incorporan mitigaciones adicionales, como coincidencia numérica o información contextual, pero siguen dependiendo parcialmente de decisiones del usuario. Finalmente, los autenticadores criptográficos que vinculan la prueba con el verificador o el canal ofrecen resistencia al #[em phishing]; FIDO2 y WebAuthn constituyen referencias ampliamente utilizadas para este propósito.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/32.png', alt='')
    

    Separador
    #t_1_5.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.5  Niveles de aseguramiento de la autenticación
    
    p NIST expresa la robustez requerida del proceso de autenticación mediante #[em Authentication Assurance Levels] - AAL. La edición vigente de las directrices de identidad digital está compuesta, entre otros documentos, por NIST SP 800-63-4 y NIST SP 800-63B-4. El nivel apropiado debe seleccionarse considerando el impacto potencial de una autenticación fraudulenta y las características del servicio.

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.mb-3
        .tarjeta--boton.bg-color-6.p-4.h-100
          h4.text-center AAL1
          p.mb-0 AAL1 proporciona una confianza básica en que el reclamante controla un autenticador asociado con la cuenta. Puede utilizar uno o varios factores permitidos. Es apropiado para escenarios donde las consecuencias de una autenticación fraudulenta son limitadas y fácilmente reversibles. No significa ausencia de controles, sino proporcionalidad entre riesgo y mecanismo.
      .col-lg-4.mb-3
        .tarjeta--boton.bg-color-6.p-4.h-100
          h4.text-center AAL2
          p AAL2 proporciona una confianza elevada y exige dos factores distintos o un autenticador multifactor adecuado. Requiere técnicas criptográficas y resistencia a repetición. La guía vigente establece además que el verificador debe ofrecer al menos una opción resistente al #[em phishing.] Este nivel es pertinente para aplicaciones con información sensible u operaciones relevantes donde la apropiación de cuenta tendría un impacto significativo.
          p.mb-0 Una #[em passkey] con verificación local puede resultar apropiada en muchos escenarios AAL2 porque combina posesión criptográfica con activación local y resistencia al #[em phishing]. Sin embargo, el cumplimiento depende de la implementación completa, incluido registro, recuperación y gestión del ciclo de vida.
      .col-lg-4.mb-3
        .tarjeta--boton.bg-color-6.p-4.h-100
          h4.text-center AAL3
          p AAL3 proporciona una confianza muy alta. Exige autenticación basada en criptografía de clave pública y una clave privada no exportable, además de resistencia al #[em phishing] y repetición. También se espera una demostración adecuada de intención de autenticación. Este nivel se relaciona con accesos de alto impacto, privilegios elevados o recursos especialmente sensibles.
          p.mb-0 La no exportabilidad diferencia AAL3 de escenarios donde las credenciales pueden sincronizarse entre dispositivos. Por ello, una #[em passkey] sincronizada puede ser resistente al #[em phishing] y aun así no satisfacer todos los requisitos de AAL3. La selección debe basarse en riesgo y no en la idea de que el nivel más alto es siempre el más conveniente.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Selección del AAL según impacto
    
    p La siguiente tabla presenta una orientación para determinar el nivel de aseguramiento de autenticación (AAL) requerido según el impacto y el nivel de protección del servicio digital. Esta relación permite seleccionar un nivel de autenticación acorde con los riesgos identificados y las necesidades de seguridad del servicio.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Matriz de selección del nivel de aseguramiento según el impacto del servicio
        .tabla-a.t1.color-primario
          table
            thead
              tr
                th Impacto por autenticación fraudulenta
                th Orientación pedagógica
            tbody
              tr
                td Bajo y fácilmente reversible.
                td Considerar AAL1.
              tr
                td Moderado, con información sensible u operaciones relevantes.
                td Considerar AAL2.
              tr
                td Alto o crítico, con privilegios elevados o consecuencias graves.
                td Considerar AAL3.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/33.png', alt='')
    
    p La tabla sirve como orientación y no reemplaza una evaluación formal. La decisión debe documentar los recursos protegidos, amenazas, impacto, población usuaria y restricciones tecnológicas. El AAL seleccionado debe ser coherente con el servicio y con el mecanismo que finalmente se adopte.


    Separador
    #t_1_6.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.6  Técnicas de definición de problemas en el entorno laboral
    
    p.mb-5 Después de identificar amenazas y determinar el nivel de aseguramiento, se selecciona el mecanismo. Este proceso integra los conocimientos anteriores y evita dos extremos: adoptar la alternativa más sencilla sin considerar el riesgo o imponer la solución más exigente sin analizar viabilidad, soporte y experiencia del usuario.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Análisis integrado de riesgo y requerimientos 
    
    p.mb-5 La selección puede estructurarse mediante preguntas: ¿qué protege el servicio?, ¿quién accede?, ¿qué privilegios recibe?, ¿desde qué dispositivos se conecta?, ¿qué amenazas son relevantes?, ¿qué impacto tendría la apropiación de una cuenta?, ¿qué AAL se requiere?, ¿qué restricciones de compatibilidad, accesibilidad, costos y recuperación existen? Las respuestas permiten justificar la alternativa y demostrar que la decisión no proviene de preferencias personales o comerciales.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Criterios de selección 
    
    p La selección del mecanismo de autenticación debe considerar los riesgos identificados, las características del servicio digital y el nivel de protección requerido. Para orientar esta decisión, se tienen en cuenta aspectos relacionados con los factores de autenticación, el nivel de aseguramiento, la resistencia frente al #[em phishing], la arquitectura del mecanismo y los requerimientos de seguridad del servicio. Los siguientes son los criterios de selección que permiten comparar las alternativas y determinar el mecanismo más adecuado para el servicio digital:

    .row.bgcompl-1.align-items-center.p-4.py-5.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center 

          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/34.png', alt='')
            .col-lg-8
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/35.svg', alt='')
                  p.text-center.text-white Vinculación con el verificador o con el canal, para evitar que una prueba válida sea útil ante un sitio impostor.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/36.svg', alt='')
                  p.text-center.text-white Resistencia a repetición, de manera que respuestas capturadas no puedan reutilizarse.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/37.svg', alt='')
                  p.text-center.text-white Intención de autenticación cuando el nivel de protección lo requiera.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/38.svg', alt='')
                  p.text-center.text-white Compatibilidad con el AAL determinado y con los estándares técnicos aplicables.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/39.svg', alt='')
                  p.text-center.text-white Gestión segura del ciclo de vida: registro, incorporación de autenticadores adicionales, recuperación, sustitución y desactivación.
                .tarjeta.bg-color-8.p-4 
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/40.svg', alt='')
                  p.text-center.text-white Usabilidad y accesibilidad, evitando que la complejidad produzca barreras o prácticas inseguras.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/41.svg', alt='')
                  p.text-center.text-white Compatibilidad con navegadores, sistemas operativos y dispositivos disponibles.
                .tarjeta.bg-color-8.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-md-6.col-lg-8
                      img(src='@/assets/curso/temas/t1/42.svg', alt='')
                  p.text-center.text-white Recuperación segura, evitando que un procedimiento alternativo más débil anule las ventajas del mecanismo principal.
      

    p.mb-5 El mecanismo principal no debe evaluarse de forma aislada. Si una passkey resistente al #[em phishing]puede sustituirse mediante una recuperación basada únicamente en preguntas débiles o un canal fácilmente comprometible, el atacante buscará el procedimiento alternativo. La seguridad debe considerar el sistema completo.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Ejemplos de selección
    
    .row.justify-content-center(data-aos="fade")
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/43.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-fondo-1.p-4.p-lg-5.h-100
          img.w-85x.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/44.svg', alt='')
          p.text-white En un portal informativo de bajo impacto podría ser suficiente un mecanismo compatible con AAL1, aunque ofrecer passkeys puede mejorar la experiencia y reducir dependencia de contraseñas. En una plataforma institucional que procesa información personal y permite operaciones relevantes, AAL2 puede ser más adecuado; WebAuthn o passkeys con verificación local proporcionan resistencia al phishing. En un sistema administrativo de alto impacto, la evaluación puede conducir a AAL3 con un autenticador criptográfico cuya clave privada sea no exportable.


    Separador
    #t_1_7.titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.7  Documentación de requisitos y arquitectura básica

    p.mb-5 La decisión técnica debe quedar documentada para mantener trazabilidad y permitir su revisión. En este nivel formativo no se busca un diseño de ingeniería exhaustivo, sino una ficha clara que relacione requisitos, amenazas, nivel de aseguramiento y arquitectura básica del mecanismo seleccionado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Requisitos mínimos de documentación
    
    p La siguiente tabla presenta los elementos esenciales que deben documentarse para dejar registro de los requisitos y de la arquitectura básica del mecanismo de autenticación seleccionado. Su propósito es facilitar la comprensión, implementación y posterior verificación del mecanismo, manteniendo la correspondencia con las características, riesgos y requerimientos de seguridad del servicio digital.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Requisitos mínimos para la documentación del mecanismo de autenticación
        .tabla-a.t1.color-primario
          table
            thead
              tr
                th Elemento
                th Contenido esperado
            tbody
              tr
                td Servicio digital
                td Denominación y propósito.
              tr
                td Usuarios
                td Perfiles que requieren autenticación.
              tr
                td Recursos protegidos
                td Datos y funciones accesibles.
              tr
                td Amenazas
                td Phishing, credential stuffing, retransmisión, repetición, fatiga u otras pertinentes.
              tr
                td Impacto
                td Consecuencias de una autenticación fraudulenta.
              tr
                td AAL
                td Nivel seleccionado y justificación.
              tr
                td Mecanismo
                td Autenticador y factores empleados.
              tr
                td Resistencia al phishing
                td Propiedad técnica que la proporciona.
              tr
                td Compatibilidad
                td Dispositivos, navegadores y plataformas requeridos.
              tr
                td Recuperación
                td Procedimiento ante pérdida o indisponibilidad.
              tr
                td Limitaciones
                td Condiciones que pueden afectar la implementación
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Representación de la arquitectura
    
    p La arquitectura puede representarse de forma básica como: Usuario -> dispositivo o cliente -> autenticador -> parte confiable/verificador -> recurso protegido. En WebAuthn deben considerarse además el origen autorizado, RP ID, credencial de clave pública, desafío, verificación local y sesión resultante. Esta representación permite explicar cómo se relacionan los componentes y por qué una credencial queda restringida al servicio correspondiente.

    


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
