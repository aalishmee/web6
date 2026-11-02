# Assignment 6
Name: Alish Medina  
Group: SE-2538

## Overview
This project is a personal portfolio webpage built with jQuery. It demonstrates selectors, CSS manipulation, effects (hide/show, fade, slide), DOM manipulation (adding/removing elements, changing attributes, form interaction), and animations. The design uses plain HTML and CSS, with jQuery loaded from a CDN.

## Task 0: Setup
Included jQuery from a CDN (jquery-3.7.1.min.js) and wrapped all my code inside `$(document).ready(function() { ... })`. To verify jQuery loaded correctly, I printed "jQuery is ready!" to the browser console.

<img width="1917" height="272" alt="Снимок экрана 2026-11-02 223411" src="https://github.com/user-attachments/assets/338a1bec-9802-4066-9e27-c2d58e06649d" />

## Task 1: Selectors & CSS
Built the profile header with my name, a headline, and a short introduction.
I used a tag selector (`$("h1")`), an ID selector (`$("#greeting")`), and a class selector (`$(".intro")`) to select different elements. I updated the greeting text using `.text()` and changed its color using `.css()`. Two buttons ("Light Mode" and "Dark Mode") toggle a `dark` class on the `<body>`.

<img width="1403" height="826" alt="Снимок экрана 2026-11-02 223441" src="https://github.com/user-attachments/assets/a065a9cb-219d-462a-8b4d-4aef3b373087" />
<img width="1383" height="832" alt="Снимок экрана 2026-11-02 223448" src="https://github.com/user-attachments/assets/8db21831-1e5d-4dd1-87d0-b595c8222f7f" />

## Task 2: Visibility Methods
Created an "About Me" section with a biography, a current status message ("Currently learning jQuery!"), and a fun facts line. Three buttons (Hide, Show, Toggle) control the visibility of the status message and fun facts using `.hide()`, `.show()`, and `.toggle()`.

<img width="992" height="362" alt="Снимок экрана 2026-11-02 223508" src="https://github.com/user-attachments/assets/ca9d0326-9b86-4ee4-9737-7ee6983f81a3" />
<img width="960" height="257" alt="Снимок экрана 2026-11-02 223519" src="https://github.com/user-attachments/assets/990acc0e-a76b-4fc2-b1d6-102dad11391c" />

## Task 3: Fade Methods
Added two gallery images. Three buttons (Fade In, Fade Out, Fade Toggle) control their visibility using `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()`.

<img width="975" height="432" alt="Снимок экрана 2026-11-02 223528" src="https://github.com/user-attachments/assets/e0a7de66-c744-4dd2-8756-15d34850f440" />
<img width="956" height="231" alt="Снимок экрана 2026-11-02 223537" src="https://github.com/user-attachments/assets/facaa268-b061-4973-8b35-ee9998a3e7a3" />

## Task 4: Slide Methods
Created three clickable headings ("My Favorite Music", "My Favorite Movie", "My Favorite Subject") with collapsible panels underneath. Clicking a heading uses `.slideToggle()` to smoothly open or close its panel.

<img width="983" height="635" alt="Снимок экрана 2026-11-02 223737" src="https://github.com/user-attachments/assets/737c552c-bf72-4488-aa43-644894e1f331" />

## Task 5: Add & Remove Elements
Displayed an initial list of four technical skills. Added a text input and three buttons: "Add Skill" (`.append()`), "Prepend Skill" (`.prepend()`), and "Remove Skill" (`.remove()` on the last `<li>`). Empty or whitespace-only inputs are rejected using `.trim()`.

<img width="960" height="357" alt="Снимок экрана 2026-11-02 223916" src="https://github.com/user-attachments/assets/c6d1c6a3-2959-416b-9a57-725e25931cc4" />

## Task 6: Modifying Attributes
Added a social media link pointing to GitHub. A "Change Link" button uses `.attr()` to change the `href` to LinkedIn and `.text()` to update the label.

<img width="987" height="232" alt="Снимок экрана 2026-11-02 223920" src="https://github.com/user-attachments/assets/01ae23ea-41cc-41fd-a964-837881ee6691" />
<img width="962" height="218" alt="Снимок экрана 2026-11-02 223934" src="https://github.com/user-attachments/assets/eda5101e-4e1a-4c9f-817d-eef6355c2e65" />

## Task 7: Form Interaction
Built a form with Name and Email inputs. Using the `input` event, `.val()` reads the current value and `.text()` displays it live below the form.

<img width="965" height="330" alt="Снимок экрана 2026-11-02 223952" src="https://github.com/user-attachments/assets/8b217b4d-debb-4b86-bf12-aad62265c182" />

## Task 8: Basic Animation
Created three skill bars (HTML, CSS, JavaScript) that start at zero width. The "Animate My Skills" button uses `.animate()` to grow each bar to a different target width (90%, 75%, 60%). Clicking again animates them back to 0%.

<img width="1018" height="480" alt="Снимок экрана 2026-11-02 224001" src="https://github.com/user-attachments/assets/45aa832e-1bc7-442c-8bf2-81e044b7aae6" />
<img width="988" height="475" alt="Снимок экрана 2026-11-02 224006" src="https://github.com/user-attachments/assets/6c58a37a-9cca-4ac1-8d3c-ed2c3c97725f" />

## Summary
I built a single-page jQuery portfolio. The most interesting parts were:
- Understanding how jQuery selectors map to HTML elements. Using `$("#id")`, `$(".class")`, and `$("tag")` made it easy to target exactly what I needed.
- Learning the difference between effect methods that change display vs. opacity vs. height - `.hide()` snaps instantly, `.fadeOut()` fades opacity, and `.slideUp()` collapses height. Each is suited to a different situation.
- Using `.attr()` to change a link's destination without touching the HTML file.
- Using `.animate()` with percentage widths to build skill bars. The key was starting `.progress` at `width: 0` in CSS so the animation has somewhere to grow from.
- Wrapping every handler in `$(document).ready()` so the DOM is fully loaded before any jQuery runs.

The page is responsive, styled cleanly, and all buttons work without errors.

## How to Run
1. Clone the repository
2. Open `index.html` in any modern browser
3. No installation needed (jQuery loads from CDN)

## Files
- `index.html` - the webpage structure
- `style.css` - custom styling (light and dark themes)
- `script.js` - all jQuery logic
