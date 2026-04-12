export default function Contact() {
  return (
    <div className="pt-24 pb-24 md:pb-0 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-6">Let's Talk Precision.</h1>
          <p className="text-on-surface-variant text-lg mb-12 max-w-md">
            Whether you're ready to upgrade your hatchery or just have questions about our technology, our team is here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Headquarters</h3>
                <p className="text-on-surface-variant">AIC Mahindra, Pune, Maharashtra, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Email Us</h3>
                <p className="text-on-surface-variant">contact@sereinnovations.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary">phone</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-1">Call Us</h3>
                <p className="text-on-surface-variant">+91 98765 43210</p>
                <p className="text-xs text-outline mt-1">Mon-Fri, 9am - 6pm IST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-xl border border-outline-variant/20">
          <h2 className="font-headline text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-on-surface mb-2">First Name</label>
                <input type="text" id="firstName" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-on-surface mb-2">Last Name</label>
                <input type="text" id="lastName" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
              <input type="email" id="email" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-bold text-on-surface mb-2">I'm interested in...</label>
              <select id="interest" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                <option>Purchasing an Incubator</option>
                <option>Partnership Opportunities</option>
                <option>Technical Support</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-on-surface mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button type="button" className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg hover:brightness-110 transition-all shadow-lg active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
