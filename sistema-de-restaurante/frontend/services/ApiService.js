import axios from "axios";

export default class ApiService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.API_URL,
    });

    this.quantidadeRequisicoes = 0;
    this.axios.interceptors.request.use((config) => {
      this.quantidadeRequisicoes++;

      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    });
    }
    
    post(url, data) {
        return this.axios.post(url, data);
    }

    get(url) {
        return this.axios.get(url);
    }

    put(url, data) {
        return this.axios.put(url, data);
    }
}
