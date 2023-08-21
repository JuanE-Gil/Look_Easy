import http from "../http-common";

const getAll = () => {
  return http.get("/peliculas");
};

const get = id => {
  return http.get(`/peliculas/${id}`);
};

const create = data => {
  return http.post("/peliculas", data);
};

const update = (id, data) => {
  return http.put(`/peliculas/${id}`, data);
};

const remove = id => {
  return http.delete(`/peliculas/${id}`);
};


const findByTitle = titulo => {
  return http.get(`/peliculas?titulo=${titulo}`);
};

const PeliculaService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};

export default PeliculaService;
