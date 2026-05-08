function checkEligibility() {

    let age = document.getElementById("age").value;
    let employed = document.getElementById("employed").value;
    let income = document.getElementById("income").value;
    let grant = document.getElementById("grant").value;

    let result = document.getElementById("result");

    if(age < 18 || age > 60) {
        result.innerHTML = "❌ You may not qualify because of age requirements.";
        result.style.color = "red";
        return;
    }

    if(employed === "yes") {
        result.innerHTML = "❌ You may not qualify because you are employed.";
        result.style.color = "red";
        return;
    }

    if(income > 624) {
        result.innerHTML = "❌ You may not qualify because your income exceeds the SRD limit.";
        result.style.color = "red";
        return;
    }

    if(grant === "yes") {
        result.innerHTML = "❌ You may not qualify because you already receive another grant.";
        result.style.color = "red";
        return;
    }

    result.innerHTML = "✅ You may qualify for the SASSA SRD R370 Grant.";
    result.style.color = "green";
}
