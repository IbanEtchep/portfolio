<template>

  <div class="skill">

    <h2 @click="isSubSkillsVisible = !isSubSkillsVisible">
      <span class="arrow-icon">
        <span v-if="isSubSkillsVisible">▼</span>
        <span v-else>▶</span>
      </span>
      {{ skill.title }}
    </h2>

    <ul class="sub-skills" :class="isSubSkillsVisible ? 'visible' : ''">
      <li v-for="subSkill in skill.subSkills" :key="subSkill">{{subSkill}}</li>
    </ul>

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

.sub-skills {
  display: none;
  background-color: var(--bg-primary);
  border-radius: 1rem;
  padding: 1.5rem;
  max-height: 0;
  transition: max-height .15s ease-out;
}

.sub-skills.visible {
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
  font-family: Arial;
}

</style>
