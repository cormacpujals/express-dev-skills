const skills = [
  {id: 123123, skill: 'JavaScript', proficiency: 'Intermediate-Mid', done: true},
  {id: 123124, skill: 'HTML', proficiency: 'Novice-High', done:true},
  {id: 123125, skill: 'CSS', proficiency: 'Novice-High', done: true},
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  // find the index for the todo
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // add the id
  skill.id = Date.now() % 1000000;
  // add the done property
  skill.done = false;
  skills.push(skill); 
}

function getOne(id) {
  id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}