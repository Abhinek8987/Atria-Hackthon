document.addEventListener("DOMContentLoaded", () => {
    const predefinedResponses = {
        "experience": "Our team has extensive experience in building modern applications with a focus on user-friendly design.",
        "technologies": "We specialize in React, Node.js, Python, and data analytics.",
        "timeline": "Project timelines depend on complexity. We typically deliver projects in 4-8 weeks.",
        "updates": "We provide weekly updates to ensure the project is on track.",
        "security": "We follow strict security protocols, including data encryption and access control.",
        "maintenance": "Yes, we offer post-project support and maintenance plans.",
        "cost": "Cost varies by project scope. We offer flexible payment options.",
        "customization": "Yes, we provide custom solutions to fit your unique business needs.",
        "testing": "Our team conducts rigorous testing to ensure high quality and reliability.",
        "portfolio": "We have a range of previous work. Would you like to see some samples?",
        "how do you ensure the quality of your work": "We use a combination of automated and manual testing to ensure the highest quality. Our QA team reviews every aspect of the project to ensure it meets our standards.",
        "can you provide a detailed project breakdown": "Yes, we can provide a detailed breakdown of the project phases, including planning, development, testing, and deployment.",
        "how do you handle changes to the project scope": "We follow a change management process where any changes to the scope are reviewed, assessed, and incorporated into the project timeline and cost estimate.",
        "how do you ensure data security during development": "We follow industry best practices for data encryption, access control, and regular security audits. All sensitive data is encrypted both in transit and at rest.",
        "do you offer any post-launch support": "Yes, we offer post-launch support including bug fixes, updates, and technical assistance to ensure the smooth running of your project after deployment.",
        "what are the payment terms for a project": "Our payment terms are flexible and can be customized based on the project scope and timeline. Typically, we work with a deposit and progress payments based on project milestones.",
        "what happens if the project is delayed": "If there is a delay, we will communicate with you promptly to adjust the timeline or find solutions to keep the project on track. We always aim to meet deadlines but understand that adjustments may be needed.",
        "default": "I'm here to help! Could you please rephrase your question if it's unclear?"
    };

    const chatbotMessages = document.getElementById("chatbot-messages");
    const userInput = document.getElementById("user-input");
    const chatbotForm = document.getElementById("chatbot-form");
    const quickRepliesDiv = document.getElementById("quick-replies");

    const quickReplies = [
        "Experience",
        "Technologies",
        "Timeline",
        "Updates",
        "Security",
        "Maintenance",
        "Cost",
        "Customization",
        "Testing",
        "Portfolio",
        "Quality Assurance",
        "Project Breakdown",
        "Scope Changes",
        "Data Security",
        "Post-launch Support",
        "Payment Terms",
        "Project Delays"
    ];

    function displayMessage(text, sender = "bot") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.innerHTML = `<p>${text}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleUserMessage(message) {
        displayMessage(message, "user");

        // Normalize the message by removing question mark and converting to lowercase
        const lowerCaseMessage = message.replace(/\?$/, '').toLowerCase();
        let botResponse = "I'm sorry, I didn't understand that. Can you please rephrase?";

        // Check for predefined responses
        if (predefinedResponses[lowerCaseMessage]) {
            botResponse = predefinedResponses[lowerCaseMessage];
        } else if (message.length > 100) {
            // Handle long questions or new queries
            botResponse = "That's a great question! Let me find the best answer for you...";
        }

        // Display "bot is typing..." message
        displayMessage("Bot is typing...", "bot");
        
        // Simulate bot typing delay
        setTimeout(() => {
            // Remove "bot is typing..." and show the response
            const typingMessage = chatbotMessages.querySelector(".chat-message.bot");
            if (typingMessage) typingMessage.remove();
            
            displayMessage(botResponse, "bot");
        }, 1500); // Delay for "typing..." effect
    }

    chatbotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            handleUserMessage(message);
            userInput.value = "";
        }
    });

    quickReplies.forEach(reply => {
        const button = document.createElement("button");
        button.classList.add("quick-reply-button");
        button.textContent = reply;
        button.addEventListener("click", () => {
            handleUserMessage(reply);
        });
        quickRepliesDiv.appendChild(button);
    });
});
