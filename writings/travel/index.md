---
layout: default
title: Travel Writings
prev_label: Writings
prev_url: /writings/
noindex: true
---

<h1> Travel </h1>

In 2019, Julie and I volunteered in a pueblo on the Pacific coast of Costa Rica. During that time, I wrote a blog and shared it on Facebook. Now, I am revisiting it and cleaning it up for a wider audience. I'll try to provide a few new entries per month.  

<!-- Calls _data/costa-rica-chapters.yml to generate this list>
-->

<ul>
{% for chapter in site.data.costa-rica-chapters %}
  {% if chapter.published %}
    <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

