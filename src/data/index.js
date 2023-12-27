import { faker } from "@faker-js/faker";
const conversation = [
  {
   
    senderId: 'user1',
   
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Hey there!',
    createdAt: '2023-01-01T12:00:00Z',
  },
  {
   
    senderId: 'user2',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Hi John! How are you?',
    createdAt: '2023-01-01T12:05:00Z',
  },
  {
    senderId: 'user3',
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Hello John! Nice to meet you.',
    createdAt: '2023-01-01T12:10:00Z',
  },
  {
    
      senderId: 'user1',

    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Nice to meet you too, Alice!',
    createdAt: '2023-01-01T12:15:00Z',
  },
  {
   
      senderId: 'user2',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Hey Alice! How\'s it going?',
    createdAt: '2023-01-01T12:20:00Z',
  },
  {
   
      senderId: 'user3',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'I\'m doing well, Jane! Thanks for asking.',
    createdAt: '2023-01-01T12:25:00Z',
  },
  {
   
      senderId: 'user1',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'Alice, have you seen the latest movie?',
    createdAt: '2023-01-01T12:30:00Z',
  },
  {
   
      senderId: 'user3',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'No, I haven\'t. Is it good?',
    createdAt: '2023-01-01T12:35:00Z',
  },
  {
   
      senderId: 'user2',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'John, what do you think?',
    createdAt: '2023-01-01T12:40:00Z',
  },
  {
   
    senderId: 'user1',
    
    sentTo: 'room-a-1',
    contentType: 'text',
    message: 'I loved it! You should definitely watch it.',
    createdAt: '2023-01-01T12:45:00Z',
  },
];
const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const places = [
  {
    "id": 1,
    "title": "Cozy Cafe",
    "rating": 4.5,
    "address": "123 Main Street, Cityville",
    "description": "A warm and inviting cafe with a variety of coffee and pastries.",
    "category": "Cafe",
    "openTime": "8:00 AM - 6:00 PM",
    "avgSpendTime": 45
    },
    {
      "id": 2,
      "title": "Green Gardens Park",
      "rating": 4.8,
      "address": "456 Park Avenue, Townsville",
      "description": "A beautiful park with lush greenery, walking trails, and play areas for kids.",
      "category": "Park",
      "openTime": "6:00 AM - 8:00 PM",
      "avgSpendTime": 120
      },
      {
        "id": 3,
        "title": "Tech Haven Co-working",
        "rating": 4.2,
        "address": "789 Tech Street, Innovatown",
        "description": "A modern co-working space with high-speed internet and collaborative workspaces.",
        "category": "Co-working Space",
        "openTime": "9:00 AM - 7:00 PM",
        "avgSpendTime": 180
        },
        {
          "id": 4,
          "title": "Sunny Side Diner",
          "rating": 4.0,
          "address": "321 Sun Lane, Sunnyside",
          "description": "A classic diner serving breakfast, lunch, and dinner with a sunny atmosphere.",
          "category": "Diner",
          "openTime": "7:00 AM - 10:00 PM",
          "avgSpendTime": 60
          },
          {
            "id": 5,
            "title": "Bookworm Haven",
            "rating": 4.7,
            "address": "567 Library Street, Booksville",
            "description": "A cozy bookstore with a vast collection of books and a comfortable reading area.",
            "category": "Bookstore",
            "openTime": "10:00 AM - 8:00 PM",
            "avgSpendTime": 90
            },
            {
              "id": 6,
              "title": "FitZone Gym",
              "rating": 4.4,
              "address": "234 Fitness Avenue, Healthville",
              "description": "A fitness center with state-of-the-art equipment and personalized training programs.",
              "category": "Gym",
              "openTime": "6:00 AM - 9:00 PM",
              "avgSpendTime": 75
              },

              {
                "id": 7,
                "title": "Artistic Gallery",
                "rating": 4.6,
                "address": "876 Art Street, Creativitytown",
                "description": "An art gallery showcasing a diverse collection of paintings, sculptures, and installations.",
                "category": "Art Gallery",
                "openTime": "11:00 AM - 7:00 PM",
                "avgSpendTime": 120
                },
                {
                  "id": 8,
                  "title": "Chill Zone Lounge",
                  "rating": 4.3,
                  "address": "543 Relaxation Lane, Serenity City",
                  "description": "A laid-back lounge with comfortable seating, live music, and a variety of drinks.",
                  "category": "Lounge",
                  "openTime": "5:00 PM - 2:00 AM",
                  "avgSpendTime": 90
                  },
                  {
                    "id": 9,
                    "title": "Tech Trends Electronics",
                    "rating": 4.1,
                    "address": "987 Innovation Street, Tech Hub",
                    "description": "An electronics store offering the latest gadgets, devices, and tech accessories.",
                    "category": "Electronics Store",
                    "openTime": "10:00 AM - 6:00 PM",
                    "avgSpendTime": 45
                    },
                    {
                      "id": 10,
                      "title": "Gourmet Bites Restaurant",
                      "rating": 4.9,
                      "address": "210 Gourmet Lane, Culinaryville",
                      "description": "An upscale restaurant specializing in gourmet cuisine and fine dining experience.",
                      "category": "Restaurant",
                      "openTime": "6:00 PM - 11:00 PM",
                      "avgSpendTime": 150
                      }
]

export {
  ChatList,
  Chat_History,
  conversation,
  places
};
