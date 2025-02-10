---
title: "Xiaoyu Yuan"
description: "A showcase of AI research, projects, and academic contributions."
layout: default
---

# Welcome to Xiaoyu Yuan's Academic Portfolio  

![Graduation Photo](/assets/images/graduation.jpg)

## About Me  
I'm a **Computer Science Master's student** at the **University of Helsinki**, specializing in **AI, Machine Learning, and Computer Vision**. My research focuses on **OCR for ancient scripts, AI-assisted cultural heritage restoration, and medical SLAM for gastrointestinal navigation**.

📌 **Education:**  
- **M.Sc. in Computer Science** (University of Helsinki, 2023-2025)  
- **B.Sc. in Software Engineering** (Nanjing Institute of Technology & University of Oulu, 2019-2023)  

🔗 **Find me online:**  
- [GitHub](https://github.com/XiaoyuYuan19) | [LinkedIn](https://www.linkedin.com/in/xiaoyuyuan19) | [Email](mailto:xiaoyuyuan19@gmail.com)  

---

## Research Interests  
- **Optical Character Recognition (OCR) for Ancient Scripts**  
- **AI-assisted Cultural Heritage Restoration**  
- **Medical SLAM for Gastrointestinal Endoscopy**  
- **Machine Learning & Computer Vision**  

---

## Projects  
View all projects on the [Projects Page](/projects/).

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url | relative_url }})  
📝 {{ project.description }}  
🔗 [GitHub]({{ project.github }}) | 🎥 [YouTube]({{ project.youtube }})  
{% endfor %}

---

## Publications  
View all publications on the [Publications Page](/publications/).

{% for paper in site.publications %}
### [{{ paper.title }}]({{ paper.url | relative_url }})  
📄 {{ paper.description }}  
{% if paper.link != "none" %}
🔗 [Read More]({{ paper.link }})  
{% else %}
🔗 [Read More]({{ paper.url | relative_url }})  
{% endif %}
{% endfor %}

---

## Honors & Awards  
🏆 **1st Prize**, Chinese Collegiate Computing Competition (National-Level, China)  
🏅 **2nd Prize**, Jiangsu Province Bachelor Thesis Award (Provincial-Level, China)  
🎓 **Full Scholarship**, Master's in Computer Science, University of Helsinki  

---

## Contact Me  
If you have any inquiries, feel free to reach out via [email](mailto:xiaoyuyuan19@gmail.com).
