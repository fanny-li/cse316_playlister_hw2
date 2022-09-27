import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, modalVisible,
            undoCallback, redoCallback, closeCallback, addSongCallback } = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";


        if (modalVisible) {
            addSongClass = "playlister-button-disabled";
            undoClass = "playlister-button-disabled";
            redoClass = "playlister-button-disabled";
            closeClass = "playlister-button-disabled";
        }

        else if (!canAddSong) {
            addSongClass = "playlister-button-disabled";
            undoClass = "playlister-button-disabled";
            redoClass = "playlister-button-disabled";
            closeClass = "playlister-button-disabled";
        }
        else if (canAddSong) {
            console.log("here");
            undoClass = "playlister-button-disabled";
            redoClass = "playlister-button-disabled";
            console.log(canRedo);
            if (canUndo) {
                undoClass = "playlister-button";
            }
            else if (canRedo) {
                redoClass = "playlister-button";
            }
        }

        else {
            addSongClass = "playlister-button";
            undoClass = "playlister-button";
            redoClass = "playlister-button";
            closeClass = "playlister-button";
        }



        // handleUndo = (event) => {

        // }
        return (
            <div id="edit-toolbar">
                <input
                    type="button"
                    id='add-song-button'
                    value="+"
                    className={addSongClass}
                    onClick={addSongCallback}
                />
                <input
                    type="button"
                    id='undo-button'
                    value="⟲"
                    className={undoClass}
                    onClick={undoCallback}
                />
                <input
                    type="button"
                    id='redo-button'
                    value="⟳"
                    className={redoClass}
                    onClick={redoCallback}
                />
                <input
                    type="button"
                    id='close-button'
                    value="&#x2715;"
                    className={closeClass}
                    onClick={closeCallback}
                />
            </div>
        )
    }
}