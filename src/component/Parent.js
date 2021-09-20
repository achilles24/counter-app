const Parent = ({ increment, decrement }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <button onClick={() => increment(5)}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Parent;
