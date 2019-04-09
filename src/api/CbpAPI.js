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

const fetchAdoptionByID = (adoptionID) => {
  return fetch(`${adoptionsURL}/${adoptionID}`)
    .then((response) => response.json());
}

const fetchCatByID = (catID) => {
  return fetch(`${catsURL}/${catID}`)
    .then((response) => response.json());
}

const fetchProjectByID = (projectID) => {
  return fetch(`${projectsURL}/${projectID}`)
    .then((response) => response.json());
}

const addAdoption = (adoptionObject) => { //pass in token
  return fetch(`${adoptionsURL}/`,{
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(adoptionObject)
  })
}

const addCat = (catObject) => { //pass in token
  return fetch(`${catsURL}/`,{
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(catObject)
  })
}

const addProject = (projectObject) => { //pass in token
  return fetch(`${projectsURL}/`,{
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(projectObject)
  })
}

const deleteAdoption = (adoptionID) => {
  return fetch(`${adoptionsURL}/${adoptionID}`, { 
    method: 'DELETE' 
  });
}

const deleteCat = (catID) => {
  return fetch(`${catsURL}/${catID}`, { 
    method: 'DELETE' 
  });
}

const deleteProject = (projectID) => {
  return fetch(`${projectsURL}/${projectID}`, { 
    method: 'DELETE' 
  });
}

// const editProject = (projectID, projectObject) => { //pass in token
//   return fetch(`${projectsURL}/${projectID}`,{
//     headers: {
//       'Content-Type': 'application/json',
//       // 'Authorization': token
//     },
//     method: "PUT",
//     body: JSON.stringify(projectObject)
//   })
// }


export default {
  fetchAdoptions: fetchAdoptions,
  fetchCats: fetchCats,
  fetchProjects: fetchProjects,
  fetchAdoptionByID: fetchAdoptionByID,
  fetchCatByID: fetchCatByID,
  fetchProjectByID: fetchProjectByID,
  addAdoption: addAdoption,
  addCat: addCat,
  addProject: addProject,
  deleteAdoption: deleteAdoption,
  deleteCat: deleteCat,
  deleteProject: deleteProject,
  // editAdoption: editAdoption,
  // editCat: editCat,
  // editProject: editProject,
}