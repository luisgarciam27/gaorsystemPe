import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
  tags?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: React.ElementType;
  primary?: boolean;
}