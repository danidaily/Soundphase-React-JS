/*Reducer - это функция которая принимает state/action,
меняет и возвращает новый state*/
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const LIKE = "LIKE"
const DISLIKE = "DISLIKE"

let likes = Math.round(Math.random() * 100);

/*initialState - данные state по умолчанию*/
let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: likes, isLiked: false},
        {id: 2, message: "Noice", likesCount: likes, isLiked: false},
        {id: 3, message: "Bienvenido", likesCount: likes, isLiked: false},
        {id: 4, message: "Nene", likesCount: likes, isLiked: false}
    ],
    newPostText: "What's on your mind?"
}
//profileReducer получает state и action, меняет и выдает новый state
//значение по умолчанию, если ничего не передается в пропсах: state = initialState
const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText

            };
        }
        case LIKE: {

            return {
                ...state,
                //создаем копию users
                // тоже самое, что users: [...state.users]
                likesCount: state.posts.map(u => {
                    //если id юзера совпадает с тем, которого надо зафолловить, применяем action
                    if (u.id === action.userId) {
                        return {...u, likesCount: likes++} //возвращаем пользователей и значение isFollowed true, для юзера,
                        //которого мы зафолловили
                    }
                    return u;
                }),
                isLiked: state.posts.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isLiked: true}
                    }
                    return u;
                })
            }
        }
        case DISLIKE: {
            return {
                ...state,
                //создаем копию users
                // тоже самое, что users: [...state.users]
                likesCount: state.posts.map(u => {
                    //если id юзера совпадает с тем, которого надо зафолловить, применяем action
                    if (u.id === action.userId) {
                        return {...u, likesCount: likes--}
                    }
                    return u;
                }),
                isLiked: state.posts.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isLiked: false}
                    }
                    return u;
                })
            }
        }
        default:
            return state;


    }


}


export const addPostActionCreator = () => ({type: ADD_POST}); //actionCreator создает и возвращает action
export const updateNewPostTextActionCreator = (text) => ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }

);
//action для лайка
export const toLikeAC = (userId) => ({type: LIKE, userId}); //followAC - followActionCreator
//action для отмены лайка
export const toDislikeAC = (userId) => ({
        type: DISLIKE, userId

    }

);
export default profileReducer;