
export const Search = (item) =>{
    return {
        type : 'SEARCH',
        payload : item
    }
}
export const CloseSearch = (item) =>{
    return {
        type : 'NOT_SEARCH',
        payload : item
    }
}