import jsTPS_Transaction from "../common/jsTPS.js";

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initTitle, initArtist, initId, initIndex, initOldTitle, initOldArtist, initOldId) {
        super();
        this.app = initApp;
        this.title = initTitle;
        this.artist = initArtist;
        this.id = initId;
        this.index = initIndex;
        this.oldTitle = initOldTitle;
        this.oldArtist = initOldArtist;
        this.oldId = initOldId;
    }

    doTransaction() {
        this.app.editSong(this.index, this.title, this.artist, this.id);
    }

    undoTransaction() {
        this.app.editSong(this.index, this.oldTitle, this.oldArtist, this.oldId);
    }
}