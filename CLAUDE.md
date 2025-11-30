# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based personal portfolio site showcasing work from Atlassian, Electronic Arts, and Ubisoft. The site features case studies (under `/case-studies/`) and design methods/practices (under `/methods/`), using a custom navigation system driven by Jekyll collections.

## Development Commands

### Local Development
```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Start local server at http://localhost:4000
```

Note: Jekyll does NOT auto-reload `_config.yml` changes. Restart the server when modifying config.

## Architecture

### Content Organization

The site uses two primary content types:

1. **Work/Case Studies** (`/case-studies/*.md`):
   - Layout: `work`
   - Front matter includes: `title`, `role`, `date-range`, `logo`, `order`, `published`
   - Displayed with company logos and role/timeline metadata

2. **Practices/Methods** (`/methods/*.md`):
   - Layout: `method`
   - Front matter includes: `title`, `description`, `icon`, `color`, `order`
   - Styled with custom color theming via CSS variables (`--method-color`)

### Navigation System

Navigation is configured in `_config.yml` under the `navigation` key:
```yaml
navigation:
  - group: Work
    layout: work
    sort: order
  - group: Practices
    layout: method
    sort: order
```

The side navigation (`_includes/side-nav.html`) dynamically builds menus by:
1. Iterating through navigation groups
2. Finding all pages matching each group's layout
3. Sorting by the `order` front matter property

To add new content to navigation, ensure the markdown file has the correct `layout` and `order` properties.

### Custom Components

The site includes several custom Jekyll includes for rich content:

- `{% include image-compare.html %}` - Before/after image comparisons with slider
- `{% include video.html %}` - YouTube video embeds (uses youtube-nocookie.com)
- `{% include expand-collapse.html %}` - Collapsible image galleries
- `{% include lightbox.html %}` - Image lightbox functionality

These are implemented with corresponding JavaScript in `/assets/js/` and styles in `_sass/minima/_components.scss`.

### Styling Architecture

Styles are organized in `_sass/minima/`:
- `_base.scss` - Typography, colors, basic elements
- `_layout.scss` - Page layouts, header, navigation
- `_work.scss` - Work/method page specific styles
- `_components.scss` - Custom component styles
- `_footer.scss` - Footer styles

The site uses CSS custom properties for theming (e.g., method pages set `--method-color`).

## Task Management Workflow

This project uses Cursor rules (in `.cursor/rules/`) for structured task management:

1. **create-prd.mdc**: Generate Product Requirements Documents
   - Ask clarifying questions before creating PRD
   - Save as `prd-[feature-name].md` in `/tasks/`
   - Targeted at junior developers

2. **generate-tasks.mdc**: Convert PRDs to task lists
   - Two-phase process: parent tasks, then sub-tasks
   - Wait for user "Go" confirmation between phases
   - Save as `tasks-[prd-file-name].md` in `/tasks/`

3. **process-task-list.mdc**: Task execution protocol
   - Complete ONE sub-task at a time
   - Ask permission before starting next sub-task
   - Mark sub-tasks `[x]` when complete
   - Mark parent task `[x]` only when ALL sub-tasks complete
   - Keep "Relevant Files" section updated

When implementing features, follow this workflow rather than implementing directly.

## Jekyll Collections

The site uses a custom `work` collection (defined in `_config.yml`):
```yaml
collections:
  work:
    output: true
    sort_by: order
```

However, the current content structure uses `case-studies/` and `methods/` directories with regular pages rather than collection items, relying on the navigation system to organize them by layout type.

## Content Security Policy

The site has CSP headers configured in `_config.yml` for webrick:
- YouTube embeds must use `youtube-nocookie.com`
- Images can load from external HTTPS sources
- Inline scripts/styles are permitted
- Google Fonts is whitelisted
