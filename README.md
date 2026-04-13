SR Group of Schools — Static site for GitHub Pages

Contents:
- index.html, about.html, admissions.html, payments.html
- assets/css/style.css, assets/js/script.js

Deploy to GitHub Pages (basic):
1. Create a new GitHub repo named `sr-school-website` and push these files to the main branch.
2. On GitHub, go to Settings > Pages and select branch `main` / folder `/ (root)` and Save. The site will be published at `https://<your-username>.github.io/sr-school-website/`.

Admissions form setup:
- The admissions form uses a placeholder Formspree action (`https://formspree.io/f/your_form_id`). Replace with a real endpoint:
  - Formspree: sign up, create form, replace action with their endpoint.
  - Netlify Forms: requires deploying to Netlify and adding `data-netlify="true"` to the <form>.
  - For attachments or admin workflow consider a small serverless backend (AWS Lambda / Vercel / Netlify Functions) or a paid form provider.

Payments:
- Payments page is informational only. Replace account/UPI placeholders with real details.

Next steps before going live:
- Replace placeholder images and copy with school branding and photos.
- Replace contact emails and phone numbers.
- Configure a real form endpoint and test submissions.
- Consider adding admin access or email notifications for admissions.

Notes about file uploads and privacy:
- If collecting documents, ensure secure storage and GDPR/ local privacy compliance. Use a provider that supports secure uploads.

If you'd like, push these files to a GitHub repo and I can provide exact git commands and enable GitHub Pages settings.