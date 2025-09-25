//VARIABLER FÖR INPUT AV OLIKA ELEMENT
const form = document.getElementById("form");
const namnInput = document.getElementById("namn");
const epostInput = document.getElementById("epost");
const telInput = document.getElementById("tel");
const meddelandeInput = document.getElementById("meddelande");

//VARIABLER FÖR FELMEDDELANDE
const namnFel = document.getElementById("namnFel");
const epostFel = document.getElementById("epostFel");
const telFel = document.getElementById("telFel");
const meddelandeFel = document.getElementById("meddelandeFel");
//LYCKAD IFYLLNING SAMT SKICKAD
const lyckadSkicka = document.getElementById("lyckadSkicka");

//VALIDERINGSFUNKTION NAMN
function valideraNamn() {
  const value = namnInput.value.trim();
  const isValid = /^[A-Za-zÅÄÖåäö\s]{2,}$/.test(value);
  showValidation(
    namnInput,
    namnFel,
    isValid,
    "Endast bokstäver är tillåtna, minst 2 bokstäver"
  );
  return isValid;
}

// VALIDERINGSFUNKTION EMAIL
function valideraEmail() {
  const value = epostInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  showValidation(epostInput, epostFel, isValid, "Ange en giltig e-postadress");
  return isValid;
}

// VALIDERINGSFUNKTION TELEFONNUMMER
function valideraTel() {
  const value = telInput.value.trim();
  const isValid = /^(\+46|0)[0-9\s]{9,9}$/.test(value);
  showValidation(
    telInput,
    telFel,
    isValid,
    "Ange ett giltigt svenskt telefonnummer"
  );
  return isValid;
}

//VALIDERINGSFUNKTION MEDDELANDE
function valideraMeddelande() {
  const value = meddelandeInput.value.trim();
  const isValid = value.length >= 10;
  showValidation(
    meddelandeInput,
    meddelandeFel,
    isValid,
    "Meddelande måste vara minst 10 tecken"
  );
  return isValid
}

//VALIDERINGSVISSARE
function showValidation(field, errorDiv, isValid, meddelande) {
  if (isValid) {
    field.classList.remove("invalid");
    field.classList.add("valid");
    errorDiv.textContent = "";
  } else {
    field.classList.remove("valid");
    field.classList.add("invalid");
    errorDiv.textContent = meddelande;
  }
}

//REALTIDSVALIDERING EVENTLISTENERS
[namnInput, epostInput, telInput, meddelandeInput].forEach((field) => {
  field.addEventListener("input", () => {
    switch (field.id) {
      case "namn":
        valideraNamn();
        break;
      case "epost":
        valideraEmail();
        break;
      case "tel":
        valideraTel();
        break;
      case "meddelande":
        valideraMeddelande();
        break;
    }
    saveToLocalStorage();
  });

  field.addEventListener("blur", () => {
    if (field.value.trim() === "") return;
    switch (field.id) {
      case "namn":
        valideraNamn();
        break;
      case "epost":
        valideraEmail();
        break;
      case "tel":
        valideraTel();
        break;
      case "meddelande":
        valideraMeddelande();
        break;
    }
  });
});

// SKICKA HANTERING
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valid =
    valideraNamn() && 
    valideraEmail() && 
    valideraTel() && 
    valideraMeddelande();

    if (valid) {
    lyckadSkicka.style.display = "block"; // 👉 visa meddelandet
    form.reset();
    clearStyles();
    localStorage.removeItem("contactData");
  

  // Stäng automatiskt efter 3 sekunder (valfritt)
    setTimeout(() => {
      lyckadSkicka.style.display = "none";
    }, 7000);
  } else {
    lyckadSkicka.style.display = "none"; // håll det dolt om ogiltigt
  }

});

// RESET HANTERING
form.addEventListener("reset", () => {
    clearStyles();
    localStorage.removeItem("contactData");
})


// --- Hjälpfunktioner ---
function clearStyles() {
  [namnInput, epostInput, telInput, meddelandeInput].forEach(f => {
    f.classList.remove("valid", "invalid");
    f.value = "";
  });
  [namnFel, epostFel, telFel, meddelandeFel].forEach(e => e.textContent = "");
}


// LOCAL STORAGE

function saveToLocalStorage(){
    const data = {
        namn: namnInput.value,
        epost: epostInput.value,
        tel: telInput.value,
        meddelande: meddelandeInput.value
    }
    localStorage.setItem("contactData", JSON.stringify(data))
}


  function restoreFromLocalStorage() {
    const sparat = localStorage.getItem("contactData");
    if (sparat) {
      const data = JSON.parse(sparat);
      namnInput.value = data.namn || "";
      epostInput.value = data.epost || "";
      telInput.value = data.tel || "";
      meddelandeInput.value = data.meddelande || "";
    }
  }

  // INITIERA VID UPPDATERING AV SIDA
  restoreFromLocalStorage()
