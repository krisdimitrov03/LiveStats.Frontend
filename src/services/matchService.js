import * as api from './api'
import * as request from './requester'

export const getByCompetition = async () => await request.get(api.matchesByCompetition);

export const getLivescore = async () => await request.get(api.livescore);