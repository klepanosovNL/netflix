export const fakeFetch = (data, delay = 100) => {
    return new Promise((res, rej) => {
        setTimeout(() => { res(data) }, delay)
    })
}