---
title: "Xiaoyu Yuan"
description: "AI Research | Machine Learning | OCR | Computer Vision"
layout: default
---

# Xiaoyu Yuan
**Computer Science Master's Student at University of Helsinki**  
Researching **OCR for ancient scripts, AI-assisted restoration, and medical SLAM**  

---

## About Me
![Profile Picture](/assets/images/graduation.jpg){: width="200px" style="border-radius: 10px; float: left; margin-right: 15px;"}  
I am a researcher in **Artificial Intelligence, OCR, and Deep Learning**, currently pursuing a Master's degree at the **University of Helsinki**. My research focuses on leveraging **machine learning** to analyze and restore ancient texts, and applying AI in **medical SLAM** for autonomous navigation.

---

## Education  

University of Helsinki, Finland  ——  **Master in Computer Science** *(Track: Algorithm)*
> Aug. 2023 – Jun. 2025 **GPA: 4.24**

University of Oulu, Finland  ——  **Bachelor in Software Engineering** *(Double Degree with Nanjing Institute of Technology)*
- Aug. 2019 – Jun. 2023    **GPA: 4.01**


---

## Research Interests
**Machine Learning** – Deep Learning, Transformer Models  
**OCR & NLP** – Text Recognition, Historical Document Processing  
**Computer Vision** – Image Restoration, 3D Reconstruction  
**Medical AI** – SLAM-based Endoscopy, AI for Healthcare  

---

## Projects

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url | relative_url }})
{{ project.description }}  
[GitHub]({{ project.github }}) | 🎥 [YouTube]({{ project.youtube }})  

{% endfor %}

---

## Publications

{% for paper in site.publications %}
### [{{ paper.title }}]({{ paper.link }})
- **Authors:** {{ paper.authors }}
- **Conference:** {{ paper.conference }}, {{ paper.year }}
- **Publisher:** {{ paper.publisher }}
- **DOI:** [{{ paper.doi }}]({{ paper.link }})

{% endfor %}

[Full Publication List](publications/)

---

## Awards
- **1st Prize**, Chinese Collegiate Computing Competition *(National-Level, China, 2023)*
- **2nd Prize**, Jiangsu Province Bachelor Thesis Award *(Provincial-Level, China, 2023)*
- **3rd Prize**, Jiangsu Province University Mathematical Modeling Competition *(Provincial-Level, China, 2021)*

---

## Get in Touch
📧 Email: [xiaoyuyuan19@gmail.com](mailto:xiaoyuyuan19@gmail.com)  
🔗 [GitHub](https://github.com/XiaoyuYuan19)  
🔗 [LinkedIn](https://www.linkedin.com/in/xiaoyuyuan19)
