# Stored Values

Stored Values is a small JavaScript example that calculates an area, applies tax to a price, and computes a formatted total.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Security](#security)
- [How to Contribute?](#how-to-contribute)
- [What's Next?](#whats-next)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## About

The project demonstrates composing small functions:

1. Calculate a rectangular area.
2. Calculate a price including a tax rate.
3. Multiply both values to produce a total.
4. Display the total with two decimal places.

## Features

- Calculates rectangular areas.
- Applies a configurable tax rate to a price.
- Combines calculated values into a total.
- Formats the displayed total to two decimal places.

## Tech Stack

- JavaScript
- Node.js

## Architecture

The application consists of three pure functions in `script.js`:

```text
area(width, height) --> calculatedArea
cost(price, tax)   --> calculatedCost
calculatedArea + calculatedCost --> total(area, cost) --> formatted output
```

## Project Structure

```text
storedValues/
|-- README.md
`-- script.js
```

## Getting Started

### Prerequisites

Install a current version of [Node.js](https://nodejs.org/).

### Run the project

```bash
node script.js
```

## Configuration

No external configuration is required. Update the arguments provided to `area` and `cost` in `script.js` to use different dimensions, prices, or tax rates.

## Security

This project does not accept user input, use external services, or store sensitive data. If input handling is added in the future, validate and sanitize all input before using it in calculations.

## How to Contribute?

1. Fork the project.
2. Create a branch for your change.
3. Make and test your update.
4. Open a pull request that explains the change.

## What's Next?

- Accept calculation values from command-line arguments.
- Add automated tests for each calculation function.
- Support additional calculation types.

## License

No license has been specified for this project.

## Acknowledgements

Built as a JavaScript learning exercise using Node.js.

## Author

Project maintainer.
