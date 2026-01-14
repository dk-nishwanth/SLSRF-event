
import React from 'react';
import { NavItem, NewsItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'AGENDA', href: '#agenda' },
  { label: 'SPEAKERS', href: '#speakers' },
  { label: 'LOCATION', href: '#location' },
  { label: 'CONTACT', href: '#contact' },
];

export const SPEAKERS = [
  {
    name: 'Thiru. Jeyachandran Srinivasan',
    role: 'Founder & Chairman',
    company: 'Social Entrepreneur & Thought Leader',
    image: '/components/assets/jc.png'
  }
];

export const PARTNERSHIP_ENQUIRIES = [
  {
    name: 'Research Support',
    role: 'Foundation Inquiries',
    phone: '+91 6383499920',
    email: 'hello@slsrf-research-foundation.com'
  }
];

export const DELEGATE_REGISTRATION = {
  name: 'Community Support',
  role: 'General Enquiries',
  phone: '+91 6383499920',
  email: 'info@slsrf-research-foundation.com'
};

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200', // Conference event with audience
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200', // Business networking event
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200', // Team celebration
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200', // Award ceremony/celebration
];

export const NEWS: NewsItem[] = [
  {
    title: 'PhytoVault: Digitizing Ancient Flora',
    date: 'Dec 2025',
    excerpt: 'Our AI-powered repository for medicinal plants reaches a milestone in blockchain security.',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1532187875605-1ef6c237dbc4?auto=format&fit=crop&q=80&w=800'
  }
];
