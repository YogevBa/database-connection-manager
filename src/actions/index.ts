import * as api from '../api'
import { Connection } from '../interfaces'

export const getAllConnections = async () => {

    try {
        const {data} = await api.getAllConnections()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getConnection = async (id: string) => {

    try {
        const {data} = await api.getConnection(id)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addConnection = async (newConnection: Connection) => {

    try {
        const {data} = await api.addConnection(newConnection)
        return data
    } catch (error) {
        console.log(error)
    }
}