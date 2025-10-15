

# 🎯 Playwright SDET Automation Framework

A modular **Playwright end-to-end & API automation framework** built with a clean folder structure, Allure + HTML reporting, and environment-based configuration — designed for **SDET-level testing and CI/CD readiness**.

---

## 📂 Project Structure

```
playwright-sdet-framework/
│
├── 📂 src/                         
│   ├── 📂 tests/                   # Test suites
│   │   ├── smoke/
│   │   │   └── login.spec.js
│   │   ├── regression/
│   │   │   └── checkout.spec.js
│   │   └── api/
│   │       └── strapi.api.spec.js
│   │
│   ├── 📂 pages/                   # Page Object Model (POM)
│   │   ├── loginPage.js
│   │   ├── inventoryPage.js
│   │   ├── cartPage.js
│   │   └── checkoutPage.js
│   │
│   ├── 📂 fixtures/                # Test data & custom fixtures
│   │   ├── testData.js
│   │   └── pages.fixture.js
│   │
│   ├── 📂 utils/                   # Reusable helpers / data generators
│   │   ├── apiHelper.js
│   │   ├── dataGenerator.js
│   │   └── allure_commands.txt
│   │
│   ├── 📂 config/                  # Env-specific configs
│   │   ├── dev.config.js
│   │   ├── qa.config.js
│   │   ├── staging.config.js
│   │   ├── prod.config.js
│   │   └── env.js
│   │
│   └── 📂 reports/                 # Reports & traces
│       ├── html-report/
│       ├── allure-report/
│       ├── test-results/
│       └── traces/
│
├── 📂 .github/workflows/           # GitHub Actions (if using CI/CD)
│   └── playwright.yml
│
├── .env                            # Environment variables
├── playwright.config.mjs           # Main Playwright config
├── package.json
├── .gitignore
└── README.md
```

---

## 🧰 Tech Stack

* 🧪 **Playwright** — UI + API automation
* 🧱 **Page Object Model (POM)** — Structured and reusable
* 🧠 **Environment Management** — `env.js` + `.env` configs
* 📊 **Allure + HTML Reporting** — For rich visual results
* ⚡ **Parallel Execution** — For faster test runs
* ☁️ **CI/CD Ready** — Works with Jenkins or GitHub Actions

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vamseedhar-fullstack/playwright-sdet-framework.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```



---

## 🧪 Running Tests

### Run all tests

```bash
npm run test:dev
```

### Run environment-specific tests

```bash
npm run test:qa
npm run test:stg
npm run test:prod
```

### Run specific test file

```bash
npm run test:dev -- src/tests/regression/checkout.spec.js
```

---

## 📊 Reporting

### 🧭 HTML Report

```bash
npm run report:open
```

(Points to `src/reports/html-report`)

### 🪄 Allure Report

```bash
# Generate
npm run allure:gen

# Open
npm run allure:open
```

---

## 🚀 CI/CD Ready

Can be integrated with:

* **GitHub Actions** (see `.github/workflows/playwright.yml`)
* **Jenkins** (install Allure + NodeJS plugins)

---

## 👨‍💻 Author

**Vamseedhar Reddy**
🔗 [LinkedIn](https://www.linkedin.com/in/vamseedhar-fullstack)

---

## 🧾 License

Licensed under the **MIT License**.

---

Would you like me to make this **README.md ready for GitHub formatting** (with emojis, badges, and table of contents links) so it looks like a polished open-source project?
