/*Reducer - это функция которая принимает state/action,
меняет и возвращает новый state*/

import {usersAPI} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


//initialState - данные по умолчанию, если не переданы другие (в параметрах)
let initialState = {
    users: [],
    pageSize: 5,
    //изначально кол-во пользователей равно 0, но потом изменяется, приходя с сервера
    totalUsersCount: 51,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
//Редьюсеры принимают state(данные) и изменяют его с помощью action
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //создаем копию users
                // тоже самое, что users: [...state.users]
                users: state.users.map(u => {
                    //если id юзера совпадает с тем, которого надо зафолловить, применяем action
                    if (u.id === action.userId) {
                        return {...u, isFollowed: true} //возвращаем пользователей и значение isFollowed true, для юзера,
                        //которого мы зафолловили
                    }
                    return u;
                })
            }
        }


        case UNFOLLOW: {
            return {
                ...state,
                //создаем копию users
                // тоже самое, что users: [...state.users]
                users: state.users.map(u => {
                    //если id юзера совпадает с тем, которого надо зафолловить, применяем action
                    if (u.id === action.userId) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, users: action.users
            } //добавляем к массиву users скопированный массив users,  измененный с помощью action'a SET_USERS


        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage

            } //добавляем к массиву users скопированный массив users,  измененный с помощью action'a SET_USERS


        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count

            }
        }//добавляем к массиву users скопированный массив users,  измененный с помощью action'a SET_USERS
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching

            } //добавляем к массиву users скопированный массив users,  измененный с помощью action'a SET_USERS


        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            } //добавляем к массиву users скопированный массив users,  измененный с помощью action'a SET_USERS


        }

        default:
            return state;
    }

}
//action для подписки
export const followSuccess = (userId) => ({type: FOLLOW, userId}); //followAC - followActionCreator
//action для отписки
export const unfollowSuccess = (userId) => ({
        type: UNFOLLOW, userId

    }

);
//создаем action, в котором добавляем пользователей
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});//action creator для смены значенмя isFetching
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});//action creator для смены значенмя isFetching


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                //dispatch(setTotalUsersCount(response.data.totalCount)); //получаем кол-во всех пользователей с сервера

            }); //thunk - функция, совершающая асинхронные запросы, а также диспатчит обычные actions (объекты)}
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));

            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));

            });
    }
}
export default usersReducer;