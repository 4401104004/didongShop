import * as Types from './../constants/ActionType';
import * as Mesage from './../constants/Mesage';

var initialState = Mesage.MSG_WELCOME;

const mesage = (state = initialState, action) => {
    
    switch (action.type) {
       case Types.CHANGE_MESAGE:
           return action.mesage;
        default: return state;
    }
}



export default mesage;