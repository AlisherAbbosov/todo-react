import NoFoundImg from "../../Assets/Images/no-found.svg";
function NoFound() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "60px",
      }}
    >
      <img src={NoFoundImg} alt="No Found" height={300} width={300} />
    </div>
  );
}

export default NoFound;
