import * as api from './api'
import * as request from './requester'

export const getByNationality = async () => await request.get(api.competitionsByCountry);

export const getDetails = async (id) => await request.get(api.competitionDetails(id));