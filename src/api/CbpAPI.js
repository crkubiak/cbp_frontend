const adoptionsURL = 'https://cors-anywhere.herokuapp.com/https://cbp-api.herokuapp.com/adoptions'
const catsURL = 'https://cors-anywhere.herokuapp.com/https://cbp-api.herokuapp.com/cats'
const projectsURL = 'https://cors-anywhere.herokuapp.com/https://cbp-api.herokuapp.com/projects'

const fetchAdoptions = () => {
  return fetch(`${adoptionsURL}`)
    .then((response) => response.json());
}

const fetchCats = () => {
  return fetch(`${catsURL}`)
    .then((response) => response.json());
}

const fetchProjects = () => {
  return fetch(`${projectsURL}`)
    .then((response) => response.json());
}

const fetchProjectByID = (projectID) => {
  return fetch(`${projectsURL}/${projectID}`)
    .then((response) => response.json());
}

const addProject = (projectObject, token) => {
  return fetch(`${projectsURL}`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(projectObject)
  })
}

export default {
  fetchProjectByID: fetchProjectByID,
  fetchAdoptions: fetchAdoptions,
  fetchCats: fetchCats,
  fetchProjects: fetchProjects,
  addProject: addProject
}