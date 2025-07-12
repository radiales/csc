import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/lib/team';

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Unser Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-green-400 font-semibold mb-2">{member.role}</p>
            <p className="text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
