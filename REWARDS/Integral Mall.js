document.addEventListener('DOMContentLoaded', function() {  
    let points = 100;  
    document.getElementById('points').textContent = points;  
  
    function updatePointsDisplay() {  
        document.getElementById('points').textContent = points;  
    }  
  
    const rewardItems = document.querySelectorAll('.reward-item');  
  
    rewardItems.forEach(item => {  
        const redeemBtn = item.querySelector('.redeem-btn');  
        const requiredPoints = parseInt(item.getAttribute('data-points'), 10);  
  
        redeemBtn.addEventListener('click', function() {  
            if (points >= requiredPoints) {  
                points -= requiredPoints;   
                updatePointsDisplay(); 
                alert(`Congratulations! You have successfully redeemed ${item.querySelector('p:first-of-type').textContent}.`);    
            } else {  
                alert(`Sorry, you don't have enough points. You need ${requiredPoints} points to redeem this item.`);  
            }  
        });  
    });  
});

function goToRewards() {  
    window.location.href = 'REWARDS.html';  
} 