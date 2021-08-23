import http from '../http-common';

const create = data => {
  return http.post("/admin/sendEmail", data);
};

export default {
  create
}