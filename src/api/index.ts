import axios from "axios";
import { Connection } from "../interfaces";

const API = axios.create({baseURL: 'http://localhost:4000/databases'})

export const getAllConnections = () => API.get('/')
export const getConnection = (id: string) => API.get(`/${id}`)
export const addConnection = (connection: Connection) => API.post('/', connection)