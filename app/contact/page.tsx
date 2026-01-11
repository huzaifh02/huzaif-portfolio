const contactInfo = {
  email: 'huzaifh02@gmail.com',
  phone: '+91 9682199335',
  location: 'Remote',
};

const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/mohammad-huzaif-shah-742257237/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    fill: true,
  },
  { 
    name: 'KubeBlogs', 
    url: 'https://www.kubeblogs.com',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    fill: false,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h1>
        </div>
        <p className="text-neutral-400 text-lg">
          Open to discussing platform engineering opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Card */}
        <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Contact Info
          </h2>
          
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 transition-all group"
            >
              <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Email</div>
                <div className="text-white group-hover:text-orange-400 transition-colors">{contactInfo.email}</div>
              </div>
            </a>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 transition-all group"
            >
              <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Phone</div>
                <div className="text-white group-hover:text-orange-400 transition-colors">{contactInfo.phone}</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 border border-neutral-700">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Location</div>
                <div className="text-white">{contactInfo.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Connect
          </h2>
          
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 transition-all group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <svg className="w-5 h-5 text-orange-500" fill={link.fill ? "currentColor" : "none"} stroke={link.fill ? "none" : "currentColor"} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-white group-hover:text-orange-400 transition-colors font-medium">{link.name}</div>
                </div>
                <svg className="w-5 h-5 text-neutral-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
          
          {/* Quick CTA */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
            <p className="text-neutral-300 text-sm mb-3">
              Prefer email? Drop me a message and I'll get back to you within 24 hours.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
