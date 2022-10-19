const skills = [
  {id: 123123, skill: 'JavaScript', proficiency: 'Intermediate-Mid'},
  {id: 123124, skill: 'HTML', proficiency: 'Novice-High'},
  {id: 123125, skill: 'CSS', proficiency: 'Novice-High'},
]

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}