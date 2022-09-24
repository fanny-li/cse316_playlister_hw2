import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { editSongCallback, editSongCancelCallback, currentSong } = this.props;

        let title = "";
        let artist = "";
        let youTubeId = "";

        if (currentSong) {
            if (currentSong.title) {
                title = currentSong.title
            }

            if (currentSong.artist) {
                artist = currentSong.artist;
            }

            if (currentSong.youTubeId) {
                youTubeId = currentSong.youTubeId;
            }
        }



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
                            <input type="text" id='song-title-input' />
                            <input type="text" id="song-artist-input" />
                            <input type="text" id="song-youtube-id-input" />
                        </div>
                    </div>
                    <div className='modal-south'>
                        <input type="button" className="modal-button" value="Confirm" onClick={editSongCallback} />
                        <input type="button" className="modal-button" value="Cancel" onClick={editSongCancelCallback} />
                    </div>

                </div>
            </div>
        )
    }
}