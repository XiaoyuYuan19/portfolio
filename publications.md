---
title: Publications
layout: default
permalink: /publications/
---

# Publications

Here is a list of my research papers and academic publications.

{% for paper in site.publications %}
## [{{ paper.title }}]({{ paper.url }})
📄 {{ paper.description }}  
{% if paper.link != "https://example.com/thesis" %}
🔗 [Read More]({{ paper.link }})  
{% endfor %}
