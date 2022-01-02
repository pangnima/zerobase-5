export function fetchUser(userName) {
  // `https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export function fetchRepos(userName) {
  // `https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export function fetchRepoLanguage(userName, repoName) {
  // `https://api.github.com/repos/${userName}/${repoName}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}
