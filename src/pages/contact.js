import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import PrimaryText from "../components/primarytext"
import SecondaryText from "../components/secondarytext"
import Space from "../components/space"
import FormContact from "../components/formcontact"
import {ButtonRadius} from "../components/button";
import Loader from '../components/loader';
import Modal from '../components/modal';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showForm: false, isSendingForm: false, isFormSended: false};
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleFormContactSubmit = this.handleFormContactSubmit.bind(this);
  }
  handleOpenForm(e) {
    this.setState({showForm: true});
  }
  handleCloseForm(e) {
    if (!this.state.isSendingForm) {
      this.setState({showForm: false, isFormSended: false});
    }
  }

  handleFormContactSubmit(e) {
    e.preventDefault();
    var url = e.target.getAttribute('action');
    var method = e.target.getAttribute('method');
    var data = new FormData(e.target);

    this.setState({isSendingForm: true});

    fetch(url, {
      method,
      body: data,
    }).then((res) => {
      this.setState({
        isSendingForm: false,
        isFormSended: true
      });
    });
  }
  render () {
    const isFormOpen = this.state.showForm; 
    const isSendingForm = this.state.isSendingForm; 
    const isFormSended = this.state.isFormSended; 

    return (
      <Layout>
        <SEO title="contact" />
        <Space size={5} />
        <Container>
          <section>
            <Space size={3}/>
            <SecondaryText size={1.6}>Contact</SecondaryText>
            <Space size={1.5}/>
            <PrimaryText size={2.5} lineHeight={1.2} as="h3">
              Si vous avez un projet, ça sera un plaisir de travailler avec vous.
            </PrimaryText>
            <Space size={2} />
            <SecondaryText size={1.2}>
              Vous pouvez me contacter par:
            </SecondaryText>
            <PrimaryText
              size={1.1}
              lineHeight={1.5}
              css={css`
                margin-top: 15px;
                font-weight: 600;
              `}
            >
              Téléphone: +212 681 282 882 <br />
              Em&#64;il: saidev@gmail.com <br />
              <br/>
              <br/>
            <ButtonRadius onClick={this.handleOpenForm}>Demander un dévis</ButtonRadius>
            </PrimaryText>
          </section>
        </Container>
        <Modal show={isFormOpen} onClose={this.handleCloseForm} title="Demande de Dévis">
          { isSendingForm 
            ? (<div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 0"}}>
              <Loader size={0.5} />
            </div>)
            : ( isFormSended ? (<SecondaryText size={1.1} lineHeight={1.3} align="center" style={{padding: '5px 8px'}}>Votre demande a bien été enregistrée. <br/>
              Vous aurez une reponse dans les plus brefs délais </SecondaryText>) :
              <FormContact show={isFormOpen} onClose={this.handleCloseForm} onSubmit={this.handleFormContactSubmit}/>
            )
          }
        </Modal>
      </Layout>
    )
  }
}
