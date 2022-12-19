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

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const boxVariants = {
  start: {
    x: 200,
    opacity: 0,
    scale: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  },
};
function App() {
  const [count, setCount] = useState(1);
  const onClickNextBtn = () => setCount((i) => (i === 10 ? 10 : i + 1));
  const onClickPrevBtn = () => setCount((i) => (i === 1 ? 1 : i - 1));
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Wrapper>
      <AnimatePresence>
        {arr.map((i) =>
          i === count ? (
            <Box
              variants={boxVariants}
              initial="start"
              animate="end"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={onClickNextBtn}>next</button>
      <button onClick={onClickPrevBtn}>prev</button>
    </Wrapper>
  );
}

export default App;
