import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
    next();
});

const hero = {
    title: 'Godavari Sankranthi Guide',
    subtitle: 'Plan a warm, festive trip across the Godavari region with food, temples, and village celebrations.',
    cta: ['Plan Your Visit', 'Explore Events', 'See Food Specials']
};

const places = [
    {
        id: 'dowleswaram-barrage',
        name: 'Dowleswaram Barrage',
        location: 'Rajahmundry',
        special: 'Sunset boat rides and river breeze during festival evenings.',
        bestTime: 'Jan 13-15, 4-7 PM',
        fact: 'Built across the Godavari, it lights up beautifully for Sankranthi.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'papikondalu',
        name: 'Papi Kondalu',
        location: 'Near Rajahmundry',
        special: 'Scenic hill views with festive river cruises.',
        bestTime: 'Jan 12-14, Morning cruises',
        fact: 'The hills form a narrow gorge that looks like a partition.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'kadiyapulanka',
        name: 'Kadiyapulanka Nurseries',
        location: 'Kadiyapulanka, East Godavari',
        special: 'Flower fields and plant shopping spree.',
        bestTime: 'Jan 11-16, 8 AM - 5 PM',
        fact: 'Locals decorate homes with these flowers for Bhogi.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'
    }
];

const foods = [
    {
        id: 'ariselu',
        name: 'Ariselu',
        location: 'Across Godavari',
        special: 'Sweet rice cakes fried in ghee.',
        bestTime: 'Bhogi & Sankranthi mornings',
        fact: 'Made fresh with new rice flour and jaggery.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'bobbatlu',
        name: 'Bobbatlu / Puran Poli',
        location: 'Rajahmundry & villages',
        special: 'Soft flatbread stuffed with sweet dal.',
        bestTime: 'Jan 15 lunch',
        fact: 'Served with ghee for festive lunches.',
        image: 'https://images.unsplash.com/photo-1604908177446-07c30566a7a5?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'gongura-pulihora',
        name: 'Gongura Pulihora',
        location: 'East & West Godavari',
        special: 'Tangy rice with gongura leaves and peanuts.',
        bestTime: 'Jan 14 dinner',
        fact: 'Pairs well with fresh curd after kite flying.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    }
];

const events = [
    {
        id: 'bhogi-mantalu',
        name: 'Bhogi Mantalu',
        place: 'Across villages',
        date: 'Jan 13, 5 AM',
        description: 'Community bonfire with drum beats and kolam (rangoli).',
        fact: 'Locals jump around the fire for good luck.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'gangireddulu',
        name: 'Gangireddulu Procession',
        place: 'Amalapuram & villages',
        date: 'Jan 14, 9 AM',
        description: 'Decorated oxen with folk music visiting houses.',
        fact: 'Kids get sweets and sugarcane from the troupe.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'kite-fest',
        name: 'Kite Flying by the River',
        place: 'Rajahmundry riverfront',
        date: 'Jan 15, 3 PM',
        description: 'Families fly colorful kites along the Godavari breeze.',
        fact: 'Local vendors sell bright kites near Pushkar ghats.',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'
    }
];

const temples = [
    {
        id: 'ananthapalli',
        name: 'Lord Sri Venkateswara Temple',
        location: 'Ananthapalli, West Godavari',
        special: 'Peaceful village temple with festive pradakshina.',
        bestTime: 'Jan 14 early morning',
        fact: 'Locals offer sugarcane and new rice to the deity.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'ananthapalli-amma',
        name: 'Sri Anjaneya Swamy Temple',
        location: 'Ananthapalli, West Godavari',
        special: 'Colorful alankaram and drum welcome.',
        bestTime: 'Jan 15 evening',
        fact: 'Villagers light rows of lamps around the temple.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'draksharamam',
        name: 'Draksharamam Temple',
        location: 'Draksharamam',
        special: 'Pancharama kshetram with deep history.',
        bestTime: 'Jan 14, 6-9 AM',
        fact: 'Prasadam counters serve warm pulihora.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    }
];

const travelPlan = [
    {
        day: 'Jan 12',
        title: 'Arrival & Riverfront Walk',
        plan: [
            'Check-in at Rajahmundry',
            'Evening Godavari boat ride',
            'Dinner with gongura specials'
        ]
    },
    {
        day: 'Jan 13 - Bhogi',
        title: 'Bonfire & Nurseries',
        plan: [
            '5 AM Bhogi mantalu at local street',
            'Visit Kadiyapulanka nurseries',
            'Sunset at Dowleswaram barrage'
        ]
    },
    {
        day: 'Jan 14 - Sankranthi',
        title: 'Temple Trail & Village Events',
        plan: [
            'Morning darshan at Draksharamam',
            'Lunch with Bobbatlu and Ariselu',
            'Evening Gangireddulu procession'
        ]
    },
    {
        day: 'Jan 15 - Kanuma',
        title: 'Kites & Countryside',
        plan: [
            'Kite flying by the river',
            'Village bullock cart ride',
            'Street food crawl at night'
        ]
    }
];

const contactMessages = [];

app.get('/api/hero', (_req, res) => {
    res.json(hero);
});

app.get('/api/places', (_req, res) => {
    res.json(places);
});

app.get('/api/foods', (_req, res) => {
    res.json(foods);
});

app.get('/api/events', (_req, res) => {
    res.json(events);
});

app.get('/api/temples', (_req, res) => {
    res.json(temples);
});

app.get('/api/plan', (_req, res) => {
    res.json(travelPlan);
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }
    const entry = {
        id: contactMessages.length + 1,
        name,
        email,
        message,
        receivedAt: new Date().toISOString()
    };
    contactMessages.push(entry);
    console.log(`✓ Contact message received from: ${name} (${email})`);
    res.json({ ok: true, received: entry });
});

// Fetch contact messages (in-memory, resets on restart)
app.get('/api/contact', (_req, res) => {
    res.json(contactMessages);
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API server running on http://localhost:${PORT}`);
});
