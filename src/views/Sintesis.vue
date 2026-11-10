<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La autenticación segura exige comprender que identidad, identificación, autenticación y autorización son procesos relacionados, pero diferentes. Una cuenta se protege mediante credenciales y autenticadores cuya seguridad depende tanto del factor utilizado como del protocolo. Las amenazas actuales evidencian que aumentar el número de pasos no siempre resuelve el problema: las contraseñas pueden robarse o reutilizarse, los OTP pueden retransmitirse y las notificaciones pueden generar fatiga. Por esta razón, el análisis debe centrarse en propiedades verificables como vinculación con el verificador, resistencia a repetición e intención de autenticación.
    p La resistencia al #[em phishing] busca impedir que una prueba válida sea utilizada por un servicio impostor sin depender exclusivamente de que la persona reconozca el engaño. WebAuthn y los autenticadores FIDO aplican criptografía de clave pública y vinculación con la parte confiable. La selección final debe relacionarse con el impacto de una autenticación fallida y con los niveles AAL de NIST. Así, elegir un mecanismo resistente al #[em phishing] se convierte en un proceso de gestión del riesgo que integra necesidades del servicio, amenazas, nivel de aseguramiento, compatibilidad, usabilidad, recuperación y arquitectura.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Infografía sobre mecanismos y riesgos de autenticación en servicios digitales, que presenta requisitos, arquitectura, amenazas, autenticación multifactor, resistencia al phishing, niveles NIST, selección y documentación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
