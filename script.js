/**
 * Interactive Web Development Assignment #2 - Complete JavaScript Solutions
 * Student: Daniel NIYOMUGENGA
 * Reg Number: 225034400
 * Description: 50 hands-on JavaScript exercises with interactive handlers and clean structure.
 */

// Global default datasets for consistent demonstration
const defaultNumbers = [12, 45, 7, 23, 56, 89, 34, 2, 78, 90, 12, 43, 67, 88, 5, 7, 61, 74, 19, 50];
const defaultNames = [
  "Alice", "Bob", "Charlie", "David", "Emma", 
  "Frank", "Grace", "Hannah", "Isaac", "Jack", 
  "Katherine", "Liam", "Mia", "Noah", "Olivia", 
  "Peter", "Quinn", "Rachel", "Samuel", "Tina"
];
let activePersonObject = {
  name: "Daniel NIYOMUGENGA",
  age: 21,
  occupation: "Software Developer"
};

/* ==========================================================================
   SECTION 1: ARRAYS (QUESTIONS 1 - 10)
   ========================================================================== */

/**
 * 1. Find sum of all numbers in an array
 */
function findSum(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * 2. Find the largest number in an array
 */
function findLargest(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

/**
 * 3. Sort an array in ascending order
 */
function sortAscending(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return [...arr].sort((a, b) => a - b);
}

/**
 * 4. Reverse an array
 */
function reverseArray(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return [...arr].reverse();
}

/**
 * 5. Return only even numbers from an array
 */
function getEvenNumbers(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.filter(n => n % 2 === 0);
}

/**
 * 6. Return only odd numbers from an array
 */
function getOddNumbers(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.filter(n => Math.abs(n % 2) === 1);
}

/**
 * 7. Calculate the average of numbers in an array
 */
function calculateAverage(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return 0;
  const sum = findSum(arr);
  return Number((sum / arr.length).toFixed(2));
}

/**
 * 8. Remove duplicates from an array
 */
function removeDuplicates(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

/**
 * 9. Find the median value in an array
 */
function findMedian(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }
  return Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2));
}

/**
 * 10. Multiply all elements in an array by 2
 */
function multiplyByTwo(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map(n => n * 2);
}

/* ==========================================================================
   SECTION 2: ARRAYS OF STRINGS (NAMES) (QUESTIONS 11 - 20)
   ========================================================================== */

/**
 * 11. Print each name on a new line
 */
function printNamesOnNewLine(arr) {
  if (!arr || !Array.isArray(arr)) return "";
  return arr.join("\n");
}

/**
 * 12. Sort an array of names alphabetically
 */
function sortNamesAlphabetically(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return [...arr].sort((a, b) => a.localeCompare(b));
}

/**
 * 13. Check if a specific name exists in an array (case-insensitive)
 */
function checkNameExists(arr, nameToCheck) {
  if (!arr || !Array.isArray(arr) || !nameToCheck) return false;
  const target = nameToCheck.trim().toLowerCase();
  return arr.some(name => name.toLowerCase() === target);
}

/**
 * 14. Find the longest name in an array
 */
function findLongestName(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return "";
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, arr[0]);
}

/**
 * 15. Find names that start with a specific letter (case-insensitive)
 */
function findNamesByStartingLetter(arr, letter) {
  if (!arr || !Array.isArray(arr) || !letter) return [];
  const char = letter.trim().charAt(0).toLowerCase();
  return arr.filter(name => name.toLowerCase().startsWith(char));
}

/**
 * 16. Convert all names to uppercase
 */
function convertNamesToUppercase(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map(name => name.toUpperCase());
}

/**
 * 17. Remove a specific name from an array (case-insensitive)
 */
function removeNameFromArray(arr, nameToRemove) {
  if (!arr || !Array.isArray(arr)) return [];
  if (!nameToRemove) return [...arr];
  const target = nameToRemove.trim().toLowerCase();
  return arr.filter(name => name.toLowerCase() !== target);
}

/**
 * 18. Count how many names contain the letter "a" (case-insensitive)
 */
function countNamesContainingA(arr) {
  if (!arr || !Array.isArray(arr)) return 0;
  return arr.filter(name => /a/i.test(name)).length;
}

/**
 * 19. Concatenate all names into a single string separated by commas
 */
function concatenateNamesWithCommas(arr) {
  if (!arr || !Array.isArray(arr)) return "";
  return arr.join(", ");
}

/**
 * 20. Reverse the order of an array of names
 */
function reverseNamesOrder(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return [...arr].reverse();
}

/* ==========================================================================
   SECTION 3: OBJECTS (QUESTIONS 21 - 30)
   ========================================================================== */

/**
 * 21. Create a JavaScript object representing a person
 */
function createPersonObject(name = "Daniel NIYOMUGENGA", age = 21, occupation = "Software Developer") {
  return {
    name: name,
    age: Number(age),
    occupation: occupation
  };
}

/**
 * 22. Format person information into a string
 */
function formatPersonInfo(person) {
  if (!person) return "No person data provided.";
  return `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
}

/**
 * 23. Add a new property to an existing object
 */
function addPropertyToObject(obj, key, value) {
  if (!key) return obj;
  obj[key] = value;
  return obj;
}

/**
 * 24. Remove a property from an existing object
 */
function removePropertyFromObject(obj, key) {
  if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
    delete obj[key];
  }
  return obj;
}

/**
 * 25. List all properties and values of a JavaScript object
 */
function listPropertiesAndValues(obj) {
  if (!obj) return [];
  return Object.entries(obj).map(([key, val]) => `${key}: ${JSON.stringify(val)}`);
}

/**
 * 26. Merge two objects into one
 */
function mergeTwoObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/**
 * 27. Check if a property exists in an object
 */
function checkPropertyExists(obj, prop) {
  if (!obj) return false;
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * 28. Clone an object without referencing the original one
 */
function cloneObjectWithoutReference(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 29. Loop through an array of objects and print a specific property of each object
 */
function printPropertyFromObjects(arr, prop) {
  if (!arr || !prop) return [];
  return arr.map((item, index) => {
    return `Item ${index + 1} -> ${prop}: ${item[prop] !== undefined ? item[prop] : "Not found"}`;
  });
}

/**
 * 30. Update a specific property of an object based on user input
 */
function updateObjectProperty(obj, prop, value) {
  if (!obj || !prop) return obj;
  obj[prop] = value;
  return obj;
}

/* ==========================================================================
   SECTION 4: STRINGS (QUESTIONS 31 - 40)
   ========================================================================== */

/**
 * 31. Reverse a string
 */
function reverseString(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

/**
 * 32. Count the number of vowels in a given string
 */
function countVowels(str) {
  if (typeof str !== "string") return 0;
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

/**
 * 33. Convert a string to uppercase without using built-in methods
 */
function convertToUppercaseWithoutBuiltIn(str) {
  if (typeof str !== "string") return "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // lowercase letters 'a' (97) to 'z' (122) map to 'A' (65) to 'Z' (90)
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

/**
 * 34. Find the length of a string without using .length
 */
function findLengthWithoutLength(str) {
  if (typeof str !== "string") return 0;
  let count = 0;
  for (const _char of str) {
    count++;
  }
  return count;
}

/**
 * 35. Replace all spaces with hyphens in a string
 */
function replaceSpacesWithHyphens(str) {
  if (typeof str !== "string") return "";
  return str.replace(/ /g, "-");
}

/**
 * 36. Extract the first 10 characters from a string
 */
function extractFirstTenCharacters(str) {
  if (typeof str !== "string") return "";
  return str.slice(0, 10);
}

/**
 * 37. Find and replace a word in a string
 */
function findAndReplaceWord(str, targetWord, replacementWord) {
  if (typeof str !== "string") return "";
  const regex = new RegExp(targetWord, "gi");
  return str.replace(regex, replacementWord);
}

/**
 * 38. Split a string into an array of words
 */
function splitIntoArrayOfWords(str) {
  if (typeof str !== "string" || !str.trim()) return [];
  return str.trim().split(/\s+/);
}

/**
 * 39. Remove all numbers from a string
 */
function removeAllNumbers(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[0-9]/g, "");
}

/**
 * 40. Insert another string in the existing starting at position 7
 */
function insertStringAtPosition7(originalStr, strToInsert) {
  if (typeof originalStr !== "string") return "";
  const pos = 7;
  if (originalStr.length < pos) {
    return originalStr + strToInsert;
  }
  return originalStr.slice(0, pos) + strToInsert + originalStr.slice(pos);
}

/* ==========================================================================
   SECTION 5: HTML ELEMENTS AND DOM MANIPULATION (QUESTIONS 41 - 50)
   ========================================================================== */

/**
 * 41. Change the background color of webpage when button is clicked
 */
function changeWebpageBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

/**
 * 42. Hide an HTML element when a button is clicked
 */
function hideHtmlElement(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.style.display = "none";
  }
}

/**
 * 43. Create a new paragraph element and append it to the body
 */
function createAndAppendParagraph(text = "New paragraph appended to the body via JavaScript DOM manipulation!") {
  const newP = document.createElement("p");
  newP.className = "appended-p-item";
  newP.textContent = text;
  
  // To keep the webpage structured and tidy, append to bodyAppendedContainer or document.body
  const container = document.getElementById("bodyAppendedContainer");
  if (container) {
    container.appendChild(newP);
  } else {
    document.body.appendChild(newP);
  }
  return newP;
}

/**
 * 44. Remove all list items from an unordered list
 */
function removeAllListItems(listId) {
  const ul = document.getElementById(listId);
  if (ul) {
    ul.innerHTML = "";
  }
}

/**
 * 45. Change the text content of a specific HTML element
 */
function changeTextContent(elementId, newText) {
  const target = document.getElementById(elementId);
  if (target) {
    target.textContent = newText;
  }
}

/**
 * 46. Toggle a CSS class on an HTML element
 */
function toggleCssClass(elementId, className) {
  const el = document.getElementById(elementId);
  if (el) {
    el.classList.toggle(className);
    return el.classList.contains(className);
  }
  return false;
}

/**
 * 47. Count the number of divs on a webpage
 */
function countDivsOnWebpage() {
  const totalDivs = document.querySelectorAll("div").length;
  return totalDivs;
}

/**
 * 48. Get the value of a text input field and display it in a paragraph
 */
function getInputValueAndDisplay(inputId, paragraphId) {
  const input = document.getElementById(inputId);
  const targetP = document.getElementById(paragraphId);
  if (input && targetP) {
    const val = input.value;
    targetP.textContent = val ? `Entered value: "${val}"` : "Input is currently empty.";
  }
}

/**
 * 49. Create a table with 3 rows and 3 columns, populated with numbers
 */
function createThreeByThreeTable(containerId, startNumber = 1) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const table = document.createElement("table");
  table.className = "custom-table";

  let currentNum = Number(startNumber) || 1;
  for (let r = 0; r < 3; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 3; c++) {
      const td = document.createElement("td");
      td.textContent = currentNum++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  container.innerHTML = "";
  container.appendChild(table);
}

/**
 * 50. Validate form (check if name, email, and password fields are filled)
 */
function validateForm(nameVal, emailVal, passVal) {
  const errors = [];
  if (!nameVal || nameVal.trim() === "") {
    errors.push("Name field is required.");
  }
  if (!emailVal || emailVal.trim() === "") {
    errors.push("Email field is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    errors.push("Please provide a valid email address.");
  }
  if (!passVal || passVal.trim() === "") {
    errors.push("Password field is required.");
  } else if (passVal.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

/* ==========================================================================
   INITIALIZATION & INTERACTIVE UI LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupNavigationAndFilters();
  setupThemeToggle();
  setupBackToTop();
  bindInteractiveControls();
});

/**
 * Quick Question Dropdown Navigation & Search Filter
 */
function setupNavigationAndFilters() {
  const navSelect = document.getElementById("questionNav");
  const searchInput = document.getElementById("searchQuestions");
  const filterChips = document.querySelectorAll(".filter-chip");
  const questionCards = document.querySelectorAll(".question-card");

  // Dropdown jump
  if (navSelect) {
    navSelect.addEventListener("change", (e) => {
      const targetId = e.target.value;
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        // Ensure card is visible even if previously filtered
        targetEl.style.display = "block";
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        targetEl.classList.remove("highlight-pulse");
        void targetEl.offsetWidth; // trigger reflow
        targetEl.classList.add("highlight-pulse");
      }
    });
  }

  // Real-time Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      questionCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Category filter tabs
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const category = chip.getAttribute("data-category");

      questionCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Light / Dark Theme Toggle
 */
function setupThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("preferred-theme");

  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (themeBtn) themeBtn.textContent = "☀️";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.body.getAttribute("data-theme");
      if (current === "dark") {
        document.body.removeAttribute("data-theme");
        localStorage.setItem("preferred-theme", "light");
        themeBtn.textContent = "🌙";
      } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("preferred-theme", "dark");
        themeBtn.textContent = "☀️";
      }
    });
  }
}

/**
 * Back to Top Floating Button
 */
function setupBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * Bind all interactive UI controls for each question
 */
function bindInteractiveControls() {
  // Question 1
  document.getElementById("btnQ1")?.addEventListener("click", () => {
    const inputVal = document.getElementById("inputQ1")?.value;
    let arr = defaultNumbers;
    if (inputVal && inputVal.trim()) {
      arr = inputVal.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    }
    const sum = findSum(arr);
    const out = document.getElementById("outQ1");
    if (out) out.innerHTML = `<strong>Calculated Sum:</strong> ${sum} (from ${arr.length} numbers)`;
  });

  // Question 2
  document.getElementById("btnQ2")?.addEventListener("click", () => {
    const inputVal = document.getElementById("inputQ2")?.value;
    let arr = defaultNumbers;
    if (inputVal && inputVal.trim()) {
      arr = inputVal.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    }
    const max = findLargest(arr);
    const out = document.getElementById("outQ2");
    if (out) out.innerHTML = `<strong>Largest Number:</strong> ${max}`;
  });

  // Question 3
  document.getElementById("btnQ3")?.addEventListener("click", () => {
    const sorted = sortAscending(defaultNumbers);
    const out = document.getElementById("outQ3");
    if (out) out.innerHTML = `<strong>Sorted Array:</strong> [${sorted.join(", ")}]`;
  });

  // Question 4
  document.getElementById("btnQ4")?.addEventListener("click", () => {
    const reversed = reverseArray(defaultNumbers);
    const out = document.getElementById("outQ4");
    if (out) out.innerHTML = `<strong>Reversed Array:</strong> [${reversed.join(", ")}]`;
  });

  // Question 5
  document.getElementById("btnQ5")?.addEventListener("click", () => {
    const evens = getEvenNumbers(defaultNumbers);
    const out = document.getElementById("outQ5");
    if (out) out.innerHTML = `<strong>Even Numbers (${evens.length}):</strong> [${evens.join(", ")}]`;
  });

  // Question 6
  document.getElementById("btnQ6")?.addEventListener("click", () => {
    const odds = getOddNumbers(defaultNumbers);
    const out = document.getElementById("outQ6");
    if (out) out.innerHTML = `<strong>Odd Numbers (${odds.length}):</strong> [${odds.join(", ")}]`;
  });

  // Question 7
  document.getElementById("btnQ7")?.addEventListener("click", () => {
    const avg = calculateAverage(defaultNumbers);
    const out = document.getElementById("outQ7");
    if (out) out.innerHTML = `<strong>Average Value:</strong> ${avg} (Sum: ${findSum(defaultNumbers)} / 20)`;
  });

  // Question 8
  document.getElementById("btnQ8")?.addEventListener("click", () => {
    const unique = removeDuplicates(defaultNumbers);
    const out = document.getElementById("outQ8");
    if (out) out.innerHTML = `<strong>Without Duplicates (${unique.length} unique elements):</strong> [${unique.join(", ")}]`;
  });

  // Question 9
  document.getElementById("btnQ9")?.addEventListener("click", () => {
    const median = findMedian(defaultNumbers);
    const out = document.getElementById("outQ9");
    if (out) out.innerHTML = `<strong>Median Value:</strong> ${median}`;
  });

  // Question 10
  document.getElementById("btnQ10")?.addEventListener("click", () => {
    const multiplied = multiplyByTwo(defaultNumbers);
    const out = document.getElementById("outQ10");
    if (out) out.innerHTML = `<strong>Multiplied by 2:</strong> [${multiplied.join(", ")}]`;
  });

  // Question 11
  document.getElementById("btnQ11")?.addEventListener("click", () => {
    const formatted = printNamesOnNewLine(defaultNames);
    const out = document.getElementById("outQ11");
    if (out) out.innerHTML = `<pre style="margin:0; width:100%">${formatted}</pre>`;
  });

  // Question 12
  document.getElementById("btnQ12")?.addEventListener("click", () => {
    const sorted = sortNamesAlphabetically(defaultNames);
    const out = document.getElementById("outQ12");
    if (out) out.innerHTML = `<strong>Alphabetical Order:</strong> [${sorted.join(", ")}]`;
  });

  // Question 13
  document.getElementById("btnQ13")?.addEventListener("click", () => {
    const search = document.getElementById("inputQ13")?.value;
    const exists = checkNameExists(defaultNames, search);
    const out = document.getElementById("outQ13");
    if (out) {
      out.innerHTML = `<strong>Result for "${search}":</strong> ${exists ? '<span style="color:#10b981;font-weight:700">true (Name found!)</span>' : '<span style="color:#ef4444;font-weight:700">false (Name not found)</span>'}`;
    }
  });

  // Question 14
  document.getElementById("btnQ14")?.addEventListener("click", () => {
    const longest = findLongestName(defaultNames);
    const out = document.getElementById("outQ14");
    if (out) out.innerHTML = `<strong>Longest Name:</strong> "${longest}" (${longest.length} characters)`;
  });

  // Question 15
  document.getElementById("btnQ15")?.addEventListener("click", () => {
    const letter = document.getElementById("inputQ15")?.value || "A";
    const matches = findNamesByStartingLetter(defaultNames, letter);
    const out = document.getElementById("outQ15");
    if (out) {
      out.innerHTML = `<strong>Names starting with '${letter.toUpperCase()}':</strong> ${matches.length > 0 ? matches.join(", ") : "None found"}`;
    }
  });

  // Question 16
  document.getElementById("btnQ16")?.addEventListener("click", () => {
    const uppercased = convertNamesToUppercase(defaultNames);
    const out = document.getElementById("outQ16");
    if (out) out.innerHTML = `<strong>Uppercase Names:</strong> [${uppercased.join(", ")}]`;
  });

  // Question 17
  document.getElementById("btnQ17")?.addEventListener("click", () => {
    const toRemove = document.getElementById("inputQ17")?.value || "Alice";
    const updated = removeNameFromArray(defaultNames, toRemove);
    const out = document.getElementById("outQ17");
    if (out) out.innerHTML = `<strong>After removing "${toRemove}" (${updated.length} names left):</strong> [${updated.join(", ")}]`;
  });

  // Question 18
  document.getElementById("btnQ18")?.addEventListener("click", () => {
    const count = countNamesContainingA(defaultNames);
    const out = document.getElementById("outQ18");
    if (out) out.innerHTML = `<strong>Names containing 'a' or 'A':</strong> ${count} out of 20 names`;
  });

  // Question 19
  document.getElementById("btnQ19")?.addEventListener("click", () => {
    const concatenated = concatenateNamesWithCommas(defaultNames);
    const out = document.getElementById("outQ19");
    if (out) out.innerHTML = `<strong>Concatenated String:</strong> "${concatenated}"`;
  });

  // Question 20
  document.getElementById("btnQ20")?.addEventListener("click", () => {
    const reversed = reverseNamesOrder(defaultNames);
    const out = document.getElementById("outQ20");
    if (out) out.innerHTML = `<strong>Reversed Names:</strong> [${reversed.join(", ")}]`;
  });

  // Question 21
  document.getElementById("btnQ21")?.addEventListener("click", () => {
    const person = createPersonObject();
    const out = document.getElementById("outQ21");
    if (out) out.innerHTML = `<strong>Person Object:</strong> <pre style="margin:0">${JSON.stringify(person, null, 2)}</pre>`;
  });

  // Question 22
  document.getElementById("btnQ22")?.addEventListener("click", () => {
    const formatted = formatPersonInfo(activePersonObject);
    const out = document.getElementById("outQ22");
    if (out) out.innerHTML = `<strong>Formatted String:</strong> "${formatted}"`;
  });

  // Question 23
  document.getElementById("btnQ23")?.addEventListener("click", () => {
    const key = document.getElementById("inputQ23Key")?.value || "nationality";
    const val = document.getElementById("inputQ23Val")?.value || "Rwandan";
    addPropertyToObject(activePersonObject, key, val);
    const out = document.getElementById("outQ23");
    if (out) out.innerHTML = `<strong>Updated Object:</strong> <pre style="margin:0">${JSON.stringify(activePersonObject, null, 2)}</pre>`;
  });

  // Question 24
  document.getElementById("btnQ24")?.addEventListener("click", () => {
    const key = document.getElementById("inputQ24")?.value || "occupation";
    removePropertyFromObject(activePersonObject, key);
    const out = document.getElementById("outQ24");
    if (out) out.innerHTML = `<strong>Object after removing '${key}':</strong> <pre style="margin:0">${JSON.stringify(activePersonObject, null, 2)}</pre>`;
  });

  // Question 25
  document.getElementById("btnQ25")?.addEventListener("click", () => {
    const list = listPropertiesAndValues(activePersonObject);
    const out = document.getElementById("outQ25");
    if (out) out.innerHTML = `<strong>Properties & Values:</strong><br>${list.join("<br>")}`;
  });

  // Question 26
  document.getElementById("btnQ26")?.addEventListener("click", () => {
    const objA = { name: "Daniel NIYOMUGENGA", regNumber: 225034400 };
    const objB = { course: "Interactive Web Development", assignment: 2, status: "Submitted" };
    const merged = mergeTwoObjects(objA, objB);
    const out = document.getElementById("outQ26");
    if (out) out.innerHTML = `<strong>Merged Object:</strong> <pre style="margin:0">${JSON.stringify(merged, null, 2)}</pre>`;
  });

  // Question 27
  document.getElementById("btnQ27")?.addEventListener("click", () => {
    const prop = document.getElementById("inputQ27")?.value || "name";
    const exists = checkPropertyExists(activePersonObject, prop);
    const out = document.getElementById("outQ27");
    if (out) {
      out.innerHTML = `<strong>Property '${prop}' exists in object:</strong> ${exists ? '<span style="color:#10b981;font-weight:700">true</span>' : '<span style="color:#ef4444;font-weight:700">false</span>'}`;
    }
  });

  // Question 28
  document.getElementById("btnQ28")?.addEventListener("click", () => {
    const original = { name: "Daniel", role: "Student", scores: [95, 98, 100] };
    const cloned = cloneObjectWithoutReference(original);
    cloned.name = "Cloned Object (Modified)";
    const out = document.getElementById("outQ28");
    if (out) {
      out.innerHTML = `<strong>Original Object Name:</strong> "${original.name}"<br><strong>Cloned Object Name:</strong> "${cloned.name}"<br><em>(Verified: modifying cloned object did not alter original!)</em>`;
    }
  });

  // Question 29
  document.getElementById("btnQ29")?.addEventListener("click", () => {
    const peopleList = [
      { name: "Daniel NIYOMUGENGA", occupation: "Software Developer" },
      { name: "Alice Keza", occupation: "UI/UX Designer" },
      { name: "Jean Paul", occupation: "Data Analyst" },
      { name: "Claire Mugabo", occupation: "Project Manager" }
    ];
    const prop = document.getElementById("selectQ29")?.value || "name";
    const results = printPropertyFromObjects(peopleList, prop);
    const out = document.getElementById("outQ29");
    if (out) out.innerHTML = `<strong>Extracted '${prop}' from 4 objects:</strong><br>${results.join("<br>")}`;
  });

  // Question 30
  document.getElementById("btnQ30")?.addEventListener("click", () => {
    const prop = document.getElementById("inputQ30Prop")?.value || "occupation";
    const val = document.getElementById("inputQ30Val")?.value || "Lead Full-Stack Engineer";
    updateObjectProperty(activePersonObject, prop, val);
    const out = document.getElementById("outQ30");
    if (out) out.innerHTML = `<strong>Updated Object:</strong> <pre style="margin:0">${JSON.stringify(activePersonObject, null, 2)}</pre>`;
  });

  // Question 31
  document.getElementById("btnQ31")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ31")?.value || "Interactive Web Development";
    const reversed = reverseString(str);
    const out = document.getElementById("outQ31");
    if (out) out.innerHTML = `<strong>Reversed String:</strong> "${reversed}"`;
  });

  // Question 32
  document.getElementById("btnQ32")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ32")?.value || "Daniel NIYOMUGENGA";
    const count = countVowels(str);
    const out = document.getElementById("outQ32");
    if (out) out.innerHTML = `<strong>Vowels Count:</strong> ${count} vowels`;
  });

  // Question 33
  document.getElementById("btnQ33")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ33")?.value || "javascript assignment #2";
    const upper = convertToUppercaseWithoutBuiltIn(str);
    const out = document.getElementById("outQ33");
    if (out) out.innerHTML = `<strong>Uppercase (No built-in):</strong> "${upper}"`;
  });

  // Question 34
  document.getElementById("btnQ34")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ34")?.value || "Daniel NIYOMUGENGA";
    const length = findLengthWithoutLength(str);
    const out = document.getElementById("outQ34");
    if (out) out.innerHTML = `<strong>Length (Calculated without .length):</strong> ${length} characters`;
  });

  // Question 35
  document.getElementById("btnQ35")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ35")?.value || "Individual Assignment 2 for Interactive Web Development";
    const hyphenated = replaceSpacesWithHyphens(str);
    const out = document.getElementById("outQ35");
    if (out) out.innerHTML = `<strong>Hyphenated String:</strong> "${hyphenated}"`;
  });

  // Question 36
  document.getElementById("btnQ36")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ36")?.value || "Interactive Web Development 2026";
    const firstTen = extractFirstTenCharacters(str);
    const out = document.getElementById("outQ36");
    if (out) out.innerHTML = `<strong>First 10 Characters:</strong> "${firstTen}"`;
  });

  // Question 37
  document.getElementById("btnQ37")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ37Str")?.value || "I love programming in Python!";
    const target = document.getElementById("inputQ37Find")?.value || "Python";
    const replace = document.getElementById("inputQ37Replace")?.value || "JavaScript";
    const result = findAndReplaceWord(str, target, replace);
    const out = document.getElementById("outQ37");
    if (out) out.innerHTML = `<strong>Result:</strong> "${result}"`;
  });

  // Question 38
  document.getElementById("btnQ38")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ38")?.value || "JavaScript makes the web interactive and dynamic";
    const words = splitIntoArrayOfWords(str);
    const out = document.getElementById("outQ38");
    if (out) out.innerHTML = `<strong>Array of Words (${words.length}):</strong> [${words.map(w => `"${w}"`).join(", ")}]`;
  });

  // Question 39
  document.getElementById("btnQ39")?.addEventListener("click", () => {
    const str = document.getElementById("inputQ39")?.value || "Assignment #2 was published on 27 October 2026 by Reg 225034400";
    const stripped = removeAllNumbers(str);
    const out = document.getElementById("outQ39");
    if (out) out.innerHTML = `<strong>String without Numbers:</strong> "${stripped}"`;
  });

  // Question 40
  document.getElementById("btnQ40")?.addEventListener("click", () => {
    const original = document.getElementById("inputQ40Orig")?.value || "Welcome Website";
    const toInsert = document.getElementById("inputQ40Insert")?.value || " to our";
    const modified = insertStringAtPosition7(original, toInsert);
    const out = document.getElementById("outQ40");
    if (out) out.innerHTML = `<strong>Modified String:</strong> "${modified}"`;
  });

  // Question 41: Change background color
  document.getElementById("btnQ41")?.addEventListener("click", () => {
    const colorPicker = document.getElementById("inputQ41Color");
    const chosenColor = colorPicker ? colorPicker.value : "#f0fdf4";
    changeWebpageBackgroundColor(chosenColor);
    const out = document.getElementById("outQ41");
    if (out) out.innerHTML = `<strong>Page background changed to:</strong> <span style="display:inline-block;width:12px;height:12px;background:${chosenColor};border:1px solid #000;margin-right:4px;"></span> ${chosenColor}`;
  });

  document.getElementById("btnResetBg")?.addEventListener("click", () => {
    document.body.style.backgroundColor = "";
    const out = document.getElementById("outQ41");
    if (out) out.innerHTML = `<strong>Background reset</strong> to default theme color.`;
  });

  // Question 42: Hide HTML Element
  document.getElementById("btnQ42")?.addEventListener("click", () => {
    hideHtmlElement("demoHideElement");
    const out = document.getElementById("outQ42");
    if (out) out.innerHTML = `<strong>Status:</strong> The target box has been hidden (display: none).`;
  });

  document.getElementById("btnShowQ42")?.addEventListener("click", () => {
    const el = document.getElementById("demoHideElement");
    if (el) el.style.display = "block";
    const out = document.getElementById("outQ42");
    if (out) out.innerHTML = `<strong>Status:</strong> Target box restored and visible.`;
  });

  // Question 43: Create and append paragraph
  let appendCounter = 1;
  document.getElementById("btnQ43")?.addEventListener("click", () => {
    const text = `Paragraph #${appendCounter++} created dynamically & appended to document body at ${new Date().toLocaleTimeString()}!`;
    createAndAppendParagraph(text);
    const out = document.getElementById("outQ43");
    if (out) out.innerHTML = `<strong>Success:</strong> Created & appended new paragraph below.`;
  });

  document.getElementById("btnClearAppendedQ43")?.addEventListener("click", () => {
    const container = document.getElementById("bodyAppendedContainer");
    if (container) container.innerHTML = "";
    appendCounter = 1;
    const out = document.getElementById("outQ43");
    if (out) out.innerHTML = `Appended paragraphs cleared.`;
  });

  // Question 44: Remove all list items
  document.getElementById("btnQ44")?.addEventListener("click", () => {
    removeAllListItems("demoListQ44");
    const out = document.getElementById("outQ44");
    if (out) out.innerHTML = `<strong>Status:</strong> All list items have been removed from the unordered list.`;
  });

  document.getElementById("btnResetQ44")?.addEventListener("click", () => {
    const ul = document.getElementById("demoListQ44");
    if (ul) {
      ul.innerHTML = `
        <li>HTML5 Structure & Semantic Layout</li>
        <li>CSS3 Custom Properties & Responsive Design</li>
        <li>Vanilla JavaScript ES6+ Modern Architecture</li>
      `;
    }
    const out = document.getElementById("outQ44");
    if (out) out.innerHTML = `<strong>Status:</strong> List items restored.`;
  });

  // Question 45: Change text content of specific element
  document.getElementById("btnQ45")?.addEventListener("click", () => {
    const newText = document.getElementById("inputQ45")?.value || "Updated text content set via JavaScript!";
    changeTextContent("targetElementQ45", newText);
    const out = document.getElementById("outQ45");
    if (out) out.innerHTML = `<strong>Status:</strong> Element text content updated successfully.`;
  });

  // Question 46: Toggle CSS class
  document.getElementById("btnQ46")?.addEventListener("click", () => {
    const isNowActive = toggleCssClass("demoBoxQ46", "active-custom-class");
    const out = document.getElementById("outQ46");
    if (out) {
      out.innerHTML = `<strong>Class State:</strong> 'active-custom-class' is currently <strong>${isNowActive ? "ENABLED (styled)" : "DISABLED (normal)"}</strong>.`;
    }
  });

  // Question 47: Count divs on webpage
  document.getElementById("btnQ47")?.addEventListener("click", () => {
    const totalDivs = countDivsOnWebpage();
    const out = document.getElementById("outQ47");
    if (out) out.innerHTML = `<strong>Total &lt;div&gt; elements on this webpage:</strong> <span class="output-tag" style="font-size:1rem;color:var(--accent-primary);font-weight:700">${totalDivs} divs</span>`;
  });

  // Question 48: Get input value and display in paragraph
  const liveInputQ48 = document.getElementById("inputQ48");
  if (liveInputQ48) {
    liveInputQ48.addEventListener("input", () => {
      getInputValueAndDisplay("inputQ48", "displayParagraphQ48");
    });
  }
  document.getElementById("btnQ48")?.addEventListener("click", () => {
    getInputValueAndDisplay("inputQ48", "displayParagraphQ48");
  });

  // Question 49: Create 3x3 table
  document.getElementById("btnQ49")?.addEventListener("click", () => {
    const startNum = document.getElementById("inputQ49Start")?.value || 1;
    createThreeByThreeTable("tableContainerQ49", startNum);
    const out = document.getElementById("outQ49");
    if (out) out.innerHTML = `<strong>Success:</strong> 3x3 table generated starting at number ${startNum}.`;
  });

  // Question 50: Validate form
  document.getElementById("formQ50")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("formNameQ50")?.value;
    const emailVal = document.getElementById("formEmailQ50")?.value;
    const passVal = document.getElementById("formPassQ50")?.value;
    const alertEl = document.getElementById("formAlertQ50");

    const result = validateForm(nameVal, emailVal, passVal);
    if (alertEl) {
      if (result.isValid) {
        alertEl.className = "validation-alert success";
        alertEl.innerHTML = `✓ <strong>Form Validated Successfully!</strong> All required fields (Name: "${nameVal}", Email: "${emailVal}", Password: [filled]) are complete and valid.`;
      } else {
        alertEl.className = "validation-alert error";
        alertEl.innerHTML = `✕ <strong>Validation Failed:</strong><br>• ${result.errors.join("<br>• ")}`;
      }
    }
  });
}
