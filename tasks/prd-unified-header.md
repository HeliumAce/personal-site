# Product Requirements Document: Unified Header

## Introduction/Overview

This feature will establish a single, consistent header system across all pages and posts on the personal site. Currently, the site has inconsistent header implementations where some pages use the default site header, others use the custom page-header.html, and some pages (like blog posts) incorrectly display both headers simultaneously. This PRD outlines the requirements to standardize all pages to use the existing page-header.html component, ensuring a consistent user experience and eliminating duplicate headers.

**Problem Statement**: Header inconsistency across different page types creates a fragmented user experience and maintenance complexity.

**Goal**: Implement a single unified header system using the existing page-header.html component across all pages and posts.

## Goals

1. **Establish header consistency** - All pages use the same header component and behavior
2. **Eliminate duplicate headers** - Remove instances where multiple headers appear on the same page
3. **Maintain existing functionality** - Preserve all current navigation features (breadcrumbs, prev/next)
4. **Future-proof the solution** - Ensure new page types automatically use the unified header
5. **Zero visual impact** - No changes to current styling or appearance

## User Stories

- **As a site visitor**, I want consistent navigation across all pages so that I can easily understand where I am and how to navigate
- **As a recruiter browsing the portfolio**, I want predictable header behavior so that navigation feels intuitive regardless of which page I'm viewing
- **As a site maintainer**, I want a single header system so that updates and maintenance are simplified
- **As a developer adding new page types**, I want the header to work automatically without additional configuration

## Functional Requirements

1. **Unified page-header across all content pages** - Every page type except home (work, method, post, generic pages, 404) should use the page-header.html component
2. **No duplicate headers** - Pages must not display both the site header and page-header simultaneously
3. **Preserve home page hero** - The home page must maintain its custom hero implementation (hero.html) that displays "Hi, I'm Liam" content
4. **Consistent breadcrumb navigation** - All content pages must show appropriate breadcrumbs (e.g., "Liam/Blog/Post Title", "Liam/Page Title")
5. **Maintain prev/next navigation** - Blog posts and work/method pages must retain existing prev/next functionality
6. **Adaptive content** - Header content must adapt based on page type (blog posts show blog breadcrumb, work pages show work breadcrumb, generic pages show page breadcrumb)
7. **Home page exception** - Only the home page should display the hero, all other pages use page-header
8. **Complete header consistency** - 404 and generic pages should use page-header for unified navigation experience

## Non-Goals (Out of Scope)

- Visual design changes to the header appearance
- Modification of header styling or CSS
- Changes to navigation functionality or behavior  
- Addition of new navigation elements
- Mobile responsiveness improvements (assumes current implementation is adequate)
- Performance optimization of header rendering

## Design Considerations

- **Existing Component**: Use the current page-header.html component without modifications
- **Styling**: Maintain all existing CSS classes and styling patterns
- **Layout Integration**: Work within the current layout hierarchy (default → specific page layouts)
- **Responsive Behavior**: Preserve current responsive design patterns

## Technical Considerations

- **Layout Architecture**: Modify the default.html layout to remove the site header include
- **Template Dependencies**: Update layouts that require the site header to explicitly include it
- **Jekyll Integration**: Ensure compatibility with existing Jekyll site structure
- **CSS Dependencies**: No changes to existing stylesheet imports or structure
- **Component Reusability**: Leverage existing page-header.html without duplication

## Success Metrics

1. **Header Consistency**: 100% of pages display only the page-header component (zero duplicate headers)
2. **Navigation Functionality**: All existing navigation features work identically to current implementation
3. **Visual Consistency**: No visual differences from current page-header appearance
4. **Maintenance Simplification**: Single header component to maintain across all page types
5. **Future Compatibility**: New page types automatically inherit unified header behavior

## Implementation Approach

### Phase 1: Analyze Current Header Logic
- Review how `_includes/header.html` conditionally displays hero vs site header vs nothing
- Understand the page layout detection logic already in place
- Identify why some pages show duplicate headers

### Phase 2: Fix Duplicate Header Issues
- Ensure pages using `page-header.html` don't also trigger site header display
- Update conditional logic in `_includes/header.html` if needed
- Test that blog posts show only page-header (no site header)

### Phase 3: Validation
- Test all page types to confirm single header display
- Verify home page hero functionality remains intact
- Confirm breadcrumb and navigation functionality
- Confirm no visual regressions

## Open Questions

1. **Are there any other page types beyond work, method, post, home, generic page, and 404 that need consideration?**
2. **Should future blog list pages (blog.html) use the unified header or site header?**
3. **Are there any edge cases in the current prev/next navigation that might be affected?**

## Files to Modify

- `_layouts/default.html` - Remove site header include
- `_layouts/home.html` - Add site header include  
- `_layouts/page.html` - Add site header include
- `404.html` - Add site header include
- Potentially other layouts that currently rely on default.html for site header

## Definition of Done

- [ ] All pages display exactly one header (no duplicates)
- [ ] All breadcrumb navigation works correctly
- [ ] All prev/next navigation functions properly  
- [ ] No visual changes to header appearance
- [ ] Home page retains appropriate site header
- [ ] 404 page displays consistently with other pages
- [ ] No broken navigation links
- [ ] Future page types automatically inherit unified header 