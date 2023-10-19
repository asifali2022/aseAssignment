function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const firstTime = document.querySelector('input[name="firstTime"]:checked');
    const recommendation = document.querySelector('input[name="recommendation"]:checked');
    const overallSatisfaction = document.querySelector('input[name="overall"]:checked');
    const suggestions = document.getElementById("suggestions").value;

    if (!firstName || !lastName || !dob || !country || !profession || !email || !mobile || !firstTime || !recommendation || !overallSatisfaction) {
        alert("Please fill out all required fields.");
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const firstTimeValue = firstTime.value;
    const recommendationValue = recommendation.value;
    const overallSatisfactionValue = overallSatisfaction.value;
    const genderValue = gender ? gender.value : 'N/A';

    const popupData = `
        <strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Date of Birth:</strong> ${dob}<br>
        <strong>Country:</strong> ${country}<br>
        <strong>Gender:</strong> ${genderValue}<br>
        <strong>Profession:</strong> ${profession}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Mobile Number:</strong> ${mobile}<br>
        <strong>First Time Using Product:</strong> ${firstTimeValue}<br>
        <strong>Recommendation:</strong> ${recommendationValue}<br>
        <strong>Overall Satisfaction:</strong> ${overallSatisfactionValue}<br>
        <strong>Suggestions:</strong> ${suggestions || 'N/A'}
    `;

    document.getElementById("popupData").innerHTML = popupData;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
    document.getElementById("popup").style.display = "none";
}
