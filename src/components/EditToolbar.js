import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose,
            undoCallback, redoCallback, closeCallback, addSongCallback } = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (!canAddSong) addSongClass = "playlister-button-disabled";
        if (!canUndo || !canClose) undoClass = "playlister-button-disabled";
        if (!canRedo || !canClose) redoClass = "playlister-button-disabled";
        if (!canClose) closeClass = "playlister-button-disabled";

        // handleCtrlZ = (event) => {

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