import React, { Component } from 'react';

export default class DeleteSongModa extends Component {
    render() {
        const { currentSong, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let song = "";
        if (currentSong) {
            song = currentSong
        }

        return (
            <div
                className='modal'
                id='delete-song-modal'
                data-animation='slideInOutLeft'
            >
                <div className='modal-root' id='verify-delete-song-root'>
                    <div className='modal-north'>Remove Song?</div>
                    <div className='modal-center'>
                        <div className="modal-center-content">
                            Are you sure you wish to permanently delete the <span style={{ fontWeight: 'bold' }}>{song.title}</span> from the playlist?
                        </div>
                    </div>
                    <div className='modal-south'>
                        <input type="button"
                            id="delete-song-confirm-button"
                            className="modal-button"
                            onClick={deleteSongCallback}
                            value='Confirm' />
                        <input type="button"
                            id="delete-song-cancel-button"
                            className="modal-button"
                            onClick={hideDeleteSongModalCallback}
                            value='Cancel' />
                    </div>

                </div>

            </div>
        )
    }
}