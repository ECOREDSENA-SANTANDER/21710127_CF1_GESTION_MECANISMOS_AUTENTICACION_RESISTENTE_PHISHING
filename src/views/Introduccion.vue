<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p La autenticación es uno de los controles esenciales para proteger el acceso a servicios digitales, aplicaciones, plataformas institucionales y sistemas de información. Cada vez que una persona intenta ingresar a un correo electrónico, una plataforma educativa, un portal empresarial o un servicio en la nube, el sistema debe establecer con un nivel razonable de confianza que quien solicita el acceso controla las credenciales asociadas con una cuenta determinada. Sin embargo, la sola existencia de un mecanismo de autenticación no garantiza la seguridad. Las técnicas de #[em phishing], la suplantación del verificador, el robo y reutilización de credenciales, la retransmisión de códigos y la manipulación de solicitudes de autenticación evidencian que algunos mecanismos pueden funcionar correctamente desde el punto de vista técnico y, al mismo tiempo, ser vulnerables frente al engaño y la intervención de un atacante.

    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente orienta al aprendiz en el reconocimiento de los elementos que intervienen en la autenticación, las amenazas que pueden comprometerla y las características que permiten diferenciar mecanismos tradicionales de alternativas resistentes al #[em phishing]. El recorrido integra identidad digital, autenticación multifactor, autenticadores criptográficos, passkeys, resistencia a repetición y niveles de aseguramiento establecidos por el Instituto Nacional de Estándares y Tecnología de Estados Unidos (NIST, por sus siglas en inglés). A partir de estas bases, el aprendiz podrá reconocer requisitos del servicio, identificar factores de riesgo, comparar autenticadores, analizar la relación entre origen, verificador, parte confiable y credencial, determinar el nivel de aseguramiento requerido y seleccionar una alternativa coherente con las condiciones del entorno tecnológico.

    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
