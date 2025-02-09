---
title: Projects
layout: default
permalink: /projects/
---

# Projects

Here is a list of my major projects.

{% for project in site.projects %}
## [{{ project.title }}]({{ project.url }})
📝 {{ project.description }}  
🔗 [GitHub]({{ project.github }}) | 🎥 [YouTube]({{ project.youtube }})  
{% endfor %}

