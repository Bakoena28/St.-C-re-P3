
## Part 2 Changelog
- Removed all inline style="..." attributes from the 5 HTML pages.
- Created an external css/style.css file and linked it to all pages.
- Replaced the broken HTML tables in the header with flexbox divs (class="topbar") for a responsive layout.
- Added CSS grid (class="products") to display the product cards neatly.
- Added media queries so the website stacks properly on mobile and tablet screens.
- Added hover and focus effects to buttons and links.
- Added a 6th page: cart.html, linked from the CART button in the header and the "add to cart" buttons on the services page.
- Added the master header and footer to all pages so every page links to every page.
- Extra pages cart.html, delivery.html and payment.html linked from the footer and from the services/cart pages.
- Added more images and changed the structure for the clothing options to choose from.

## Part 3 Changelog & Enhancements

### UI/UX Overhaul
- [Enhancement] Elevated UI/UX to a "high-end streetwear" aesthetic: added frosted-glass sticky navbar, custom scrollbars, and subtle radial background gradients.
- [Enhancement] Redesigned the About page Mission/Vision into premium "Brand Pillar" cards with hover animations.
- [Enhancement] Upgraded buttons with sharp corners, uppercase tracking, and smooth scale transitions for a luxury feel.
- [Enhancement] Applied a comprehensive "High-End" UI polish across all 8 pages to elevate the brand aesthetic.
- [Enhancement] Added a "Luxury Zoom" hover effect to all product cards on the Services page.
- [Enhancement] Redesigned the Cart page table to be modern, clean, and responsive.
- [Enhancement] Upgraded the Footer to a premium dark theme with smooth link transitions.
- [Enhancement] Added subtle radial gradients and a custom scrollbar for a niche, cohesive browsing experience.
- [Enhancement] Replaced stark white background with a distinct "Light Purple to Grey" gradient.
- [Enhancement] Imported 'Bebas Neue' (bold headings) and 'Poppins' (clean body text). Reduced font sizes to standard web readability.
- [Enhancement] Changed all headings and navigation links to Deep Purple to match the brand aesthetic, with pure black body text.
- [Enhancement] Applied a highly transparent (40% opacity) frosted glass effect to all content panels.
- [Enhancement] Added interactive, selectable payment cards styled to match modern e-commerce standards.

### Functionality & SEO Additions
- Added `js/script.js` (External JavaScript), linked on all 8 pages before `</body>`.
- Dynamic Content: `services.html` product listing is loaded from a JavaScript array via DOM manipulation.
- Search Feature: `#search-box` filters the product list live by name or category.
- Interactive Map: Replaced the static Google iframe on `contact.html` with a Leaflet + OpenStreetMap interactive map and marker at 44 Stanley Avenue, Rosebank.
- Gallery Lightbox: Studio gallery added on `about.html`; clicking a picture opens a full-screen lightbox.
- Embedded Media: Added a responsive YouTube video embed and a custom studio lifestyle photo on `about.html`.
- Enquiry Form: JavaScript client-side validation with error messages; valid submissions are processed and answered in a modal.
- Contact Form: JavaScript validation; valid submissions are compiled into a `mailto:` email.
- SEO: Unique title tags, meta descriptions, and meta keywords on all 8 pages; images renamed to descriptive file names with descriptive alt text.
- Added `robots.txt` and `sitemap.xml` for search engine crawling.
- Deployed on Netlify: https://saintcore.netlify.app

## References

### Inspiration & Design
- Pinterest (2026) *Streetwear website design, UI/UX inspiration, and product photography*. Available at: https://www.pinterest.com (Accessed: 31 October 2026).
- Unseen Grail (2026) *South African streetwear e-commerce platform design reference*. Available at: https://www.unseengrail.com (Accessed: 31 October 2026).
- We Are Gods (2026) *Premium South African streetwear brand*. Available at: https://www.wearegodsonline.com (Accessed: 31 October 2026).

### Technical Resources
- GitHub (2026) *Creating repositories and uploading files*. Available at: https://docs.github.com/en/repositories (Accessed: 31 October 2026).
- Google Fonts (2026) *Bebas Neue and Poppins typefaces*. Available at: https://fonts.google.com (Accessed: 31 October 2026).
- Leaflet (2026) *Interactive maps library*. Available at: https://leafletjs.com (Accessed: 31 October 2026).
- OpenStreetMap (2026) *Free map tiles and data*. Available at: https://www.openstreetmap.org (Accessed: 31 October 2026).
- MDN Web Docs (2026) *JavaScript form validation and DOM manipulation*. Available at: https://developer.mozilla.org (Accessed: 31 October 2026).
- W3Schools (2026) *HTML meta tags for SEO*. Available at: https://www.w3schools.com (Accessed: 31 October 2026).
- Netlify (2026) *Web hosting and deployment platform*. Available at: https://www.netlify.com (Accessed: 31 October 2026).