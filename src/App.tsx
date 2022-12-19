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
  start: (back: boolean) => ({ x: back ? -200 : 200, opacity: 0, scale: 0 }),
  end: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back: boolean) => ({
    x: back ? 200 : -200,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};
function App() {
  const [value, setValue] = useState(1);
  const [back, setBack] = useState(false);
  const onClickNextBtn = () => {
    setBack(false);
    setValue((value) => (value === 10 ? 10 : value + 1));
  };
  const onClickPrevBtn = () => {
    setBack(true);
    setValue((value) => (value === 1 ? 1 : value - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        <Box
          custom={back}
          variants={boxVariants}
          initial="start"
          animate="end"
          exit="exit"
          key={value}
        >
          {value}
        </Box>
      </AnimatePresence>
      <button onClick={onClickNextBtn}>next</button>
      <button onClick={onClickPrevBtn}>prev</button>
    </Wrapper>
  );
}

export default App;
