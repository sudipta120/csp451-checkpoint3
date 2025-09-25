\# CSP451 – Checkpoint 3: GitHub Actions CI/CD



<!-- Status Badges -->

!\[CI](https://github.com/sudipta120/csp451-checkpoint3/actions/workflows/ci.yml/badge.svg)

!\[Dependency Check](https://github.com/sudipta120/csp451-checkpoint3/actions/workflows/dependency-check.yml/badge.svg)

!\[Deploy](https://github.com/sudipta120/csp451-checkpoint3/actions/workflows/deploy.yml/badge.svg)

\[!\[codecov](https://codecov.io/gh/sudipta120/csp451-checkpoint3/branch/main/graph/badge.svg)](https://codecov.io/gh/sudipta120/csp451-checkpoint3)



\## Overview

This project is a small Node.js repo created to demonstrate a complete \*\*CI/CD pipeline\*\* with \*\*GitHub Actions\*\* for CSP451 Checkpoint 3. It includes automated \*\*linting\*\* (ESLint), \*\*format checking\*\* (Prettier), \*\*unit testing with coverage gates\*\* (Jest ≥ 80%), a \*\*daily dependency security audit\*\* that opens GitHub Issues on findings, and \*\*automated deployment to GitHub Pages\*\* from the `main` branch. A \*\*composite action\*\* centralizes Node setup and dependency installation to keep workflows DRY and fast. The goal is to show professional, reproducible automation across branches (`develop` → PR → `main`) while satisfying the checkpoint deliverables.



---



\## 🔗 Live Demo

If deployment is enabled, the site is published at:  

\*\*https://sudipta120.github.io/csp451-checkpoint3/\*\*



The build creates `dist/index.html` and publishes it with `peaceiris/actions-gh-pages`.



---



\## 📁 Project Structure



