import jsTPS_Transaction from "../common/jsTPS.js";

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.index = initIndex;
    }

    doTransaction() {
        this.app.addNewSong(this.index);
    }

    undoTransaction() {
        this.app.deleteSong(this.index);
    }
}

