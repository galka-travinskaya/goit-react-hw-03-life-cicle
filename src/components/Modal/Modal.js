import React, {Component} from 'react';
import {createPortal} from 'react-dom'
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.hadleKeyDown);
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.hadleKeyDown);
    }

    hadleKeyDown = e => {
        // console.log(e.code);
        if(e.code === 'Escape') {
            console.log('We can close modal on Esc');
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        // console.log('backdrop close');
        // console.log('curTarg:', e.currentTarget);
        // console.log('targ', e.target);
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
                <div className="Modal__content">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}