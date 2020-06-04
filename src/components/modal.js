import React from "react";
import { css, keyframes } from "@emotion/core";

const showModal = keyframes`
    0%{
        transform: translate(-50%, -50%) scale(1.3);
    }
    100%{
        transform: translate(-50%, -50%) scale(1);
    }
`

const formcontainer = css`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
    width: 100%;
    max-width: 700px;
    /* background-image: url("/form-bck.png"); */
    background-size: contain;
    background-color: #fff;
    animation: ${showModal} 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
`;



const formtitle = css`
    position: relative;
    display: block;
    padding: 0.5rem 0;
    margin: 0;
    border-bottom: 1px solid #e0E0E0;
    background-color: #704c9c;
    color: #ffffff;
    font-weight: normal;
    text-align: center;
`

const formcloser = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    width: 40px;
`

const modalcover = css`
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.7);
    z-index: 900;
`

const Modal = ({title, show, onClose, children}) =>  (
    !show ? null : (
        <>
        <div className="modal-cover" css={modalcover} onClick={onClose}></div>
        <div className="form-container" css={formcontainer}>
            <h3 className="form-title" css={formtitle}>
                {title}
                <a href="#" id="form-closer" onClick={onClose} css={formcloser}>&#10006;</a>
            </h3>
            {children}
        </div>
        </>
    )
);

export default Modal;
