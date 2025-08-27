function ProjectDetail() {
  return (
    // <!-- Step 5: Project Details -->
    <div class="form-step" id="step5">
      <div class="form-card">
        <div class="form-header">
          <h2>Project Idea Details - Step 5 of 5</h2>
          <p>Share your innovative project idea with us</p>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label class="form-label">Choose Your Innovative Pillar *</label>
            <select class="form-control" name="innovativePillar" required>
              <option value="">Select Innovation Area</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Project/Idea Title *</label>
            <input
              type="text"
              class="form-control"
              name="projectTitle"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Project Description *</label>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="projectDescription"
                required
                rows="6"
                minlength="200"
              ></textarea>
              <div class="character-counter">
                <span class="counter-text">0 / 200 minimum characters</span>
              </div>
            </div>
            <p class="field-note">Not less than 200 words</p>
          </div>
          <div class="form-group">
            <label class="form-label">Idea Project Presentation (PPT) *</label>
            <div
              class="file-upload"
              data-max-size="100"
              data-accept=".ppt,.pptx,.pdf"
            >
              <div class="upload-area">
                <div class="upload-icon">📊</div>
                <div class="upload-text">
                  <strong>
                    Drop your presentation here or click to browse
                  </strong>
                  <span>Supported: PowerPoint or PDF files. Max 100 MB.</span>
                </div>
              </div>
              <input
                type="file"
                class="file-input"
                accept=".ppt,.pptx,.pdf"
                name="projectPresentation"
                required
              />
              <div class="file-preview"></div>
            </div>
            <p class="field-note">
              In ppt we are only expecting your Idea details what you want to
              innovate just for initial screening with our technical team
              (maximum 5 slides excluding intro slide)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
