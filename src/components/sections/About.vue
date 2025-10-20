<template>
  <section id="about" class="py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
    <!-- Elegant Background -->
    <div class="absolute inset-0">
      <!-- Subtle Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      
      <!-- Floating  Elements -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-2xl animate-float-elegant"></div>
      <div class="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full blur-2xl animate-float-elegant" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-2xl animate-float-elegant" style="animation-delay: 4s;"></div>
      
      <!-- Subtle Lines -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!--  Header -->
      <div class="text-center mb-24">
        <div class="inline-flex items-center gap-3 mb-8">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50"></div>
          <span class="text-cyan-400/80 text-sm font-light tracking-[0.3em]">MY JOURNEY</span>
          <div class="w-16 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
        </div>
        
        <h2 class="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
          Full Stack
          <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-normal">Development</span>
        </h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Creating complete digital solutions from frontend interfaces to backend systems using modern technologies.
        </p>
      </div>

      <div class="grid xl:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
        
        <!-- Left Column - Personal Story -->
        <div class="space-y-8">
          <!-- Introduction -->
          <div class="text-left mb-12">
            <h3 class="text-3xl font-light text-white mb-6">Education & Experience</h3>
            <p class="text-gray-400 leading-relaxed text-lg">
              I am a full stack developer with a Bachelor's degree in Computer Science. 
              I have built 9+ practical projects that combine frontend and backend technologies, 
              focusing on creating seamless digital experiences.
            </p>
          </div>

          <!-- Skills & Values  -->
          <div class="space-y-6">
            <!-- Skill Card 1 -->
            <div class="group flex items-center gap-6 p-6 rounded-2xl border border-gray-700/30 hover:border-cyan-400/40 bg-gradient-to-r from-gray-800/10 to-transparent hover:from-cyan-500/5 transition-all duration-500 ease-out">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-white font-medium text-lg mb-1">Full Stack Architecture</div>
                <div class="text-cyan-400 text-sm">End-to-end solution development</div>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex-1 bg-gray-700/50 rounded-full h-1.5">
                    <div class="bg-gradient-to-r from-cyan-500 to-blue-600 h-1.5 rounded-full w-5/6"></div>
                  </div>
                  <span class="text-xs text-gray-400 font-medium">85%</span>
                </div>
              </div>
            </div>

            <!-- Skill Card 2 -->
            <div class="group flex items-center gap-6 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-400/40 bg-gradient-to-r from-gray-800/10 to-transparent hover:from-purple-500/5 transition-all duration-500 ease-out">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-white font-medium text-lg mb-1">Database Management</div>
                <div class="text-purple-400 text-sm">SQL database design and optimization</div>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex-1 bg-gray-700/50 rounded-full h-1.5">
                    <div class="bg-gradient-to-r from-purple-500 to-pink-600 h-1.5 rounded-full w-[90%]"></div>
                  </div>
                  <span class="text-xs text-gray-400 font-medium">90%</span>
                </div>
              </div>
            </div>

            <!-- Skill Card 3 -->
            <div class="group flex items-center gap-6 p-6 rounded-2xl border border-gray-700/30 hover:border-green-400/40 bg-gradient-to-r from-gray-800/10 to-transparent hover:from-green-500/5 transition-all duration-500 ease-out">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-white font-medium text-lg mb-1">API Development</div>
                <div class="text-green-400 text-sm">RESTful APIs and backend services</div>
                <div class="mt-2 flex items-center gap-2">
                  <div class="flex-1 bg-gray-700/50 rounded-full h-1.5">
                    <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-1.5 rounded-full w-[88%]"></div>
                  </div>
                  <span class="text-xs text-gray-400 font-medium">88%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Availability -->
          <div class="p-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div>
                <div class="text-white font-medium">Open to new opportunities</div>
                <div class="text-cyan-400 text-sm">Seeking challenging full stack projects</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Technical Showcase -->
        <div class="p-10 rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm">
          <div class="mb-8">
            <h3 class="text-3xl font-light text-white mb-3">Technical Stack</h3>
            <p class="text-gray-400">Technologies I work with regularly</p>
          </div>

          <!-- Tech Grid -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div v-for="tech in technologies" :key="tech.name"
                 class="group p-6 rounded-2xl border border-gray-700/30 hover:border-cyan-400/40 bg-gradient-to-br from-gray-800/10 to-transparent hover:from-cyan-500/5 transition-all duration-500 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                <span class="text-cyan-400 font-bold text-sm">{{ tech.initials }}</span>
              </div>
              <div class="text-white font-medium">{{ tech.name }}</div>
              <div class="text-gray-400 text-sm mt-1">{{ tech.category }}</div>
              <div class="mt-2 flex justify-center">
                <div class="flex gap-0.5">
                  <div v-for="n in 5" :key="n" 
                       class="w-2 h-1 rounded-full" 
                       :class="n <= tech.stars ? 'bg-cyan-400' : 'bg-gray-600'"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning Progress -->
          <div class="space-y-4">
            <h4 class="text-white font-medium text-lg">Current Focus</h4>
            
            <div v-for="item in currentFocus" :key="item.technology"
                 class="group p-4 rounded-xl border border-gray-700/30 hover:border-purple-400/30 bg-gradient-to-r from-gray-800/5 to-transparent transition-all duration-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-white text-sm font-medium">{{ item.technology }}</span>
                <span class="text-cyan-400 text-xs">{{ item.progress }}%</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-gray-700/30 rounded-full h-2">
                  <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                       :style="{ width: item.progress + '%' }"></div>
                </div>
                <div class="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <button 
            @click="scrollToSection('contact')"
            class="w-full group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden mt-8"
          >
            <!-- Shine Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <span class="relative z-10 flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>Start Collaboration</span>
            </span>
          </button>
        </div>
      </div>

      <!--  Stats Bar -->
      <div class="text-center mt-20 pt-8 border-t border-gray-700/30">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" 
               class="group cursor-pointer"
               @click="scrollToSection('projects')">
            <div class="text-3xl font-light text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {{ stat.value }}
            </div>
            <div class="text-gray-400 text-sm font-light tracking-wide">{{ stat.label }}</div>
            <div class="text-cyan-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
              {{ stat.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const technologies = ref([
  { name: 'Vue.js', initials: 'VUE', category: 'Frontend', stars: 4 },
  { name: 'React', initials: 'REA', category: 'Frontend', stars: 4 },
  { name: 'Laravel', initials: 'LAR', category: 'Backend', stars: 4 },
  { name: 'PHP', initials: 'PHP', category: 'Backend', stars: 3 },
  { name: 'MySQL', initials: 'SQL', category: 'Database', stars: 4 },
  { name: 'SQL Server', initials: 'MSS', category: 'Database', stars: 3 },
  { name: 'JavaScript', initials: 'JS', category: 'Language', stars: 4 },
  { name: 'Tailwind CSS', initials: 'TWC', category: 'Styling', stars: 5 }
])

const currentFocus = ref([
  { technology: 'Laravel Framework', progress: 80 },
  { technology: 'React Development', progress: 80 },
  { technology: 'Vue.js Ecosystem', progress: 85 },
  { technology: 'MySQL Optimization', progress: 75 }
])

const stats = ref([
  { value: '9+', label: 'Projects Built', description: 'View my work' },
  { value: 'BSc CS', label: 'Degree', description: 'Computer Science' },
  { value: '8+', label: 'Technologies', description: 'Full stack stack' },
  { value: '∞', label: 'Curiosity', description: 'Always exploring' }
])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.animate-float-elegant {
  animation: float-elegant 6s ease-in-out infinite;
}

@keyframes float-elegant {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: translate(20px, -20px) scale(1.05);
    opacity: 0.5;
  }
}

@keyframes fade-in {
  from { 
    opacity: 0; 
    transform: translateY(10px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>