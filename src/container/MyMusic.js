import React from 'react';
import 'antd/dist/antd.css';
import MusicList from '../components/MusicList/MusicList';
import OperationBox from '../components/OperationBox/OperationBox';
import ChoiceBox from '../components/ChoiceBox/ChoiceBox';
import RenameDialog from '../components/RenameDialog/RenameDialog';
import DeletionDialog from '../components/DeletionDialog/DeletionDialog';

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isDeletionDialogActive: false,
      isRenameDialogActive: false
    };
  }

  handleShowRenameDialog=() => {
    this.setState({
      isRenameDialogActive: true
    });
  }
  handleShowDeletionDialog=() => {
    this.setState({
      isDeletionDialogActive: true
    });
  }
  handleHideDialog=() => {
    this.setState({
      isDeletionDialogActive: false,
      isRenameDialogActive: false
    });
  }
  render() {
    return (
      <div>
        <ChoiceBox actions={this.props.actions} />
        <MusicList
          operationActions={this.props.operationActions}
          basicInfo={this.props.basicInfo}
          entities={this.props.entities}
          musicList={this.props.musicList}
        />
        <OperationBox
          basicInfo={this.props.basicInfo}
          entities={this.props.entities}
          handleShowDelDialog={this.handleShowDeletionDialog}
          handleShowRenameDialog={this.handleShowRenameDialog}
        />
        <RenameDialog
          isRenameActive={this.state.isRenameDialogActive}
          onCancel={this.handleHideDialog}
        />
        <DeletionDialog
          isActive={this.state.isDeletionDialogActive}
          onCancel={this.handleHideDialog}
          basicInfo={this.props.basicInfo}
          myMusic={this.props.entities.myMusic}
          operationActions={this.props.operationActions}
        />
      </div>
    );
  }
}
export default MyMusic;
