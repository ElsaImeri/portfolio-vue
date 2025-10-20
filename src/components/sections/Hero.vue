<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black pt-32 lg:pt-24">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10% w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10% w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      <div class="relative bg-gray-900 rounded-2xl max-w-4xl w-full border border-cyan-500/20 shadow-2xl overflow-hidden">
        <div class="relative p-6 border-b border-cyan-500/20 bg-gray-800/50">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-cyan-400 mb-1">My Journey</h3>
              <p class="text-cyan-400/80 text-sm">Passion for Innovation</p>
            </div>
            <button @click="showModal = false" class="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 max-h-[70vh] overflow-y-auto">
          <div class="grid lg:grid-cols-2 gap-6 items-start">
            <div class="relative">
              <div class="relative rounded-xl overflow-hidden border border-cyan-500/30">
                <img 
                  src="@/assets/images/projects/image3.JPG" 
                  alt="Elsa - Full Stack Developer"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-3">
                <p class="text-gray-300 leading-relaxed">
                  I'm a passionate Software Developer with expertise in modern web technologies. 
                  Holding a B.Sc. in Software Engineering with outstanding academic performance (9.71/10)
                  and currently advancing my knowledge through a Master's degree at AAB College.
                </p>
                <p class="text-gray-300 leading-relaxed">
                  My journey in software development has been driven by a constant curiosity 
                  for building innovative solutions.
                </p>
              </div>

              <div class="space-y-3 pt-2">
                <h4 class="text-lg font-bold text-cyan-400">Professional Journey</h4>
                <div class="space-y-3">
                  <div v-for="(exp, index) in experience" :key="index" 
                       class="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div class="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <span class="text-cyan-400 font-bold text-xs">{{ exp.year }}</span>
                    </div>
                    <div>
                      <h5 class="text-white font-semibold text-sm">{{ exp.title }}</h5>
                      <p class="text-gray-400 text-xs mt-1">{{ exp.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3 pt-1">
                <div class="text-center p-3 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
                  <div class="text-lg font-bold text-cyan-400 mb-1">9.71/10</div>
                  <div class="text-cyan-400/70 text-xs">B.Sc. GPA</div>
                </div>
                <div class="text-center p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                  <div class="text-lg font-bold text-blue-400 mb-1">6 Months</div>
                  <div class="text-blue-400/70 text-xs">Internship</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border-t border-cyan-500/20 bg-gray-800/50 flex justify-center">
          <button 
            @click="showModal = false; scrollToSection('projects')"
            class="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2"
          >
            <span>Discover My Work</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-6 order-1 w-full">
          <div class="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-4 py-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span class="text-sm font-medium text-cyan-300">Available for new opportunities</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm 
              <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block mt-1">
                Elsa
              </span>
            </h1>
            <div class="text-2xl lg:text-3xl font-light text-gray-300">
              Full Stack Developer
            </div>
          </div>

          <p class="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I craft <span class="text-cyan-400 font-semibold">digital experiences</span> 
            that blend innovative design with cutting-edge technology.
          </p>

          <div class="grid grid-cols-3 gap-6 py-4 max-w-sm mx-auto lg:mx-0">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <!-- Modern Button 1 - Glass Morphism -->
            <button 
              @click="scrollToSection('projects')"
              class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
            >
              <span>View My Work</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
            
            <!-- Modern Button 2 - Outline with Hover Fill -->
            <button 
              @click="showModal = true"
              class="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
            >
              <span>My Journey</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l3 3 3-3m-3-3v8"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="relative order-2 w-full max-w-md mx-auto lg:mx-0">
          <div class="relative bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/20">
            <div @click="showModal = true" class="w-64 h-64 mx-auto rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer">
              <img 
                src="@/assets/images/projects/image3.JPG" 
                alt="Elsa - Full Stack Developer"
                class="w-full h-full object-cover rounded-xl"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <div class="text-lg font-bold mb-1">Discover More</div>
                  <div class="text-xs">Learn about my journey</div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <button 
              @click="showModal = true"
              class="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 mx-auto transition-colors"
            >
              <span>Learn About My Journey</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center gap-2 text-cyan-400/70" @click="scrollToSection('about')">
          <span class="text-sm font-medium">Explore More</span>
          <div class="w-5 h-8 border-2 border-current rounded-full flex justify-center">
            <div class="w-1 h-2 bg-current rounded-full mt-2"></div>
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
    description: 'Full Stack Development Internship'
  },
  { 
    year: '2023', 
    title: 'B.Sc. Graduate', 
    description: 'Software Engineering - 9.71/10 GPA'
  },
  { 
    year: '2022', 
    title: 'Academic Projects', 
    description: 'Full Stack Web Applications'
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
</script>

<style scoped>
/* Minimal styles for performance */
.container {
  overflow-x: hidden;
}

/* Simple hover effects */
button {
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

/* Mobile optimizations */
@media (max-width: 1023px) {
  #hero {
    padding-top: 120px;
    padding-bottom: 80px;
    min-height: 100vh;
  }
  
  * {
    -webkit-tap-highlight-color: transparent;
  }
}

/* Scrollbar styling for modal */
.modal-content ::-webkit-scrollbar {
  width: 4px;
}

.modal-content ::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.modal-content ::-webkit-scrollbar-thumb {
  background: rgba(34, 211, 238, 0.3);
  border-radius: 2px;
}
</style>