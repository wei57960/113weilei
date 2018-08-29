import React from 'react';
import 'antd/dist/antd.css';
import MusicList from '../components/MusicList/MusicList';
import OperationBox from '../components/OperationBox/OperationBox';
import ChoiceBox from '../components/ChoiceBox/ChoiceBox';
import RenameDialog from '../components/RenameDialog/RenameDialog';
import DeletionDialog from '../components/DeletionDialog/DeletionDialog';
import PlayerDialog from '../components/PlayerDialog/PlayerDialog';
import InterceptDialog from '../components/InterceptDialog/InterceptDialog';

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isDeletionDialogActive: false,
      isRenameDialogActive: false,
      isPlayerDialogActive: false,
      isInterceptDialogActive: false
    };
  }

  handleShowDeletionDialog =() => {
    this.setState({
      isDeletionDialogActive: true
    });
  }
  handleShowRenameDialog =() => {
    this.setState({
      isRenameDialogActive: true
    });
  }
  handleShowPlayerDialog=() => {
    this.setState({
      isPlayerDialogActive: true
    });
  }
  handleShowInterceptDialog =() => {
    this.setState({
      isInterceptDialogActive: true
    });
  }
  handleHideDialog=() => {
    this.setState({
      isDeletionDialogActive: false,
      isRenameDialogActive: false,
      isPlayerDialogActive: false,
      isInterceptDialogActive: false
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
          handleShowRenDialog={this.handleShowRenameDialog}
          handleShowDelDialog={this.handleShowDeletionDialog}
          handleShowPlayDialog={this.handleShowPlayerDialog}
          handleShowInterceptDialog={this.handleShowInterceptDialog}
        />
        <PlayerDialog
          isActive={this.state.isPlayerDialogActive}
          musicId={this.props.basicInfo.single}
          entities={this.props.entities}
          onCancel={this.handleHideDialog}
        />
        <RenameDialog
          isRenameActive={this.state.isRenameDialogActive}
          onCancel={this.handleHideDialog}
          musicId={this.props.basicInfo.single}
          myMusic={this.props.entities.myMusic}
          operationActions={this.props.operationActions}
        />
        <InterceptDialog
          isActive={this.state.isInterceptDialogActive}
          musicId={this.props.basicInfo.single}
          entities={this.props.entities}
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
