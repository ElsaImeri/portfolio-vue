<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black pt-32 lg:pt-24">
    <!-- Custom Cursor -->
    <div class="custom-cursor"></div>
    <div class="custom-cursor-follower"></div>
    <div class="custom-cursor-text"></div>
    
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10% w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10% w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 4s;"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

    <!--  Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-500"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-950/95 rounded-3xl max-w-4xl w-full border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden modal-content">
        <!-- Header -->
        <div class="relative p-8 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5">
          <div class="flex items-center justify-between">
            <div class="text-center lg:text-left">
              <h3 class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">My Journey</h3>
              <p class="text-cyan-400/80 font-light">Passion for Innovation</p>
            </div>
            <button @click="showModal = false" class="close-btn p-3 hover:bg-cyan-500/10 rounded-2xl transition-all duration-300 group border border-cyan-500/20">
              <svg class="w-6 h-6 text-cyan-400/70 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="p-8 max-h-[70vh] overflow-y-auto">
          <div class="grid lg:grid-cols-2 gap-8 items-start">
            <!-- Profile Image in Modal -->
            <div class="relative group">
              <div class="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
                <img 
                  src="@/assets/images/projects/image3.JPG" 
                  alt="Elsa - Full Stack Developer"
                  class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-cyan-500/10 mix-blend-overlay"></div>
                <div class="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500 rounded-2xl"></div>
              </div>
            </div>

            <!-- Bio -->
            <div class="space-y-6">
              <div class="space-y-4">
                <p class="text-gray-300 text-lg leading-relaxed font-light">
                  I'm a passionate Software Developer with expertise in modern web technologies. 
                  Holding a B.Sc. in Software Engineering with outstanding academic performance (9.71/10)
                  and currently advancing my knowledge through a Master's degree at AAB College.
                </p>
                <p class="text-gray-300 text-lg leading-relaxed font-light">
                  My journey in software development has been driven by a constant curiosity 
                  for building innovative solutions. I believe in creating applications that 
                  not only solve problems but also deliver exceptional user experiences through 
                  clean, maintainable code and modern development practices.
                </p>
              </div>

              <!-- Experience Timeline -->
              <div class="space-y-4 pt-4">
                <h4 class="text-xl font-bold text-cyan-400 mb-4">Professional Journey</h4>
                <div class="space-y-4">
                  <div v-for="(exp, index) in experience" :key="index" 
                       class="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <span class="text-cyan-400 font-bold text-sm">{{ exp.year }}</span>
                    </div>
                    <div>
                      <h5 class="text-white font-semibold">{{ exp.title }}</h5>
                      <p class="text-gray-400 text-sm mt-1">{{ exp.description }}</p>
                      <p v-if="exp.details" class="text-cyan-400/80 text-xs mt-2">{{ exp.details }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="text-center p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                  <div class="text-2xl font-bold text-cyan-400 mb-1">9.71/10</div>
                  <div class="text-cyan-400/70 text-sm font-light">B.Sc. GPA</div>
                </div>
                <div class="text-center p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                  <div class="text-2xl font-bold text-blue-400 mb-1">6 Months</div>
                  <div class="text-blue-400/70 text-sm font-light">Professional Internship</div>
                </div>
              </div>

              <div class="pt-4">
                <div class="p-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl border border-green-500/20">
                  <h5 class="text-green-400 font-semibold mb-2">Internship Certificate</h5>
                  <p class="text-gray-300 text-sm mb-3">
                    Successfully completed 6-month remote internship at Danube Solutions, working on frontend, 
                    backend development, database management & site optimization.
                  </p>
                  <a 
                    href="#" 
                    @click.prevent="openCertificate"
                    class="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 transition-colors duration-300 group"
                  >
                    <span>View Certificate</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 border-t border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 flex justify-center">
          <button 
            @click="showModal = false; scrollToSection('projects')"
            class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group"
          >
            <span>Discover My Work</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-8 lg:space-y-10 order-1 w-full">
          <div class="badge-element inline-flex items-center gap-3 bg-cyan-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl px-5 py-3 lg:cursor-none mt-8 lg:mt-0">
            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span class="text-sm font-medium text-cyan-300">Available for new opportunities</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-6">
            <h1 class="text-5xl lg:text-8xl font-bold text-white leading-tight">
              Hi, I'm 
              <span class="name-element bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient lg:cursor-none block mt-2">
                Elsa
              </span>
            </h1>
            <div class="text-3xl lg:text-5xl font-light text-gray-300">
              <span class="typewriter opacity-90">Full Stack Developer</span>
            </div>
          </div>

          <p class="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            I craft <span class="highlight-element text-cyan-400 font-semibold lg:cursor-none">digital experiences</span> 
            that blend innovative design with cutting-edge technology.
          </p>

          <div class="grid grid-cols-3 gap-8 py-6 max-w-md mx-auto lg:mx-0">
            <div v-for="stat in stats" :key="stat.label" class="stat-element text-center lg:cursor-none group">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{{ stat.value }}</div>
              <div class="text-sm text-gray-400 font-light group-hover:text-cyan-300 transition-colors duration-300">{{ stat.label }}</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
            <button 
              @click="scrollToSection('projects')"
              class="project-btn group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 lg:cursor-none"
            >
              <span class="relative z-10 flex items-center gap-3">
                View My Work
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              @click="showModal = true"
              class="contact-btn group border-2 border-cyan-500/30 text-cyan-400 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-lg lg:cursor-none"
            >
              <span class="flex items-center justify-center gap-3">
                My Journey
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l3 3 3-3m-3-3v8"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div class="profile-element relative order-2 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
          <!-- Main Profile Image Container -->
          <div class="relative">
            <div class="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-lg border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <div @click="showModal = true" class="w-80 h-80 mx-auto rounded-2xl flex items-center justify-center relative overflow-hidden group lg:cursor-pointer transition-all duration-500 hover:scale-105">
                <div class="relative w-full h-full flex items-center justify-center">
                  <!-- Profile Image -->
                  <img 
                    src="@/assets/images/projects/image3.JPG" 
                    alt="Elsa - Full Stack Developer"
                    class="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div class="text-center text-white p-6 bg-black/40 rounded-2xl backdrop-blur-lg border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div class="text-2xl font-bold mb-3">Discover More</div>
                      <div class="text-sm opacity-90 font-light">Learn about my journey</div>
                    </div>
                  </div>
                  
                  <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="showModal = true"
              class="learn-more-btn text-cyan-400 hover:text-cyan-300 text-lg font-semibold flex items-center gap-3 mx-auto transition-all duration-300 hover:gap-4 group"
            >
              <span class="border-b border-transparent hover:border-cyan-400 transition-all duration-300">Learn About My Journey</span>
              <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="scroll-element absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8 lg:mt-0">
        <div class="flex flex-col items-center gap-3 text-cyan-400/70 hover:text-cyan-300 transition-colors duration-300 lg:cursor-none group" @click="scrollToSection('about')">
          <span class="text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">Explore More</span>
          <div class="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-cyan-300 transition-colors duration-300">
            <div class="w-1 h-3 bg-current rounded-full mt-2 animate-bounce group-hover:bg-cyan-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const stats = ref([
  { value: '9+', label: 'Projects Built' },
  { value: '9.71', label: 'B.Sc. GPA' },
  { value: '6M', label: 'Internship' }
])

const experience = ref([
  { 
    year: '2024', 
    title: 'Remote Intern - Danube Solutions', 
    description: 'Full Stack Development Internship',
    details: 'Frontend, Backend, Database Management & Site Optimization'
  },
  { 
    year: '2023', 
    title: 'B.Sc. Graduate', 
    description: 'Software Engineering',
    details: 'Graduated with 9.71/10 GPA - Outstanding Achievement'
  },
  { 
    year: '2022', 
    title: 'Academic Projects', 
    description: 'Full Stack Development',
    details: 'Built multiple web applications using modern technologies'
  },
  { 
    year: '2022', 
    title: 'Learning Journey', 
    description: 'Web Technologies',
    details: 'Started mastering frontend and backend development'
  }
])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openCertificate = () => {
  window.open('https://drive.google.com/file/d/1IjgC8URloltD7dCGHlf6mBLWUJSAH5hq/view?usp=drive_link', '_blank')
}

onMounted(() => {
  const handleEscKey = (event) => {
    if (event.keyCode === 27) {
      showModal.value = false
    }
  }

  document.addEventListener('keydown', handleEscKey)

  return () => {
    document.removeEventListener('keydown', handleEscKey)
  }
})

onMounted(() => {
  const cursor = document.querySelector('.custom-cursor')
  const cursorFollower = document.querySelector('.custom-cursor-follower')
  const cursorText = document.querySelector('.custom-cursor-text')

  const colorMap = {
    'badge-element': '#22d3ee',
    'name-element': '#22d3ee',
    'highlight-element': '#06b6d4',
    'stat-element': '#8b5cf6',
    'project-btn': '#3b82f6',
    'contact-btn': '#ec4899',
    'profile-element': '#06b6d4',
    'scroll-element': '#22d3ee',
    'close-btn': '#ef4444',
    'learn-more-btn': '#22d3ee'
  }

  const textMap = {
    'badge-element': 'Available',
    'name-element': 'Elsa',
    'highlight-element': 'Expertise',
    'stat-element': 'Achievements',
    'project-btn': 'View Work',
    'contact-btn': 'My Journey',
    'profile-element': 'Profile',
    'scroll-element': 'Explore',
    'close-btn': 'Close',
    'learn-more-btn': 'Learn More'
  }

  let currentColor = '#22d3ee'

  document.addEventListener('mousemove', (e) => {
    if (cursor && cursorFollower) {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      
      cursorFollower.style.left = e.clientX + 'px'
      cursorFollower.style.top = e.clientY + 'px'

      if (cursorText) {
        cursorText.style.left = e.clientX + 20 + 'px'
        cursorText.style.top = e.clientY + 20 + 'px'
      }
    }
  })

  const interactiveElements = document.querySelectorAll([
    '.badge-element',
    '.name-element', 
    '.highlight-element',
    '.stat-element',
    '.project-btn',
    '.contact-btn', 
    '.profile-element',
    '.scroll-element',
    '.close-btn',
    '.learn-more-btn',
    'button',
    'a'
  ].join(','))

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      const elementClass = Array.from(e.target.classList).find(cls => colorMap[cls])
      
      if (elementClass && colorMap[elementClass]) {
        currentColor = colorMap[elementClass]
        
        cursor.style.backgroundColor = currentColor
        cursorFollower.style.borderColor = currentColor + '80'
        
        if (cursorText && textMap[elementClass]) {
          cursorText.textContent = textMap[elementClass]
          cursorText.style.opacity = '1'
          cursorText.style.color = currentColor
        }
      }

      cursor.classList.add('cursor-hover')
      cursorFollower.classList.add('cursor-follower-hover')
    })
    
    el.addEventListener('mouseleave', () => {
      cursor.style.backgroundColor = '#22d3ee'
      cursorFollower.style.borderColor = 'rgba(34, 211, 238, 0.5)'
      
      if (cursorText) {
        cursorText.style.opacity = '0'
      }

      cursor.classList.remove('cursor-hover')
      cursorFollower.classList.remove('cursor-follower-hover')
    })
  })

  document.addEventListener('click', () => {
    cursor.classList.add('cursor-click')
    cursorFollower.classList.add('cursor-follower-click')
    
    setTimeout(() => {
      cursor.classList.remove('cursor-click')
      cursorFollower.classList.remove('cursor-follower-click')
    }, 300)
  })
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg) scale(1); 
  }
  33% { 
    transform: translateY(-25px) rotate(12deg) scale(1.15); 
  }
  66% { 
    transform: translateY(-12px) rotate(-12deg) scale(1.15); 
  }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes cursorAnim {
  0% { transform: scale(1); }
  50% { transform: scale(1.8); }
  100% { transform: scale(1); }
}

@keyframes cursorAnim2 {
  0% { transform: scale(1); }
  50% { transform: scale(0.3); }
  100% { transform: scale(1); }
}

@keyframes cursorClick {
  0% { transform: scale(1); }
  50% { transform: scale(0.5); }
  100% { transform: scale(1); }
}

@keyframes modalEnter {
  0% { 
    opacity: 0;
    transform: scale(0.9) translateY(30px);
  }
  100% { 
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
  }
  50% { 
    box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 4s ease infinite;
}

.animate-pulse-slow {
  animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-slow {
  animation: bounce 4s infinite;
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

.typewriter {
  overflow: hidden;
  border-right: 3px solid #22d3ee;
  white-space: nowrap;
  animation: typewriter 4s steps(25) 1s 1 normal both;
}

.custom-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background-color: #22d3ee;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.1s ease, background-color 0.3s ease;
  mix-blend-mode: difference;
}

.custom-cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(34, 211, 238, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.2s ease, border-color 0.3s ease, transform 0.3s ease;
  mix-blend-mode: difference;
}

.custom-cursor-text {
  position: fixed;
  color: #22d3ee;
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  z-index: 9997;
  opacity: 0;
  transition: all 0.3s ease, color 0.3s ease;
  white-space: nowrap;
  mix-blend-mode: difference;
}

.cursor-hover {
  transform: scale(1.8);
  animation: cursorAnim 0.5s ease infinite;
}

.cursor-follower-hover {
  transform: scale(1.3);
  animation: cursorAnim2 0.5s ease infinite;
}

.cursor-click {
  animation: cursorClick 0.3s ease;
}

.cursor-follower-click {
  animation: cursorClick 0.3s ease;
}

.modal-content {
  animation: modalEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (min-width: 1024px) {
  * {
    cursor: none !important;
  }
}

@media (max-width: 1023px) {
  #hero {
    padding-top: 120px;
    padding-bottom: 80px;
    min-height: 100vh;
  }
  
  .custom-cursor,
  .custom-cursor-follower,
  .custom-cursor-text {
    display: none !important;
  }
  
  .typewriter {
    border-right: none;
    animation: none;
    white-space: normal;
  }
}

button, .badge-element, .stat-element, .learn-more-btn {
  transition: all 0.3s ease;
}

.project-btn:hover {
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.contact-btn:hover {
  border-color: rgba(236, 72, 153, 0.6);
  background: rgba(236, 72, 153, 0.1);
  transform: translateY(-2px);
}

.badge-element:hover {
  border-color: rgba(34, 211, 238, 0.5);
  background: rgba(34, 211, 238, 0.15);
  transform: translateY(-2px);
}

.highlight-element:hover {
  color: #22d3ee;
  text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
}

.learn-more-btn:hover {
  transform: translateY(-2px);
}

.close-btn:hover {
  background-color: rgba(239, 68, 68, 0.2) !important;
  border-color: rgba(239, 68, 68, 0.5);
}

.modal-content ::-webkit-scrollbar {
  width: 6px;
}

.modal-content ::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.modal-content ::-webkit-scrollbar-thumb {
  background: rgba(34, 211, 238, 0.3);
  border-radius: 10px;
}

.modal-content ::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 211, 238, 0.5);
}

::selection {
  background: rgba(34, 211, 238, 0.3);
  color: white;
}

::-moz-selection {
  background: rgba(34, 211, 238, 0.3);
  color: white;
}
</style>