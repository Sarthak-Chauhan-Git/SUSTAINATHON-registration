function TeamInfo() {
  return (
    // <!-- Step 1: Team Information -->
    <div class="form-step active" id="step1">
      <div class="form-card">
        <div class="form-header">
          <h2>Team Registration - Step 1 of 5</h2>
          <p>Please provide basic team information</p>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label class="form-label">Team Name *</label>
            <input type="text" class="form-control" name="teamName" required />
          </div>
          <div class="form-group">
            <label class="form-label">College/University *</label>
            <input
              type="text"
              class="form-control"
              name="teamCollege"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">City *</label>
            <input type="text" class="form-control" name="teamCity" required />
          </div>
          <div class="form-group">
            <label class="form-label">State *</label>
            <select class="form-control" name="teamState" required>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Country *</label>
            <select class="form-control" name="teamCountry" required>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
              <option value="South Africa">South Africa</option>
              <option value="Russia">Russia</option>
              <option value="Singapore">Singapore</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Nepal">Nepal</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Pakistan">Pakistan</option>
              <option value="New Zealand">New Zealand</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
