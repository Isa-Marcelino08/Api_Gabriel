import styled from 'styled-components';
import goodog from "../assets/GooDog.png";

interface PhotosCardProps{
     image: string;
}

const PhotosCard: React.FC<PhotosCardProps> = ({image}) => {
  return (
    <StyledWrapper>
      <div>
        <p className="browser-warning">
          If this looks wonky to you it's because this browser doesn't support the CSS
          property 'aspect-ratio'.
        </p>
        <div className="stack">
          <div className="card">
            <div className="image">
               <img src={image === "" ? goodog : image } alt="" />
               </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fir: cover;
  }

  .stack {
    width: 55%;
    min-width: 300px;
    max-width: 400px;
    margin: 0 auto;
    transition: 0.25s ease;
    &:hover {
      transform: rotate(5deg);
      .card:before {
        transform: translatey(-2%) rotate(-4deg);
      }
      .card:after {
        transform: translatey(2%) rotate(4deg);
      }
    }
  }

  .card {
    aspect-ratio: 3 / 2;
    border: 4px solid;
    background-color: #fff;
    position: relative;
    transition: 0.15s ease;
    cursor: pointer;
    padding: 5% 5% 15% 5%;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      border: 4px solid;
      background-color: #fff;
      transform-origin: center center;
      z-index: -1;
      transition: 0.15s ease;
      top: 0;
      left: 0;
    }

    &:before {
      transform: translatey(-2%) rotate(-6deg);
    }

    &:after {
      transform: translatey(2%) rotate(6deg);
    }
  }
  .image {
    width: 100%;
    border: 4px solid;
    background-color: #eee;
    aspect-ratio: 1 / 1;
    position: relative;
  }

  .browser-warning {
    margin-bottom: 4rem;
  }

  @supports (aspect-ratio: 1 / 1) {
    .browser-warning {
      display: none;
    }
  }`;

export default PhotosCard;