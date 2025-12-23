const firstNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Luna",
  "Mason",
  "Nora",
  "Oscar",
  "Paula",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas"
];

const lastNames = [
  "Johnson",
  "Smith",
  "Williams",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin"
];

const messages = [
  "Hey, you there?",
  "Call me later!",
  "I'm on my way.",
  "What do you think?",
  "Let me know!",
  "Sounds good to me.",
  "Where are you now?",
  "Wait a second.",
  "Did you see that?",
  "Text me back.",
  "I'm outside.",
  "Hold on a bit.",
  "That's fine.",
  "No problem!",
  "I agree with you.",
  "Can we talk?",
  "Almost ready.",
  "I'm free now.",
  "That's interesting.",
  "Message received.",
  "Be right back.",
  "Don't worry.",
  "I'll check it.",
  "Let's do it!",
  "See you soon.",
  "I was thinking about the plan you mentioned earlier, and it actually sounds pretty good.",
  "Let me finish something quickly and I'll get back to you with all the details soon.",
  "I’m not completely sure what the issue is, but I’ll take a closer look tonight.",
  "Thanks for letting me know! I’ll try to sort everything out before tomorrow.",
  "I checked the schedule again, and it seems like we might need to adjust the timing a bit.",
  "I really liked the idea you suggested, so let’s discuss it more when you're free.",
  "Sorry for the late reply, I’ve been a bit busy but I didn’t forget what you said.",
  "If you want, I can send you the full document later so you can read everything clearly.",
  "I think there might be a better solution to this, but I need some time to test it first.",
  "Honestly, I didn't expect things to turn out this way, but I think it’s all manageable.",
  "Thanks again for helping me out earlier, I truly appreciate the effort you put in.",
  "I'll try to explain everything step by step so it’s easier to understand.",
  "I read through your message twice and it actually makes a lot more sense now.",
  "Let me double-check a few things before giving you a final answer.",
  "The update should fix most of the issues, but let me know if anything still feels off.",
  "I'll send the files once I get home, my connection is too slow right now.",
  "There’s something important I want to talk about, but it can wait until you're free.",
  "I completely understand what you mean, and honestly I feel the same way.",
  "Just wanted to let you know that everything went well on my side.",
  "The meeting took longer than expected, but I’ll update you soon.",
  "It's not urgent, but I would appreciate it if you could check it today.",
  "I’ll summarize the key points for you so you don’t have to read everything.",
  "It’s been a long day, but I’m finally done with everything now.",
  "Your suggestion helped a lot, so thank you for pointing it out.",
  "Let me know if you need anything else, I'm still online."
];

function randomId() {
  return Math.random().toString(36).substring(2, 10);
}

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createMockContacts(length: number) {
  const contacts = [];
  for (let i = 0; i < length; i++) {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);
    contacts.push({
      id: randomId(),
      firstName,
      lastName
    });
  }
  return contacts;
}

function createMockChats(length: number) {
  const chats = [];
  for (let i = 0; i < length; i++) {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);
    chats.push({
      id: randomId(),
      firstName,
      lastName,
      lastMessage: randomItem(messages),
      timestamp: new Date(Date.now() - i * i * 5 * 60 * 10000)
    });
  }
  return chats;
}

export { createMockContacts, createMockChats };
