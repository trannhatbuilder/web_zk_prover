
// Toggle password visibility
document.getElementById('toggleSecret').addEventListener('click', function() {
    const secretInput = document.getElementById('secret');
    const icon = this.querySelector('i');
    
    if (secretInput.type === 'password') {
    secretInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
    } else {
    secretInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
    }
});

// Handle status messages
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get("status");
const statusDiv = document.getElementById("status");

if (status === "success") {
    statusDiv.innerHTML = `
    <div class="status-fade-in bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
        <i class="fas fa-check-circle mr-2"></i>
        input.json generated successfully!
    </div>
    `;
} else if (status === "error") {
    statusDiv.innerHTML = `
    <div class="status-fade-in bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
        <i class="fas fa-exclamation-triangle mr-2"></i>
        Invalid email or secret!
    </div>
    `;
}

// Form submission loading state
document.getElementById('zkForm').addEventListener('submit', function() {
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;
    
    // Re-enable after 3 seconds (fallback)
    setTimeout(() => {
    button.innerHTML = originalText;
    button.disabled = false;
    }, 3000);
});

// Input validation styling
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('invalid', function() {
    this.classList.add('border-red-500');
    this.classList.remove('border-gray-200');
    });
    
    input.addEventListener('input', function() {
    if (this.validity.valid) {
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-200');
    }
    });
});