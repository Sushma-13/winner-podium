import styled from "styled-components";
import PropTypes from "prop-types";

function convertOpacity(inputColor) {
  const parts = inputColor.split(" / ");
  const colorPart = parts[0];
  const rgbValues = colorPart.match(/\d+/g);

  if (rgbValues && rgbValues.length === 3) {
    const newOpacity = "50%";
    const newColor = `rgb(${rgbValues.join(" ")} / ${newOpacity})`;

    return newColor;
  } else {
    return "Invalid input color format";
  }
}

const StyledPodiumContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledPodium = styled.div`
  display: inline-flex;
  align-items: end;
  .pod {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .front {
    width: ${(props) => props.width}px;
    text-align: center;
    background-color: ${(props) => props.background};
    font-size: ${(props) => props.height / ((props.height * 40) / 100)}rem;
  }

  .rank-1 {
    height: ${(props) => props.height + 140}px;
  }

  .rank-2 {
    height: ${(props) => props.height + 70}px;
    border-right: none;
  }

  .rank-3 {
    height: ${(props) => props.height}px;
    border-left: none;
  }

  .rank-1-top {
    width: ${(props) => props.width - 2 * props.top_view_side_length}px;
    border-bottom: ${(props) => props.top_height}px solid
      ${(props) => props.background_top};
    border-left: ${(props) => props.top_view_side_length}px solid
      transparent;
    border-right: ${(props) => props.top_view_side_length}px solid
      transparent;
  }

  .rank-2-top {
    width: ${(props) => props.width - props.top_view_side_length}px;
    border-bottom: ${(props) => props.top_height}px solid
      ${(props) => props.background_top};
    border-left: ${(props) => props.top_view_side_length}px solid
      transparent;
  }

  .rank-3-top {
    width: ${(props) => props.width - props.top_view_side_length}px;
    border-bottom: ${(props) => props.top_height}px solid
      ${(props) => props.background_top};
    border-right: ${(props) => props.top_view_side_length}px solid
      transparent;
  }
`;

const Podium = ({ options }) => {
  const {
    container,
    winners,
    footer,
    header,
    is3D,
    podiumHeight,
    podiumWidth,
    backgroundColor,
    topViewHeight,
  } = options;

  const height = podiumHeight || 70;
  const width = container?.style?.width / 3 || podiumWidth || 100;
  const background = backgroundColor;
  const backgroundTop = convertOpacity(backgroundColor);
  const topViewSideLength = width / 4;
  const topHeight = topViewHeight || 30;

  return (
    <StyledPodiumContainer
      style={container.style}
      className={container.className}
    >
      {header && <div>{header}</div>}
      <StyledPodium
        height={height}
        width={width}
        background={background}
        background_top={backgroundTop}
        top_view_side_length={topViewSideLength}
        top_height={topHeight}
      >
        <div className="pod">
          <div>{winners.rank2}</div>
          {is3D && <div className="rank-2-top"></div>}
          <div className="front rank-2">2</div>
        </div>
        <div className="pod">
          <div> {winners.rank1}</div>
          {is3D && <div className="rank-1-top"></div>}
          <div className="front rank-1">1</div>
        </div>
        <div className="pod">
          <div> {winners.rank3}</div>
          {is3D && <div className="rank-3-top"></div>}
          <div className="front rank-3">3</div>
        </div>
      </StyledPodium>
      {footer && <div style={{ width: "100%" }}>{footer}</div>}
    </StyledPodiumContainer>
  );
};

Podium.propTypes = {
  options: PropTypes.shape({
    container: PropTypes.shape({
      style: PropTypes.object,
      className: PropTypes.string,
    }),
    winners: PropTypes.shape({
      rank1: PropTypes.element.isRequired,
      rank2: PropTypes.element.isRequired,
      rank3: PropTypes.element.isRequired,
    }),
    footer: PropTypes.element,
    header: PropTypes.element,
    is3D: PropTypes.bool,
    podiumHeight: PropTypes.number,
    podiumWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    topViewHeight: PropTypes.number,
  }).isRequired,
};

export default Podium;
