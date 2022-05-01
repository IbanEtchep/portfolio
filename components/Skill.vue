<template>

  <div class="skill">

    <h2 @click="isSubSkillsVisible = !isSubSkillsVisible">
      <span class="arrow-icon">
        <span v-if="isSubSkillsVisible">▼</span>
        <span v-else>▶</span>
      </span>
      {{ skill.title }}
    </h2>

    <div class="skill-body" :class="isSubSkillsVisible ? 'visible' : ''">
      <ul>
        <li v-for="(subSkill, i) in skill.subSkills" :key="i">{{subSkill}}</li>
      </ul>

      <h3 v-if="skill.projects">Projets : </h3>
      <span v-for="(project, i) in skill.projects" :key="i">
        <nuxt-link :to="'/portfolio/' + project">
          {{ project }}
        </nuxt-link>
        <span v-if="i !== skill.projects.length - 1">,</span>
      </span>

    </div>

  </div>

</template>

<script>
export default {
  name: "Skill",
  props: ['skill'],
  data() {
    return {
      isSubSkillsVisible: false,
    }
  }
}
</script>

<style lang="scss">

.skill-body {
  display: none;
  background-color: var(--bg-primary);
  border-radius: 1rem;
  padding: 1.5rem;
  max-height: 0;
  transition: max-height .15s ease-out;

  ul {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
}

.skill-body.visible {
  display: block;
  max-height: 500px;
}

.skill {
  h2 {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

.arrow-icon {
  font-family: serif;
}

</style>
