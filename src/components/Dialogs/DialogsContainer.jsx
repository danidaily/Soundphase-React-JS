import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//Превратить state в пропсы
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
//Превратить dispatch в пропсы
//В пропсы попадут два колбэка updateNewMessageBody и sendMessage
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));

        },
        sendMessage: () => {
            dispatch(sendMessageCreator());

        }
    }
}
//В пропсах Dialogs будет а=1, b=2, c=3;
//f1 и f2 возвращают объекты
//передаем в Dialogs
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //два вызова - это когда возвращает функцию и во вторых скобках запускает эту функцию
// connect(Dialogs) - диалоги законектились к реакт-редакс

//функция connect создает контейнерную компоненту, рендерит в этой компоненте
//презентационную компоненту и передает в нее параметры.
//connect(f1,f2) - параметры для презентационной компоненты
//(Dialogs) - передаем презентационную компоненту
export default DialogsContainer;