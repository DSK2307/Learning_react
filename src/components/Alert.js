import React from 'react'

function Alert(props) {
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert
