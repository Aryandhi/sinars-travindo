import http from '../http-common';

const create = data => {
  return http.post("/admin/customer", data);
};

export default {
  create
}