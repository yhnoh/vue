import axios from "axios";

export default {
    namespaced: true,
    // data
    state: () => ({
        movies: [],
        message: '',
        loading: false
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
        assignMovies (state, Search){
            state.movies = Search;
        },
        resetMovies(state) {
            state.movies =  []
        }
    },
    // 비동기로 동작한다.
    // 객체 분해 확인하기
    actions: {
        async searchMovies({ commit }, payload) {
            const { title, type, number, year} = payload;
            const OMDB_API_KEY = '7035c60c';

            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
            const { Search, totalResult } = res.data;
            commit('updateState', {
                movies: Search
            });
        }
    }
}