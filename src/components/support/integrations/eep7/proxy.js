import React, { Component } from "react";
import { Button, Header, Segment } from 'semantic-ui-react';

const { SigningRequest } = require("eosio-signing-transport");

const { Api, JsonRpc } = require('eosjs')
const rpc = new JsonRpc('https://eos.greymass.com');
const api = new Api({ rpc });

const zlib = require('zlib');
const opts = {
  zlib: {
    deflateRaw: (data) => {
      return new Uint8Array(zlib.deflateRawSync(Buffer.from(data)))
    },
    inflateRaw: (data) => {
      return new Uint8Array(zlib.inflateRawSync(Buffer.from(data)))
    },
  },
  abiProvider: {
    getAbi: async (account) => await api.getAbi(account)
  }
}

class SupportIntegationsEEP7Proxy extends Component {
  state = {
    processing: false,
    response: false,
  }
  vote = () => {
    this.setState({
      error: false,
      processing: true,
    }, async () => {
      // buoy instance to listen for callback on
      const url = "cb.anchor.link/c0197efa-5039-4049-8c5c-bd8790558d33";
      // create the signing request
      const req = await SigningRequest.create({
        action: {
          account: "eosio",
          name: "voteproducer",
          authorization: [{
            actor: "............1",
            permission: "............1",
          }],
          data: {
            producers: [],
            proxy: "greymassvote",
            voter: "............1",
          }
        },
        callback: {
          background: true,
          // This needs to have a dynamically generated UUID
          url: `https://${url}`,
        },
        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
      }, opts);
      // encode as a URI
      const uri = req.encode();
      // trigger
      window.location.replace(uri);
      // establish listener
      const listen = new WebSocket(`wss://${url}`);
      const t = this;
      listen.onmessage = (event) => {
        try {
          const response = JSON.parse(event.data);
          t.setState({
            processing: false,
            response,
          })
        } catch (e) {
          t.setState({
            error: true,
            processing: false,
          })
        }
      }
      // bind for future events
      this.listen = listen;
    });
  }
  render() {
    const {
      error,
      processing,
      response,
    } = this.state;
    return (
     <React.Fragment>
       <Segment
         loading={processing}
       >
         <Button
           content="Proxy Vote"
           onClick={this.vote}
           primary
           size="huge"
         />
         {(error)
           ? (
             <Segment color="red">
               An error occurred while processing your vote.
             </Segment>
           )
           : false
         }
         {(response)
           ? (
             <Segment secondary size="large">
               <Header size="large">
                 Thank you, {response.a.split("@")[0]}!
                 <Header.Subheader>
                   We truly appreciate your support.
                 </Header.Subheader>
               </Header>
               <p>If you'd like to vote again with a different account, simply click the button again and change accounts.</p>
             </Segment>
           )
           : false
         }
       </Segment>
     </React.Fragment>
    )
  }
}

export default SupportIntegationsEEP7Proxy;