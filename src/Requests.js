const key = '33042cd9ab042cd2716f062e3f9c9a9e'

const requsets = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key='+ key + '&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key='+ key + '&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/movie/popular?api_key='+ key + '&language=en-US&page=2',
    requestHorror: 'https://api.themoviedb.org/3/search/movie?api_key='+ key + '&language=en-US&query=horror&page=1',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key='+ key + '&language=en-US&page=1',
}

export default requsets