import React, { useState, useMemo, useEffect } from 'react';

// --- SVG ICONS ---
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const UniversityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-6v-1a6 6 0 00-9-5.197" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const BadgeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const SwitchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-8h1m-5 8h1m-1-4h1" /></svg>;
const UserGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.284-1.255-.778-1.682M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.284-1.255.778-1.682M12 15a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const StoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
const CustomerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const MentorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.284-1.255-.778-1.682M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.284-1.255.778-1.682M12 15a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const UpvoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>;
const CommentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const OrgChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10v4M7 10v4M11 10v4M15 10v4M19 10v4M5 8h14M5 16h14M12 4v4m0 8v4" /></svg>;
const ListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
const ZoomInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3h-6" /></svg>;
const ZoomOutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>;
const RefreshIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M20 4h-5v5M4 20h5v-5" /></svg>;


// --- MOCK DATA ---
const launchPlanData = {
    'Week 1: Foundation': [
        { id: 1, text: 'Complete HR paperwork & IT setup', completed: false },
        { id: 2, text: 'Welcome video from CEO, Pak Teguh', completed: false },
        { id: 3, text: 'Complete "FOOM 101" in the University', completed: false },
        { id: 4, text: 'Meet your direct team and manager', completed: false, schedule: true },
        { id: 11, text: 'Begin "Commercial Path" in the University', completed: false, role: 'Commercial' },
        { id: 12, text: 'Begin "Operations Path" in the University', completed: false, role: 'Operations' },
    ],
    'Weeks 2-4: Immersion': [
        { id: 14, text: 'Meet your Launchpad Buddy!', completed: false, linkTo: 'mentor'},
        { id: 5, text: 'Schedule 1:1s with 3 key cross-functional partners', completed: false, schedule: true },
        { id: 6, text: 'Submit your first post to the Idea Board', completed: false, linkTo: 'ideas' },
        { id: 7, text: 'Shadow a customer service call', completed: false },
    ],
    'Days 30-90: Contribution': [
        { id: 8, text: 'Set your 30-60-90 day goals with your manager', completed: false },
        { id: 9, text: 'Contribute to your first team project', completed: false },
        { id: 10, text: 'Present your "Discovery Log" findings to your team', completed: false, schedule: true },
    ],
};

const foomUniversityData = {
    paths: {
        'core': {
            title: 'FOOM 101: Core Curriculum',
            description: 'The essential knowledge for every member of the Foomily. Mandatory for all new hires.',
            courses: ['c1', 'c2']
        },
        'Commercial': {
            title: 'Commercial Learning Path',
            description: 'Deep dives into sales, marketing, and channel management.',
            courses: ['m1', 'm2']
        },
        'Operations': {
            title: 'Operations Learning Path',
            description: 'Mastering the engine of FOOM: our supply chain and production.',
            courses: ['o1']
        },
    },
    courses: {
        'c1': {
            title: 'FOOM Mission & Strategy',
            modules: [
                { id: 'c1-1', title: 'Welcome from the CEO', type: 'video', completed: false, content: 'A welcome message from Pak Teguh about our vision.' },
                { id: 'c1-2', title: 'The 70/30 Strategic Pivot', type: 'infographic', completed: false, content: 'Visually explore our most important strategic goal.' },
            ]
        },
        'c2': {
            title: 'Our Culture & Values',
            modules: [
                { id: 'c2-1', title: 'Our 4 Core Values', type: 'text', completed: false, content: 'Customer Obsessed, Think Big, Bias for Action, Frugality.' },
                { id: 'c2-2', title: 'Knowledge Check: Values', type: 'quiz', completed: false, questions: [{ q: 'Which value encourages calculated risk-taking?', a: 'Bias for Action' }] },
            ]
        },
        'm1': {
            title: 'Channels: Direct vs. Indirect',
            modules: [
                { id: 'm1-1', title: 'The Indirect Sales Flow', type: 'flowchart', completed: false, content: 'FOOM -> Distributor -> Agent -> Store -> Customer' },
                { id: 'm1-2', title: 'Direct Channel Deep Dive', type: 'text', completed: false, content: 'Flagship Stores, Pop-ups, FOOM.id, and Marketplaces.' },
            ]
        },
        'm2': {
            title: 'The Commercial Teams',
            modules: [
                { id: 'm2-1', title: 'Retail & Trade Marketing', type: 'text', completed: false, content: 'Retail runs our stores. Trade Marketing creates programs like FRP.' },
                { id: 'm2-2', title: 'Area Sales vs. Indirect Sales', type: 'text', completed: false, content: 'Area Sales executes programs with stores. Indirect Sales manages our large distributors.' },
            ]
        },
        'o1': {
            title: 'The NPL Process',
            modules: [
                { id: 'o1-1', title: 'From Idea to Launch', type: 'text', completed: false, content: 'The 8-month journey of a new product.' },
            ]
        }
    }
};

const peopleData = [
    // Level 0
    { id: 1, name: 'Teguh B. Ariwibowo', title: 'CEO', team: 'Executive', reportsTo: null },
    // Level 1 (Reporting to CEO)
    { id: 2, name: 'Feranti Susilowati', title: 'CMO', team: 'C-Suite', reportsTo: 1 },
    { id: 3, name: 'Johan Santoso', title: 'VP Supply Chain', team: 'VP', reportsTo: 1 },
    { id: 4, name: 'Frans Yohanes', title: 'Head of Finance, Accounting, Tax', team: 'Head', reportsTo: 1 },
    { id: 5, name: 'M Rifki Abdul Aziz', title: 'Head of Human Capital', team: 'Head', reportsTo: 1 },
    { id: 6, name: 'Umi Nur Fadila', title: 'Head of Growth & Tech', team: 'Head', reportsTo: 1 },
    { id: 21, name: 'CEO Office', title: 'Vacant', team: 'Executive', reportsTo: 1 },
    { id: 22, name: 'Regulatory External Affairs', title: 'Vacant', team: 'Executive', reportsTo: 1 },
    // Level 2 (Reporting to CMO)
    { id: 9, name: 'Agus Sondara Zebua', title: 'Senior Retail Manager', team: 'Retail', reportsTo: 2 },
    { id: 10, name: 'Andree Indrawan', title: 'Trade Marketing Manager', team: 'Trade Marketing', reportsTo: 2 },
    { id: 11, name: 'Christian Evander', title: 'Digital Marketing Manager', team: 'Digital Marketing', reportsTo: 2 },
    { id: 12, name: 'Sabdo Teguh Prakoso', title: 'Sales Manager', team: 'Sales', reportsTo: 2 },
    { id: 23, name: 'Mohammad Taqi Makarim', title: 'Creative Lead', team: 'Brand & Creative', reportsTo: 2 },
    { id: 24, name: 'Agung Albanjari', title: 'Data Analyst', team: 'Indirect Sales', reportsTo: 2 },
    // Level 2 (Reporting to VP Supply Chain)
    { id: 7, name: 'Jiem Ilham', title: 'Head of Product Development', team: 'Product Development', reportsTo: 3 },
    { id: 14, name: 'Doni Daoni H. Nababan', title: 'Manufacture Manager', team: 'Production', reportsTo: 3 },
    { id: 15, name: 'Monica Dwi Nouraini', title: 'Logistic, WH, & PPIC Manager', team: 'Supply Chain', reportsTo: 3 },
    // Level 3 (Reporting to Retail Manager)
    { id: 30, name: 'Bisma Fauzan', title: 'Store Lead Panglima Polim', team: 'Retail', reportsTo: 9 },
    { id: 31, name: 'Achmad Nurfathan', title: 'Retail Expansion Spv', team: 'Retail', reportsTo: 9 },
    { id: 32, name: 'Bayu Kurniawan', title: 'Senior Retail Coach', team: 'Retail', reportsTo: 9 },
    // Level 3 (Reporting to Sales Manager)
    { id: 33, name: 'Hafif Baraba', title: 'ASS', team: 'Sales', reportsTo: 12 },
    // Level 4 (Reporting to ASS)
    { id: 34, name: 'Fathoni Achmad Abdillah', title: 'ASE Depok, Bogor', team: 'Sales', reportsTo: 33 },
    { id: 35, name: 'Muhamad Syahrul Sumantri', title: 'ASE Jaktim, Bekasi', team: 'Sales', reportsTo: 33 },
    { id: 36, name: 'Rahman Puji Pangestu', title: 'ASE Tangerang, Jaksel', team: 'Sales', reportsTo: 33 },
    { id: 37, name: 'Fadlan Khoirul Umam', title: 'ASE (Bandung)', team: 'Sales', reportsTo: 33 },
    { id: 38, name: 'Fariz Prianggodo', title: 'ASE Jakbar, Jakut, Jakpus', team: 'Sales', reportsTo: 33 },
    // Level 2 (Reporting to Head of HC)
    { id: 18, name: 'Aldry Putra Arief', title: 'Talent Acquisition Manager', team: 'Human Capital', reportsTo: 5 },
    { id: 19, name: 'Indah Dwi Purnama', title: 'HCBP Manager', team: 'Human Capital', reportsTo: 5 },
    { id: 39, name: 'Danung Trishadaniarty', title: 'HCGA Operation Head Quarter', team: 'Human Capital', reportsTo: 5 },
    // User's own profile
    { id: 99, name: 'Vincentius Theodore', title: 'CEO Office', team: 'Executive', reportsTo: 1 },
];

const mentorData = {
    'Commercial': { id: 15, funFact: 'Is an avid scale model builder.', icebreaker: 'Ask Monica about the complexities of logistics at FOOM.' }, // Monica from Supply Chain
    'Operations': { id: 10, funFact: 'Has visited every province in Java.', icebreaker: 'Ask Andree about the most creative trade marketing program.' }, // Andree from Marketing
    'Executive': { id: 19, funFact: 'Can speak three languages fluently.', icebreaker: 'Ask Indah about her vision for employee development at FOOM.' }, // Indah from HC
    'People': { id: 11, funFact: 'Runs a food blog in her spare time.', icebreaker: 'Ask Christian about the digital marketing strategy.' }, // Christian from Marketing
    'Finance': { id: 18, funFact: 'Is training for a marathon.', icebreaker: 'Ask Aldry about the ideal candidate profile for FOOM.' }, // Aldry from HC
    'Growth & Tech': { id: 12, funFact: 'Loves classic films.', icebreaker: 'Ask Sabdo about the biggest challenge in sales.' }, // Sabdo from Marketing
};

const initialIdeaBoardData = [
    { id: 1, authorId: 11, type: 'Idea/Improvement', details: 'Could we create a "Flavor of the Month" subscription box to boost D2C sales?', upvotes: 12, comments: 3, upvoted: false },
    { id: 2, authorId: 9, type: 'Observation', details: 'I noticed our top competitor, RELX, is heavily promoting on TikTok. We should analyze their strategy.', upvotes: 8, comments: 1, upvoted: true },
    { id: 3, authorId: 15, type: 'Question', details: 'What is the current lead time for sourcing our raw materials from China? Is there a plan to diversify suppliers?', upvotes: 15, comments: 5, upvoted: false },
];

const calendarEvents = {
    'Monday': [{ time: '10:00', title: 'Company All-Hands' }],
    'Tuesday': [{ time: '14:00', title: 'Commercial Team Sync' }],
    'Wednesday': [{ time: '11:00', title: '1:1 with Manager' }],
    'Thursday': [],
    'Friday': [{ time: '16:00', title: 'Team Happy Hour' }],
};

// --- UI COMPONENTS ---

const Header = ({ title, profile }) => (
    <div className="p-4 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {profile && (
            <span className="text-sm font-semibold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">{profile.role} Path</span>
        )}
    </div>
);

const BottomNav = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { name: 'Launch Plan', page: 'plan', icon: <HomeIcon /> },
        { name: 'University', page: 'university', icon: <UniversityIcon /> },
        { name: 'My Mentor', page: 'mentor', icon: <MentorIcon /> },
        { name: 'Idea Board', page: 'ideas', icon: <LightbulbIcon /> },
        { name: 'People', page: 'people', icon: <UsersIcon /> },
    ];
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 flex justify-around md:hidden z-20">
            {navItems.map(item => (
                <button key={item.page} onClick={() => setCurrentPage(item.page)} className={`flex flex-col items-center justify-center w-full p-3 transition-colors duration-200 ${currentPage === item.page ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>
                    {item.icon}
                    <span className="text-xs mt-1">{item.name}</span>
                </button>
            ))}
        </div>
    );
};

const Sidebar = ({ currentPage, setCurrentPage, profile, setProfile }) => {
    const navItems = [
        { name: 'My Launch Plan', page: 'plan', icon: <HomeIcon /> },
        { name: 'FOOM University', page: 'university', icon: <UniversityIcon /> },
        { name: 'My Mentor', page: 'mentor', icon: <MentorIcon /> },
        { name: 'Idea Board', page: 'ideas', icon: <LightbulbIcon /> },
        { name: 'People Directory', page: 'people', icon: <UsersIcon /> },
    ];
    return (
        <div className="w-64 bg-gray-900 h-screen p-5 pt-8 fixed flex-col border-r border-gray-700 hidden md:flex">
            <div>
                <div className="flex items-center mb-2 h-8">
                    <img src="https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/02dd783f1a7a9055dc756b703c494c58.png" alt="FOOM Logo" className="h-full filter invert" />
                    <span className="text-green-400 text-2xl font-bold ml-2">Launchpad</span>
                </div>
                <span className="text-sm font-semibold bg-green-500/20 text-green-300 px-3 py-1 rounded-full mt-2 inline-block">{profile.role} Path</span>
            </div>
            <ul className="space-y-2 mt-10 flex-grow">
                {navItems.map(item => (
                    <li key={item.name}>
                        <button onClick={() => setCurrentPage(item.page)} className={`flex items-center w-full p-3 text-left text-gray-300 rounded-md transition-colors duration-200 ${currentPage === item.page ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}>
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-auto">
                 <button onClick={() => setProfile(null)} className="flex items-center w-full p-3 text-left text-gray-400 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200">
                    <span className="mr-3"><SwitchIcon /></span>
                    Change Role
                </button>
            </div>
        </div>
    );
}

const ScheduleModal = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 m-4 max-w-sm w-full text-center">
                <h3 className="text-xl font-bold text-green-400 mb-4">Scheduling Assistant</h3>
                <p className="text-gray-300 mb-6">A calendar invite suggestion has been prepared. Please check your email or calendar app to confirm the details.</p>
                <button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">Got it</button>
            </div>
        </div>
    );
};

// --- PAGES ---

const LaunchPlanPage = ({ profile, setCurrentPage }) => {
    const [tasks, setTasks] = useState(launchPlanData);
    const [showModal, setShowModal] = useState(false);

    const personalizedTasks = useMemo(() => {
        const allTasks = Object.entries(tasks).flatMap(([phase, phaseTasks]) => 
            phaseTasks.filter(task => !task.role || task.role === profile.role)
        );
        return allTasks;
    }, [tasks, profile.role]);

    const completedTasks = useMemo(() => personalizedTasks.filter(t => t.completed).length, [personalizedTasks]);
    const totalTasks = personalizedTasks.length;
    const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const toggleTask = (phase, taskId) => {
        const newTasks = { ...tasks };
        const task = newTasks[phase].find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
        setTasks(newTasks);
    };

    const isPhaseComplete = (phase) => {
        return tasks[phase]
            .filter(task => !task.role || task.role === profile.role)
            .every(task => task.completed);
    };

    return (
        <div className="p-4 md:p-8">
            <Header title="My Launch Plan" profile={profile} />
            <div className="mt-6 bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-bold text-white mb-2">Onboarding Progress</h2>
                <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-4">
                        <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${completionPercentage}%` }}></div>
                    </div>
                    <span className="ml-4 font-bold text-green-400">{completionPercentage}%</span>
                </div>
            </div>

            <div className="space-y-8">
                {Object.entries(tasks).map(([phase, phaseTasks]) => {
                    const filteredPhaseTasks = phaseTasks.filter(task => !task.role || task.role === profile.role);
                    if (filteredPhaseTasks.length === 0) return null;

                    return (
                        <div key={phase} className="bg-gray-800 rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-green-400">{phase}</h2>
                                {isPhaseComplete(phase) && <div className="flex items-center gap-2"><BadgeIcon /> <span className="text-yellow-400 font-semibold">Complete!</span></div>}
                            </div>
                            <ul className="space-y-3">
                                {filteredPhaseTasks.map(task => (
                                    <li key={task.id} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={() => toggleTask(phase, task.id)} className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-green-500 focus:ring-green-500 cursor-pointer" />
                                            <label htmlFor={`task-${task.id}`} className={`ml-3 text-gray-300 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.text}</label>
                                        </div>
                                        {task.schedule && <button onClick={() => setShowModal(true)} className="text-xs bg-blue-600/50 text-blue-200 px-3 py-1 rounded-full hover:bg-blue-600/80">Schedule</button>}
                                        {task.linkTo && <button onClick={() => setCurrentPage(task.linkTo)} className="text-xs bg-purple-600/50 text-purple-200 px-3 py-1 rounded-full hover:bg-purple-600/80">View</button>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <ScheduleModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

// --- FOOM UNIVERSITY COMPONENTS ---
const FoomUniversityPage = ({ profile }) => {
    const [view, setView] = useState({ type: 'dashboard' });
    const [universityData, setUniversityData] = useState(foomUniversityData);

    const handleModuleToggle = (courseId, moduleId) => {
        setUniversityData(prevData => {
            const newData = { ...prevData };
            const course = newData.courses[courseId];
            const module = course.modules.find(m => m.id === moduleId);
            if(module) {
                module.completed = !module.completed;
            }
            return newData;
        });
    };

    const UniversityDashboard = () => {
        const paths = [
            universityData.paths.core,
            universityData.paths[profile.role]
        ].filter(Boolean);

        return (
            <div className="space-y-8">
                {paths.map((path, index) => {
                    const totalModules = path.courses.reduce((acc, courseId) => acc + universityData.courses[courseId].modules.length, 0);
                    const completedModules = path.courses.reduce((acc, courseId) => {
                        return acc + universityData.courses[courseId].modules.filter(m => m.completed).length;
                    }, 0);
                    const progress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

                    return (
                        <div key={index} className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-400">{path.title}</h3>
                            <p className="text-sm text-gray-400 mt-1 mb-4">{path.description}</p>
                            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>
                             <p className="text-xs text-gray-500 mb-4">{completedModules} of {totalModules} modules completed</p>
                            <div className="space-y-4">
                                {path.courses.map(courseId => {
                                    const course = universityData.courses[courseId];
                                    const courseProgress = course.modules.filter(m => m.completed).length === course.modules.length;
                                    return (
                                        <button key={courseId} onClick={() => setView({ type: 'course', courseId })} className="w-full text-left bg-gray-900 p-4 rounded-lg hover:bg-gray-700 transition-colors flex justify-between items-center">
                                            <span className="font-semibold">{course.title}</span>
                                            {courseProgress ? <CheckCircleIcon /> : <span className="text-xs text-gray-500">{course.modules.filter(m => m.completed).length}/{course.modules.length}</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    
    const CourseDetailView = ({ courseId }) => {
        const course = universityData.courses[courseId];

        const FlowChartNode = ({ icon, title, subtitle }) => (
            <div className="flex flex-col items-center text-center w-24 md:w-32">
                <div className="bg-gray-700 rounded-full h-16 w-16 flex items-center justify-center text-green-400">{icon}</div>
                <h4 className="font-bold text-sm mt-2 text-white">{title}</h4>
                <p className="text-xs text-gray-400">{subtitle}</p>
            </div>
        );

        const renderModuleContent = (module) => {
            switch(module.type) {
                case 'infographic':
                    return <div className="bg-gray-900 p-6 rounded-lg text-center">
                        <h4 className="font-bold text-lg mb-2 text-green-400">70/30 Channel Shift</h4>
                        <p className="text-gray-400 text-sm">Our goal is to grow Direct Channel revenue by ~28x to achieve a 30% share.</p>
                    </div>;
                case 'flowchart':
                     return <div className="bg-gray-900 p-6 rounded-lg">
                        <div className="flex items-center justify-around">
                            <FlowChartNode icon={<BuildingIcon />} title="FOOM" subtitle="Principal" />
                            <ArrowRightIcon />
                            <FlowChartNode icon={<UserGroupIcon />} title="Distributors" />
                            <ArrowRightIcon />
                            <FlowChartNode icon={<StoreIcon />} title="Retail Stores" />
                            <ArrowRightIcon />
                            <FlowChartNode icon={<CustomerIcon />} title="Customer" />
                        </div>
                    </div>;
                default:
                    return <p className="text-gray-300">{module.content}</p>;
            }
        };

        return (
            <div className="bg-gray-800 rounded-lg p-6">
                <button onClick={() => setView({ type: 'dashboard' })} className="flex items-center gap-2 text-sm text-green-400 mb-6 font-semibold">
                    <ArrowLeftIcon />
                    Back to University
                </button>
                <h2 className="text-2xl font-bold mb-6">{course.title}</h2>
                <div className="space-y-6">
                    {course.modules.map(module => (
                        <div key={module.id} className="bg-gray-700/50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg">{module.title}</h3>
                                <input type="checkbox" id={`mod-${module.id}`} checked={module.completed} onChange={() => handleModuleToggle(courseId, module.id)} className="h-6 w-6 rounded bg-gray-700 border-gray-600 text-green-500 focus:ring-green-500 cursor-pointer" />
                            </div>
                            {renderModuleContent(module)}
                        </div>
                    ))}
                </div>
            </div>
        );

    };

    return (
        <div className="p-4 md:p-8">
            <Header title="FOOM University" profile={profile} />
            <div className="mt-6">
                {view.type === 'dashboard' && <UniversityDashboard />}
                {view.type === 'course' && <CourseDetailView courseId={view.courseId} />}
            </div>
        </div>
    );
};


const IdeaBoardPage = ({ profile }) => {
    const [ideas, setIdeas] = useState(initialIdeaBoardData);
    const [view, setView] = useState('all'); // 'all' or 'mine'
    const [type, setType] = useState('Idea/Improvement');
    const [details, setDetails] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleUpvote = (id) => {
        setIdeas(ideas.map(idea => {
            if (idea.id === id) {
                return { ...idea, upvotes: idea.upvoted ? idea.upvotes - 1 : idea.upvotes + 1, upvoted: !idea.upvoted };
            }
            return idea;
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!details.trim()) return;
        const newIdea = {
            id: Date.now(),
            authorId: profile.id,
            type,
            details,
            upvotes: 1,
            comments: 0,
            upvoted: true,
        };
        setIdeas([newIdea, ...ideas]);
        setDetails('');
        setType('Idea/Improvement');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
    };
    
    const filteredIdeas = view === 'mine' ? ideas.filter(idea => idea.authorId === profile.id) : ideas;

    const IdeaCard = ({ idea }) => {
        const author = peopleData.find(p => p.id === idea.authorId) || { name: 'Unknown', avatar: '' };
        const typeColor = idea.type === 'Question' ? 'bg-blue-500/20 text-blue-300' : idea.type === 'Idea/Improvement' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-purple-500/20 text-purple-300';

        return (
            <div className="bg-gray-800 rounded-lg p-4 flex gap-4">
                <img src={`https://placehold.co/200x200/1F2937/FFFFFF?text=${author.name.charAt(0)}`} alt={author.name} className="w-10 h-10 rounded-full flex-shrink-0" />
                <div className="w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold">{author.name}</p>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor}`}>{idea.type}</span>
                        </div>
                        <div className="flex gap-4 text-gray-400">
                            <div className="flex items-center gap-1">
                                <CommentIcon />
                                <span>{idea.comments}</span>
                            </div>
                            <button onClick={() => handleUpvote(idea.id)} className={`flex items-center gap-1 transition-colors ${idea.upvoted ? 'text-green-400' : 'hover:text-white'}`}>
                                <UpvoteIcon />
                                <span className="font-bold">{idea.upvotes}</span>
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-300 mt-2">{idea.details}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="p-4 md:p-8">
            <Header title="Idea Board" profile={profile} />
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="flex gap-2 mb-4">
                        <button onClick={() => setView('all')} className={`px-4 py-2 rounded-md font-semibold ${view === 'all' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}>All Ideas</button>
                        <button onClick={() => setView('mine')} className={`px-4 py-2 rounded-md font-semibold ${view === 'mine' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}>My Submissions</button>
                    </div>
                    <div className="space-y-4">
                        {filteredIdeas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}
                    </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 h-fit lg:sticky top-24">
                    <h2 className="text-lg font-bold text-green-400 mb-2">Share an Idea</h2>
                    <p className="text-gray-400 mb-4 text-sm">Your fresh perspective is valuable. Share questions, ideas, or observations with the company.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4"><label className="block text-gray-300 mb-2 text-sm">Type</label><select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"><option>Idea/Improvement</option><option>Question</option><option>Observation</option></select></div>
                        <div className="mb-4"><label className="block text-gray-300 mb-2 text-sm">Details</label><textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="4" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g., 'What if we created a loyalty program...?'"></textarea></div>
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">Submit to Board</button>
                        {showSuccess && <p className="text-green-400 text-center text-sm mt-4">Submitted successfully!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

const PeoplePage = ({ profile }) => {
    const [view, setView] = useState('chart'); // 'chart' or 'directory'
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedNodes, setExpandedNodes] = useState({1: true}); // Start with CEO expanded
    const [zoom, setZoom] = useState(1);

    const toggleNode = (id) => {
        setExpandedNodes(prev => ({...prev, [id]: !prev[id]}));
    };

    const orgTree = useMemo(() => {
        const dataMap = {};
        peopleData.forEach(person => {
            dataMap[person.id] = { ...person, children: [] };
        });
        const roots = [];
        peopleData.forEach(person => {
            if (person.reportsTo && dataMap[person.reportsTo]) {
                dataMap[person.reportsTo].children.push(dataMap[person.id]);
            } else if (!person.reportsTo) {
                roots.push(dataMap[person.id]);
            }
        });
        return roots;
    }, []);
    
    const filteredPeople = useMemo(() => peopleData.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.title.toLowerCase().includes(searchTerm.toLowerCase()) || person.team.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);

    const OrgChartNode = ({ node }) => {
        const isExpanded = !!expandedNodes[node.id];
        const hasChildren = node.children && node.children.length > 0;
        const isHighlighted = searchTerm && (node.name.toLowerCase().includes(searchTerm.toLowerCase()) || node.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <div className="flex flex-col items-center text-center relative">
                <div className={`py-2 px-4 bg-gray-800 rounded-lg border-2 ${isHighlighted ? 'border-green-400 shadow-lg shadow-green-500/20' : 'border-gray-700'} inline-block`}>
                    <p className="font-bold">{node.name}</p>
                    <p className="text-sm text-green-400">{node.title}</p>
                </div>
                {hasChildren && (
                    <button onClick={() => toggleNode(node.id)} className="mt-1 bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-white text-lg">
                        {isExpanded ? '-' : '+'}
                    </button>
                )}
                {isExpanded && hasChildren && (
                    <div className="flex justify-center mt-8 relative before:content-[''] before:absolute before:left-1/2 before:-top-8 before:h-8 before:w-px before:bg-gray-600">
                        {node.children.map((child) => (
                           <div key={child.id} className="px-4 relative 
                                before:content-[''] before:absolute before:left-0 before:right-0 before:-top-4 before:h-px before:bg-gray-600
                                after:content-[''] after:absolute after:left-1/2 after:-top-4 after:h-4 after:w-px after:bg-gray-600">
                                <OrgChartNode node={child} />
                           </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="p-4 md:p-8">
            <Header title="People Directory" profile={profile} />
            <div className="mt-6 mb-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <input type="text" placeholder="Search by name or title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><SearchIcon /></div>
                </div>
                <div className="flex-shrink-0 bg-gray-800 p-1 rounded-lg flex gap-1">
                    <button onClick={() => setView('chart')} className={`px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 ${view === 'chart' ? 'bg-green-600 text-white' : 'text-gray-300'}`}><OrgChartIcon /> Chart</button>
                    <button onClick={() => setView('directory')} className={`px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 ${view === 'directory' ? 'bg-green-600 text-white' : 'text-gray-300'}`}><ListIcon /> Directory</button>
                </div>
            </div>
            {view === 'chart' ? (
                <div className="relative">
                    <div className="absolute top-2 right-2 z-10 flex gap-2">
                        <button onClick={() => setZoom(z => z + 0.1)} className="bg-gray-700 hover:bg-gray-600 text-white rounded-md p-2"><ZoomInIcon/></button>
                        <button onClick={() => setZoom(z => Math.max(0.2, z - 0.1))} className="bg-gray-700 hover:bg-gray-600 text-white rounded-md p-2"><ZoomOutIcon/></button>
                        <button onClick={() => setZoom(1)} className="bg-gray-700 hover:bg-gray-600 text-white rounded-md p-2"><RefreshIcon/></button>
                    </div>
                    <div className="bg-gray-900/50 p-6 rounded-lg overflow-auto h-[70vh]">
                        <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease-out' }} className="pt-8">
                            <div className="inline-block">
                                {orgTree.map(rootNode => <OrgChartNode key={rootNode.id} node={rootNode} />)}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredPeople.map(person => <div key={person.id} className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center"><img src={`https://placehold.co/200x200/1F2937/FFFFFF?text=${person.name.charAt(0)}`} alt={person.name} className="w-24 h-24 rounded-full mb-4" /><h3 className="font-bold text-white">{person.name}</h3><p className="text-sm text-green-400">{person.title}</p><p className="text-xs text-gray-400 mt-1">{person.team}</p></div>)}
                </div>
            )}
        </div>
    );
};

const CalendarPage = ({ profile }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return (
        <div className="p-4 md:p-8">
            <Header title="My Calendar" profile={profile} />
            <p className="text-gray-400 mt-6 mb-6 text-center">A conceptual view of your week, integrating key onboarding meetings.</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {days.map(day => (
                    <div key={day} className="bg-gray-800 rounded-lg p-4">
                        <h3 className="font-bold text-center text-green-400 mb-4">{day}</h3>
                        <div className="space-y-2">
                            {calendarEvents[day].length > 0 ? (
                                calendarEvents[day].map(event => (
                                    <div key={event.title} className="bg-blue-600/50 text-blue-200 p-2 rounded-lg text-sm">
                                        <p className="font-semibold">{event.time}</p>
                                        <p>{event.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center text-sm">No scheduled events.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MentorPage = ({ profile, mentor }) => {
    const [showModal, setShowModal] = useState(false);
    if (!mentor) {
        return (
            <div className="p-4 md:p-8">
                <Header title="My Mentor" profile={profile} />
                <div className="mt-6 bg-gray-800 rounded-lg p-6 text-center">
                    <p className="text-gray-400">Your Launchpad Buddy is being assigned. Check back soon!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8">
            <Header title="My Mentor" profile={profile} />
            <div className="mt-6 bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center">
                <p className="text-sm text-green-400 font-semibold mb-4">MEET YOUR LAUNCHPAD BUDDY</p>
                <img src={`https://placehold.co/200x200/1F2937/FFFFFF?text=${mentor.name.charAt(0)}`} alt={mentor.name} className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700" />
                <h2 className="text-2xl font-bold text-white">{mentor.name}</h2>
                <p className="text-lg text-green-400">{mentor.title}</p>
                <p className="text-md text-gray-400 mt-1">{mentor.team} Team</p>
                
                <div className="my-6 w-full max-w-md">
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h4 className="font-bold text-left mb-2 text-gray-300">Fun Fact:</h4>
                        <p className="text-left text-gray-400">"{mentor.funFact}"</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg mt-4">
                        <h4 className="font-bold text-left mb-2 text-gray-300">Icebreaker / Conversation Starter:</h4>
                        <p className="text-left text-gray-400">"{mentor.icebreaker}"</p>
                    </div>
                </div>

                <button onClick={() => setShowModal(true)} className="w-full max-w-md bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                    Schedule a Coffee Chat
                </button>
            </div>
            <ScheduleModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};


const WelcomeScreen = ({ setProfile }) => {
    const roles = ['Commercial', 'Operations', 'Executive', 'People', 'Finance', 'Growth & Tech'];
    const handleSelectRole = (role) => {
        setProfile({ id: 99, role, name: 'Vincentius Theodore' }); // Assign a static ID for the user
    };
    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-2">Welcome to the FOOM Launchpad</h1>
                <p className="text-lg text-gray-400 mb-8">Let's personalize your onboarding experience. Please select your team.</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {roles.map(role => (
                        <button key={role} onClick={() => handleSelectRole(role)} className="bg-gray-800 hover:bg-green-600 hover:text-white text-gray-200 font-bold py-4 px-6 rounded-lg transition-all duration-200">
                            {role}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---
export default function App() {
    const [currentPage, setCurrentPage] = useState('plan');
    const [profile, setProfile] = useState(null);
    const [mentor, setMentor] = useState(null);

    useEffect(() => {
        if (profile) {
            const assignedMentorData = mentorData[profile.role];
            if(assignedMentorData) {
                const mentorProfile = peopleData.find(p => p.id === assignedMentorData.id);
                setMentor({ ...mentorProfile, ...assignedMentorData });
            }
        } else {
            setMentor(null);
        }
    }, [profile]);

    if (!profile) {
        return <WelcomeScreen setProfile={setProfile} />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'plan': return <LaunchPlanPage profile={profile} setCurrentPage={setCurrentPage} />;
            case 'university': return <FoomUniversityPage profile={profile} />;
            case 'ideas': return <IdeaBoardPage profile={profile} />;
            case 'people': return <PeoplePage profile={profile} />;
            case 'calendar': return <CalendarPage profile={profile} />;
            case 'mentor': return <MentorPage profile={profile} mentor={mentor} />;
            default: return <LaunchPlanPage profile={profile} setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} profile={profile} setProfile={setProfile} />
            <main className="md:ml-64 pb-20 md:pb-0">
                {renderPage()}
            </main>
            <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

