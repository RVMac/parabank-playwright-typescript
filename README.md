# Automated Testing Framework For Para Bank

This repository contains an automation testing framework using **Playwright**, **Cucumber**, and **TypeScript** with the **Page Object Model (POM)** design pattern.

---

## 📌 Prerequisites

Ensure you have the following installed:
- **Node.js (v18 or later)** – [Download here](https://nodejs.org/)
- **VS Code (Optional, but recommended)** – [Download here](https://code.visualstudio.com/)

---

## 🚀 Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/RVMac/parabank-playwright-typescript.git
   cd playwright-cucumber-project
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Install Playwright Browsers:**
   ```sh
   npx playwright install --with-deps
   ```

---

## 🎯 Running Tests

### **1. Execute All Tests**
```sh
npm test
```

---

## 🏗 Project Structure

```
.github/workflows/   # GitHub Actions CI/CD workflow
playwright-cucumber-project/
│── src/
│   ├── features/        # Gherkin feature files
│   ├── step-definitions/ # Cucumber step definitions
│   ├── pages/           # Page Object Model classes
│   ├── hooks/           # Cucumber hooks (setup/teardown)
│── reports/             # Test reports
│── cucumber.js         # Cucumber configuration
│── package.json        # Project dependencies and scripts
│── tsconfig.json       # TypeScript configuration
│── README.md           # Project documentation
```

## Contributing

Feel free to fork and submit pull requests.