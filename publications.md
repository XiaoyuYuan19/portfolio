---
title: Publications
layout: default
permalink: /publications/
---

# Publications & Awards

## 📄 Publications

{% for paper in site.publications %}
### [{{ paper.title }}]({{ paper.link }})
- **Authors:** {{ paper.authors }}
- **Conference:** {{ paper.conference }}, {{ paper.year }}
- **Publisher:** {{ paper.publisher }}
- **DOI:** [{{ paper.doi }}]({{ paper.link }})

---
{% endfor %}

## Awards
- **1st Prize**, Chinese Collegiate Computing Competition *(National-Level, China, 2023)*
- **2nd Prize**, Jiangsu Province Bachelor Thesis Award *(Provincial-Level, China, 2023)*
- **3rd Prize**, Jiangsu Province University Mathematical Modeling Competition *(Provincial-Level, China, 2021)*
