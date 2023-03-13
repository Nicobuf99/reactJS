function Flex(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {props.children}
    </div>
  );
}

export default Flex;
