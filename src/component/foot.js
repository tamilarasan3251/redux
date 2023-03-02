import { useSelector } from "react-redux";

function Foot() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1 style={{ color: "green" }}>count:{count}</h1>
    </>
  );
}
export { Foot };
