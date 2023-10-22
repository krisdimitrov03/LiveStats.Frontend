import * as api from './api'
import * as request from './requester'

export const login = async (username, password) => await request.post(api.login, { username, password });

export const logout = async (user) => await request.post(api.logout, null, user);