import axios from 'axios'

const api = axios.create({
  baseURL: 'https://apivitrine.uenp.edu.br/api',
})

export default api
