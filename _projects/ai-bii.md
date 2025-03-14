---
title: AI+BII - Building Image Inpainting for Cultural Heritage Restoration
layout: default
description: AI-assisted inpainting for restoring ancient architecture.
github: https://github.com/XiaoyuYuan19/AI-BII
youtube: https://www.youtube.com/watch?v=nnxlg_0Jbws&t=3s
url: ai-bii
details: |
  This research leverages AI and deep learning models for cultural heritage restoration.
  Using Stable Diffusion and self-supervised training, it reconstructs missing regions
  of ancient images.
 
  - **Over 1,000 historical images processed**
  - **Integrated Hugging Face API for inference**
---

<div class="project-page">
  <div class="title">{{ page.title }}</div>

  <div class="authors">
      <p>Authors: Xiaoyu Yuan, Pei Liu, Ruochen Gai</p>
      <p>University of Helsinki, 2024</p>
      <a href="https://github.com/XiaoyuYuan19/AI-BII">Github</a> | <a herf="https://www.youtube.com/watch?v=nnxlg_0Jbws&t=3s">YouTube</a>
  </div>
</div>

---

<div class="content">
  <div class="two-column">
    <div class="column">
      <h2>Abstract:</h2>
      <p>Historical buildings have been destroyed for many reasons, and many important historical information and cultures have failed to realize their true value. This project integrates generative artificial intelligence (GenAI) for automatic image restoration, attempting to restore the complete state of the building by filling in the missing areas in the image, and providing multi-style restoration output. The goal is to provide an easy-to-use tool that provides new possibilities for the protection, research and display of cultural heritage.</p>
      <h2>Introduction</h2>
      <p>With the accumulation of natural weathering, war and human interference, many historical buildings have suffered varying degrees of damage. These defects not only hinder the protection of cultural heritage, but also affect people's understanding of the original design and style of the building. Traditional restoration methods often rely on manual judgment and drawing. Although they are effective in some cases, they also face the problems of high cost, strong subjectivity and large workload. 
Therefore, the project uses the function of stable diffusion restoration of cutting-edge GenAI models to automate and enhance the image restoration process. This project develops an interactive tool that allows users to upload images of damaged buildings and generate multiple possible restoration results through intelligent algorithms. By improving restoration accuracy and enabling creative exploration of stylistic variation, we aim to redefine the possibilities of cultural heritage conservation in the digital age. </p>
    </div>

    <div class="column">
      <h2>Approach</h2>
      <p>The project's development revolves around three cores: automating the image restoration process, providing customizable style transfer for creative exploration, and an intuitive and useful user interface. </p>
      <ul>
        <li>Automatic Image Restoration: We use an advanced Stable Diffusion Inpainting model, which allows users to mark damaged areas in the image through masking tools, and combines detailed descriptions entered by users to achieve high-quality and expected image reconstruction. The model can generate multiple restoration options for each request, providing a wide range of choices. Through GPU acceleration optimization, the restoration process can be completed in real time while ensuring quality.</li>
        <li>Customizable style transfer: The style transfer component can transform the restored images into various styles. It adopts advanced techniques such as edge detection, neural style transfer and dynamic contrast adjustment to achieve architectural sketches with grid overlays, bright watercolor effects, retro pixel art, neon-infused cyberpunk visuals and HDR-enhanced images.</li>
        <li>User interface design: The project uses an intuitive front-end built with HTML, CSS, and JavaScript. Users can precisely select the repair area through an interactive canvas and use sliders and buttons to adjust parameters such as brush size, style intensity, and output quantity. Instant visual updates enhance the user experience, and the web-based interface is compatible with multiple devices, meeting the needs of users of different professional levels and providing a seamless operation experience.</li>
      </ul>
    </div>
  </div>
</div>
