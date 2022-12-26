<template>
  <div>
    <header id="about-header" class="wrapper">

      <h1 class="text-center">Bonjour, je suis <span class="colored">Iban</span>.<br>
        Un étudiant en <span class="colored">développement</span>.
      </h1>
      <p class="text-center">Je suis actuellement en <b>L3 MIAGE</b> à l'Université de Bordeaux.</p>

    </header>

    <section id="about">
      <h2 class="text-center">A propos de moi</h2>
      <p>Je m'appelle Iban, j'ai 22 ans et je suis Basque.</p>
      <p>
        Je suis passionné par l'informatique depuis que
        j'ai commencé à apprendre le language JAVA pour créer des plugins sur le jeu Minecraft
        quand j'étais au Lycée. J'ai dans la même période été emmené à apprendre les bases de pour
        créer un site web (HTML-CSS-PHP-SQL) et l'administration système pour héberger mon serveur minecraft,
        mariadb et apache sur un serveur dédié sous Debian.
      </p>

      <p>Mais l'informatique n'est pas mon seul centre d'intérêt, il y a aussi la pelote basque, les randonnées à la
        montagne et le surf et j'ai un intérêt particulier pour la biologie.</p>

    </section>

    <section>
      <h2 class="text-center">Mes compétences</h2>
      <Skill v-for="(skill, i) in skills" :skill="skill" :key="i"/>
    </section>

    <section id="contact">
      <h2 class="text-center">Contactez-moi</h2>
      <div class="contact-wrapper">

        <IconText text="iban.etchepareborde@gmail.com">
          <svg class="contact-icon" viewBox="0 0 32 32">
            <path
              d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z"></path>
          </svg>
        </IconText>

        <IconText text="07 81 65 39 24">
          <svg class="contact-icon" viewBox="0 0 32 32">
            <path
              d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
          </svg>
        </IconText>

        <IconText text="Iban#0001">
          <svg viewBox="0 -28.5 256 256" preserveAspectRatio="xMidYMid">
            <g>
              <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"/>
            </g>
          </svg>
        </IconText>
      </div>
    </section>

    <section>
      <div class="center-button-wrapper">
        <a href="/documents/CV.pdf" target="_blank">
          <div class="button">
            <IconText text="Télécharger mon CV">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title/>
                <g id="icomoon-ignore">
                </g>
                <path d="M432 0h-384c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h384c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM416 448h-352v-384h352v384zM128 288h224v32h-224zM128 352h224v32h-224zM160 144c0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.51-21.49 48-48 48s-48-21.49-48-48zM240 192h-64c-26.4 0-48 14.4-48 32v32h160v-32c0-17.6-21.6-32-48-32z"/>
              </svg>
            </IconText>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Contact from "~/pages/contact";
export default {
  name: "Accueil",
  components: {Contact},
  head() {
    return {
      title: "Accueil"
    };
  },
  async asyncData({$content, params}) {
    return await $content('skills').only(['skills']).fetch();
  },
}
</script>

<style lang="scss">

#about-header {
  background-color: var(--bg-secondary);
  margin: 2.5rem 0;
  box-shadow: none;

  .colored {
    color: var(--text-color-terciary);
  }

  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
    color: var(--text-color-secondary);
  }
}

section {

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  margin: 3rem 0;
}

@media (max-width: 1024px) {
  #about-header {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      color: var(--text-color-secondary);
    }
  }
}

</style>
