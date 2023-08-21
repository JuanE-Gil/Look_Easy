
import http from "../http-common";


const getAll = () => {
  return http.get("/vistas");
};

const get = id => {
  return http.get(`/vistas/${id}`);
};

const findByTitle = viewers => {
  return http.get(`/vistas?viewers=${viewers}`);
};


const VistaService = {
  getAll,
  get,
  findByTitle
};

export default VistaService;


