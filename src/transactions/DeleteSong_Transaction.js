import { jsTPS_Transaction } from "../common/jsTPS.js";

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initTitle, initArtist, initId, initIndex) {
        super();
        this.app = initApp;
        this.title = initTitle;
        this.artist = initArtist;
        this.id = initId;
        this.index = initIndex;
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }

    undoTransaction() {
        let oldIndex = this.app.state.currentList.songs.length;
        this.app.addNewSong(oldIndex, this.title, this.artist, this.id);
        console.log("running");
        this.app.moveSong(oldIndex + 1, this.index + 1);
    }
}
