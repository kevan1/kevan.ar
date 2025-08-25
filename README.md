# Kevan's Developer Portfolio

A modern, minimalist developer portfolio website built with Next.js, featuring an AI-powered chatbot assistant, dark mode support, and a blog system. The site is designed to be clean, functional, and user-friendly while effectively showcasing projects and skills.

![Portfolio Preview](/public/kevan-ar.png)

## 🌟 Key Features

- **AI-Powered Chatbot**: Interactive assistant trained on portfolio content using LangChain and OpenAI
- **Minimalist UI**: Clean design built with Shadcn UI components
- **Dark/Light Mode**: Theme toggle for comfortable viewing in any environment
- **Blog System**: MDX-based blog with syntax highlighting and markdown support
- **Projects Showcase**: Clean grid layout for featuring development projects
- **Contact Form**: Integrated email contact system
- **Mobile Responsive**: Fully responsive design across all devices
- **Professional Timeline**: Career and education history visualization

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [Shadcn UI](https://ui.shadcn.com/)
- **AI Integration**: 
  - [LangChain](https://js.langchain.com/) for chat functionality
  - OpenAI API for natural language processing
  - AstraDB for vector storage
  - Upstash Redis for caching
- **Content**: MDX for blog posts
- **Analytics**: Vercel Analytics and Speed Insights
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version)
- PNPM package manager
- OpenAI API key
- Upstash Redis instance
- AstraDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd kevan.ar
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   ASTRA_DB_ID=your_astra_db_id
   ASTRA_DB_REGION=your_astra_region
   ASTRA_DB_APPLICATION_TOKEN=your_astra_token
   ```

4. Generate embeddings and build:
   ```bash
   pnpm run build
   ```

5. Start development server:
   ```bash
   pnpm run dev
   ```

## 💡 Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and shared code
- `/content` - MDX blog posts and content
- `/public` - Static assets
- `/scripts` - Build and generation scripts

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/kevan1/kevan.ar/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Visit my portfolio's [Contact page](htttps://kevan.ar/contact)
- Connect through my social links on the portfolio

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [Vercel](https://vercel.com) for hosting
- [LangChain](https://js.langchain.com/) for AI integration
- Community feedback and support
