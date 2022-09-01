import styled from "styled-components";

interface InputGroupProps {
  absolute?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

interface BoxProps {
  width: string;
  height: string;
  radiusTopRight: string;
  radiusTopLeft: string;
  radiusBottomRight: string;
  radiusBottomLeft: string;
}

export const Container = styled.div`
  height: 100vh;
  padding: 10px;
  width: 100vw;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Playground = styled.div`
  align-items: center;
  display: flex;
  height: 500px;
  margin: 20px auto;
  max-width: 500px;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  height: 48px;
  padding: 10px;
  width: 60px;
  outline: none;
`;

export const BoxWrapper = styled.div`
  margin: 0 auto;
`;

export const Box = styled.div<BoxProps>`
  border: 5px solid var(--gray);
  border-bottom-left-radius: ${(props) =>
    props.radiusBottomLeft + "px" ?? "0px"};
  border-bottom-right-radius: ${(props) =>
    props.radiusBottomRight + "px" ?? "0px"};
  border-top-left-radius: ${(props) => props.radiusTopLeft + "px" ?? "0px"};
  border-top-right-radius: ${(props) => props.radiusTopRight + "px" ?? "0px"};
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  height: ${(props) =>
    Number(props.height) > 300 ? "300px" : props.height + "px"};
  width: ${(props) =>
    Number(props.width) > 300 ? "300px" : props.width + "px"};
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const InputGroup = styled.div<InputGroupProps>`
  align-items: center;
  bottom: ${(props) => props.bottom && 0};
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: ${(props) => props.left && 0};
  position: ${(props) => props.absolute && "absolute"};
  right: ${(props) => props.right && 0};
  top: ${(props) => props.top && 0};
`;

export const Label = styled.label``;
