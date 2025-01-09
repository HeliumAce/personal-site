# Personal site

A minimal personal site built with Jekyll, featuring case studies and methods from my work at Atlassian, Electronic Arts, and Ubisoft.

## Tech Stack
- Jekyll for static site generation
- SCSS for modular styling
- Markdown for content management

## Project Structure
- `_includes/` - Reusable components (footer, header, hero, page-header)
- `_layouts/` - Page templates (default, work)
- `_sass/minima/` - Modular styling (base, layout, work, syntax-highlighting)
- `case-studies/` - Portfolio content (bitbucket, confluence, trello, etc)
- `assets/` - Static assets (images, icons)

## Local Development
1. Install dependencies:
   ```
   bundle install
   ```

2. Start local server:
   ```
   bundle exec jekyll serve
   ```

3. Visit `http://localhost:4000`