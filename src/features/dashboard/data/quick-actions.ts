export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
}

export const quickActions: QuickAction[] = [
  {
    title: "Create a Tutorial",
    description: "Produce step-by-step guides with engaging AI narration",
    gradient: "from-emerald-400 to-emerald-50",
    href: "/text-to-speech?text=Welcome to this tutorial. We're going to walk through everything you need to know, one step at a time. Don't worry if you're new to this — I'll explain each concept clearly. By the end, you'll have the confidence to do this on your own. Let's get started.",
  },
  {
    title: "Announce an Event",
    description: "Broadcast event details with professional AI voice talent",
    gradient: "from-rose-500 to-rose-100",
    href: "/text-to-speech?text=Attention everyone. We're thrilled to announce the Tech Summit 2025 — a three-day conference featuring industry leaders, cutting-edge workshops, and networking opportunities you won't find anywhere else. Registration opens next Monday. Early bird tickets get a thirty percent discount. Mark your calendars now.",
  },
  {
    title: "Produce an Audiobook",
    description: "Transform written stories into captivating audio experiences",
    gradient: "from-indigo-500 to-indigo-100",
    href: "/text-to-speech?text=The lighthouse keeper had been alone for forty years, watching the same horizon every single dawn. Today, something was different. A boat — battered and drifting — appeared through the fog. He grabbed his coat without thinking. Some promises, he knew, transcend time itself.",
  },
  {
    title: "Voice Customer Support",
    description: "Deliver helpful responses with warm, human-like AI voices",
    gradient: "from-amber-400 to-amber-100",
    href: "/text-to-speech?text=Hello, thank you for contacting us. I'm here to help with any questions you might have. We value your business and want to make sure you're completely satisfied. Whether you need technical assistance or have billing questions, I've got you covered. What can I help you with today?",
  },
  {
    title: "Launch a Trailer",
    description: "Generate compelling announcements for upcoming releases",
    gradient: "from-teal-500 to-teal-100",
    href: "/text-to-speech?text=Coming this summer. A story about courage, sacrifice, and redemption. Follow one hero's journey across impossible odds. Witness jaw-dropping action sequences. Experience plot twists you never saw coming. This is cinema at its finest. Coming to theaters everywhere. June 15th. You don't want to miss this.",
  },
  {
    title: "Record a Voicemail",
    description: "Leave professional messages with natural-sounding AI voices",
    gradient: "from-fuchsia-400 to-fuchsia-100",
    href: "/text-to-speech?text=Hi, thanks for reaching out. I'm currently unavailable, but your message is important to me. Please leave your name, number, and a brief message, and I'll get back to you as soon as possible. Have a great day.",
  },
];
