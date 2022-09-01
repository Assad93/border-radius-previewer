import { useState } from "react";
import { IBox } from "types/Box";
import {
  Container,
  Input,
  Playground,
  Title,
  Box,
  BoxWrapper,
  InputWrapper,
  InputGroup,
  Label,
} from "./styles";

const initialState: IBox = {
  height: "150",
  radiusTopRight: "0",
  radiusTopLeft: "0",
  radiusBottomRight: "0",
  radiusBottomLeft: "0",
  width: "300",
};

const Home = () => {
  const [boxState, setBoxState] = useState<IBox>(initialState);

  return (
    <Container>
      <Title>Border Radius Preview</Title>
      <Playground>
        <InputGroup absolute top left>
          <Label htmlFor="topLeft">Radius top-left</Label>
          <Input
            type="number"
            placeholder="ex. 30"
            id="topLeft"
            value={boxState.radiusTopLeft}
            onChange={(e) =>
              setBoxState({
                ...boxState,
                radiusTopLeft: e.target.value,
              })
            }
          />
        </InputGroup>
        <InputGroup absolute top right>
          <Label htmlFor="topRight">Radius top-right</Label>
          <Input
            type="number"
            placeholder="ex. 30"
            id="topRight"
            value={boxState.radiusTopRight}
            onChange={(e) =>
              setBoxState({
                ...boxState,
                radiusTopRight: e.target.value,
              })
            }
          />
        </InputGroup>
        <BoxWrapper>
          <Box
            width={boxState.width}
            height={boxState.height}
            radiusTopRight={boxState.radiusTopRight}
            radiusTopLeft={boxState.radiusTopLeft}
            radiusBottomLeft={boxState.radiusBottomLeft}
            radiusBottomRight={boxState.radiusBottomRight}
          ></Box>
        </BoxWrapper>
        <InputGroup absolute bottom left>
          <Input
            type="number"
            placeholder="ex. 30"
            id="bottomLeft"
            value={boxState.radiusBottomLeft}
            onChange={(e) =>
              setBoxState({
                ...boxState,
                radiusBottomLeft: e.target.value,
              })
            }
          />
          <Label htmlFor="bottomLeft">Radius bottom-left</Label>
        </InputGroup>
        <InputGroup absolute bottom right>
          <Input
            type="number"
            placeholder="ex. 30"
            id="bottomRight"
            value={boxState.radiusBottomRight}
            onChange={(e) =>
              setBoxState({
                ...boxState,
                radiusBottomRight: e.target.value,
              })
            }
          />
          <Label htmlFor="bottomRight">Radius bottom-right</Label>
        </InputGroup>
      </Playground>
      <InputWrapper>
        <InputGroup>
          <Input
            type="number"
            id="inputWidth"
            placeholder="ex. 30"
            value={boxState.width}
            onChange={(e) =>
              setBoxState({ ...boxState, width: e.target.value })
            }
          />
          <Label htmlFor="inputWidth">Width</Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="number"
            id="inputHeight"
            placeholder="ex. 30"
            value={boxState.height}
            onChange={(e) =>
              setBoxState({ ...boxState, height: e.target.value })
            }
          />
          <Label htmlFor="inputHeight">Height</Label>
        </InputGroup>
      </InputWrapper>
    </Container>
  );
};

export default Home;
