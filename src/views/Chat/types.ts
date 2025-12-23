interface SegmentBase {
  type: string;
  data: Record<string, any>;
}

export interface TextSegment extends SegmentBase {
  type: "text";
  data: {
    text: string;
  };
}

export interface ImageSegment extends SegmentBase {
  type: "image";
  data: {
    url: string;
    alt?: string;
  };
}

export type MessageSegment = TextSegment | ImageSegment;

export interface ChatItem {
  type: "message" | "notification";
  id: number;
  timestamp: number;

  // For type "message"
  senderId?: number;
  segments?: MessageSegment[];

  // For type "notification"
  notificationText?: string;
}
