import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xpwdgvkl', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      setSubmitted(true);
    } catch {
      const name = data.get('name') as string;
      const email = data.get('email') as string;
      const message = data.get('message') as string;
      window.open(`mailto:contact@sereinnovations.com?subject=Enquiry from ${name}&body=${message}%0A%0AFrom: ${email}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-24 md:pb-0 px-6 max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-green-600 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Message Sent!</h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 md:pb-0 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6">Let's Talk Precision.</h1>
          <p className="text-on-surface-variant text-lg mb-12 max-w-md leading-relaxed">
            Whether you're ready to upgrade your hatchery or just have questions about our technology, our team is here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Headquarters</h3>
                <p className="text-on-surface-variant text-sm">AIC Mahindra, Pune, Maharashtra, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Email Us</h3>
                <p className="text-on-surface-variant text-sm">contact@sereinnovations.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">phone</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Call Us</h3>
                <p className="text-on-surface-variant text-sm">+91 98765 43210</p>
                <p className="text-xs text-outline mt-1">Mon-Fri, 9am - 6pm IST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-xl border border-outline-variant/15">
          <h2 className="font-headline text-2xl font-bold mb-8">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-on-surface mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-surface-container border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-on-surface mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-surface-container border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full bg-surface-container border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-bold text-on-surface mb-2">I'm interested in...</label>
              <select id="interest" name="interest" className="w-full bg-surface-container border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                <option>Purchasing an Incubator</option>
                <option>Partnership Opportunities</option>
                <option>Technical Support</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-on-surface mb-2">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-surface-container border border-outline-variant/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
