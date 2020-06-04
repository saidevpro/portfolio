import React from "react";
import { css, keyframes } from "@emotion/core";
import Container from "./container";
import SecondaryText from "./secondarytext";
import {Button} from "./button";

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
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e0E0E0;
    background-color: #704c9c;
    color: #ffffff;
    font-weight: normal;
    text-align: center;
`

const formcloser = css`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    padding: 15px;
`

const formgroup = css`
    display: block;
    margin-bottom: 30px;
`

const formlabel = css`
    display: block;
    font-weight: 700;
    margin-bottom: 7px;
`

const forminputarea = css`
    display: block;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #e0E0E0;
    padding: 0.7rem 1rem;
    outline: none;
    font-size: 16px;
    font-family: "Roboto", Arial, sans-serif;
    &:hover,&:focus {
        border-color: #704c9c;
    }
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

const FormContact = ({onSubmit}) => (
    <div css={css`padding: 0 1.3rem;`}>
        <SecondaryText as="p" size={1} css={css`margin-bottom: 40px;font-family: "Roboto";`} lineHeight={1.3}>
            Pour avoir des estimations sur votre projet de création de site web, veuillez remplir le formulaire ci-dessous et le soumettre. Et vous recevrez, dans les deux jours suivants, un dévis complet du projet.
        </SecondaryText>
        <form onSubmit={onSubmit} action="https://getform.io/f/7e57f73b-f9f2-4ea1-9fa3-47fdeee16023" method="POST" id="form-contact" encType="multipart/form-data">
            <div className="input-group" css={formgroup}>
                <label htmlFor="email" className="label" css={formlabel}>Email</label>
                <input type="email" className="input-control" name="email" placeholder="Entrer votre email" id="email" css={forminputarea} autoComplete="off" required/>
            </div>
            <div className="input-group" css={formgroup}>
                <label htmlFor="phone" className="label" css={formlabel}>Téléphone</label>
                <input type="tel" className="input-control" name="phone" placeholder="Entrer votre numero de téléphone" id="phone" css={forminputarea} autoComplete="off" required/>
            </div>
            <div className="input-group" css={formgroup}>
                <label htmlFor="content" className="label" css={formlabel}>Projet</label>
                <textarea name="content" id="content" placeholder="Expliquer vos besoins" id="" cols="30" rows="5" css={forminputarea}></textarea>
            </div>
            <div className="input-group" css={formgroup}>
                <Button type="submit" className="form-button">Envoyer</Button>
            </div>
        </form>
    </div>
);

export default FormContact;
