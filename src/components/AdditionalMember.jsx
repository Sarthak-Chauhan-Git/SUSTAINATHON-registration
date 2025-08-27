function AdditionalMember() {
  return (
    // <!-- Step 4: Additional Members -->
    <div class="form-step" id="step4">
      <div class="form-card">
        <div class="form-header">
          <h2>Additional Member Details - Step 4 of 5</h2>
          <p class="subtitle">
            {">>>>>>>"} 3rd member is optional {"<<<<<<<<"}{" "}
          </p>
          <p class="note">
            If your team does not have more than two members, please skip the
            additional member details section by scrolling down and clicking
            Next to move forward with the registration.
          </p>
        </div>
        <div class="form-body" id="additionalMembersContainer">
          <div class="additional-member" data-member="3">
            <h3>Member 3</h3>
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" name="member3Name" />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="member3Email" />
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="tel" class="form-control" name="member3Phone" />
            </div>
            <div class="form-group">
              <label class="form-label">College/University</label>
              <input type="text" class="form-control" name="member3College" />
            </div>
            <div class="form-group">
              <label class="form-label">City</label>
              <input type="text" class="form-control" name="member3City" />
            </div>
            <div class="form-group">
              <label class="form-label">State</label>
              <select class="form-control" name="member3State">
                <option value="">Select State</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Country</label>
              <select class="form-control" name="member3Country">
                <option value="">Select Country</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Student ID Card</label>
              <div
                class="file-upload"
                data-max-size="10"
                data-accept="image/*,application/pdf"
              >
                <div class="upload-area">
                  <div class="upload-icon">📄</div>
                  <div class="upload-text">
                    <strong>
                      Drop student ID card here or click to browse
                    </strong>
                    <span>Supported: PDF or image files. Max 10 MB.</span>
                  </div>
                </div>
                <input
                  type="file"
                  class="file-input"
                  accept="image/*,application/pdf"
                  name="member3IdCard"
                />
                <div class="file-preview"></div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Photograph</label>
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
                  name="member3Photo"
                />
                <div class="file-preview"></div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">You want to add more member *</label>
            <div class="radio-group">
              <label class="radio-option">
                <input
                  type="radio"
                  name="addMoreMembers"
                  value="yes"
                  id="addMoreYes"
                />
                <span class="radio-button"></span>
                <span class="radio-label">Yes</span>
              </label>
              <label class="radio-option">
                <input
                  type="radio"
                  name="addMoreMembers"
                  value="no"
                  id="addMoreNo"
                />
                <span class="radio-button"></span>
                <span class="radio-label">No</span>
              </label>
            </div>
          </div>
          <button
            type="button"
            class="btn btn--secondary"
            id="addMemberBtn"
            style={{ display: "none" }}
          >
            Add Another Member
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalMember;
