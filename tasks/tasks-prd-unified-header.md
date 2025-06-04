# Task List: Unified Header Implementation

Based on: `prd-unified-header.md`

## Relevant Files

- `_layouts/default.html` - Base layout that currently includes site header, needs modification
- `_layouts/home.html` - Home page layout that needs explicit site header include
- `_layouts/page.html` - Generic page layout that needs explicit site header include
- `404.html` - Error page that needs explicit site header include
- `_layouts/post.html` - Blog post layout that should use page-header only
- `_layouts/work.html` - Work page layout that should use page-header only
- `_layouts/method.html` - Method page layout that should use page-header only
- `_layouts/content-page.html` - Content page layout that should use page-header only
- `_includes/page-header.html` - Custom header component to be used universally
- `_includes/header.html` - Site header component for specific layouts only

### Notes

- This is a Jekyll site using Liquid templating
- No unit tests required as this is template/layout work
- Test by serving the site locally and checking each page type
- Ensure no visual regressions by comparing before/after screenshots

## Tasks

- [ ] 1.0 Modify Default Layout to Remove Site Header
  - [ ] 1.1 Create backup of current `_layouts/default.html`
  - [ ] 1.2 Remove `{%- include header.html -%}` line from `_layouts/default.html`
  - [ ] 1.3 Verify the remaining structure maintains proper HTML document flow
  - [ ] 1.4 Confirm all other includes (head.html, footer.html, scripts) remain intact

- [ ] 2.0 Update Exception Layouts to Include Site Header
  - [ ] 2.1 Add `{%- include header.html -%}` after front matter in `_layouts/home.html`
  - [ ] 2.2 Add `{%- include header.html -%}` after front matter in `_layouts/page.html`
  - [ ] 2.3 Add `{%- include header.html -%}` after front matter in `404.html`
  - [ ] 2.4 Verify proper placement ensures header appears before main content in each file

- [ ] 3.0 Verify Page-Header Integration Across All Page Types
  - [ ] 3.1 Confirm `_layouts/post.html` includes `{% include page-header.html %}` and no duplicate headers
  - [ ] 3.2 Confirm `_layouts/work.html` includes `{% include page-header.html %}` and no duplicate headers
  - [ ] 3.3 Confirm `_layouts/method.html` includes `{% include page-header.html %}` and no duplicate headers
  - [ ] 3.4 Confirm `_layouts/content-page.html` includes `{% include page-header.html %}` and no duplicate headers
  - [ ] 3.5 Verify `_includes/page-header.html` contains correct breadcrumb logic for all page types

- [ ] 4.0 Test and Validate Header Consistency
  - [ ] 4.1 Start local Jekyll server (`bundle exec jekyll serve`)
  - [ ] 4.2 Test home page displays site header only (no page-header)
  - [ ] 4.3 Test work pages display page-header only with correct breadcrumbs (Liam/Work Title)
  - [ ] 4.4 Test method pages display page-header only with correct breadcrumbs
  - [ ] 4.5 Test blog posts display page-header only with correct breadcrumbs (Liam/Blog/Post Title)
  - [ ] 4.6 Test generic pages display site header only (no page-header)
  - [ ] 4.7 Test 404 page displays site header only (no page-header)
  - [ ] 4.8 Verify prev/next navigation works correctly on blog posts
  - [ ] 4.9 Verify prev/next navigation works correctly on work/method pages
  - [ ] 4.10 Check for any visual regressions by comparing header appearance before/after changes

- [ ] 5.0 Document Changes and Future Page Type Guidelines
  - [ ] 5.1 Create documentation explaining the unified header system
  - [ ] 5.2 Document which layouts use site header vs page-header
  - [ ] 5.3 Create guidelines for developers adding new page types
  - [ ] 5.4 Update any existing README or development documentation
  - [ ] 5.5 Add comments in layout files explaining header inclusion decisions 