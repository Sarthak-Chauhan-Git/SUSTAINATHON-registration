function Progress() {
  return (
    // <!-- Progress Bar -->
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-steps">
        <div class="step active" data-step="1">
          <div class="step-number">1</div>
          <div class="step-label">Team Info</div>
        </div>
        <div class="step" data-step="2">
          <div class="step-number">2</div>
          <div class="step-label">Team Leader</div>
        </div>
        <div class="step" data-step="3">
          <div class="step-number">3</div>
          <div class="step-label">Member 2</div>
        </div>
        <div class="step" data-step="4">
          <div class="step-number">4</div>
          <div class="step-label">Additional Members</div>
        </div>
        <div class="step" data-step="5">
          <div class="step-number">5</div>
          <div class="step-label">Project Details</div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
