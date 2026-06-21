# Digital Cardvisit

A static digital business card application that allows individuals or companies to create multiple digital cards using a single reusable template.

## 🚀 About the Project

Digital Cardvisit is a web project developed to make digital business card creation simple and scalable. Instead of creating a separate HTML file for each person, profile data is stored in a JSON file and rendered dynamically through a shared template.

With this structure, adding a new person only requires adding a new profile object to the `data/profiles.json` file.

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* JSON
* Node.js

## ✨ Features

* Multiple digital cards using a single HTML template
* Dynamic profile management with JSON
* Custom URL structure for each profile
* Automatic card page generation
* Easy local development setup
* Scalable structure for personal or company use

## 📁 Project Structure

```bash
digital-cardvisit/
├── cards/
├── data/
│   └── profiles.json
├── tools/
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/iondris/digital-cardvisit.git
cd digital-cardvisit
npm install
```

Start the local server:

```bash
npm run serve
```

Then open one of the following URLs in your browser:

```bash
http://localhost:3000/index.html?id=yunus
http://localhost:3000/cards/yunus/
```

## 👤 Adding a New Profile

To add a new person, add a new object to the `profiles` array inside `data/profiles.json`.

Example profile structure:

```json
{
  "id": "example",
  "name": "Example User",
  "title": "Software Developer",
  "email": "example@example.com",
  "phone": "+90 555 000 00 00"
}
```

To generate a separate card page for each profile, run:

```bash
npm run generate:cards
```

This command creates redirect pages in the following structure:

```bash
cards/<id>/index.html
```

Example:

```bash
cards/yunus/
```

## 🎯 What I Learned

* Managing dynamic content with JSON
* Rendering reusable UI content with JavaScript
* Creating multiple profile pages from a single template
* Building scalable static web project structures
* Using Node.js scripts for automated file generation
* Designing a real-world product-oriented web project

## 📌 Future Improvements

* Adding an admin panel
* Adding QR code generation support
* Creating multiple card themes
* Making profile data editable through a form
* Improving the mobile user experience

## 👤 Developer

Yunus Emre
GitHub: https://github.com/iondris
