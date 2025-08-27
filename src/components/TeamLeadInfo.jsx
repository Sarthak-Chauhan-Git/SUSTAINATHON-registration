function TeamLeadInfo() {
  return (
    // <!-- Step 2: Team Leader Information -->
    <div class="form-step" id="step2">
      <div class="form-card">
        <div class="form-header">
          <h2>Team Leader Details - Step 2 of 5</h2>
          <p>Team leader information and required documents</p>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input
              type="text"
              class="form-control"
              name="leaderName"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Email *</label>
            <input
              type="email"
              class="form-control"
              name="leaderEmail"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input
              type="tel"
              class="form-control"
              name="leaderPhone"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">College/University *</label>
            <input
              type="text"
              class="form-control"
              name="leaderCollege"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">City *</label>
            <input
              type="text"
              class="form-control"
              name="leaderCity"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">State *</label>
            <select class="form-control" name="leaderState" required>
              <option value="">Select State</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Country *</label>
            <select class="form-control" name="leaderCountry" required>
              <option value="">Select Country</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Student ID Card *</label>
            <div class="file-upload" data-max-size="10" data-accept="image/*">
              <div class="upload-area">
                <div class="upload-icon">📄</div>
                <div class="upload-text">
                  <strong>
                    Drop your student ID card here or click to browse
                  </strong>
                  <span>Supported: Image files. Max 10 MB.</span>
                </div>
              </div>
              <input
                type="file"
                class="file-input"
                accept="image/*"
                name="leaderIdCard"
                required
              />
              <div class="file-preview"></div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Photograph *</label>
            <div class="file-upload" data-max-size="10" data-accept="image/*">
              <div class="upload-area">
                <div class="upload-icon">📷</div>
                <div class="upload-text">
                  <strong>Drop your photograph here or click to browse</strong>
                  <span>Supported: Image files. Max 10 MB.</span>
                </div>
              </div>
              <input
                type="file"
                class="file-input"
                accept="image/*"
                name="leaderPhoto"
                required
              />
              <div class="file-preview"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamLeadInfo;
