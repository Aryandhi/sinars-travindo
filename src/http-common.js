import axios from 'axios';

export default axios.create({
  baseURL : "https://admin-sinarstravindo.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});