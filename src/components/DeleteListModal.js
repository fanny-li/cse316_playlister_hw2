import React, { Component } from 'react';

export default class DeleteListModal extends Component {
    render() {
        const { listKeyPair, deleteListCallback, hideDeleteListModalCallback } = this.props;
        let name = "";
        if (listKeyPair) {
            name = listKeyPair.name;
        }
        return (
            <div
                className="modal"
                id="delete-list-modal"
                data-animation="slideInOutLeft">
                <div className="modal-root" id='verify-delete-list-root'>
                    <div className="modal-north">
                        Delete playlist?
                    </div>
                    <div className="modal-center">
                        <div className="modal-center-content">
                            Are you sure you wish to permanently delete the <span style={{ fontWeight: 'bold' }}>{name}</span> playlist?
                        </div>
                    </div>
                    <div className="modal-south">
                        <input type="button"
                            id="delete-list-confirm-button"
                            className="modal-button"
                            onClick={deleteListCallback}
                            value='Confirm' />
                        <input type="button"
                            id="delete-list-cancel-button"
                            className="modal-button"
                            onClick={hideDeleteListModalCallback}
                            value='Cancel' />
                    </div>
                </div>
            </div>
        );
    }
}