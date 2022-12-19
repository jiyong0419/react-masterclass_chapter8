import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  display: flex;
  margin-bottom: 10px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(230, 88, 88, 0.788);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <Wrapper onClick={onClick}>
      <AnimatePresence>
        <Box
          style={{
            justifyContent: click ? "center" : "flex-start",
            alignItems: click ? "center" : "flex-start",
          }}
        >
          <Circle layout>layout</Circle>
        </Box>
        <Box style={{ justifyContent: "center", alignItems: "center" }}>
          {click ? <Circle layoutId="circle">layoutId</Circle> : null}
        </Box>
        <Box style={{ justifyContent: "center", alignItems: "center" }}>
          {!click ? <Circle layoutId="circle">layoutId</Circle> : null}
        </Box>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
