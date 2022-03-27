interface Chat {
  id: string;
  participants: string[];
  messages: ChatMessage[];
}

interface ChatMessage {
  id: string;
  from: string;
  to: string;
  type: "text" | "image" | "video" | "audio";
  content: string;
  timestamp: number;
}
