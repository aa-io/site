import { NextRequest } from 'next/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { POST } from '@/app/api/chat/route';

// Mock the AI SDK
vi.mock('ai', () => ({
  convertToModelMessages: vi.fn(),
  streamText: vi.fn(),
  smoothStream: vi.fn(),
  stepCountIs: vi.fn(),
}));

// Mock the OpenAI provider
vi.mock('@ai-sdk/openai', () => ({
  openai: vi.fn(),
}));

// Mock the environment validation
vi.mock('@/app/lib/env', () => ({
  validateEnv: vi.fn(),
}));

// Mock the system prompt and tools
vi.mock('@/app/api/chat/system-prompt', () => ({
  systemPrompt: 'Test system prompt',
}));

vi.mock('@/app/api/chat/tools', () => ({
  tools: {},
}));

describe('Chat API Route', () => {
  let mockRequest: NextRequest;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 400 for missing messages', async () => {
    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(400);

    const responseText = await response.text();
    expect(responseText).toBe('Invalid request: messages array required');
  });

  it('should return 400 for invalid messages format', async () => {
    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: 'invalid' }),
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(400);

    const responseText = await response.text();
    expect(responseText).toBe('Invalid request: messages array required');
  });

  it('should return 400 for null messages', async () => {
    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: null }),
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(400);

    const responseText = await response.text();
    expect(responseText).toBe('Invalid request: messages array required');
  });

  it('should process valid messages array', async () => {
    const mockMessages = [
      { id: '1', role: 'user', content: 'Hello' },
      { id: '2', role: 'assistant', content: 'Hi there!' },
    ];

    // Mock the AI SDK functions
    const { convertToModelMessages, streamText } = await import('ai');
    const mockConvertToModelMessages = convertToModelMessages as any;
    const mockStreamText = streamText as any;

    mockConvertToModelMessages.mockReturnValue(mockMessages);
    mockStreamText.mockReturnValue({
      toUIMessageStreamResponse: vi.fn().mockReturnValue(new Response('mocked stream')),
    });

    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: mockMessages }),
    });

    const response = await POST(mockRequest);

    // Should call convertToModelMessages with the messages
    expect(mockConvertToModelMessages).toHaveBeenCalledWith(mockMessages);

    // Should call streamText with proper configuration
    expect(mockStreamText).toHaveBeenCalledWith(
      expect.objectContaining({
        messages: mockMessages,
        system: 'Test system prompt',
        tools: {},
        temperature: 0.7,
      }),
    );

    // Should return a successful response
    expect(response).toBeInstanceOf(Response);
  });

  it('should handle OpenAI API key error', async () => {
    const mockMessages = [{ id: '1', role: 'user', content: 'Hello' }];

    // Mock the AI SDK functions to throw OpenAI error
    const { convertToModelMessages, streamText } = await import('ai');
    const mockConvertToModelMessages = convertToModelMessages as any;
    const mockStreamText = streamText as any;

    mockConvertToModelMessages.mockReturnValue(mockMessages);
    mockStreamText.mockImplementation(() => {
      throw new Error('OPENAI_API_KEY not configured');
    });

    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: mockMessages }),
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(500);

    const responseText = await response.text();
    expect(responseText).toBe('OpenAI API key not configured');
  });

  it('should handle general errors', async () => {
    const mockMessages = [{ id: '1', role: 'user', content: 'Hello' }];

    // Mock the AI SDK functions to throw general error
    const { convertToModelMessages, streamText } = await import('ai');
    const mockConvertToModelMessages = convertToModelMessages as any;
    const mockStreamText = streamText as any;

    mockConvertToModelMessages.mockReturnValue(mockMessages);
    mockStreamText.mockImplementation(() => {
      throw new Error('Something went wrong');
    });

    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: mockMessages }),
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(500);

    const responseText = await response.text();
    expect(responseText).toBe('Internal server error');
  });

  it('should handle malformed JSON', async () => {
    mockRequest = new NextRequest('http://localhost/api/chat', {
      method: 'POST',
      body: 'invalid json',
    });

    const response = await POST(mockRequest);
    expect(response.status).toBe(500);

    const responseText = await response.text();
    expect(responseText).toBe('Internal server error');
  });
});
