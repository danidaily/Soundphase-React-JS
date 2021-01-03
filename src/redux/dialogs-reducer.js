/*Reducer - это функция которая принимает state/action,
меняет и возвращает новый state*/

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessageCreator = () => ({type: SEND_MESSAGE});//создание типа sendMessage
//Creator - функция, которая возвращает тип action'a
export const updateNewMessageBodyCreator = (text) => ({
        type: "UPDATE-NEW-MESSAGE-BODY", body: text

    }

);
//initialState - данные по умолчанию, если не переданы другие (в параметрах)
let initialState = {
    dialogs: [
        {id: 1, name: "Dani"},
        {id: 2, name: "Kike"},
        {id: 3, name: "Alberto"},
        {id: 4, name: "Roma"},
        {id: 5, name: "Ivan"}
    ], //массив
    messages: [
        {id: 1, message: "Hey"},
        {id: 2, message: "What's up"},
        {id: 3, message: "Hola"},
        {id: 4, message: "Nene"}
    ], //массив
    newMessageBody: {}//примитив
}
//Редьюсеры принимают state(данные) и изменяют его с помощью action
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            //при копировании объекта создаются новые примитивы, но остаются ссылки на старые массивы
            //поэтому надо копировать массивы отдельно тоже
            return {
                ...state, //сначала делаем поверхностную копию
                //и потом переопределяем
                newMessageBody: action.body,
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state, //сначала делаем поверхностную копию
                //и потом переопределяем
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}] //закидываем элементы старого массива и добоавляем новый в конец
            };
        }
        default:
            return state;


    }
}

export default dialogsReducer;