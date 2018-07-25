//action类型
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_TTEM';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const ITEM_STICK = 'ITEM_STICK';

//其他常量
export const VisibilityFilters = {
    SHOW_DIALOG: 'SHOW_DIALOG',
    SHOW_MENU: 'SHOW_MENU',
    SHOW_DELETEBUTTON: 'SHOW_DELETEBUTTON',
    SHOW_DELETEPAGE: 'SHOW_DELETEPAGE'
}

//action创建函数
export function ADD_ITEM(text) {
    return { type: ADD_ITEM, text }
}

export function DELETE_ITEM(index) {
    return { type: DELETE_ITEM, index }
}

export function DELETE_ITEMS(indexs) {
    return { type: DELETE_ITEMS, indexs }
}

export function ITEM_STICK(index) {
    return { type: ITEM_STICK, index }
}