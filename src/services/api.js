export const baseUrl = 'https://localhost:7226';


export const login = `${baseUrl}/users/login`;

export const register = `${baseUrl}/users/register`;

export const logout = `${baseUrl}/users/logout`;


export const competitionsBaseUrl = `${baseUrl}/football/competitions`;

export const competitionsByCountry = `${competitionsBaseUrl}/bynationality`;

export const competitionDetails = (id) => `${competitionsBaseUrl}/${id}`;


export const matchesBaseUrl = `${baseUrl}/football/matchs`;

export const matchesByCompetition = `${matchesBaseUrl}/all`;

export const livescore = `${matchesBaseUrl}/livescore`;