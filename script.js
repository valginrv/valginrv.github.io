// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function closeMobileNav() {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
}

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

overlay.addEventListener('click', closeMobileNav);
mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 60) {
    navbar.style.background = 'rgba(11, 18, 32, 0.97)';
  } else {
    navbar.style.background = 'rgba(11, 18, 32, 0.85)';
  }
});

// Terminal typing sequence
const terminalBody = document.getElementById('terminalBody');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const finalHTML =
`<span class="prompt">valgin@jinsoftz</span>:<span class="cmd">~$</span> curl -s GET /api/v1/developer/valgin

<span class="key">HTTP/1.1 200 OK</span>
{
  <span class="key">"name"</span>: <span class="str">"Valgin R V"</span>,
  <span class="key">"role"</span>: <span class="str">"Full Stack Developer (MEAN)"</span>,
  <span class="key">"experience"</span>: <span class="str">"2.7 years"</span>,
  <span class="key">"company"</span>: <span class="str">"JINSoftz Technology Pvt Ltd"</span>,
  <span class="key">"currentProject"</span>: <span class="str">"Jinzcart e-commerce platform"</span>,
  <span class="key">"stack"</span>: [<span class="str">"Angular"</span>, <span class="str">"Node.js"</span>, <span class="str">"Express"</span>, <span class="str">"MongoDB"</span>],
  <span class="key">"status"</span>: <span class="str">"available for new challenges"</span>
}</span><span class="term-cursor">&nbsp;</span>`;

function typeTerminal() {
  if (reduceMotion) {
    terminalBody.innerHTML = finalHTML;
    return;
  }
  const plain = finalHTML.replace(/<[^>]+>/g, m => `\u0000${m}\u0000`);
  const tokens = plain.split('\u0000').filter(Boolean);
  let i = 0;
  let out = '';
  function step() {
    if (i >= tokens.length) return;
    const tok = tokens[i];
    if (tok.startsWith('<')) {
      out += tok;
      i++;
      step();
      return;
    }
    let c = 0;
    const chars = tok.split('');
    const iv = setInterval(() => {
      out += chars[c];
      terminalBody.innerHTML = out;
      c++;
      if (c >= chars.length) {
        clearInterval(iv);
        i++;
        step();
      }
    }, 8);
  }
  step();
}

const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeTerminal();
      terminalObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
terminalObserver.observe(document.getElementById('terminal'));

// Expandable stack layers
document.querySelectorAll('.layer-head').forEach(head => {
  head.addEventListener('click', () => {
    head.parentElement.classList.toggle('open');
  });
});
// Open the first layer by default
document.querySelector('.layer')?.classList.add('open');

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll reveal
document.querySelectorAll('.layer, .commit, .build-card, .connect-card').forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
