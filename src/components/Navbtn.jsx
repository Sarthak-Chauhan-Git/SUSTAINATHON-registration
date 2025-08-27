function Navbtn() {
  return (
    // <!-- Navigation Buttons -->
    <div class="form-navigation">
      <button
        type="button"
        class="btn btn--secondary"
        id="prevBtn"
        style={{ display: "none" }}
      >
        Previous
      </button>
      <button type="button" class="btn btn--primary" id="nextBtn">
        Next
      </button>
      <button
        type="submit"
        class="btn btn--primary"
        id="submitBtn"
        style={{ display: "none" }}
      >
        Submit Registration
      </button>
    </div>
  );
}

export default Navbtn;
