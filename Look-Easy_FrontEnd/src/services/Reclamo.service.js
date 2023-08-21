
import http from "../http-common";


const getAll = () => {
  return http.get("/reclamos");
};

const get = id => {
  return http.get(`/reclamos/${id}`);
};

const findByTitle = defecto => {
  return http.get(`/reclamos?defecto=${defecto}`);
};


const ReclamoService = {
  getAll,
  get,
  findByTitle
};

export default ReclamoService;


