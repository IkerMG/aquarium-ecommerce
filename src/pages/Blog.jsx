import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => (
    <div className="min-h-screen bg-neutral-950 pt-24 px-6 text-white">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">Blog Urban Natura</h1>
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                    <Link key={i} to={`/blog/post-${i}`} className="group">
                        <div className="aspect-video bg-neutral-900 rounded-xl mb-4 overflow-hidden">
                            <div className="w-full h-full bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-accent-500 transition-colors">Guía de inicio para Aquascaping {i}</h3>
                        <p className="text-neutral-500 text-sm mt-2">Aprende los fundamentos del diseño natural...</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);
export default Blog;