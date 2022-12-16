import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 0.5 } },
};

function App() {
  const biggerBox = useRef(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBox}>
        <Box
          drag // drag="x" ,drag="y"
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBox}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
