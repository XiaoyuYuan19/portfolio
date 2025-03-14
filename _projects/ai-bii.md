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

# {{ page.title }}

📝 **{{ page.description }}**  
🔗 **[GitHub]({{ page.github }})** | 🎥 **[YouTube]({{ page.youtube }})**

\documentclass{article}
\usepackage{graphicx}
\usepackage{hyperref}

\title{AI+BII: Generative AI for Building Image Inpainting}
\author{Pei Liu, Xiaoyu Yuan, Ruochen Gai \\ University of Helsinki}
\date{2024}

\begin{document}
\maketitle

\begin{abstract}
Historical buildings are subject to destruction due to natural disasters, war, and human intervention, leading to significant loss of cultural heritage. This project explores generative AI (GenAI) for automatic image restoration, focusing on inpainting techniques using Stable Diffusion models. Our approach enables high-quality reconstruction of missing architectural details and provides multi-style restoration outputs. The tool aims to facilitate the conservation, research, and digital representation of cultural heritage.
\end{abstract}

\section{Introduction}
With centuries of exposure to natural weathering, war, and urbanization, many historical structures have suffered irreversible damage. Traditional restoration techniques often involve subjective artistic reconstructions, manual editing, and high-cost conservation efforts. This project leverages AI-driven inpainting to automate and enhance architectural image restoration, improving both accuracy and accessibility.

\section{Methodology}
The system is structured around three key components:
\begin{itemize}
    \item \textbf{Automatic Image Restoration}: Utilizing a Stable Diffusion Inpainting model, users can mask damaged areas and input descriptive prompts to generate multiple reconstruction possibilities.
    \item \textbf{Style Transfer}: A pipeline for transforming restored images into architectural sketches, watercolor effects, pixel art, cyberpunk aesthetics, and HDR-enhanced images.
    \item \textbf{User Interface}: An interactive web-based tool with an intuitive canvas for region selection, parameter adjustments, and real-time visualization.
\end{itemize}

\begin{figure}[h]
    \centering
    \includegraphics[width=\linewidth]{restoration_pipeline.png}
    \caption{Overview of the AI-driven architectural inpainting process.}
\end{figure}

\section{Results and Evaluation}
The system was tested on over 1,000 historical images, demonstrating its ability to:
\begin{itemize}
    \item Preserve architectural symmetry and details.
    \item Generate multiple restoration hypotheses.
    \item Provide creative reinterpretations through style transfer.
\end{itemize}

\begin{figure}[h]
    \centering
    \includegraphics[width=\linewidth]{cyberpunk_transformation.png}
    \caption{Example of restored building transformed into cyberpunk style.}
\end{figure}

\section{Conclusion and Future Work}
This project showcases the potential of GenAI in architectural conservation, bridging the gap between AI-driven restoration and creative exploration. Future enhancements include:
\begin{itemize}
    \item Expanding the style transfer library.
    \item Developing AR applications for virtual heritage visualization.
    \item Collaborating with cultural organizations for real-world applications.
\end{itemize}

\vspace{5mm}
\noindent\textbf{Project Links}:\\
🔗 GitHub: \href{https://github.com/XiaoyuYuan19/AI-BII}{AI-BII Repository}\\
🎥 Demo Video: \href{https://www.youtube.com/watch?v=nnxlg_0Jbws}{YouTube}

\end{document}


## Project Overview
{{ page.details }}
