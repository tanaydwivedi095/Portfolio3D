export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'A hybrid CNN with transfer learning for skin cancer disease detection',
    position: 'Springer Medical and Biological Engineering and Computing',
    img: 'assets/springer.png',
    review:
      'Skin Cancer, a leading cause of cancer deaths, demands early detection for effective treatment. Our hybrid CNN model with transfer learning and a random forest classifier achieved 90.11% accuracy on skin lesion datasets, proving its effectiveness.',
  },
  {
    id: 2,
    name: 'LViT model for Skin Cancer Classification',
    position: 'Springer International Journal of System Assurance Engineering and Management',
    img: 'assets/springer.png',
    review:
      'Skin Cancer affects millions globally, making early detection vital. Our lightweight B-16 Vision Transformer achieves up to 95.82% accuracy in skin lesion classification, offering a resource-efficient solution for diagnosis.',
  },
];

export const myProjects = [
  {
    title: 'Nutrition Bot',
    desc: 'Nutrition Bot is an AI-driven solution designed to simplify nutrition information retrieval. Finding accurate details about macros and food nutrition was often tedious, with unreliable sources providing conflicting data. To address this, I aimed to create an intelligent bot capable of extracting, verifying, and presenting nutritional information in a clear and accessible manner.',
    subdesc:
      'To achieve this, I employed Retrieval-Augmented Generation (RAG) by sourcing data from multiple books, consolidating relevant information, and cross-checking its accuracy. This processed data was then fed into a language model to generate precise and comprehensible responses. The bot was built using Python, PyTorch, Hugging Face, and OpenAI, ensuring seamless integration of deep learning and natural language processing to deliver accurate and contextually relevant nutrition insights.',
    href: 'https://github.com/tanaydwivedi095/nutritionRAG',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'Hugging Face',
        path: '/assets/huggingFace.svg',
      },
      {
        id: 4,
        name: 'OpenAI',
        path: '/assets/gpt.png',
      },
    ],
  },
  {
    title: 'Story Book Generator',
    desc: 'Story Book Generator is an AI-powered platform designed to create personalized children\'s storybooks. Crafting unique and engaging stories can be time-consuming, making it challenging for parents and educators to provide fresh narratives. This tool addresses that by generating customized stories based on user-defined inputs, ensuring an effortless and enjoyable storytelling experience.',
    subdesc:
      'To build this solution, I utilized LLM-based text generation to create stories tailored to inputs such as title, genre, themes, and characters. The system was developed using Python, Gradio, PyTorch, and OpenAI, enabling seamless interaction and real-time story generation. By integrating these technologies, the platform efficiently produces engaging and imaginative stories, making storytelling more accessible and dynamic.',
    href: 'https://github.com/tanaydwivedi095/storyGenerator',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'OpenAI',
        path: '/assets/gpt.png',
      },
      {
        id: 4,
        name: 'Gradio',
        path: '/assets/gradio.png',
      },
    ],
  },
  {
    title: 'Movie Transcription System',
    desc: 'Movie Transcription System is an AI-driven solution designed to generate accurate transcripts from video content. Understanding spoken audio in videos can often be challenging due to accents, background noise, or unclear speech. To address this, I developed a system that efficiently transcribes video audio into text, improving accessibility and content comprehension.',
    subdesc:
      'To achieve this, I first separated the video and audio components, then preprocessed the audio to reduce noise and enhance clarity. The cleaned audio was then processed using OpenAI Whisper, a state-of-the-art speech-to-text model, to generate precise transcriptions. The system was built using Python, PyTorch, OpenAI, and Streamlit, ensuring a user-friendly interface for seamless video transcription.',
    href: 'https://github.com/tanaydwivedi095/movieSubtitleGenerator',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'OpenAI',
        path: '/assets/gpt.png',
      },
      {
        id: 4,
        name: 'Streamlit',
        path: '/assets/streamlit.png',
      },
    ],
  },
  {
    title: 'Skin Cancer Classification System',
    desc: 'Skin Cancer Classification System is an AI-powered diagnostic tool designed to classify skin cancer lesions as Malignant or Benign. Identifying skin cancer at an early stage is crucial, but manual diagnosis can be challenging and time-consuming. This system aids in early detection by providing an initial classification with confidence scores, enabling timely medical intervention to prevent the progression of benign lesions into malignant ones.',
    subdesc:
      'To develop this system, I leveraged transfer learning and transformer models to enhance accuracy in lesion classification. Pretrained deep learning models were fine-tuned on medical imaging datasets to detect patterns and classify skin lesions effectively. The system was built using Python, TensorFlow, PyTorch, and Streamlit, ensuring a robust backend for model inference and a user-friendly interface for seamless image uploads and instant classification results.',
    href: 'https://github.com/tanaydwivedi095/Streamlit-UI-for-Skin-Cancer-Predictions',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'Tensorflow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 4,
        name: 'Streamlit',
        path: '/assets/streamlit.png',
      },
    ],
  },
  {
    title: 'Stock Price Predictor',
    desc: 'Stock Price Prediction is an AI-driven system designed to forecast future stock prices for over 500 companies. Financial markets are highly volatile, and accurate predictions can provide valuable insights for traders and analysts. This system helps investors make informed decisions by leveraging historical stock data and statistical patterns to generate reliable price forecasts.',
    subdesc:
      'To develop this solution, I implemented Long Short-Term Memory (LSTM) networks, a deep learning architecture well-suited for time-series forecasting. The model was trained on historical stock price data to capture trends and fluctuations, enabling it to generate precise future price predictions. Built using Python and TensorFlow, the system ensures robust performance and scalability for real-world financial analysis.',
    href: 'https://github.com/tanaydwivedi095/Stock-Price-Prediction-Algorithm',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
    ],
  },
  {
    title: 'Movie Recommendation System',
    desc: 'Movie Recommendation System is an intelligent recommendation engine designed to suggest movies based on user preferences such as genre, release timeline, and director. With the vast number of movies available, selecting the right one can be overwhelming. This system simplifies the process by providing personalized recommendations, enhancing the user’s viewing experience.',
    subdesc:
      'To achieve this, I implemented cosine similarity, a mathematical approach to measure the closeness between movies based on multiple attributes. By comparing user preferences with existing movie data, the system efficiently finds and recommends similar films. Developed using Python and Scikit-Learn, this solution ensures accurate and relevant movie suggestions, making it easier for users to discover their next favorite film.',
    href: 'https://github.com/tanaydwivedi095/Project-Movie-Recommendation-System',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Accenture',
    pos: 'Associate Software Engineer',
    duration: 'Sept 2024 - Present',
    title: "I’m an Associate Software Engineer at Accenture, specializing in Big Data technologies like Hadoop, Kafka, PySpark, Python, HQL, Hive, and SQL. I focus on building scalable data pipelines and real-time analytics solutions.",
    icon: '/assets/accenture.svg',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Acmegrade',
    pos: 'Machine Learning Intern',
    duration: 'July 2022 - Sept 2022',
    title: "Machine Learning Intern at Acmegrade, contributing to projects that improved operational efficiency through machine learning solutions.",
    icon: '/assets/acmegrade.png',
    animation: 'clapping',
  },
];
