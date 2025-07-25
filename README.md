# ZK Role Prover Frontend

This repository contains a simple, self-contained HTML file for a "ZK Role Prover" interface. It's designed as a frontend form to collect user credentials (email and secret key) for generating zero-knowledge proof inputs. The interface is built with HTML, embedded CSS (using Tailwind styles and custom styles), and JavaScript for basic interactivity.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

You need `git` installed on your system to clone the repository. If you don't have it, you can download it from [https://git-scm.com/](https://git-scm.com/).

A modern web browser is required to view the HTML file.

### Cloning the Repository

1.  Open your terminal or command prompt.
2.  Navigate to the directory where you want to store the project:
    ```bash
    cd /path/to/your/desired/directory
    ```
3.  Use the `git clone` command followed by the URL of your Git repository:
    ```bash
    git clone [<YOUR_REPOSITORY_URL.git>](https://github.com/trannhatbuilder/web_zk_prover.git)
    ```

4.  Change directory into the cloned repository folder:
    ```bash
    cd web_zk_prover
    ```

### Viewing the Application

1.  Locate the main HTML file (likely named something like `index.html` or similar within your cloned directory).
2.  Open this HTML file in your preferred web browser (e.g., Chrome, Firefox, Edge). You can usually do this by double-clicking the file or right-clicking and choosing "Open with".

## About the Application

*   **Purpose:** Provides a user interface to input an email address and a secret key. This data is intended to be submitted (via a POST request to `/`) for processing, likely to generate a JSON file (`input.json`) used in zero-knowledge proof systems.
*   **Technologies Used:**
    *   **HTML:** Structure of the page.
    *   **CSS:** Styling, including utility classes from [Tailwind CSS](https://tailwindcss.com/) (loaded via CDN) and custom styles.
    *   **JavaScript:** Client-side interactivity (password visibility toggle, form submission feedback, basic input validation styling).
    *   **External Resources:** Fonts from Google Fonts ([Inter](https://fonts.google.com/specimen/Inter)), icons from [Font Awesome](https://fontawesome.com/) (loaded via CDN).
*   **Features:**
    *   Responsive design using Tailwind CSS utilities.
    *   Glass-morphism inspired UI elements.
    *   Animated elements (floating card, bouncing icon).
    *   Interactive form elements (password visibility toggle, focus states, hover effects).
    *   Basic form validation.
    *   Status messages displayed based on URL parameters (`?status=success` or `?status=error`).

## Notes

*   This is a **frontend-only** interface. It submits data to a server endpoint (`/`) which is not included in this repository. You will need a backend service to handle the form submission, validate the credentials, and generate the `input.json` file.
*   The application uses CDNs for Tailwind CSS, Font Awesome, and Google Fonts. An internet connection is required for these resources to load correctly.
*   The 404 errors for `fonts.googleapis.com` and `fonts.gstatic.com` in the provided context likely relate to how those services responded *at that specific moment* or could be related to how the request was made, but the links in the HTML should generally work for loading the 'Inter' font.
