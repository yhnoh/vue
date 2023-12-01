import axios from "axios";
import _uniqBy from "lodash/uniqBy"

export default {
    namespaced: true,
    // data
    state: () => ({
        movies: [],
        message: 'Search for the movie title!!',
        loading: false,
        theMovie: {}
    }),
    // computed 계산된 상태를 만들어 낼 수 있다.
    getters: {
        movieIds(state) {
            return state.movies.map(m => m.imdbID)
        }
    },
    // method
    // setter 메서드와 같이 데이터를 변경할 수 있다. 다른 곳에서 마구잡이로 데이터를 수정하면 데이터 관리가 힘들어지기 때문에 mutaions내에서
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key =>{
                state[key] = payload[key];
            });
        },
        resetMovies(state) {
            state.movies =  []
        }
    },
    // 비동기로 동작한다.
    // 객체 분해 확인하기
    actions: {
        async searchMovies({ state, commit }, payload) {
            if(state.loading){
                return;
            }

            commit('updateState', {
                message: '',
                loading: true
            })

            try{
                const res = await _fetchMovie({...payload, page: 1});
                const { Search, totalResults } = res.data;
                commit('updateState', {
                    movies: _uniqBy(Search, 'imdbID')
                });

                console.log(totalResults);
                console.log(typeof totalResults);

                const total = parseInt(totalResults, 10);
                const pageLength = Math.ceil(total / 10);

                if(pageLength > 1){
                    for(let page = 2; page <= pageLength; page++){
                        if(page > payload.number / 10){
                            break;
                        }

                        const res = await _fetchMovie({...payload, page});
                        const { Search } = res.data;
                        commit('updateState', {
                            movies: [ ...state.movies, ..._uniqBy(Search, 'imdbID')]
                        })
                    }
                }
            }catch (message){
                commit('updateState', {
                    movies: [],
                    message
                })
            }finally {
                commit('updateState', {
                    loading: false
                })
            }

        },
        async searchMovieWithId({ state, commit }, payload){

            if(state.loading) return
            commit('updateState', {
                theMovie: {},
                loading: true
            })

            try{
                const res = await _fetchMovie(payload)
                console.log(res)
                commit('updateState', {
                    theMovie: res.data
                })
            }catch (error){
                commit('updateState', {
                    theMovie: {}
                })
            }finally {
                commit('updateState', {
                    loading: false
                })
            }

        }
    }
}

function _fetchMovie(payload){
    const {title, type, year, page, id} = payload;

    const OMDB_API_KEY = '7035c60c';
    const url = id
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                if(res.data.Error){
                    reject(res.data.Error)
                }
                resolve(res);
            })
            .catch((err) => {
                reject(err.message);
            })
    })
}