function SuccessModel() {
  return (
    // <!-- Success Modal -->
    <div class="modal hidden" id="successModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Registration Successful! 🎉</h2>
        </div>
        <div class="modal-body">
          <p>
            Your team registration has been submitted successfully. You will
            receive a confirmation email shortly.
          </p>
          <p>
            <strong>Team ID:</strong> <span id="teamId"></span>
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn--primary" onClick="closeModal()">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModel;
