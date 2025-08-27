// Multi-step Registration Form JavaScript
class RegistrationForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.formData = {};
        this.memberCount = 3; // Start with 3 since we have leader + member2 + optional member3
        
        // Data from JSON
        this.innovativePillars = [
            "Artificial Intelligence & Machine Learning",
            "Blockchain & Cryptocurrency", 
            "Internet of Things (IoT)",
            "Cybersecurity & Data Security",
            "Healthcare Technology & MedTech",
            "Environmental Sustainability & CleanTech",
            "Financial Technology (FinTech)",
            "Educational Technology (EdTech)",
            "Smart Cities & Urban Planning",
            "Augmented/Virtual Reality (AR/VR)",
            "Robotics & Automation",
            "Clean Energy & Renewable Solutions",
            "Agricultural Technology (AgriTech)",
            "Social Impact & Community Solutions"
        ];
        
        this.countries = [
            "India", "United States", "United Kingdom", "Canada", "Australia",
            "Germany", "France", "Japan", "Singapore", "Netherlands",
            "South Korea", "Other"
        ];
        
        this.indianStates = [
            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
            "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
            "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
            "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
            "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
            "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other"
        ];
        
        this.init();
    }
    
    init() {
        this.populateDropdowns();
        this.setupEventListeners();
        this.setupFileUploads();
        this.setupCharacterCounter();
        this.updateProgressBar();
        console.log('🚀 Registration Form Initialized');
    }
    
    populateDropdowns() {
        // Populate innovative pillars
        const pillarSelect = document.querySelector('select[name="innovativePillar"]');
        if (pillarSelect) {
            this.innovativePillars.forEach(pillar => {
                const option = document.createElement('option');
                option.value = pillar;
                option.textContent = pillar;
                pillarSelect.appendChild(option);
            });
        }
        
        // Populate country dropdowns
        const countrySelects = document.querySelectorAll('select[name$="Country"]');
        countrySelects.forEach(select => {
            this.countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                select.appendChild(option);
            });
        });
        
        // Populate state dropdowns
        const stateSelects = document.querySelectorAll('select[name$="State"]');
        stateSelects.forEach(select => {
            this.indianStates.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                select.appendChild(option);
            });
        });
    }
    
    setupEventListeners() {
        // Navigation buttons
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        nextBtn?.addEventListener('click', () => this.nextStep());
        prevBtn?.addEventListener('click', () => this.prevStep());
        submitBtn?.addEventListener('click', () => this.submitForm());
        
        // Extra members radio buttons
        const extraMembersRadios = document.querySelectorAll('input[name="hasExtraMembers"]');
        extraMembersRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'no') {
                    // Skip to step 5 when user selects "No" for extra members
                    this.showSkipMessage();
                }
            });
        });
        
        // Add more members functionality
        const addMoreRadios = document.querySelectorAll('input[name="addMoreMembers"]');
        const addMemberBtn = document.getElementById('addMemberBtn');
        
        addMoreRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'yes') {
                    addMemberBtn.style.display = 'block';
                } else {
                    addMemberBtn.style.display = 'none';
                }
            });
        });
        
        addMemberBtn?.addEventListener('click', () => this.addMember());
        
        // Form validation on input change
        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.addEventListener('blur', (e) => this.validateField(e.target));
            control.addEventListener('input', (e) => this.clearValidation(e.target));
        });
        
        // Step indicator clicks
        const stepIndicators = document.querySelectorAll('.step');
        stepIndicators.forEach((step, index) => {
            step.addEventListener('click', () => {
                const targetStep = index + 1;
                if (targetStep < this.currentStep) {
                    this.goToStep(targetStep);
                }
            });
        });
    }
    
    setupFileUploads() {
        const fileUploads = document.querySelectorAll('.file-upload');
        
        fileUploads.forEach(upload => {
            const uploadArea = upload.querySelector('.upload-area');
            const fileInput = upload.querySelector('.file-input');
            const preview = upload.querySelector('.file-preview');
            
            // Click to upload
            uploadArea.addEventListener('click', () => fileInput.click());
            
            // Drag and drop
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                upload.classList.add('drag-over');
            });
            
            uploadArea.addEventListener('dragleave', () => {
                upload.classList.remove('drag-over');
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                upload.classList.remove('drag-over');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    this.handleFileSelect(fileInput, files[0], upload);
                }
            });
            
            // File input change
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    this.handleFileSelect(fileInput, e.target.files[0], upload);
                }
            });
        });
    }
    
    handleFileSelect(input, file, uploadContainer) {
        const maxSize = parseInt(uploadContainer.dataset.maxSize) * 1024 * 1024; // Convert MB to bytes
        const acceptedTypes = uploadContainer.dataset.accept;
        
        // Validate file size
        if (file.size > maxSize) {
            this.showNotification(`File size exceeds ${uploadContainer.dataset.maxSize}MB limit`, 'error');
            return;
        }
        
        // Validate file type
        if (acceptedTypes && !this.isFileTypeAccepted(file, acceptedTypes)) {
            this.showNotification('File type not supported', 'error');
            return;
        }
        
        // Show preview
        this.showFilePreview(file, uploadContainer);
        this.showNotification(`File "${file.name}" uploaded successfully`, 'success');
    }
    
    isFileTypeAccepted(file, acceptedTypes) {
        if (acceptedTypes.includes('image/*') && file.type.startsWith('image/')) {
            return true;
        }
        if (acceptedTypes.includes('application/pdf') && file.type === 'application/pdf') {
            return true;
        }
        if (acceptedTypes.includes('.ppt') && (file.name.endsWith('.ppt') || file.name.endsWith('.pptx'))) {
            return true;
        }
        return false;
    }
    
    showFilePreview(file, uploadContainer) {
        const preview = uploadContainer.querySelector('.file-preview');
        const uploadArea = uploadContainer.querySelector('.upload-area');
        
        preview.innerHTML = `
            <div class="file-info">
                <div class="file-icon">${this.getFileIcon(file)}</div>
                <div class="file-details">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${this.formatFileSize(file.size)}</div>
                </div>
                <button type="button" class="file-remove" onclick="registrationForm.removeFile(this)">×</button>
            </div>
        `;
        
        preview.classList.add('active');
        uploadArea.style.display = 'none';
    }
    
    removeFile(button) {
        const uploadContainer = button.closest('.file-upload');
        const preview = uploadContainer.querySelector('.file-preview');
        const uploadArea = uploadContainer.querySelector('.upload-area');
        const fileInput = uploadContainer.querySelector('.file-input');
        
        preview.classList.remove('active');
        preview.innerHTML = '';
        uploadArea.style.display = 'block';
        fileInput.value = '';
        
        this.showNotification('File removed', 'info');
    }
    
    getFileIcon(file) {
        if (file.type.startsWith('image/')) return '🖼️';
        if (file.type === 'application/pdf') return '📄';
        if (file.name.endsWith('.ppt') || file.name.endsWith('.pptx')) return '📊';
        return '📁';
    }
    
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    setupCharacterCounter() {
        const textarea = document.querySelector('textarea[name="projectDescription"]');
        const counter = document.querySelector('.counter-text');
        
        if (textarea && counter) {
            textarea.addEventListener('input', (e) => {
                const length = e.target.value.length;
                const minLength = 200;
                
                counter.textContent = `${length} / ${minLength} minimum characters`;
                
                if (length >= minLength) {
                    counter.classList.add('valid');
                    counter.classList.remove('invalid');
                } else {
                    counter.classList.add('invalid');
                    counter.classList.remove('valid');
                }
            });
        }
    }
    
    nextStep() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            
            // Handle special case for step 3 - if user selected "no" extra members, skip to step 5
            if (this.currentStep === 3) {
                const hasExtraMembers = document.querySelector('input[name="hasExtraMembers"]:checked')?.value;
                if (hasExtraMembers === 'no') {
                    this.currentStep = 5;
                    this.showStep(5);
                    this.updateProgressBar();
                    this.updateNavigation();
                    return;
                }
            }
            
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.showStep(this.currentStep);
                this.updateProgressBar();
                this.updateNavigation();
            }
        }
    }
    
    prevStep() {
        // Handle special case - if coming back from step 5 and user had selected "no" extra members
        if (this.currentStep === 5) {
            const hasExtraMembers = this.formData.hasExtraMembers;
            if (hasExtraMembers === 'no') {
                this.currentStep = 3;
                this.showStep(3);
                this.updateProgressBar();
                this.updateNavigation();
                return;
            }
        }
        
        if (this.currentStep > 1) {
            this.currentStep--;
            this.showStep(this.currentStep);
            this.updateProgressBar();
            this.updateNavigation();
        }
    }
    
    goToStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= this.totalSteps && stepNumber < this.currentStep) {
            this.currentStep = stepNumber;
            this.showStep(this.currentStep);
            this.updateProgressBar();
            this.updateNavigation();
        }
    }
    
    showStep(stepNumber) {
        // Hide all steps
        const steps = document.querySelectorAll('.form-step');
        steps.forEach(step => step.classList.remove('active'));
        
        // Show target step
        const targetStep = document.getElementById(`step${stepNumber}`);
        if (targetStep) {
            targetStep.classList.add('active');
            
            // Scroll to top
            targetStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    updateProgressBar() {
        const progressFill = document.getElementById('progressFill');
        const progressPercentage = (this.currentStep / this.totalSteps) * 100;
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        // Update step indicators
        const stepIndicators = document.querySelectorAll('.step');
        stepIndicators.forEach((step, index) => {
            const stepNumber = index + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNumber === this.currentStep) {
                step.classList.add('active');
            } else if (stepNumber < this.currentStep) {
                step.classList.add('completed');
            }
        });
    }
    
    updateNavigation() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        // Previous button
        if (this.currentStep === 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-flex';
        }
        
        // Next/Submit buttons
        if (this.currentStep === this.totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }
    
    validateCurrentStep() {
        const currentStepElement = document.querySelector('.form-step.active');
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        // Additional validation for file uploads in required fields
        const requiredFileUploads = currentStepElement.querySelectorAll('.file-upload input[required]');
        requiredFileUploads.forEach(fileInput => {
            if (!fileInput.files.length) {
                this.showFieldError(fileInput.closest('.file-upload'), 'This file is required');
                isValid = false;
            }
        });
        
        // Special validation for project description character count
        if (this.currentStep === 5) {
            const textarea = document.querySelector('textarea[name="projectDescription"]');
            if (textarea && textarea.value.length < 200) {
                this.showFieldError(textarea, 'Description must be at least 200 characters');
                isValid = false;
            }
        }
        
        if (!isValid) {
            this.showNotification('Please fill in all required fields correctly', 'error');
        }
        
        return isValid;
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous validation
        this.clearValidation(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            errorMessage = 'This field is required';
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                errorMessage = 'Please enter a valid phone number';
                isValid = false;
            }
        }
        
        // Show validation result
        if (isValid) {
            field.classList.add('valid');
            field.classList.remove('invalid');
        } else {
            field.classList.add('invalid');
            field.classList.remove('valid');
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    clearValidation(field) {
        field.classList.remove('valid', 'invalid');
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    showFieldError(field, message) {
        // Remove existing error message
        const existingError = field.parentElement?.querySelector('.error-message') || 
                            field.closest('.form-group')?.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        const container = field.closest('.file-upload') || field.parentElement;
        container.appendChild(errorElement);
    }
    
    saveCurrentStepData() {
        const currentStepElement = document.querySelector('.form-step.active');
        const formElements = currentStepElement.querySelectorAll('input, select, textarea');
        
        formElements.forEach(element => {
            if (element.type === 'radio') {
                if (element.checked) {
                    this.formData[element.name] = element.value;
                }
            } else if (element.type === 'file') {
                if (element.files.length > 0) {
                    this.formData[element.name] = element.files[0];
                }
            } else {
                this.formData[element.name] = element.value;
            }
        });
        
        console.log('Saved step data:', this.formData);
    }
    
    addMember() {
        if (this.memberCount >= 5) {
            this.showNotification('Maximum 5 members allowed', 'warning');
            return;
        }
        
        this.memberCount++;
        const container = document.getElementById('additionalMembersContainer');
        const addMoreSection = container.querySelector('.form-group:last-of-type');
        const addButton = document.getElementById('addMemberBtn');
        
        const memberHtml = `
            <div class="additional-member" data-member="${this.memberCount}">
                <h3>Member ${this.memberCount} <button type="button" class="btn btn--secondary" onclick="registrationForm.removeMember(${this.memberCount})" style="font-size: 12px; padding: 4px 8px; margin-left: 16px;">Remove</button></h3>
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" name="member${this.memberCount}Name">
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" name="member${this.memberCount}Email">
                </div>
                <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" name="member${this.memberCount}Phone">
                </div>
                <div class="form-group">
                    <label class="form-label">College/University</label>
                    <input type="text" class="form-control" name="member${this.memberCount}College">
                </div>
                <div class="form-group">
                    <label class="form-label">City</label>
                    <input type="text" class="form-control" name="member${this.memberCount}City">
                </div>
                <div class="form-group">
                    <label class="form-label">State</label>
                    <select class="form-control" name="member${this.memberCount}State">
                        <option value="">Select State</option>
                        ${this.indianStates.map(state => `<option value="${state}">${state}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Country</label>
                    <select class="form-control" name="member${this.memberCount}Country">
                        <option value="">Select Country</option>
                        ${this.countries.map(country => `<option value="${country}">${country}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Student ID Card</label>
                    <div class="file-upload" data-max-size="10" data-accept="image/*,application/pdf">
                        <div class="upload-area">
                            <div class="upload-icon">📄</div>
                            <div class="upload-text">
                                <strong>Drop student ID card here or click to browse</strong>
                                <span>Supported: PDF or image files. Max 10 MB.</span>
                            </div>
                        </div>
                        <input type="file" class="file-input" accept="image/*,application/pdf" name="member${this.memberCount}IdCard">
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
                        <input type="file" class="file-input" accept="image/*" name="member${this.memberCount}Photo">
                        <div class="file-preview"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert before the "add more members" radio group
        addMoreSection.insertAdjacentHTML('beforebegin', memberHtml);
        
        // Setup file uploads for new member
        const newMember = container.querySelector(`.additional-member[data-member="${this.memberCount}"]`);
        this.setupFileUploadsForElement(newMember);
        
        // Hide add button if we reach max members
        if (this.memberCount >= 5) {
            addButton.style.display = 'none';
        }
        
        this.showNotification(`Member ${this.memberCount} added successfully`, 'success');
    }
    
    removeMember(memberNumber) {
        const memberElement = document.querySelector(`.additional-member[data-member="${memberNumber}"]`);
        if (memberElement) {
            memberElement.remove();
            this.memberCount--;
            
            // Show add button if we're below max members
            const addButton = document.getElementById('addMemberBtn');
            if (this.memberCount < 5 && document.getElementById('addMoreYes').checked) {
                addButton.style.display = 'block';
            }
            
            this.showNotification(`Member ${memberNumber} removed`, 'info');
        }
    }
    
    setupFileUploadsForElement(element) {
        const fileUploads = element.querySelectorAll('.file-upload');
        
        fileUploads.forEach(upload => {
            const uploadArea = upload.querySelector('.upload-area');
            const fileInput = upload.querySelector('.file-input');
            const preview = upload.querySelector('.file-preview');
            
            // Click to upload
            uploadArea.addEventListener('click', () => fileInput.click());
            
            // Drag and drop
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                upload.classList.add('drag-over');
            });
            
            uploadArea.addEventListener('dragleave', () => {
                upload.classList.remove('drag-over');
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                upload.classList.remove('drag-over');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    this.handleFileSelect(fileInput, files[0], upload);
                }
            });
            
            // File input change
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    this.handleFileSelect(fileInput, e.target.files[0], upload);
                }
            });
        });
    }
    
    showSkipMessage() {
        this.showNotification('You can skip to project details since you selected no additional members', 'info');
    }
    
    submitForm() {
        if (this.validateCurrentStep()) {
            this.saveCurrentStepData();
            
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Submitting Registration...';
            
            // Simulate form submission
            setTimeout(() => {
                this.showSuccessModal();
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Submit Registration';
            }, 3000);
        }
    }
    
    showSuccessModal() {
        const modal = document.getElementById('successModal');
        const teamId = 'HACK2025' + Math.random().toString(36).substr(2, 6).toUpperCase();
        document.getElementById('teamId').textContent = teamId;
        
        modal.classList.remove('hidden');
        
        // Add confetti effect
        this.createConfetti();
        
        console.log('Form submitted successfully!', this.formData);
    }
    
    createConfetti() {
        const colors = ['#f09a41', '#9b59fa', '#7e94b3', '#00ff65'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1001;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 5000);
        }
        
        // Add confetti animation styles
        if (!document.getElementById('confetti-styles')) {
            const style = document.createElement('style');
            style.id = 'confetti-styles';
            style.textContent = `
                @keyframes confettiFall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification-toast ${type}`;
        
        const iconMap = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        const bgColors = {
            success: '#00ff65',
            error: '#ff4757',
            warning: '#ffa726',
            info: '#7e94b3'
        };
        
        notification.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">${iconMap[type] || 'ℹ️'}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColors[type] || bgColors.info};
            color: #0d1118;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            min-width: 300px;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Modal functions
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
    
    // Reset form or redirect
    setTimeout(() => {
        if (confirm('Would you like to register another team?')) {
            location.reload();
        }
    }, 500);
}

// Initialize form when DOM is loaded
let registrationForm;

document.addEventListener('DOMContentLoaded', () => {
    registrationForm = new RegistrationForm();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal:not(.hidden)');
            if (modal) {
                modal.classList.add('hidden');
            }
        }
        
        // Navigation shortcuts (Ctrl/Cmd + Arrow keys)
        if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
            switch (e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    registrationForm.nextStep();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    registrationForm.prevStep();
                    break;
            }
        }
    });
    
    console.log('🎯 Keyboard shortcuts enabled: Ctrl/Cmd + Arrow Keys for navigation, Esc to close modals');
});

// Expose for debugging
window.registrationForm = registrationForm;