import './Footer.css'

const coordinators = [
  { name: 'Devaamsh', phone: '8106993581' },
  { name: 'Sahithi', phone: '8919291742' },
  { name: 'Kushwanth', phone: '9866333779' },
  { name: 'Akhila', phone: '8712197522' },
]

const faculty = [
  {
    name: 'Dr. Sagar Yeruva',
    title: 'Head of Department',
    dept: 'Dept. of CSE- (AIML & IoT), R&AI',
    image: '/assets/sagarsir.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-sagar-yeruva-74608a5b',
  },
  {
    name: 'Dr. A. Kousar Nikhath',
    title: 'Faculty Coordinator',
    dept: 'Dept. of CSE- (AIML & IoT), R&AI',
    image: '/assets/kousarmaam.jpeg',
    linkedin: 'https://www.linkedin.com/in/alpuri-kousar-nikhath-8b335494',
  },
  {
    name: 'Mr. Bhupesh Deka',
    title: 'Faculty Coordinator',
    dept: 'Dept. of CSE- (AIML & IoT), R&AI',
    image: '/assets/bhupeshsir.jpg',
    linkedin: 'https://www.linkedin.com/in/bhupesh-deka-985b5621',
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-accent" />
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-subtitle">
              Reach out for queries, participation, or event support.
            </p>
            <div className="footer-contact-row">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span className="footer-contact-label">Email</span>
            </div>
            <a className="footer-email" href="mailto:krithomedhvnrvjiet@gmail.com">
              krithomedhvnrvjiet@gmail.com
            </a>
            <div className="footer-coordinators">
              <div className="footer-contact-row">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="footer-contact-label">Student Coordinators</span>
              </div>
              <ul className="footer-list">
                {coordinators.map((person) => (
                  <li key={person.name}>
                    <span className="footer-name">{person.name}</span>
                    <span className="footer-phone">+91 {person.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-logo-card">
              <a
                href="https://vnrvjiet.ac.in/"
                className="footer-logo-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit VNRVJIET website"
              >
                <img
                  src="/assets/vnrvjiet.png"
                  alt="VNRVJIET logo"
                  className="footer-logo"
                />
              </a>
            </div>
            <div className="faculty-grid">
              {faculty.map((person) => (
                <div className="faculty-card" key={person.name}>
                  <a
                    className="faculty-link"
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`LinkedIn profile: ${person.name}`}
                  >
                    <div className="faculty-photo">
                      <img src={person.image} alt={person.name} />
                    </div>
                    <h3 className="faculty-name">{person.name}</h3>
                  </a>
                  <p className="faculty-title">{person.title}</p>
                  <p className="faculty-dept">{person.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
