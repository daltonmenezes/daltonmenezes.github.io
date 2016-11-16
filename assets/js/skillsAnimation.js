function animateSkills() {
  for (i = 0; i < skills.length; i++) {
      skills[i].style.animation = 'skills-start-transition 2s linear 3';
  }
}

function resetSkillsAnimation() {
  for (i = 0; i < skills.length; i++) {
      skills[i].style.animation = '';
  }
}
