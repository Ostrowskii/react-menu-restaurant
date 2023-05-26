function LowerMenu() {
  return (
    <div
      className="btn-group d-flex justify-content-end fixed-bottom"
      role="group"
      aria-label="Basic example"
    >
      <button type="button" className="btn btn-primary btn-lg">
        <img src="../../assets/home.svg" alt="home" />
      </button>
      <button type="button" className="btn btn-primary btn-lg">
        menu
      </button>
      <button type="button" className="btn btn-primary btn-lg">
        order
      </button>
    </div>
  );
}
export default LowerMenu;
