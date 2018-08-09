import React from 'react';
import ActionSheetExample from './ActionSheetExample'
import DialogExample from './DialogExample'
import ProgressExample from './ProgressExample'
export default class Container extends React.Component {
    render() {
        return (
            <div>
                <ActionSheetExample />
                <DialogExample/>
                <ProgressExample/>
            </div>
        );
    }
}


