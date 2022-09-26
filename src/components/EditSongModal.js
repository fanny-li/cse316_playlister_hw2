import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTitle: props.currentSong.title,
            newArtist: props.currentSong.artist,
            newId: props.currentSong.youTubeId,
            index: props.currentSongIndex
        }
    }

    handleTitleChange = (event) => {
        this.setState({ ...this.state, newTitle: event.target.value });
    }
    handleArtistChange = (event) => {
        this.setState({ ...this.state, newArtist: event.target.value });
    }
    handleIdChange = (event) => {
        this.setState({ ...this.state, newId: event.target.value });
    }
    handleEditSongCallback = () => {
        this.props.editSongCallback(this.state.index, this.state.newTitle, this.state.newArtist, this.state.newId);
    }
    render() {
        const { editSongCancelCallback } = this.props;
        return (
            <div
                className='modal'
                id="edit-song-modal"
                data-animation="slideInOutRight"
            >
                <div className='modal-root'>
                    <div className='modal-north'>Edit Song</div>
                    <div className='modal-center-edit-song'>
                        <div className='edit-song-attributes'>
                            <label htmlFor="title">Title:</label>
                            <label htmlFor="artist">Artist:</label>
                            <label htmlFor="youTubeId">YouTube Id:</label>
                        </div>
                        <div className='edit-song-attributes'>
                            <input type="text" id='song-title-input' onChange={this.handleTitleChange} value={this.state.newTitle} />
                            <input type="text" id="song-artist-input" onChange={this.handleArtistChange} value={this.state.newArtist} />
                            <input type="text" id="song-youtube-id-input" onChange={this.handleIdChange} value={this.state.newId} />
                        </div>
                    </div>
                    <div className='modal-south'>
                        <input type="button" className="modal-button" value="Confirm" onClick={this.handleEditSongCallback} />
                        <input type="button" className="modal-button" value="Cancel" onClick={editSongCancelCallback} />
                    </div>

                </div>
            </div>
        )
    }
}