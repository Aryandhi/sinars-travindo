import http from '../http-common';

const create = data => {
  return http.post("/admin/suggestion", data);
};

export default {
  create
}