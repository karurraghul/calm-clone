// File: src/data/mockData.ts
import { NavItem, Testimonial, BlogPost, FaqItem } from '../types';

export const navigationData: Record<string, NavItem[]> = {
  main: [
    { label: 'Sleep', href: '/sleep' },
    { label: 'Meditate', href: '/meditate' },
    { label: 'Music', href: '/music' },
    { label: 'Relax', href: '/relax' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' },
    { label: 'Meet our Instructors', href: '/instructors' },
    { label: 'Calm Science', href: '/science' },
  ],
  offers: [
    { label: 'Buy a Gift', href: '/gift' },
    { label: 'Redeem a Gift', href: '/redeem' },
    { label: 'Family Plan', href: '/family-plan' },
    { label: 'Calm Health', href: '/health' },
    { label: 'Calm for Organizations', href: '/organizations' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'CCPA Notice', href: '/ccpa' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Accessibility Statement', href: '/accessibility' },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Calm has changed my life. I sleep better and feel less stressed.',
    author: 'Sarah M.',
  },
  {
    id: 2,
    text: 'The guided meditations have helped me manage my anxiety tremendously.',
    author: 'James L.',
  },
  {
    id: 3,
    text: 'I use Calm every night before bed. It\'s become essential to my routine.',
    author: 'Emily R.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Build a Meditation Habit That Sticks',
    excerpt: 'Learn the science-backed ways to create a lasting meditation practice.',
    imageUrl: '/images/blog/meditation-habit.jpg',
    date: '2025-03-15',
    url: '/blog/meditation-habit',
  },
  {
    id: 2,
    title: 'Sleep Science: Why Good Sleep Matters',
    excerpt: 'Discover the latest research on sleep and how it affects your health.',
    imageUrl: '/images/blog/sleep-science.jpg',
    date: '2025-03-08',
    url: '/blog/sleep-science',
  },
  {
    id: 3,
    title: 'Mindfulness for Beginners: Getting Started',
    excerpt: 'Simple techniques to begin your mindfulness journey today.',
    imageUrl: '/images/blog/mindfulness-beginners.jpg',
    date: '2025-02-28',
    url: '/blog/mindfulness-beginners',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'What is Calm?',
    answer: 'Calm is the #1 app for mental fitness, designed to help you manage stress, sleep better, and live a happier, healthier life. It features guided meditations, Sleep Stories, breathing programs, stretching exercises, and relaxing music.',
    category: 'General',
  },
  {
    id: 2,
    question: 'Is Calm free?',
    answer: 'Calm offers both free and premium content. The free version includes timed meditation, breathing exercises, and select Sleep Stories. Calm Premium unlocks our full library of content and features.',
    category: 'General',
  },
  {
    id: 3,
    question: 'How do I meditate with Calm?',
    answer: 'Calm offers guided meditations ranging from beginner to advanced levels. Simply choose a meditation that fits your needs, find a comfortable position, and follow along with the guidance provided.',
    category: 'Meditation & Mindfulness',
  },
  {
    id: 4,
    question: 'How can Calm help with anxiety?',
    answer: 'Calm provides various tools to help manage anxiety, including guided meditations specifically for anxiety relief, breathing exercises, and calming music. Regular practice can help reduce stress and anxiety over time.',
    category: 'Stress & Anxiety',
  },
  {
    id: 5,
    question: 'What are Sleep Stories?',
    answer: 'Sleep Stories are soothing tales designed to help you fall asleep naturally. They use a combination of relaxing words, music, and sound effects to help quiet your mind and body for sleep.',
    category: 'Sleep',
  },
  {
    id: 6,
    question: 'What soundscapes does Calm offer?',
    answer: 'Calm offers a variety of nature soundscapes including rainfall, ocean waves, forest ambience, and more. These can be used for focus, relaxation, or sleep assistance.',
    category: 'Soundscapes',
  },
];