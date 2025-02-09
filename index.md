---
title: "Xiaoyu Yuan | Personal Portfolio"
description: "A showcase of AI research, projects, and academic contributions."
layout: default
---

## Welcome to Xiaoyu Yuan's Academic Portfolio

### About Me
I'm a **Computer Science Master's student** at the **University of Helsinki**, specializing in **AI, Machine Learning, and Computer Vision**. My research focuses on **OCR for ancient scripts, AI-assisted cultural heritage restoration, and medical SLAM for gastrointestinal navigation**.

📌 **Education:**  
- **M.Sc. in Computer Science** (University of Helsinki, 2023-2025)  
- **B.Sc. in Software Engineering** (Nanjing Institute of Technology & University of Oulu, 2019-2023)

🔗 **Find me online:**  
- [GitHub](https://github.com/XiaoyuYuan19) | [LinkedIn](https://www.linkedin.com/in/xiaoyuyuan19) | [Email](mailto:xiaoyuyuan19@gmail.com)

---

## Projects
A collection of my work in **AI, deep learning, and software development**.

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url | relative_url }})
📝 {{ project.description }}  
🔗 [GitHub]({{ project.github }}) | 🎥 [YouTube]({{ project.youtube }})  
{% endfor %}

---

## Publications
Academic papers and conference proceedings:

{% for paper in site.publications %}
### [{{ paper.title }}]({{ paper.url | relative_url }})
📄 {{ paper.description }}  
🔗 [Read More]({{ paper.url | relative_url }})  
{% endfor %}

---

## Contact
📧 Email: [xiaoyuyuan19@gmail.com](mailto:xiaoyuyuan19@gmail.com)  
📌 University: [Helsinki.fi](https://www.helsinki.fi/en)
