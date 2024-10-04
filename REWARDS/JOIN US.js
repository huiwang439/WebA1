function registerUser() {  
    const username = document.getElementById('username').value;  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    
    if (!username || !email || !password) {  
        document.getElementById('message').textContent = 'Please fill out all fields!';  
        return;  
    }  
    
    if (localStorage.getItem(username)) {  
        document.getElementById('message').textContent = 'Username already exists!';  
        return;  
    }  
    
    localStorage.setItem(username, JSON.stringify({ email, password }));  
   
    document.getElementById('message').textContent = 'Registration successful!';  
    
    setTimeout(() => {    
        window.location.href = 'REWARDS.html';  
    }, 1500);  
}

function goToRewards() {  
    window.location.href = 'REWARDS.html';  
} 