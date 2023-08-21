import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};


const findByUsername = username => {
  return http.get(`/users?username=${username}`);
};

const UsuarioService= {
  getAll,
  get,
  findByUsername
};

export default UsuarioService;
