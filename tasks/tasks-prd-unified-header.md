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

- [ ] 1.0 Analyze Current Header Implementation
  - [x] 1.1 Review `_includes/header.html` conditional logic for different page types
  - [x] 1.2 Identify why blog posts show duplicate headers (both site header and page-header)
  - [x] 1.3 Document current behavior: home (hero), work/method (no site header), other pages (site title)
  - [x] 1.4 Updated scope: ALL pages except home should use page-header for consistency

- [ ] 2.0 Fix Header Conditional Logic and Update Layouts
  - [x] 2.1 Update `_includes/header.html` to show header ONLY for home layout (exclude post, page, default layouts)
  - [x] 2.2 Add `{% include page-header.html %}` to `_layouts/page.html` for generic pages
  - [x] 2.3 Add `{% include page-header.html %}` to `404.html` for error page consistency
  - [x] 2.4 Ensure home page hero functionality is preserved 
  - [x] 2.5 Ensure work/method/post pages continue to show only page-header

- [ ] 3.0 Verify Page-Header Integration Across All Page Types
  - [ ] 3.1 Confirm `_layouts/post.html` includes `{% include page-header.html %}` and triggers no site header
  - [ ] 3.2 Confirm `_layouts/work.html` includes `{% include page-header.html %}` and triggers no site header
  - [ ] 3.3 Confirm `_layouts/method.html` includes `{% include page-header.html %}` and triggers no site header
  - [ ] 3.4 Confirm `_layouts/content-page.html` includes `{% include page-header.html %}` and triggers no site header
  - [ ] 3.5 Verify `_includes/page-header.html` contains correct breadcrumb logic for all page types

- [ ] 4.0 Test and Validate Header Consistency
  - [ ] 4.1 Start local Jekyll server (`bundle exec jekyll serve`)
  - [ ] 4.2 Test home page displays hero only (from site header include)
  - [ ] 4.3 Test work pages display page-header only with correct breadcrumbs (Liam/Work Title)
  - [ ] 4.4 Test method pages display page-header only with correct breadcrumbs
  - [ ] 4.5 Test blog posts display page-header only with correct breadcrumbs (Liam/Blog/Post Title)
  - [ ] 4.6 Test generic pages display page-header only with correct breadcrumbs (Liam/Page Title)
  - [ ] 4.7 Test 404 page displays page-header only with correct breadcrumbs (Liam/404 or similar)
  - [ ] 4.8 Verify prev/next navigation works correctly on blog posts
  - [ ] 4.9 Verify prev/next navigation works correctly on work/method pages
  - [ ] 4.10 Check for any visual regressions by comparing header appearance before/after changes

- [ ] 5.0 Document Changes and Future Page Type Guidelines
  - [ ] 5.1 Create documentation explaining the unified header system
  - [ ] 5.2 Document which layouts trigger site header vs page-header vs hero
  - [ ] 5.3 Create guidelines for developers adding new page types
  - [ ] 5.4 Update any existing README or development documentation
  - [ ] 5.5 Add comments in header.html explaining conditional logic decisions 