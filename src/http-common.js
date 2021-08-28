import axios from 'axios';

export default axios.create({
  baseURL : "http://admin-sinarstravindo.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
  // http://admin-sinarstravindo.herokuapp.com/
  // http://localhost:3001
});