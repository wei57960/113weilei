import { ADD_ITEM, DELETE_ITEM, DELETE_ITEMS, ITEM_STICK, IS_DIALOG, IS_MENU, CLOSE_BUTTON } from '../const/ActionTypes'

const defaultMsg = {
    dataItems: [{ img: require("../image/头像 男孩.png"), title: '小年糕前端训练营111', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('../image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('../image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
    ],
    defaultBottoms: [{
        img: require("../image/消息.png"), title: '消息'
    }
        , { img: require("../image/通讯录.png"), title: '联系人' }
        , {
        img: require("../image/发现.png"), title: '发现'
    }
        , { img: require("../image/我.png"), title: '我' }
    ],
    isMenuActive: false, isDialogActive: false, idex: null
}

export default function toHandleList(state = defaultMsg, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const newList = state.dataItems.slice()
            console.log(newList)
            newList.unshift(action.text);
            const newState = { ...state };
            newState.dataItems = newList;
            return { ...newState, isDialogActive: false }
        }
        case DELETE_ITEM: {
            const newList = state.dataItems.slice();
            newList.splice(state.idex, 1);
            const newState = { ...state };
            newState.dataItems = newList
            return {
                ...newState, isMenuActive: false, idex: null
            }
        }
        case DELETE_ITEMS: {

        }
        case ITEM_STICK: {
            const newList = state.dataItems.slice();
            const Item = newList.splice(state.idex, 1);
            newList.unshift(Item[0])
            const newState = { ...state };
            newState.dataItems = newList
            return {
                ...newState, isMenuActive: false, idex: null
            }
        }

        case IS_DIALOG: {
            return {
                ...state, isDialogActive: true
            }
        }

        case IS_MENU: {
            return { ...state, isMenuActive: true, idex: action.index }
        }
        case CLOSE_BUTTON: {
            return { ...state, isMenuActive: false, isDialogActive: false }
        }
        default:
            return state;
    }
}