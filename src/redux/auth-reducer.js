/*Reducer - это функция которая принимает state/action,
меняет и возвращает новый state*/

const SET_USER_DATA = "SET-USER-DATA";


//initialState - данные по умолчанию, если не переданы другие (в параметрах)
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
//Редьюсеры принимают state(данные) и изменяют его с помощью action
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                //создаем копию users
                ...action.data, //склеиваем из state и data один объект
                isAuth: true
            }
        }

        default:
            return state;
    }
}

// data: {userId, email, login} - объект data
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}}); //возвращает action (действие)

export default authReducer;