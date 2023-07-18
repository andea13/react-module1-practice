// import Counter from "./Counter/Counter";
// import Dropdown from "./Counter/Dropdown/Dropdown";
import ColorPicker from "./Colorpicker";

const ColorPickerOptions = [
  { label: "red", color: "#FB3311" },
  { label: "yellow", color: "#F8FB11 " },
  { label: "blue", color: "#1155FB " },
  { label: "pink", color: "#FB11A1 " },
  { label: "green", color: "#4F7A41 " },
  { label: "purple", color: "#B483BD" },
];

export const App = () => {
  // return <Counter initialValue={123} />;
  // return <Dropdown />;
  return <ColorPicker options={ColorPickerOptions} />;
};
