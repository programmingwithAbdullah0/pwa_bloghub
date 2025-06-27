'use client';

import { blogPosts } from './data';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogGrid() {
  const [selectedPost, setSelectedPost] = useState<null | typeof blogPosts[0]>(null);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.imageUrl || 'https://via.placeholder.com/800x600'}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full post content */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-lg overflow-auto max-h-[90vh] p-6 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                By {selectedPost.author} • {selectedPost.date}
              </p>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={selectedPost.imageUrl || 'https://via.placeholder.com/800x600'}
                  alt={selectedPost.title}
                  fill
                  className="object-cover rounded"
                  sizes="100vw"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedPost.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
