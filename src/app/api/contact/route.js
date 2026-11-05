import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), '.contact_submissions.json');

function getSubmissions() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed reading submissions:', err);
  }
  return [];
}

function saveSubmission(item) {
  try {
    const list = getSubmissions();
    list.unshift(item);
    fs.writeFileSync(DATA_FILE, JSON.stringify(list.slice(0, 50), null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed saving submission:', err);
  }
}

export async function GET() {
  const submissions = getSubmissions();
  return NextResponse.json({
    status: 'online',
    serverTimestamp: new Date().toISOString(),
    totalInquiries: submissions.length,
    recentTopics: submissions.slice(0, 3).map(s => s.topic || 'General'),
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, topic, role, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const newEntry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      topic: topic || 'FIEA Portfolio Discussion',
      role: role || 'Visitor',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    saveSubmission(newEntry);

    return NextResponse.json({
      success: true,
      message: 'Message delivered successfully! Thank you for connecting.',
      inquiryId: newEntry.id,
      timestamp: newEntry.timestamp,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
