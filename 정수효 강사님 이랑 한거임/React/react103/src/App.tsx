import Box from "./Box";
import Button from "./Button";
import Color from "./Color";
import GridLayout from "./GridLayout";
function App() {
  return (
    <div>
      <Button padding="20px 20px" color="red" text="이것은"></Button>
      <Button padding="20px 20px" color="blue" text="퀴즈"></Button>
      <Button padding="20px 20px" color="lime" text="이다"></Button>
      <Box backgroundColor={"pink"} size={"small"}></Box>
      <Box backgroundColor={"orange"} size={"medium"}></Box>
      <Box backgroundColor={"skyblue"} size={"large"}></Box>
      <Box backgroundColor={"red"} size={"medium"}></Box>
      <GridLayout></GridLayout>
      <Color backgroundColor={"#205bf3"}></Color>
      <Color backgroundColor={"#478df5"}></Color>
      <Color backgroundColor={"#546de5"}></Color>
      <Color backgroundColor={"#63cdda"}></Color>
      <Color backgroundColor={"#778beb"}></Color>
      <Color backgroundColor={"#786fa6"}></Color>
      <Color backgroundColor={"#979797"}></Color>
      <Color backgroundColor={"#cf6a87"}></Color>
      <Color backgroundColor={"#e66767"}></Color>
      <Color backgroundColor={"#f3a683"}></Color>
    </div>
  );
}

export default App;
