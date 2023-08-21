const API = 'https://api.themoviedb.org/3';
const Languages_es = '?language=es-MX';
export function get(path) {
    return fetch(API + path + Languages_es, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTIzOWU2NTlhZTRjMDU3OWI0NTkzYzAzNTY0MjEyMyIsInN1YiI6IjY0OWRjMTU2YzA3MmEyMDBlY2U0NTMwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6pWmeuMPpYWSp2CRLAS9D-pHRkmAFuQh7k72TBDqpk',
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then((result) => result.json());
}
