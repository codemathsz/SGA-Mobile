import axios from 'axios'

const API = axios.create({
  baseURL: 'http:/192.168.15.14:8080'
})

export default API