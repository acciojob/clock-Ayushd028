function updateTime() {
            const now = new Date();
            const formattedTime = now.toLocaleString();
            document.getElementById("timer").textContent = formattedTime;
        }
        
        setInterval(updateTime, 1000);
        updateTime();