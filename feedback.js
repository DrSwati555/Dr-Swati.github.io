function submitFeedback() {
  const feedback = document.getElementById('feedback').value;
  if (feedback.trim()) {
    document.getElementById('thankyou').innerText = "Thank you for your feedback!";
    document.getElementById('feedback').value = "";
    console.log("Feedback received:", feedback); // Simulate storing feedback
  } else {
    alert("Please enter your feedback before submitting.");
  }
}
