import http from "../http-common";

const getAll = () => {
  return http.get("/series");
};

const get = id => {
  return http.get(`/series/${id}`);
};

const create = data => {
  return http.post("/series", data);
};

const update = (id, data) => {
  return http.put(`/series/${id}`, data);
};

const remove = id => {
  return http.delete(`/series/${id}`);
};

const removeAll = () => {
  return http.delete(`/series`);
};

const findByTitle = titulo => {
  return http.get(`/series?titulo=${titulo}`);
};

const SerieService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default SerieService;
