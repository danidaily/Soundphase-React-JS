/*Reducer - это функция которая принимает state/action,
меняет и возвращает новый state*/
import {usersAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const LIKE = "LIKE"
const DISLIKE = "DISLIKE"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let likes = Math.round(Math.random() * 100);

/*initialState - данные state по умолчанию*/
let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: likes, isLiked: false},
        {id: 2, message: "Noice", likesCount: likes, isLiked: false},
        {id: 3, message: "Bienvenido", likesCount: likes, isLiked: false},
        {id: 4, message: "Nene", likesCount: likes, isLiked: false}
    ],
    newPostText: "What's on your mind?",
    profile: null
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                //возвращаем копию состояния (стейт), где поменяем profile
                profile: action.profile
            }
        }
        default:
            return state;


    }


}


export const addPost = () => ({type: ADD_POST}); //actionCreator создает и возвращает action
export const updateNewPostText = (text) => ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }

);
//action для лайка
export const toLike = (userId) => ({type: LIKE, userId}); //followAC - followActionCreator
//action для отмены лайка
export const toDislike = (userId) => ({
        type: DISLIKE, userId

    }

);
export const setUserProfile = (profile) => ({
        type: SET_USER_PROFILE, profile

    }

);
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
        //this.props.setTotalUsersCount(response.data.totalCount); //получаем кол-во всех пользователей с сервера

    });
};//thunk принимает dispatch и произвоит асинхронные операции

export default profileReducer;