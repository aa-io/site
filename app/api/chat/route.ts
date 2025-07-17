import {
  type InferUITools,
  type UIDataTypes,
  type UIMessage,
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
} from 'ai';
import { NextRequest } from 'next/server';
import { validateEnv } from '@/app/lib/env';
import { openai } from '@ai-sdk/openai';
import { systemPrompt } from './system-prompt';
import { tools } from './tools';

// Validate environment on startup
validateEnv();

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request: messages array required', { status: 400 });
    }

    // Convert UI messages to model messages
    const modelMessages = convertToModelMessages(messages);

    // Stream the response with tools
    const result = streamText({
      model: openai('gpt-4-turbo'),
      messages: modelMessages,
      system: systemPrompt,
      tools,
      stopWhen: stepCountIs(5),
      temperature: 0.7,
      experimental_transform: smoothStream({ chunking: 'word' }),
      onStepFinish: ({ text, toolCalls, toolResults, finishReason, usage }) => {},
    });

    // Return the stream response
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);

    if (error instanceof Error && error.message.includes('OPENAI_API_KEY')) {
      return new Response('OpenAI API key not configured', { status: 500 });
    }

    return new Response('Internal server error', { status: 500 });
  }
}

// Optional: Handle OPTIONS for CORS if needed
export async function OPTIONS(req: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;
