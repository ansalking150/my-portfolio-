import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTcwMjk3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Working with Anas was an absolute pleasure. He delivered a stunning, high-performance web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    image: 'https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njk2ODAyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Anas transformed our design mockups into a beautiful, responsive website. His code is clean, well-documented, and he completed the project ahead of schedule. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Digital Solutions',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk3MTExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: "Exceptional work! Anas's expertise in React and modern web technologies helped us launch our platform successfully. His communication and problem-solving skills are top-notch.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            CLIENT FEEDBACK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-6">
            Don't just take my word for it - hear what my clients have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-surface border border-border-custom rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,26,26,0.2)]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-full text-white shadow-[0_0_20px_rgba(255,26,26,0.4)] group-hover:scale-110 transition-transform">
                  <Quote size={20} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border-custom">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent-glow/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-heading text-text-primary group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '100%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-surface border border-border-custom rounded-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,26,26,0.15)] transition-all group"
            >
              <div className="font-heading-alt text-4xl text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
