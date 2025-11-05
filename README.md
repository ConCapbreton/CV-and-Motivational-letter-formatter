# 🧾 CV & Motivational Letter Formatter

A React + Tailwind CSS application for creating beautifully formatted, print-ready **CVs** and **motivational letters**.  
The app generates bilingual (🇫🇷 / 🇬🇧) documents directly in the browser, ready to export as PDFs.

---

## ✨ Features

- **React + TypeScript** for type-safe and modular code
- **Tailwind CSS** for responsive layout and print styling
- **Bilingual content** (French / English) — names, dates, and salutations adapt automatically
- **Markdown support** with `react-markdown` for rich text in letters
- **Consistent typography and formatting** across all documents
- **Print-ready A4 layout** with proper page breaks
- **Smart components** for headers, body, greetings, and signatures
- **Optimized for PDF export** — minimal file sizes with full fidelity

---

## 🧠 Motivation

This project was built to solve the challenge of maintaining consistent, well-formatted professional documents without fighting Word templates.  
By separating **data** (CV content, motivational letter) from **layout**, updates and customization are effortless.

---

## ⚙️ Tech Stack

| Area               | Technology                                  |
| ------------------ | ------------------------------------------- |
| Framework          | React                                       |
| Styling            | Tailwind CSS + @tailwindcss/typography      |
| Markdown Rendering | react-markdown                              |
| Language           | TypeScript                                  |
| Output             | Browser-based PDF (via Print → Save as PDF) |

---

## 🖨️ Printing / Exporting

The app is designed to be **printed to PDF directly from the browser**.

**Recommended print settings:**

- 📄 **Paper size:** A4
- ↔️ **Margins:** Default ✅
- 🧭 **Scale:** 100%
- 🎨 **Background graphics:** Disabled 🚫

This ensures centered, balanced content on the page and perfect PDF alignment.

---

## 📂 Project Structure

````bash
src/
 ├─ App.tsx
 │   ├─ Imports the CV and Motivational Letter constants
 │   │   from the `src/applications` directory.
 │   ├─ Imports them as "cv" and "ml" — the components
 │   │   automatically render the corresponding content.
 │   └─ See the `types` file for the CV and ML data shapes.
 │
 ├─ applications/
 │   ├─ Contains one file per application.
 │   ├─ Each file exports both constants for the same company:
 │   │   e.g. `UIMM.ts` → `UIMMCv` and `UIMMML`
 │   └─ Naming convention: use the company name for the file name.
 │
 ├─ components/
 │   ├─ cv-components/
 │   │   └─ CV presentation components (CvHeader, CvSkills, CvProfessionalExperience…)
 │   └─ ml-components/
 │       └─ Motivational Letter components (MlHeader, MlGreeting, MlBody, MlSignature)
 │
 ├─ layout/
 │   ├─ CvLayout.tsx
 │   └─ MotivationalLetterLayout.tsx
 │
 ├─ types/
 │   └─ `types.d.ts` — defines the `CV` and `MotivationalLetter` types.
 │
 └─ index.css — Tailwind setup, print styles, and typography rules.

## 🧠 Key Notes on Layouts

### `CvLayout.tsx`

- Displays the first **two professional experiences** on the first page (via the `CvProfessionalExperience` component using the `arrayStart` and `arrayEnd` props).
- Remaining experiences continue on the second page.
- The `showFooter={true}` prop creates a footer message such as:
  > “Expérience professionnelle (suite sur la page suivante)”
  or its English equivalent.
- You can adjust how many experiences appear per page by changing the `arrayStart` and `arrayEnd` props on the `CvProfessionalExperience` components inside `CvLayout`.

### `MotivationalLetterLayout.tsx`

- Displays the `MlHeader`, `MlGreeting`, `MlBody` (Markdown supported), and `MlSignature`.
- Automatically formats French salutations and date formatting.
- Supports a custom signature using the `customSignature` property.

---

## 🧩 Customization

### 🗂 Import Your Data

To use your own CV and motivational letter data, import your chosen application file into `App.tsx` like this:

```ts
import { myCompanyCv as cv, myCompanyMl as ml } from "./applications/myCompany";
````

The App.tsx layout components are already configured as:

```ts
{
  viewCV ? (
    <CvLayout cv={cv} />
  ) : (
    <MotivationalLetterLayout motivationalLetter={ml} />
  );
}
```

Once you import your data this way, you can delete or comment out other application imports — everything will render correctly using the same component structure.

### 🎨 Adjust Styles

All styles are defined in **`index.css`** — this includes Tailwind setup, print styles, and typography rules.

You can modify:

- 🧾 Print margins
- 🔤 Font sizes
- 📏 Text spacing
- 🪶 Paragraph gaps (especially for the motivational letter body)

To control spacing between paragraphs in the letter body, you can tweak Tailwind’s typography classes directly.  
For example, in `MlBody.tsx`:

```tsx
<div className="prose prose-sm md:prose-base prose-p:my-2 max-w-full">
```

### 🏃‍♂️ Run the App Yourself

To run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/cv-motivational-letter-formatter.git

# 2️⃣ Move into the project directory
cd cv-motivational-letter-formatter

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
```

Once started, open the URL displayed in your terminal — usually:

👉 http://localhost:5173

Your app should now be running locally, displaying either the CV or motivational letter view.

### 🖨️ Printing / Exporting to PDF

The application is designed for direct export via your browser’s **Print → Save as PDF** feature.

**Recommended print settings:**

| Setting                | Recommendation         |
| ---------------------- | ---------------------- |
| 📄 Paper size          | A4                     |
| ↔️ Margins             | Default                |
| 🧭 Scale               | 100%                   |
| 🎨 Background graphics | Disabled (recommended) |

**Tips for best results:**

- Use **Chrome** or **Edge** browsers for optimal rendering.
- Ensure **“Fit to page”** or **“Shrink to printable area”** is **off**.
- Choose the built-in **Save as PDF** destination.
- Ensure images print crisply — the app is optimized for web and PDF fidelity.

### 👤 Author

Martin Connor Sexton
📍 Capbreton, France
✉️ connorsexton@hotmail.com
