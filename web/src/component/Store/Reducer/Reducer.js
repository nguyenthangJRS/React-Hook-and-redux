

const randomID = () =>{
    return `${Math.trunc(Math.random()*10000)}-${Math.trunc(Math.random()*10000)}-${Math.trunc(Math.random()*10000)}-${Math.trunc(Math.random()*10000)}-${Math.trunc(Math.random()*10000)}`
}

const initialState = {
    list : {
        'anime' : [
            {
                id : randomID(),
                url : '../img/11.jpg',  
                evaluate : 9.6,
                name : 'One Punch Man',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/6.png',  
                evaluate : 9.0,
                name : 'One Piece',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 935',
            },
            {
                id : randomID(),
                url : '../img/3.jpg',  
                evaluate : 8.8,
                name : 'Naruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 576',
            },
            {
                id : randomID(),
                url : '../img/4.jfif',  
                evaluate : 8.7,
                name : 'Pokemon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1212',
            },
            {
                id : randomID(),
                url : '../img/12.jpg',  
                evaluate : 9.8,
                name : 'Swort at online',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 22',
            },
            {
                id : randomID(),
                url : '../img/13.jpg',  
                evaluate : 9.6,
                name : '君の名は',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/14.jpg',  
                evaluate : 7.6,
                name : '鬼滅の刃',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 24',
            },
            {
                id : randomID(),
                url : '../img/15.jpg',  
                evaluate : 8.6,
                name : 'Doaremon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1005',
            },
            {
                id : randomID(),
                url : '../img/16.jpg',  
                evaluate : 9.2,
                name : '呪術回線',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 13',
            },
            {
                id : randomID(),
                url : '../img/17.jpg',  
                evaluate : 9.5,
                name : 'Overlord',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 14',
            },
            {
                id : randomID(),
                url : '../img/18.jpg',  
                evaluate : 6.5,
                name : 'Boruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 106',
            },
            {
                id : randomID(),
                url : '../img/19.jpg',  
                evaluate : 6.5,
                name : 'Noblesse',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 12',
            },
            // page 1/////////////////////////////
            {
                id : randomID(),
                url : '../img/11.jpg',  
                evaluate : 9.6,
                name : 'One Punch Man',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/6.png',  
                evaluate : 9.0,
                name : 'One Piece',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 935',
            },
            {
                id : randomID(),
                url : '../img/3.jpg',  
                evaluate : 8.8,
                name : 'Naruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 576',
            },
            {
                id : randomID(),
                url : '../img/4.jfif',  
                evaluate : 8.7,
                name : 'Pokemon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1212',
            },
            {
                id : randomID(),
                url : '../img/12.jpg',  
                evaluate : 9.8,
                name : 'Swort at online',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 22',
            },
            {
                id : randomID(),
                url : '../img/13.jpg',  
                evaluate : 9.6,
                name : '君の名は',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/14.jpg',  
                evaluate : 7.6,
                name : '鬼滅の刃',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 24',
            },
            {
                id : randomID(),
                url : '../img/15.jpg',  
                evaluate : 8.6,
                name : 'Doaremon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1005',
            },
            {
                id : randomID(),
                url : '../img/16.jpg',  
                evaluate : 9.2,
                name : '呪術回線',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 13',
            },
            {
                id : randomID(),
                url : '../img/17.jpg',  
                evaluate : 9.5,
                name : 'Overlord',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 14',
            },
            {
                id : randomID(),
                url : '../img/18.jpg',  
                evaluate : 6.5,
                name : 'Boruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 106',
            },
            {
                id : randomID(),
                url : '../img/19.jpg',  
                evaluate : 6.5,
                name : 'Noblesse',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 12',
            },
            // page 1/////////////////////////////
            // page 2/////////////////////////////
            {
                id : randomID(),
                url : '../img/11.jpg',  
                evaluate : 9.6,
                name : 'One Punch Man',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/6.png',  
                evaluate : 9.0,
                name : 'One Piece',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 935',
            },
            {
                id : randomID(),
                url : '../img/3.jpg',  
                evaluate : 8.8,
                name : 'Naruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 576',
            },
            {
                id : randomID(),
                url : '../img/4.jfif',  
                evaluate : 8.7,
                name : 'Pokemon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1212',
            },
            {
                id : randomID(),
                url : '../img/12.jpg',  
                evaluate : 9.8,
                name : 'Swort at online',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 22',
            },
            {
                id : randomID(),
                url : '../img/13.jpg',  
                evaluate : 9.6,
                name : '君の名は',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/14.jpg',  
                evaluate : 7.6,
                name : '鬼滅の刃',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 24',
            },
            {
                id : randomID(),
                url : '../img/15.jpg',  
                evaluate : 8.6,
                name : 'Doaremon',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 1005',
            },
            {
                id : randomID(),
                url : '../img/16.jpg',  
                evaluate : 9.2,
                name : '呪術回線',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 13',
            },
            {
                id : randomID(),
                url : '../img/17.jpg',  
                evaluate : 9.5,
                name : 'Overlord',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 14',
            },
            {
                id : randomID(),
                url : '../img/18.jpg',  
                evaluate : 6.5,
                name : 'Boruto',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 106',
            },
            {
                id : randomID(),
                url : '../img/19.jpg',  
                evaluate : 6.5,
                name : 'Noblesse',
                urlFilm : 'http//:onepunchman',
                episode : 'epx 12',
            },
            // page 2/////////////////////////////
        ],
        'film' : [
            {
                id : randomID(),
                url : '../img/21.jfif',  
                evaluate : 8.5,
                name : 'Iron Man',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/22.jfif',  
                evaluate : 7.5,
                name : 'End Game',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/23.jpg',  
                evaluate : 6.9,
                name : 'Caption Maver',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/24.jpg',  
                evaluate : 8.7,
                name : 'Aventure',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/21.jfif',  
                evaluate : 8.5,
                name : 'Iron Man',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/22.jfif',  
                evaluate : 7.5,
                name : 'End Game',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/23.jpg',  
                evaluate : 6.9,
                name : 'Caption Maver',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/24.jpg',  
                evaluate : 8.7,
                name : 'Aventure',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/21.jfif',  
                evaluate : 8.5,
                name : 'Iron Man',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/22.jfif',  
                evaluate : 7.5,
                name : 'End Game',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/23.jpg',  
                evaluate : 6.9,
                name : 'Caption Maver',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/24.jpg',  
                evaluate : 8.7,
                name : 'Aventure',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
           
        ],
        'manga' : [
            {
                id : randomID(),
                url : '../img/comic1.jpg',  
                evaluate : 8.7,
                name : 'Grand Blue',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/comic6.jpg',  
                evaluate : 8.7,
                name : 'Kimetsu no yaiba',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/comic2.jpg',  
                evaluate : 8.7,
                name : 'One Piece',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/comic3.jfif',  
                evaluate : 8.7,
                name : 'Naruto',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/comic4.webp',  
                evaluate : 8.7,
                name : 'Jujutsu kaisen',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
            {
                id : randomID(),
                url : '../img/comic5.jfif',  
                evaluate : 8.7,
                name : 'Attack On Titan',
                urlFilm : 'http//:iron-man',
                episode : 'epx 1',
            },
        ]
    },
    isSearch : false


}

export const Reducer = (state = initialState,action) =>{
    switch(action.type) {
        case 'SEARCH' : {
            const newList = {...state.list};
            console.log(action.payload.value.toLowerCase().trim())

        
            const listAnime = newList.anime.filter( item =>action.payload.value.toLowerCase().indexOf( item.name.toLowerCase()) > -1 ||  action.payload.value.toLowerCase().trim().indexOf( item.name.toLowerCase().trim()) > -1);
            const listFilm = newList.film.filter( item =>action.payload.value.toLowerCase().indexOf( item.name.toLowerCase()) > -1 ||  action.payload.value.toLowerCase().trim().indexOf( item.name.toLowerCase().trim()) > -1);
            const listManga = newList.manga.filter( item =>action.payload.value.toLowerCase().indexOf( item.name.toLowerCase()) > -1 ||  action.payload.value.toLowerCase().trim().indexOf( item.name.toLowerCase().trim()) > -1);

            return {
                ...state,
                list :{
                    'anime' : listAnime,
                    'film' : listFilm,
                    'manga' : listManga

                },
                isSearch : true
            }
        }
        case 'NOT_SEARCH': {
            const notSearchAnime = [...initialState.list.anime];
            const notSearchFilm = [...initialState.list.film];
            const notSearchManga = [...initialState.list.manga];

            return {
                ...state,
                list:{
                    'anime' : notSearchAnime,
                    'film' : notSearchFilm,
                    'manga' : notSearchManga
                },
                isSearch : false
            }
        }
        default :
        return state
    }

}

