import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 20px 0;
  }
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const xValue = useMotionValue(0);
  const scale = useTransform(xValue, [-800, 0, 800], [2, 1, 0.1]);

  return (
    <Wrapper>
      <div>
        <button
          onClick={() => {
            xValue.set(200);
          }}
        >
          move Box 200px
        </button>
      </div>
      <Box style={{ x: xValue, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
//  Box 의 x값은 xValue에게 추적당한다

export default App;
