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
  <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
{% endfor %}
</ul>

<!-- 
OLD TOC

<h2>Tico Times - My Time in Costa Rica</h2>
- [Preface](Costa-Rica/Chapter00-Preface.md)
- [Arrival](Costa-Rica/Chapter01-Arrival.md)
- [Why Am I Here](Costa-Rica/Chapter02-WhyAmIHere.md)
- [One is the Loneliest Number](Costa-Rica/Chapter03-OneTurtle.md)
- [Outstanding Duck](Costa-Rica/Chapter04-OutstandingDuck.md)
--> 

