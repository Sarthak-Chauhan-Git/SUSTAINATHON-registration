function MemberInfo() {
  return (
    // <!-- Step 3: Member 2 Information -->
    <div class="form-step" id="step3">
      <div class="form-card">
        <div class="form-header">
          <h2>Member 2 Details - Step 3 of 5</h2>
          <p class="subtitle">Minimum 2 members are required.</p>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input
              type="text"
              class="form-control"
              name="member2Name"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Email *</label>
            <input
              type="email"
              class="form-control"
              name="member2Email"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input
              type="tel"
              class="form-control"
              name="member2Phone"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">College/University *</label>
            <input
              type="text"
              class="form-control"
              name="member2College"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">City *</label>
            <input
              type="text"
              class="form-control"
              name="member2City"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">State *</label>
            <select class="form-control" name="member2State" required>
              <option value="">Select State</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Country *</label>
            <select class="form-control" name="member2Country" required>
              <option value="">Select Country</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Student ID Card *</label>
            <div class="file-upload" data-max-size="10" data-accept="image/*">
              <div class="upload-area">
                <div class="upload-icon">📄</div>
                <div class="upload-text">
                  <strong>Drop student ID card here or click to browse</strong>
                  <span>Supported: Image files. Max 10 MB.</span>
                </div>
              </div>
              <input
                type="file"
                class="file-input"
                accept="image/*"
                name="member2IdCard"
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
                  <strong>Drop photograph here or click to browse</strong>
                  <span>Supported: Image files. Max 10 MB.</span>
                </div>
              </div>
              <input
                type="file"
                class="file-input"
                accept="image/*"
                name="member2Photo"
                required
              />
              <div class="file-preview"></div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Extra Members (Except 2) *</label>
            <div class="radio-group">
              <label class="radio-option">
                <input
                  type="radio"
                  name="hasExtraMembers"
                  value="yes"
                  required
                />
                <span class="radio-button"></span>
                <span class="radio-label">Yes</span>
              </label>
              <label class="radio-option">
                <input
                  type="radio"
                  name="hasExtraMembers"
                  value="no"
                  required
                />
                <span class="radio-button"></span>
                <span class="radio-label">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInfo;
