import React from 'react';
import { Agent, Action, DiscordBot } from 'react-agents';
import { z } from 'zod';
import OpenAI from 'openai';
import { IgApiClient } from 'instagram-private-api';
import request from 'request-promise';

const openai = new OpenAI({
  apiKey: "GPT_API_KEY",
});

// Analyze image using OpenAI
const analyzeImageUrl = async (imageUrl) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Create a caption for this image for instagram post with 5 relevant hashtags." },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
  });

  if (response.choices && response.choices.length > 0) {
    return response.choices[0].message.content;
  } else {
    throw new Error("Failed to analyze the image.");
  }
};

// Upload image to Instagram
const uploadToInstagram = async (imageUrl, caption) => {
  const ig = new IgApiClient();

  // Generate the device using your username
  ig.state.generateDevice("YOUR_USERNAME");

  // Log in to Instagram
  const auth = await ig.account.login("YOUR_USERNAME", "YOUR_PASSWORD");

  if (!auth) {
    throw new Error('Instagram login failed. Please check your credentials.');
  }

  // Get the image as a Buffer
  const imageBuffer = await request({
    url: imageUrl,
    encoding: null, // Required to get the response as a Buffer
  });

  // Publish the photo
  const publishResult = await ig.publish.photo({
    file: imageBuffer, // Pass the image buffer
    caption: caption || '', // Add a caption
  });

  return publishResult;
};

// Pokedex Assistant Component
const InstaX1000 = () => {
  return (
    <>
      <Action
        name="analyzeImage"
        description="Create a caption for image using it's URL for instagram post with 5 relevant hashtags."
        schema={z.object({
          imageUrl: z.string(),
        })}
        examples={[
          {
            imageUrl:
              "https://cdn.discordapp.com/attachments/1307336237014581370/1307336262730121247/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.png",
          },
        ]}
        handler={async (e) => {
          const { imageUrl } = e.data.message.args;

          try {
            const analysis = await analyzeImageUrl(imageUrl);
            await e.data.agent.monologue(
              `Here's the relevant caption of the image you sent I found in the image: ${analysis}`
            );
          } catch (error) {
            await e.data.agent.monologue(
              `Oops! Something went wrong while analyzing the image: ${error.message}`
            );
          }
        }}
      />

      <Action
        name="uploadToInstagram"
        description="Upload an image to Instagram with a caption"
        schema={z.object({
          imageUrl: z.string(),
          caption: z.string(),
        })}
        examples={[
          {
            imageUrl: 'https://fastly.picsum.photos/id/659/2731/1536.jpg?hmac=jwFueQ8WaCS2sR6LVKFGQ3-emm0_HqHEOhQDt8AzHyQ',
            caption: 'A beautiful random photo! 🌟',
          },
        ]}
        handler={async (e) => {
          const { imageUrl, caption } = e.data.message.args;

          try {
            const result = await uploadToInstagram(imageUrl, caption);
            await e.data.agent.monologue(
              `Successfully uploaded the image to Instagram! Post ID: ${result.media.pk}`
            );
          } catch (error) {
            await e.data.agent.monologue(`Error uploading to Instagram: ${error.message}`);
          }
        }}
      />
    </>
  );
};

export default function MyAgent() {
  return (
    <Agent>
      <InstaX1000 />
    </Agent>

  );
}
