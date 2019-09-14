import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { initClient } from '../contentfulClient';

import imageQuality from '../imageHandling';
import { portfolio } from '../contentful/Keys';
import "../styles/Portfolio.css";

const client = initClient()

class PortfolioContainer extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: null
}

getMedia = (key) => {
  client.getEntry(key)
  .then((entry) => this.setState({
    images: entry.fields.portfolio
   }))
  .catch('Error: ' + this.state + console.error)
}

renderImages = () => {
  let photoIndex = -1;

  if (this.state.images !== null && this.state.images !== undefined) {
    console.log(this.state.images)

    return this.state.images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <figure>
            <img src={imageQuality(imageSrc.fields.file.url, 20)} alt="Gallery" className="img-fluid" onClick={()=>
            this.setState({ photoIndex: privateKey, isOpen: true })
            }
            />
          </figure>
        </MDBCol>
        );
      }
    )
  } else {
    this.getMedia(portfolio)
  }
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default PortfolioContainer;
