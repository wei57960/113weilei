import { IS_DIALOG, IS_MENU, CLOSE_BUTTON,IS_DELETE } from '../const/ActionTypes'
const defaultMsg = {
    isMenuActive: false,  //点击更多后 菜单页面的显示
    isDialogActive: false, //点击增加后 增加页面的显示
    isDeleteActive:false   //点击更多后 点击删除 每个item旁边按钮的显示
}

export default function isActive(state = defaultMsg, action) {
    switch (action.type) {
        case IS_DIALOG: {
            return {
                ...state, isDialogActive: true  
            }
        }
        case IS_MENU: {
            return { ...state, isMenuActive: true}
        }
        case CLOSE_BUTTON: {
            return { ...state, isMenuActive: false, isDialogActive: false }
        }
        case IS_DELETE:{
            return {...state,isDeleteActive:true}
        }
        default:
            return state;
    }
}