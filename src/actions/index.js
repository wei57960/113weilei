import {ADD_ITEM,DELETE_ITEM,DELETE_ITEMS,ITEM_STICK,IS_DIALOG,IS_MENU,CLOSE_BUTTON} from '../const/ActionTypes'



//action创建函数
export function addItem(text) {
    return { type: ADD_ITEM, text }
}


export function deleteItem() {
    return { type: DELETE_ITEM }
}

export function deleteItems(indexs) {
    return { type: DELETE_ITEMS, indexs }
}

export function itemStick() {
    return { type: ITEM_STICK }
}

export function isMenu(index){
    return {type:IS_MENU,index}
}

export function isDialog(){
    return {type:IS_DIALOG}
}

export function closeButton(){
    return {type:CLOSE_BUTTON}
}

