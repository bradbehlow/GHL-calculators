// auth.js - Authentication for calculator pages

// (function () {
//   // Function to validate location ID against the API
//   function validateLocationId(locationId) {
//     return fetch(
//       "https://services.leadconnectorhq.com/locations/search?companyId=XCR8rMo1KbUPhj5KRvJV&limit=600",
//       {
//         headers: {
//           Authorization: "Bearer pit-3cb857a2-4537-42f7-ae6b-ef2ceb9cca61",
//           Version: "2021-07-28",
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("API request failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const locationIds = data.locations.map((loc) => loc.id);
//         return locationIds.includes(locationId);
//       })
//       .catch((error) => {
//         console.error("Authentication error:", error);
//         return false;
//       });
//   }

//   // Function to show error message
//   function showError(message) {
//     // Create error overlay
//     const overlay = document.createElement("div");
//     overlay.style.position = "fixed";
//     overlay.style.top = "0";
//     overlay.style.left = "0";
//     overlay.style.width = "100%";
//     overlay.style.height = "100%";
//     overlay.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
//     overlay.style.display = "flex";
//     overlay.style.justifyContent = "center";
//     overlay.style.alignItems = "center";
//     overlay.style.zIndex = "10000";
//     overlay.style.flexDirection = "column";
//     overlay.style.padding = "20px";

//     // Create error message
//     const errorMessage = document.createElement("div");
//     errorMessage.textContent = message;
//     errorMessage.style.fontSize = "18px";
//     errorMessage.style.color = "#721c24";
//     errorMessage.style.backgroundColor = "#f8d7da";
//     errorMessage.style.padding = "20px";
//     errorMessage.style.borderRadius = "8px";
//     errorMessage.style.border = "1px solid #f5c6cb";
//     errorMessage.style.maxWidth = "500px";
//     errorMessage.style.textAlign = "center";

//     // Create redirect button
//     const redirectButton = document.createElement("button");
//     redirectButton.textContent = "Return to Main Page";
//     redirectButton.style.marginTop = "20px";
//     redirectButton.style.padding = "10px 20px";
//     redirectButton.style.backgroundColor = "#007bff";
//     redirectButton.style.color = "white";
//     redirectButton.style.border = "none";
//     redirectButton.style.borderRadius = "4px";
//     redirectButton.style.cursor = "pointer";
//     redirectButton.onclick = function () {
//       window.location.href = "index.html";
//     };

//     // Append elements to overlay
//     overlay.appendChild(errorMessage);
//     overlay.appendChild(redirectButton);

//     // Add overlay to document
//     document.body.appendChild(overlay);
//   }

//   // Main authentication logic
//   document.addEventListener("DOMContentLoaded", function () {
//     // Try to get location ID from URL parameters first
//     const urlParams = new URLSearchParams(window.location.search);
//     let locationId = urlParams.get("location");

//     // If not in URL, try to get from sessionStorage
//     if (!locationId) {
//       locationId = sessionStorage.getItem("locationId");
//     }

//     if (!locationId) {
//       showError(
//         "No location ID provided. Please access this calculator from the main page."
//       );
//       return;
//     }

//     // Validate the location ID
//     validateLocationId(locationId)
//       .then((isValid) => {
//         if (!isValid) {
//           showError(
//             "Invalid location ID. Please check your access and try again."
//           );
//         }
//         // If valid, do nothing - allow the calculator to function normally
//       })
//       .catch((error) => {
//         console.error("Authentication error:", error);
//         showError(
//           "Authentication service temporarily unavailable. Please try again later."
//         );
//       });
//   });
// })();

// auth.js - Authentication for calculator pages

// auth.js - Authentication for calculator pages

(function () {
  // Function to validate location ID against the API
  function validateLocationId(locationId) {
    return fetch(
      "https://services.leadconnectorhq.com/locations/search?companyId=XCR8rMo1KbUPhj5KRvJV&limit=600",
      {
        headers: {
          Authorization: "Bearer pit-3cb857a2-4537-42f7-ae6b-ef2ceb9cca61",
          Version: "2021-07-28",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        const locationIds = data.locations.map((loc) => loc.id);
        return locationIds.includes(locationId);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
        return false;
      });
  }

  // Function to show error message
  function showError(message) {
    // Create error overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "10000";
    overlay.style.flexDirection = "column";
    overlay.style.padding = "20px";

    // Create error message
    const errorMessage = document.createElement("div");
    errorMessage.textContent = message;
    errorMessage.style.fontSize = "18px";
    errorMessage.style.color = "#721c24";
    errorMessage.style.backgroundColor = "#f8d7da";
    errorMessage.style.padding = "20px";
    errorMessage.style.borderRadius = "8px";
    errorMessage.style.border = "1px solid #f5c6cb";
    errorMessage.style.maxWidth = "500px";
    errorMessage.style.textAlign = "center";

    // Create redirect button
    const redirectButton = document.createElement("button");
    redirectButton.textContent = "Return to Main Page";
    redirectButton.style.marginTop = "20px";
    redirectButton.style.padding = "10px 20px";
    redirectButton.style.backgroundColor = "#007bff";
    redirectButton.style.color = "white";
    redirectButton.style.border = "none";
    redirectButton.style.borderRadius = "4px";
    redirectButton.style.cursor = "pointer";
    redirectButton.onclick = function () {
      window.location.href = "index.html";
    };

    // Append elements to overlay
    overlay.appendChild(errorMessage);
    overlay.appendChild(redirectButton);

    // Add overlay to document
    document.body.appendChild(overlay);
  }

  // Main authentication logic
  document.addEventListener("DOMContentLoaded", function () {
    // Check for bypass parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const bypass = urlParams.get("bypass");

    // If bypass parameter is set to 'true', skip authentication
    if (bypass === "true") {
      console.log("Bypass mode activated - skipping location validation");
      return;
    }

    // Try to get location ID from URL parameters first
    let locationId = urlParams.get("location");

    // If not in URL, try to get from sessionStorage
    if (!locationId) {
      locationId = sessionStorage.getItem("locationId");
    }

    if (!locationId) {
      showError(
        "No location ID provided. Please access this calculator from the main page."
      );
      return;
    }

    // Validate the location ID
    validateLocationId(locationId)
      .then((isValid) => {
        if (!isValid) {
          showError(
            "Invalid location ID. Please check your access and try again."
          );
        }
        // If valid, do nothing - allow the calculator to function normally
      })
      .catch((error) => {
        console.error("Authentication error:", error);
        showError(
          "Authentication service temporarily unavailable. Please try again later."
        );
      });
  });
})();

// auth.js - Authentication for calculator pages

// (function () {
//   // Function to get API token from serverless function
//   function getApiToken() {
//     return fetch("/.netlify/functions/get-token").then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to get API token");
//       }
//       return response.json();
//     });
//   }

//   // Function to validate location ID against the API
//   function validateLocationId(locationId, accessToken, companyId) {
//     return fetch(
//       `https://services.leadconnectorhq.com/locations/search?companyId=${companyId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           Version: "2021-07-28",
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("API request failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Extract location IDs from the response
//         // Note: You'll need to adjust this based on the actual API response structure
//         const locationIds = data.locations.map((loc) => loc.id);
//         return locationIds.includes(locationId);
//       })
//       .catch((error) => {
//         console.error("Authentication error:", error);
//         return false;
//       });
//   }

//   // Function to show error message
//   function showError(message) {
//     // Create error overlay
//     const overlay = document.createElement("div");
//     overlay.style.position = "fixed";
//     overlay.style.top = "0";
//     overlay.style.left = "0";
//     overlay.style.width = "100%";
//     overlay.style.height = "100%";
//     overlay.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
//     overlay.style.display = "flex";
//     overlay.style.justifyContent = "center";
//     overlay.style.alignItems = "center";
//     overlay.style.zIndex = "10000";
//     overlay.style.flexDirection = "column";
//     overlay.style.padding = "20px";

//     // Create error message
//     const errorMessage = document.createElement("div");
//     errorMessage.textContent = message;
//     errorMessage.style.fontSize = "18px";
//     errorMessage.style.color = "#721c24";
//     errorMessage.style.backgroundColor = "#f8d7da";
//     errorMessage.style.padding = "20px";
//     errorMessage.style.borderRadius = "8px";
//     errorMessage.style.border = "1px solid #f5c6cb";
//     errorMessage.style.maxWidth = "500px";
//     errorMessage.style.textAlign = "center";

//     // Create redirect button
//     const redirectButton = document.createElement("button");
//     redirectButton.textContent = "Return to Main Page";
//     redirectButton.style.marginTop = "20px";
//     redirectButton.style.padding = "10px 20px";
//     redirectButton.style.backgroundColor = "#007bff";
//     redirectButton.style.color = "white";
//     redirectButton.style.border = "none";
//     redirectButton.style.borderRadius = "4px";
//     redirectButton.style.cursor = "pointer";
//     redirectButton.onclick = function () {
//       window.location.href = "index.html";
//     };

//     // Append elements to overlay
//     overlay.appendChild(errorMessage);
//     overlay.appendChild(redirectButton);

//     // Add overlay to document
//     document.body.appendChild(overlay);
//   }

//   // Main authentication logic
//   document.addEventListener("DOMContentLoaded", function () {
//     // Try to get location ID from URL parameters first
//     const urlParams = new URLSearchParams(window.location.search);
//     let locationId = urlParams.get("location");

//     // If not in URL, try to get from sessionStorage
//     if (!locationId) {
//       locationId = sessionStorage.getItem("locationId");
//     }

//     if (!locationId) {
//       showError(
//         "No location ID provided. Please access this calculator from the main page."
//       );
//       return;
//     }

//     // First get the API token, then validate the location ID
//     getApiToken()
//       .then(({ accessToken, companyId }) => {
//         return validateLocationId(locationId, accessToken, companyId);
//       })
//       .then((isValid) => {
//         if (!isValid) {
//           showError(
//             "Invalid location ID. Please check your access and try again."
//           );
//         }
//         // If valid, do nothing - allow the calculator to function normally
//       })
//       .catch((error) => {
//         console.error("Authentication error:", error);
//         showError(
//           "Authentication service temporarily unavailable. Please try again later."
//         );
//       });
//   });
// })();
