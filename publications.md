---
title: Publications
layout: default
permalink: /publications/
---

# Publications

Here is a list of my research papers and academic publications.

{% for paper in site.publications %}
## [{{ paper.title }}]({{ paper.url | relative_url }})
📄 {{ paper.description }}  
{% if paper.link != "none" %}
🔗 [Read More]({{ paper.link }})
{% else %}
🔗 [Read More]({{ paper.url | relative_url }})
{% endif %}
{% endfor %}
