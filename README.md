Here’s the updated `README.md` with the updated title:

---

# 🖼️ InstaX1000: AI Image Captioning for Instagram

An intelligent agent that generates captions for images using AI and uploads them to Instagram with just an image URL and a caption. Built using the powerful [Upstreet.ai USDK](https://docs.upstreet.ai/), this project leverages advanced agent-based development to simplify and automate social media management.

---

## 🎥 Video Demo

Check out a quick [video demonstration](https://www.loom.com/share/6d7bc7ee0be94b91b49f5d0e2b3141db) of the InstaX1000 Agent in action!

---

## 📋 Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Example Interactions](#example-interactions)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## 🚀 Features

- **AI-Powered Captions**: Generates creative and relevant captions for your images, including hashtags.
- **Instagram Uploads**: Automates posting images to Instagram with the generated captions.
- **Flexible Configuration**: Allows custom captions to be passed for uploads.
- **Powered by Upstreet.ai**: Developed using the Upstreet.ai USDK, enabling efficient agent-based implementation.

---

## 🛠️ Requirements

1. **Node.js**: Ensure you have Node.js installed (v14 or higher is recommended).
2. **Instagram Account**: The agent uses Instagram's private API for posting.
3. **OpenAI API Key**: Required for generating captions using AI.
4. **Publicly Accessible Image URLs**: Images must be accessible via a direct link.

---

## 🔧 Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/instax1000-agent.git
   cd instax1000-agent
   ```

2. **Install Dependencies**:
   Install the necessary packages for the project:
   ```bash
   npm install instagram-private-api axios openai
   ```
   The following dependencies will be installed:
   - **[`instagram-private-api`](https://www.npmjs.com/package/instagram-private-api)**: Provides seamless interaction with Instagram's private API.
   - **[`axios`](https://www.npmjs.com/package/axios)**: Used for HTTP requests.
   - **[`openai`](https://www.npmjs.com/package/openai)**: Integrates the OpenAI API for generating captions using AI.

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   GPT_API_KEY=your_openai_api_key
   IG_USERNAME=your_instagram_username
   IG_PASSWORD=your_instagram_password
   ```

4. **Start the Agent**:
   ```bash
   usdk start
   ```

---

## 📖 Usage

1. **Generate Captions**:
   - Provide an image URL, and the agent will generate a caption with hashtags using OpenAI.

2. **Upload to Instagram**:
   - Pass an image URL and a custom caption to upload it directly to Instagram.

---

## 💡 About Upstreet.ai

This project was developed using [Upstreet.ai's USDK](https://docs.upstreet.ai/), which provides a robust framework for building agent-based applications. USDK simplifies the development of conversational bots and automated agents, allowing seamless integration with platforms like Instagram and OpenAI. For more information, refer to their [official documentation](https://docs.upstreet.ai/).

---

## 📞 Environment Variables

| Variable           | Description                               | Example Value             |
|--------------------|-------------------------------------------|---------------------------|
| `GPT_API_KEY`      | OpenAI API key for AI caption generation | `sk-xxxxxxxxxxxxxxxxxxx` |
| `IG_USERNAME`      | Instagram username                       | `your_username`           |
| `IG_PASSWORD`      | Instagram password                       | `your_password`           |

---

## 📊 Example Interactions

### Generate a Caption
```json
{
  "imageUrl": "https://example.com/path-to-image.jpg"
}
```

**Agent Response**:
```
Here's the relevant caption: "A majestic view of nature 🌿 #NatureLovers #Serenity #NaturePhotography"
```

---

### Upload to Instagram
```json
{
  "imageUrl": "https://example.com/path-to-image.jpg",
  "caption": "A beautiful sunset 🌇 #SunsetLovers #Nature"
}
```

**Agent Response**:
```
Successfully uploaded the image to Instagram! Post ID: 123456789012345
```

---

## ❓ Troubleshooting

1. **Instagram Login Issues**:
   - Ensure your username and password are correct.
   - Disable two-factor authentication on the Instagram account if enabled.

2. **OpenAI API Key Not Working**:
   - Verify that your API key is valid and has sufficient credits.

3. **Image URL Not Working**:
   - Ensure the image URL is publicly accessible.

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it for personal or commercial purposes.

---

Let me know if you need any additional edits!