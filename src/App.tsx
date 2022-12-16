import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
  const rotateZ = useTransform(xValue, [-800, 800], [-360, 360]);
  const background = useTransform(
    xValue,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(236, 68, 68), rgb(211, 143, 65))",
      "linear-gradient(135deg, rgb(224, 210, 81), rgb(98, 223, 81))",
      "linear-gradient(135deg, rgb(92, 104, 219), rgb(136, 83, 185))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background }}>
      <div>
        <button
          onClick={() => {
            xValue.set(200);
          }}
        >
          move Box 200px
        </button>
      </div>
      <Box style={{ x: xValue, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

//  Box 의 x값은 xValue에게 추적당한다

export default App;
