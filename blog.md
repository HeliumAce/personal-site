---
layout: default
title: Blog
---

{% include page-header.html %}

<div class="blog-page">
  <div class="wrapper">
    <article class="work-item">
      <header class="page-work-header">
        <div class="header-content">
          <div class="page-work-info">
            <h1>Latest Posts</h1>
          </div>
        </div>
      </header>

      <div class="work-content">
        {% for post in site.posts %}
          <div class="post-entry" style="margin-bottom: 3rem;">
            <div class="post-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: .5rem;">
              <h2 style="color: black; margin: 0;"><a href="{{ post.url }}" style="color: black; text-decoration: none;">{{ post.title }}</a></h2>
              <p class="post-meta" style="color: #777; margin: 0; font-size: 1rem;">
                <time datetime="{{ post.date | date_to_xmlschema }}">
                  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                  {{ post.date | date: date_format }}
                </time>
              </p>
            </div>
            <div class="post-excerpt">
              {{ post.excerpt }}
            </div>
          </div>
        {% endfor %}
      </div>
    </article>
  </div>
</div>